// Servidor de produção (Node.js) para hospedar o site em VPS (Coolify, Docker, etc.).
// Serve os arquivos estáticos de dist/client e entrega o HTML renderizado pelo
// servidor (SSR) em todas as rotas — inclusive /sitemap.xml e redirecionamentos 301.
import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { Readable } from "node:stream";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const CLIENT_DIR = path.join(ROOT, "dist", "client");
const worker = (await import(path.join(ROOT, "dist", "server", "index.js"))).default;

const HOST = process.env.HOST || "0.0.0.0";
const PORT = Number(process.env.PORT) || 3000;
// Origem pública do site (para URLs internas do SSR). Ex.: https://www.vidagua.com.br
const ORIGIN = process.env.ORIGIN;

const HOP_BY_HOP = new Set([
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
]);

const MIME = {
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".map": "application/json",
};

// Contexto mínimo que o entry do worker espera (equivalente ao ctx do Cloudflare).
const workerCtx = {
  waitUntil: () => {},
  passThroughOnException: () => {},
};

function originFor(req) {
  if (ORIGIN) return ORIGIN;
  const proto = req.headers["x-forwarded-proto"]?.split(",")[0]?.trim();
  const host = req.headers["x-forwarded-host"]?.split(",")[0]?.trim() || req.headers.host || "localhost";
  return `${proto || "http"}://${host}`;
}

function toWebRequest(req) {
  const url = new URL(req.url, originFor(req));
  const headers = Object.fromEntries(
    Object.entries(req.headers).filter(([k]) => !HOP_BY_HOP.has(k) && k !== "set-cookie"),
  );
  const hasBody = req.method !== "GET" && req.method !== "HEAD";
  if (!hasBody) delete headers["content-length"];
  const body = hasBody ? Readable.toWeb(req) : undefined;
  return new Request(url, { method: req.method, headers, body, duplex: "half" });
}

function serveStatic(req, res) {
  const { pathname } = new URL(req.url, "http://localhost");
  const clean = decodeURIComponent(pathname).replace(/\\/g, "/");
  const file = path.join(CLIENT_DIR, clean);
  // Bloqueia acesso fora de dist/client e só entrega arquivos que existem.
  if (!file.startsWith(CLIENT_DIR + path.sep) || !existsSync(file) || !statSync(file).isFile()) {
    return false;
  }
  const isHashed = clean.startsWith("/assets/");
  res.writeHead(200, {
    "content-type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream",
    "cache-control": isHashed ? "public, max-age=31536000, immutable" : "public, max-age=3600",
  });
  if (req.method === "HEAD") {
    res.end();
    return true;
  }
  createReadStream(file).pipe(res);
  return true;
}

async function sendResponse(req, res, response) {
  const headers = {};
  for (const [k, v] of response.headers) {
    if (!HOP_BY_HOP.has(k) && k !== "set-cookie") headers[k] = v;
  }
  const setCookies = typeof response.headers.getSetCookie === "function" ? response.headers.getSetCookie() : [];
  res.writeHead(response.status, headers);
  if (setCookies.length) res.setHeader("set-cookie", setCookies);
  if (req.method === "HEAD" || !response.body || response.status === 204 || response.status === 304) {
    res.end();
    return;
  }
  Readable.fromWeb(response.body)
    .pipe(res)
    .on("error", () => res.destroy());
}

async function handle(req, res) {
  try {
    if (req.method === "GET" || req.method === "HEAD") {
      if (serveStatic(req, res)) return;
    }
    const response = await worker.fetch(toWebRequest(req), {}, workerCtx);
    await sendResponse(req, res, response);
  } catch (error) {
    console.error("[server] erro ao atender", req.url, error);
    if (!res.headersSent) res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    res.end("Erro interno do servidor");
  }
}

createServer(handle).listen(PORT, HOST, () => {
  console.log(`[server] Vid'Água rodando em http://${HOST}:${PORT}`);
});
