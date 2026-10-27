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
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { CTASection } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["sobre"];

const TITLE = "Sobre a Vid'Água | Empresa de Tratamento de Água (30 Anos)";
const DESCRIPTION =
  "Conheça a história da Vidagua, empresa especializada em água com laboratório próprio em SP. Atendemos condomínios, indústrias e poços artesianos.";

export const Route = createFileRoute("/_site/sobre")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: SobrePage,
});

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">{children}</h2>;
}

const inlineLink = "font-semibold text-accent underline-offset-4 hover:underline";

const valores = [
  {
    title: "Foco no Cliente",
    body: "Nosso sucesso sempre será medido pela satisfação de nossos clientes.",
  },
  {
    title: "Melhoria Contínua",
    body: "Busca incessante pelo aperfeiçoamento da qualidade e eficiência dos nossos serviços.",
  },
  {
    title: "Rigor Científico",
    body: "Decisões baseadas em dados laboratoriais e laudos técnicos precisos.",
  },
  {
    title: "Responsabilidade Legal",
    body: "Transparência e ética em cada laudo e análise.",
  },
];

function SobrePage() {
  return (
    <>
      {/* SEÇÃO 1 — Nossa História */}
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
              <div className="flex flex-col gap-6">
                <Badge>Quem somos</Badge>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Sobre a Vid&rsquo;Água: Mais de 30 anos de tecnologia e segurança hídrica
                </h1>
                <p className="leading-relaxed text-muted">
                  Se você está buscando saber{" "}
                  <strong className="text-foreground">quem somos</strong>, a Vidagua é a tradução de
                  experiência, precisão e comprometimento. A{" "}
                  <strong className="text-foreground">
                    Vid&rsquo;Água empresa de tratamento de água
                  </strong>{" "}
                  construiu sua reputação com base em um princípio fundamental: não existe solução
                  genérica quando o assunto é a qualidade e a segurança da sua água.
                </p>
                <p className="leading-relaxed text-muted">
                  Localizada na cidade de São Paulo (SP), a{" "}
                  <strong className="text-foreground">história da Vidagua</strong> é marcada pelo
                  desenvolvimento de sistemas completos para tratamento de águas com a mais alta
                  tecnologia e qualidade comprovada. Ao longo de mais de três décadas, acumulamos uma
                  ampla experiência no atendimento e resolução de problemas complexos em condomínios,
                  hotéis, residências e indústrias, englobando desde a água da rede pública até
                  captações profundas, como poços artesianos e minas de água.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contato">
                    <Button variant="gradient">Entre em Contato com Nossos Especialistas</Button>
                  </Link>
                  <a href="#estrutura">
                    <Button variant="outline">Conhecer nossa estrutura</Button>
                  </a>
                </div>
              </div>
              <ImagePlaceholder label="Imagem" ratio="aspect-[4/3]" />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-20">
        {/* SEÇÃO 2 — Missão, Visão e Valores */}
        <Reveal>
          <section className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Missão, visão e valores
            </p>
            <H2>O que guia o nosso trabalho todos os dias</H2>
            <p className="max-w-3xl leading-relaxed text-muted">
              Para nos consolidarmos como uma{" "}
              <strong className="text-foreground">empresa especializada em água</strong>, pautamos
              nossa atuação diária em diretrizes claras, que garantem que cada projeto entregue
              supere as expectativas operacionais e legais:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <Card tone="gradientSoft">
                <CardHeader>
                  <CardTitle>Nossa Missão</CardTitle>
                  <CardDescription>
                    Desenvolver sistemas completos de tratamento de água utilizando alta tecnologia,
                    protegendo a saúde, o patrimônio e a operação dos nossos clientes em total
                    conformidade com os parâmetros exigidos por lei (como a Portaria 888).
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card tone="soft">
                <CardHeader>
                  <CardTitle>Nossa Visão</CardTitle>
                  <CardDescription>
                    Ser a principal referência técnica do país em segurança hídrica, análises
                    laboratoriais e gestão de poços artesianos, unindo inovação e sustentabilidade.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {valores.map((v, i) => (
                <Reveal key={v.title} delay={i * 60}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>{v.title}</CardTitle>
                      <CardDescription>{v.body}</CardDescription>
                    </CardHeader>
                  </Card>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        {/* SEÇÃO 3 — Estrutura e Equipe */}
        <Reveal>
          <section id="estrutura" className="flex flex-col gap-6 scroll-mt-28">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Nossa estrutura e equipe
            </p>
            <H2>A ciência por trás da nossa engenharia</H2>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
              <div className="flex flex-col gap-6">
                <p className="leading-relaxed text-muted">
                  Por trás de cada filtro ou bomba instalada, existe um time técnico altamente
                  qualificado (composto por engenheiros, geólogos e técnicos químicos) e uma
                  estrutura de ponta.
                </p>
                <p className="leading-relaxed text-muted">
                  Nosso maior diferencial é o{" "}
                  <strong className="text-foreground">nosso laboratório próprio</strong>. Ele possui
                  equipamentos avançados que nos permitem avaliar a água através de amostras antes de
                  qualquer projeto. É este diagnóstico científico que nos permite determinar quais os
                  equipamentos mais adequados e eficientes, dimensionando exatamente as mídias
                  filtrantes necessárias conforme os elementos a serem removidos. Nós não
                  &ldquo;adivinhamos&rdquo; o problema; nós o mapeamos e o resolvemos de forma
                  definitiva.
                </p>
              </div>
              <ImagePlaceholder label="Imagem" ratio="aspect-[4/3]" />
            </div>
          </section>
        </Reveal>

        {/* SEÇÃO 4 — FAQ */}
        <Reveal>
          <section className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Perguntas frequentes
            </p>
            <H2>Entenda nossos diferenciais e como atuamos</H2>

            <div className="flex flex-col gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Por que a análise laboratorial prévia é o grande diferencial técnico da
                    Vid&rsquo;Água na escolha de equipamentos?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted">
                    Nossa infraestrutura própria sediada em São Paulo nos permite realizar uma
                    minuciosa{" "}
                    <Link to="/servicos/analise-de-agua" className={inlineLink}>
                      análise de água
                    </Link>{" "}
                    bruta ou tratada antes de sugerir qualquer equipamento. Em vez de entregar
                    orçamentos genéricos, avaliamos os reais componentes químicos e biológicos da sua
                    amostra para indicar a solução exata, garantindo conformidade absoluta com as
                    normativas de saúde pública.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    Como a Vid&rsquo;Água atua na gestão e acompanhamento preventivo de captações
                    subterrâneas profundas?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted">
                    Além de fabricar e instalar os sistemas físicos, fornecemos um rigoroso{" "}
                    <Link to="/servicos/monitoramento-qualidade-agua" className={inlineLink}>
                      monitoramento de poço artesiano
                    </Link>{" "}
                    para garantir a estabilidade do aquífero e a segurança contínua da água extraída.
                    Assim, o tratamento de água de poço artesiano continua extremamente eficaz contra ferro, manganês e
                    ameaças bacteriológicas ao longo dos anos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    Como funciona o processo burocrático junto aos órgãos reguladores ambientais?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted">
                    Para poços artesianos já legalizados, realizamos o{" "}
                    <Link to="/servicos/monitoramento-poco-artesiano" className={inlineLink}>
                      monitoramento periódico da qualidade da água
                    </Link>{" "}
                    junto à Vigilância Sanitária (Covisa). Coletamos, analisamos e emitimos os laudos
                    exigidos, para que sua fonte de abastecimento continue segura e em dia com a
                    fiscalização sanitária.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </Reveal>

        {/* SEÇÃO 5 — CTA final */}
        <Reveal>
          <section className="flex flex-col items-start gap-6">
            <H2>Vamos cuidar da qualidade da sua água?</H2>
            <p className="max-w-3xl leading-relaxed text-muted">
              Conte com a infraestrutura, a tecnologia e a experiência de quem dita o padrão de
              qualidade no mercado há mais de 30 anos.
            </p>
            <Link to="/contato">
              <Button variant="gradient">Entre em Contato com Nossos Especialistas</Button>
            </Link>
          </section>
        </Reveal>
      </div>

      <CTASection />
      <WhatsAppFloat />
    </>
  );
}
