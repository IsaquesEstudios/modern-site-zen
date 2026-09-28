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
import { CTASection, Section, SectionTitle } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, PRODUCT_LINKS, summaryForPath, headFor } from "@/lib/site";
import produtosImage from "@/assets/equipamentos-e-produtos.jpg.asset.json";

const page = PAGES_BY_SLUG["produtos"];

export const Route = createFileRoute("/_site/produtos/")({
  head: () => headFor(page),
  component: ProdutosPage,
});

const criterios = [
  {
    title: "Nada de equipamento de prateleira",
    body: "Um filtro ou uma dosadora subdimensionada não protege ninguém; superdimensionada, custa caro sem entregar resultado. Por isso partimos sempre do laudo da sua água antes de indicar um modelo.",
  },
  {
    title: "Dimensionamento por vazão e pressão",
    body: "Calculamos a capacidade pelo consumo real do imóvel ou do processo, pela pressão disponível na rede e pela carga de contaminantes a remover.",
  },
  {
    title: "Instalação, insumos e assistência",
    body: "Fornecemos o equipamento, instalamos, regulamos e mantemos o abastecimento de mídias filtrantes, resinas, sal e produtos químicos ao longo do tempo.",
  },
];

function ProdutosPage() {
  return (
    <>
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-24">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col gap-6">
                <Badge>Produtos</Badge>
                <h1 className="font-display text-4xl font-extrabold leading-tight md:text-5xl">
                  Equipamentos e insumos para tratamento de água
                </h1>
                <p className="text-lg leading-relaxed text-muted">
                  Filtros, abrandadores, bombas dosadoras, desmineralizadores, água destilada e
                  produtos químicos — dimensionados a partir da análise da sua água e com suporte
                  técnico da mesma equipe que instala e mantém o sistema.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contato">
                    <Button variant="gradient">Solicitar orçamento</Button>
                  </Link>
                  <a href="#lista">
                    <Button variant="outline">Ver a linha completa</Button>
                  </a>
                </div>
              </div>
              <img
                src={produtosImage.url}
                alt="Equipamentos para tratamento de água"
                className="w-full rounded-md border border-border object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Section id="lista">
        <SectionTitle eyebrow="Linha completa" title="Nossos produtos" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_LINKS.map((item, i) => (
            <Reveal key={item.to} delay={i * 50}>
              <Link to={item.to} className="group block h-full">
                <Card className="h-full transition-transform duration-300 group-hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle>{item.label}</CardTitle>
                    <CardDescription>{summaryForPath(item.to)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm font-semibold text-accent">Ver produto →</span>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section soft>
        <SectionTitle
          eyebrow="Como indicamos um equipamento"
          title="O produto certo depende da sua água"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {criterios.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <Card tone="soft" className="h-full">
                <CardHeader>
                  <CardTitle>{c.title}</CardTitle>
                  <CardDescription>{c.body}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/servicos/analise-de-agua">
            <Button variant="outline">Começar pela análise de água</Button>
          </Link>
        </div>
      </Section>

      <CTASection />
      <WhatsAppFloat />
    </>
  );
}
