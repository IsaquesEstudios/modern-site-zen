import { BLOG_POSTS } from "@/lib/blog";
import logo from "@/assets/vidagua-logo.png.asset.json";

/** Dados estruturados (schema.org) lidos por buscadores. */
export const SITE_URL = "https://www.vidagua.com.br";

const abs = (path: string) => (/^https?:/.test(path) ? path : `${SITE_URL}${path}`);

type Contact = {
  phones: readonly string[];
  whatsapp: string;
  email: string;
};

type SchemaPage = { slug: string; type: string; title: string; description: string; h1?: string; nav?: string };

const ORG_ID = `${SITE_URL}/#organizacao`;

function toE164(phone: string) {
  return `+55${phone.replace(/\D/g, "")}`;
}

export function localBusinessSchema(contact: Contact) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": ORG_ID,
    name: "Vid'Água",
    url: SITE_URL,
    logo: abs(logo.url),
    image: abs(logo.url),
    description:
      "Empresa de análise e tratamento de água com mais de 30 anos de experiência em São Paulo e atendimento nacional.",
    telephone: toE164(contact.phones[0]),
    email: contact.email,
    contactPoint: [
      ...contact.phones.map((p) => ({ "@type": "ContactPoint", telephone: toE164(p), contactType: "customer service", areaServed: "BR", availableLanguage: "Portuguese" })),
      { "@type": "ContactPoint", telephone: toE164(contact.whatsapp), contactType: "sales", areaServed: "BR", availableLanguage: "Portuguese" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. José Pedro do Amaral, 379",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "05632-030",
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "City", name: "São Paulo" },
      { "@type": "Country", name: "Brasil" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    },
  };
}

const provider = { "@type": "LocalBusiness", "@id": ORG_ID, name: "Vid'Água", url: SITE_URL };

export function serviceSchema(p: SchemaPage, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.h1 ?? p.title,
    description: p.description,
    url: abs(path),
    provider,
    areaServed: [
      { "@type": "City", name: "São Paulo" },
      { "@type": "Country", name: "Brasil" },
    ],
  };
}

export function articleSchema(p: SchemaPage, path: string) {
  const post = BLOG_POSTS.find((b) => b.to === path);
  if (!post) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: p.description,
    image: abs(post.image),
    url: abs(path),
    mainEntityOfPage: abs(path),
    inLanguage: "pt-BR",
    author: { "@type": "Organization", name: "Vid'Água", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Vid'Água", logo: { "@type": "ImageObject", url: abs(logo.url) } },
  };
}

export function breadcrumbSchema(p: SchemaPage, path: string) {
  const items: { name: string; path: string }[] = [{ name: "Início", path: "/" }];
  if (path.startsWith("/servicos/")) items.push({ name: "Serviços", path: "/servicos" });
  else if (path.startsWith("/produtos/")) items.push({ name: "Produtos", path: "/produtos" });
  else if (BLOG_POSTS.some((b) => b.to === path)) items.push({ name: "Blog", path: "/blog" });
  items.push({ name: p.nav ?? p.h1 ?? p.title, path });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.path) })),
  };
}

const BUSINESS_SLUGS = ["", "sobre", "contato"];

/** Blocos JSON-LD apropriados para a página. */
export function schemasFor(p: SchemaPage, path: string, contact: Contact) {
  const out: object[] = [];
  if (BUSINESS_SLUGS.includes(p.slug)) out.push(localBusinessSchema(contact));
  if (p.type === "Serviço") out.push(serviceSchema(p, path));
  const article = articleSchema(p, path);
  if (article) out.push(article);
  if (p.type === "Serviço" || p.type === "Produto" || article) out.push(breadcrumbSchema(p, path));
  return out.map((s) => ({ type: "application/ld+json", children: JSON.stringify(s) }));
}
