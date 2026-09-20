import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Stat,
} from "@/design-system/cozy-code-library-1062b4";
import { Reveal } from "@/components/Reveal";
import { CTASection, Section, SectionTitle } from "@/components/PageTemplate";
import { HOME, headFor } from "@/lib/site";

export const Route = createFileRoute("/_site/")({
  head: () => headFor(HOME),
  component: Home,
});

const services = [
  { label: "Análise de Água", to: "/analise-de-agua", desc: "Laudos de potabilidade conforme a legislação." },
  { label: "Tratamento de Água", to: "/tratamento-de-agua", desc: "Projeto, instalação e manutenção de sistemas." },
  { label: "Poço Artesiano", to: "/legalizacao-poco-artesiano", desc: "Outorga, registro e regularização." },
  { label: "Monitoramento Contínuo", to: "/monitoramento-qualidade-agua", desc: "Coletas periódicas e laudos recorrentes." },
  { label: "Soluções para Empresas", to: "/tratamento-de-agua-industrial", desc: "Indústrias, condomínios e comércio." },
  { label: "Produtos", to: "/produtos", desc: "Filtros, dosadoras, abrandadores e insumos." },
] as const;

const problems = [
  { q: "Sua água está amarelada ou com gosto de ferrugem?", to: "/agua-com-ferro-manganes" },
  { q: "Água com cheiro ou muito cloro?", to: "/agua-turva-cheiro-cloro" },
  { q: "Suspeita de bactérias ou contaminação?", to: "/contaminacao-agua" },
  { q: "Poço artesiano sem outorga?", to: "/legalizacao-poco-artesiano" },
  { q: "Água muito dura, entupindo torneiras e chuveiros?", to: "/agua-dura" },
] as const;

const differentials = [
  "Mais de 30 anos de experiência no setor",
  "Equipe técnica especializada",
  "Laudos em conformidade com a Portaria 888",
  "Atendimento em horário comercial com retorno ágil",
  "Soluções para residências, condomínios e indústrias",
];

const posts = [
  { title: "Título do artigo mais recente", cat: "Problemas Comuns" },
  { title: "Título do segundo artigo", cat: "Qualidade da Água" },
  { title: "Título do terceiro artigo", cat: "Legislação" },
];

function Home() {
  return (
    <>
      {/* SEÇÃO 1 — Hero */}
      <section className="bg-gradient-surface">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 pb-24 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal>
            <div className="flex flex-col gap-6">
              <div className="flex">
                <Badge>Portaria 888 · Registro DAEE</Badge>
              </div>
              <h1 className="font-display text-4xl font-extrabold leading-[1.1] md:text-6xl">
                Vid&rsquo;Água – Mais de 30 anos tratando e cuidando da qualidade da água.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted">
                Laudos técnicos em conformidade com a Portaria 888 e acompanhamento de outorga
                junto ao DAEE. Texto de preenchimento até o conteúdo definitivo.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contato">
                  <Button variant="gradient" size="lg">
                    Falar com um especialista
                  </Button>
                </Link>
                <Link to="/analise-de-agua">
                  <Button variant="outline" size="lg">
                    Solicitar análise de água
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <Card tone="gradientSoft">
                <CardContent>
                  <Stat label="Experiência" value="30+" detail="anos no setor" trend="up" />
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Stat label="Atuação" value="Brasil" detail="atendimento nacional" />
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEÇÃO 2 — Quem Somos */}
      <Section>
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-16">
            <h2 className="font-display text-3xl font-bold leading-tight">Quem somos</h2>
            <div className="flex flex-col items-start gap-6">
              <p className="max-w-2xl text-lg leading-relaxed text-muted">
                Três décadas de especialização em análise, tratamento e legalização de poços,
                atendendo residências, condomínios e indústrias. Texto de preenchimento.
              </p>
              <Link to="/sobre">
                <Button variant="ghost">Conheça a Vid&rsquo;Água</Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* SEÇÃO 3 — Serviços */}
      <Section soft>
        <SectionTitle eyebrow="O que fazemos" title="Nossos serviços" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <Reveal key={item.to} delay={i * 60}>
              <Link to={item.to} className="group block h-full">
                <Card className="h-full transition-transform duration-300 group-hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle>{item.label}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SEÇÃO 4 — Problemas que resolvemos */}
      <Section>
        <SectionTitle eyebrow="Diagnóstico rápido" title="Problemas que resolvemos" />
        <ul className="flex flex-col">
          {problems.map((p, i) => (
            <Reveal as="li" key={p.to} delay={i * 50}>
              <Link
                to={p.to}
                className="group flex items-center justify-between gap-6 border-t border-border py-7 transition-colors duration-300 hover:border-accent"
              >
                <span className="font-display text-lg font-semibold md:text-xl">{p.q}</span>
                <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* SEÇÃO 5 — Diferenciais */}
      <Section soft>
        <SectionTitle eyebrow="Diferenciais" title="Por que escolher a Vid'Água" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d, i) => (
            <Reveal key={d} delay={i * 60}>
              <Card tone="soft" className="h-full">
                <CardContent>
                  <p className="leading-relaxed">{d}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SEÇÃO 6 — Blog */}
      <Section>
        <SectionTitle eyebrow="Conteúdo" title="Artigos recentes" />
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 60}>
              <Card className="h-full">
                <CardHeader>
                  <Badge variant="neutral">{post.cat}</Badge>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>
                    Trecho de preenchimento com duas linhas de resumo do artigo.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/blog">
                    <Button variant="ghost" size="sm">
                      Ler mais
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SEÇÃO 7 — CTA final */}
      <CTASection />
    </>
  );
}
