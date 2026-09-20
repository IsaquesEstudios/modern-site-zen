import { createFileRoute } from "@tanstack/react-router";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/design-system/cozy-code-library-1062b4";
import { Reveal } from "@/components/Reveal";
import { CTASection, Section, SectionTitle } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["blog"];

export const Route = createFileRoute("/_site/blog")({
  head: () => headFor(page),
  component: BlogPage,
});

const categories = ["Problemas Comuns", "Qualidade da Água", "Legislação", "Manutenção"];
const placeholders = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  cat: categories[i % categories.length],
  title: `Título do artigo ${i + 1}`,
}));

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
          {placeholders.map((post, i) => (
            <Reveal key={post.id} delay={i * 50}>
              <Card className="h-full">
                <CardHeader>
                  <Badge variant="neutral">{post.cat}</Badge>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>
                    Trecho de preenchimento com duas linhas de resumo do artigo, substituído pelo
                    conteúdo definitivo.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm">
                    Ler mais
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
