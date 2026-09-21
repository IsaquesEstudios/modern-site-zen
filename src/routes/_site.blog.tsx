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

const page = PAGES_BY_SLUG["blog"];

export const Route = createFileRoute("/_site/blog")({
  head: () => headFor(page),
  component: BlogPage,
});

const categories = ["Problemas Comuns", "Qualidade da Água", "Legislação", "Manutenção"];

const guias = [
  {
    cat: "Problemas Comuns",
    title: "Água dura: por que o sabão não faz espuma e o chuveiro entope",
    body: "Como o excesso de cálcio e magnésio incrusta tubulações, danifica aquecedores e o que resolve o problema de forma definitiva.",
    to: "/agua-dura",
  },
  {
    cat: "Problemas Comuns",
    title: "Manchas amareladas na roupa e na louça: ferro e manganês na água",
    body: "Os sinais que identificam a presença de ferro e manganês e o tratamento por oxidação e filtração indicado para cada faixa de concentração.",
    to: "/agua-com-ferro-manganes",
  },
  {
    cat: "Qualidade da Água",
    title: "Água turva, com cheiro ou gosto de cloro: o que está acontecendo",
    body: "Turbidez, odor e sabor alterados quase sempre indicam matéria orgânica ou excesso de cloro. Entenda a causa antes de trocar o filtro.",
    to: "/agua-turva-cheiro-cloro",
  },
  {
    cat: "Qualidade da Água",
    title: "Contaminação biológica e química: o risco que não se vê",
    body: "Coliformes, bactérias e contaminantes químicos não mudam a aparência da água. Só a análise laboratorial revela o problema.",
    to: "/contaminacao-agua",
  },
  {
    cat: "Legislação",
    title: "Legalização de poço artesiano: outorga, prazos e documentos",
    body: "O que o DAEE exige, quais laudos acompanham o processo e o que acontece com quem opera um poço sem outorga.",
    to: "/servicos/legalizacao-poco-artesiano",
  },
  {
    cat: "Manutenção",
    title: "Com que frequência manter o sistema de tratamento de água",
    body: "Prazos de troca de mídias filtrantes, calibração de dosadoras e periodicidade das análises em uso residencial, comercial e industrial.",
    to: "/servicos/manutencao-sistemas-tratamento",
  },
] as const;

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
