import { createFileRoute, Link } from "@tanstack/react-router";
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
import { CTASection, Section, SectionTitle, LinkGrid } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, SERVICE_LINKS, summaryForPath, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["servicos"];

export const Route = createFileRoute("/_site/servicos/")({
  head: () => headFor(page),
  component: ServicosPage,
});

const etapas = [
  {
    title: "1. Diagnóstico laboratorial",
    body: "Coletamos uma amostra e analisamos, no nosso laboratório em São Paulo, os parâmetros físico-químicos e microbiológicos da sua água. Nenhum equipamento é indicado antes desse resultado.",
  },
  {
    title: "2. Projeto dimensionado",
    body: "Com o laudo em mãos, definimos o tratamento pela vazão, pela pressão disponível e pelos contaminantes encontrados: filtração, abrandamento, oxidação, desinfecção ou uma combinação delas.",
  },
  {
    title: "3. Instalação e start-up",
    body: "Nossa equipe técnica instala o sistema, regula a dosagem e entrega o conjunto operando dentro dos parâmetros previstos em projeto.",
  },
  {
    title: "4. Manutenção e monitoramento",
    body: "Filtros saturam e dosadoras se desregulam. Contratos preventivos mantêm o sistema eficiente e a documentação sempre válida perante os órgãos fiscalizadores.",
  },
];

function ServicosPage() {
  return (
    <>
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-24">
          <Reveal>
            <div className="flex max-w-3xl flex-col gap-6">
              <Badge>Serviços</Badge>
              <h1 className="font-display text-4xl font-extrabold leading-tight md:text-5xl">
                Serviços de análise, tratamento e legalização de água
              </h1>
              <p className="text-lg leading-relaxed text-muted">
                Há mais de 30 anos a Vid&rsquo;Água resolve problemas de água em residências,
                condomínios, hotéis, restaurantes e indústrias — da análise laboratorial à outorga do
                poço artesiano, com equipe técnica e laboratório próprios.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contato">
                  <Button variant="gradient">Solicitar orçamento</Button>
                </Link>
                <a href="#lista">
                  <Button variant="outline">Ver todos os serviços</Button>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section id="lista">
        <SectionTitle eyebrow="O que fazemos" title="Escolha o serviço que você precisa" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_LINKS.map((item, i) => (
            <Reveal key={item.to} delay={i * 50}>
              <Link to={item.to} className="group block h-full">
                <Card className="h-full transition-transform duration-300 group-hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle>{item.label}</CardTitle>
                    <CardDescription>{summaryForPath(item.to)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm font-semibold text-accent">Saber mais →</span>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section soft>
        <SectionTitle eyebrow="Como trabalhamos" title="Da amostra de água ao sistema funcionando" />
        <div className="grid gap-6 md:grid-cols-2">
          {etapas.map((e, i) => (
            <Reveal key={e.title} delay={i * 60}>
              <Card tone="soft" className="h-full">
                <CardHeader>
                  <CardTitle>{e.title}</CardTitle>
                  <CardDescription>{e.body}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {page.problems?.length ? (
        <Section>
          <SectionTitle
            eyebrow="Diagnóstico rápido"
            title="Problema específico"
          />
          <LinkGrid items={page.problems} />
        </Section>
      ) : null}

      <CTASection />
      <WhatsAppFloat />
    </>
  );
}
