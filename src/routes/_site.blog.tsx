import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/design-system/cozy-code-library-1062b4";
import { Reveal } from "@/components/Reveal";
import { CTASection, Section, SectionTitle } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog";

const page = PAGES_BY_SLUG["blog"];

export const Route = createFileRoute("/_site/blog")({
  head: () => headFor(page),
  component: BlogPage,
});

const categories = ["Problemas Comuns", "Qualidade da Água", "Legislação", "Manutenção"];

const guias = BLOG_POSTS;

function BlogPage() {
  return (
    <>
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-24">
          <Reveal>
            <div className="flex max-w-2xl flex-col gap-5">
              <Badge>Blog</Badge>
              <h1 className="font-display text-4xl font-extrabold leading-tight md:text-5xl">
                Blog
              </h1>
              <p className="text-lg leading-relaxed text-muted">{page.intro}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionTitle eyebrow="Categorias" title="Navegue por tema" />
        <Reveal>
          <div className="mb-12 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Badge key={c} variant="outline">
                {c}
              </Badge>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guias.map((post, i) => (
            <Reveal key={post.title} delay={i * 50}>
              <Link to={post.to} className="group block h-full">
                <Card className="h-full transition-transform duration-300 group-hover:-translate-y-1">
                  <img decoding="async" loading="lazy"
                    src={post.image}
                    alt={post.alt}
                    className="aspect-video w-full object-cover"
                  />
                  <CardHeader>
                    <Badge variant="neutral">{post.cat}</Badge>
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>{post.body}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm font-semibold text-accent">Ler o guia →</span>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
