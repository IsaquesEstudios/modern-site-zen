import { createFileRoute } from "@tanstack/react-router";
import { PAGES, pathFor } from "@/lib/site";

const BASE_URL = "https://www.vidagua.com.br";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = new Set<string>(["/", "/servicos", "/produtos"]);
        for (const p of PAGES) paths.add(pathFor(p.slug));
        const urls = [...paths]
          .sort()
          .map((p) => `<url><loc>${BASE_URL}${p === "/" ? "/" : p}</loc></url>`)
          .join("");
        const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
