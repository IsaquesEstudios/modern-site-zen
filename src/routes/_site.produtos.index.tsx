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

import productPhoto1 from "@/assets/coleta-agua-campo.jpg";
import productPhoto2 from "@/assets/insumos-tratamento-agua-panorama.jpg";
import productPhoto3 from "@/assets/agua-cristalina-uso-panorama.jpg";
import productPhoto4 from "@/assets/agua-conforto-dia-a-dia.jpg";
import productPhoto5 from "@/assets/agua-pura-laboratorio-panorama.jpg";
import productPhoto6 from "@/assets/bombonas-agua-pura-panorama.jpg";
import productPhoto7 from "@/assets/insumos-tratamento-agua.jpg";

const PRODUCT_PHOTOS: Record<string, { src: string; alt: string; width: number; height: number }> = {
  "bomba-dosadora-cloro": { src: productPhoto1, alt: "Coleta de amostra de água em ponto externo", width: 1440, height: 1088 },
  "bomba-dosadora-agua": { src: productPhoto2, alt: "Conferência de recipientes fechados em área de armazenamento de insumos", width: 1152, height: 768 },
  "filtros-de-agua": { src: productPhoto3, alt: "Copo sendo preenchido com água cristalina em uma cozinha", width: 1152, height: 768 },
  "abrandador-de-agua": { src: productPhoto4, alt: "Uso cotidiano de água para higiene das mãos", width: 1536, height: 1024 },
  "desmineralizador-de-agua": { src: productPhoto5, alt: "Vidrarias com água pura em ambiente de laboratório", width: 1152, height: 768 },
  "agua-destilada": { src: productPhoto6, alt: "Bombonas fechadas para armazenamento de água pura", width: 1152, height: 768 },
  "produtos-quimicos-agua": { src: productPhoto7, alt: "Conferência de recipientes fechados em área de armazenamento de insumos", width: 1152, height: 768 },
};

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
                <div className="flex"><Badge>Produtos</Badge></div>
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
              <img decoding="async" fetchPriority="high"
                width={1740} height={1086} src={produtosImage.url}
                alt="Linha de equipamentos e insumos para tratamento de água da Vid’Água"
                className="w-full max-lg:aspect-video max-lg:object-cover"
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
                  <CardContent>
                    {PRODUCT_PHOTOS[item.slug] ? (
                      <img decoding="async" loading="lazy"
                        src={PRODUCT_PHOTOS[item.slug]?.src}
                        alt={PRODUCT_PHOTOS[item.slug]?.alt}
                        width={PRODUCT_PHOTOS[item.slug]?.width}
                        height={PRODUCT_PHOTOS[item.slug]?.height}
                        className="w-full h-auto rounded-md"
                      />
                    ) : null}
                  </CardContent>
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
