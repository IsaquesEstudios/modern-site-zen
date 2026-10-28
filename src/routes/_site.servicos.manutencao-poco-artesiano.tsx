import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Textarea,
} from "@/design-system/cozy-code-library-1062b4";
import { Reveal } from "@/components/Reveal";
import contextPhoto1 from "@/assets/amostras-efluentes-laboratorio.jpg";
import { ServiceGrid, QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection, WHATSAPP_URL } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";
import pocoImage from "@/assets/poco-artesiano.jpg.asset.json";

const page = PAGES_BY_SLUG["manutencao-poco-artesiano"];

const TITLE = "Tratamento de Água de Poço Artesiano | Vid'Água";
const DESCRIPTION =
  "Tratamento da água de poço artesiano com análise, filtração, cloração e laudo técnico em São Paulo e região.";

export const Route = createFileRoute("/_site/servicos/manutencao-poco-artesiano")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: ManutencaoPocoPage,
});

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">{children}</h2>;
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 leading-relaxed text-muted">
      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-accent" />
      <span>{children}</span>
    </li>
  );
}

const inlineLink = "font-semibold text-accent underline-offset-4 hover:underline";

const escopo = [
  {
    title: "Análise da água do poço",
    body: "Coleta e análise laboratorial para identificar ferro, manganês, dureza, turbidez ou contaminação bacteriológica. É o laudo que define o tratamento certo.",
  },
  {
    title: "Filtração sob medida",
    body: "Dimensionamos filtros com a mídia adequada para cada caso: remoção de ferro e manganês, turbidez, cor ou odor.",
  },
  {
    title: "Desinfecção da água",
    body: "Instalação e calibração de bomba dosadora de cloro para manter a água livre de bactérias, na medida certa.",
  },
  {
    title: "Laudo e acompanhamento",
    body: "Após o tratamento, emitimos laudo de potabilidade e acompanhamos a qualidade da água com análises periódicas.",
  },
];

function ManutencaoPocoPage() {
  return (
    <>
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
              <div className="flex flex-col gap-6">
                <div className="flex"><Badge>Serviço</Badge></div>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Tratamento de Água de Poço Artesiano
                </h1>
                <p className="leading-relaxed text-muted">
                  A água de poço artesiano pode trazer ferro, manganês, turbidez ou contaminação
                  bacteriológica, e sua qualidade pode mudar ao longo do tempo.
                </p>
                <p className="leading-relaxed text-muted">
                  A Vid&rsquo;Água realiza o{" "}
                  <strong className="text-foreground">tratamento da água de poço</strong>, com
                  análise, equipamentos adequados e laudo técnico ao final do serviço.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="gradient">Falar com um Especialista no WhatsApp</Button>
                  </a>
                  <a href="#escopo">
                    <Button variant="outline">Ver o que o tratamento inclui</Button>
                  </a>
                </div>
              </div>
              <img decoding="async" fetchPriority="high"
                width={1740} height={1086} src={pocoImage.url}
                alt="Estrutura hidráulica de poço artesiano"
                className="w-full max-lg:aspect-video max-lg:object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceGrid currentSlug="manutencao-poco-artesiano">
        <div className="flex flex-col gap-20">
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Quando tratar a água
              </p>
              <H2>Sinais de que a água do seu poço precisa de tratamento</H2>
              <p className="leading-relaxed text-muted">
                Fique atento a estes sinais na água do seu poço:
              </p>
              <ul className="flex flex-col gap-3">
                <Bullet>Água saindo turva, com areia ou com coloração amarelada</Bullet>
                <Bullet>Cheiro de terra, de ovo podre ou gosto metálico</Bullet>
                <Bullet>Resultado de análise fora dos padrões de potabilidade</Bullet>
              </ul>
              <p className="leading-relaxed text-muted">
                Como referência, recomendamos{" "}
                <Link to="/servicos/analise-de-agua" className={inlineLink}>
                  análise da água
                </Link>{" "}
                no mínimo semestral para poços de uso coletivo.
              </p>
              <img decoding="async" loading="lazy" src={contextPhoto1} alt="Amostras de água com diferentes aspectos em bancada de laboratório" width={1536} height={1024} className="w-full h-auto rounded-md" />
            </section>
          </Reveal>

          <Reveal>
            <section id="escopo" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Escopo do serviço
              </p>
              <H2>O que o tratamento da Vid&rsquo;Água inclui</H2>
              <div className="grid gap-6 md:grid-cols-2">
                {escopo.map((s, i) => (
                  <Reveal key={s.title} delay={i * 60}>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>{s.title}</CardTitle>
                        <CardDescription>{s.body}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Documentação
              </p>
              <H2>Laudo técnico e acompanhamento sanitário</H2>
              <p className="leading-relaxed text-muted">
                Ao final do tratamento emitimos o relatório técnico do serviço e, quando solicitado,
                o laudo de potabilidade da água. Para poços já legalizados, também fazemos o{" "}
                <Link to="/servicos/monitoramento-poco-artesiano" className={inlineLink}>
                  monitoramento periódico junto à Covisa
                </Link>
                .
              </p>
              <p className="leading-relaxed text-muted">
                Para condomínios, indústrias e propriedades rurais, o acompanhamento contínuo pode
                ser feito por meio do nosso{" "}
                <Link to="/servicos/monitoramento-qualidade-agua" className={inlineLink}>
                  plano de monitoramento da qualidade da água
                </Link>
                .
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Solicite o orçamento para tratamento de água de poço</H2>
              <p className="leading-relaxed text-muted">
                Conte o que está acontecendo com a água do seu poço e nossa equipe técnica retorna
                com a orientação e o orçamento adequados.
              </p>

              <Card>
                <CardContent className="pt-6">
                  <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="responsavel" className="text-sm font-semibold">
                        Nome do responsável
                      </label>
                      <Input id="responsavel" name="responsavel" autoComplete="name" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="telefone" className="text-sm font-semibold">
                          Telefone / WhatsApp
                        </label>
                        <Input id="telefone" name="telefone" type="tel" autoComplete="tel" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold">
                          E-mail
                        </label>
                        <Input id="email" name="email" type="email" autoComplete="email" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="situacao" className="text-sm font-semibold">
                        Situação da água do poço
                      </label>
                      <select
                        id="situacao"
                        name="situacao"
                        defaultValue=""
                        className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                      >
                        <option value="" disabled>
                          Selecione uma opção
                        </option>
                        <option>Água amarelada ou com gosto metálico</option>
                        <option>Água turva ou com cheiro</option>
                        <option>Análise fora do padrão de potabilidade</option>
                        <option>Quero uma análise preventiva</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="descricao" className="text-sm font-semibold">
                        Conte brevemente o que está acontecendo
                      </label>
                      <Textarea id="descricao" name="descricao" rows={3} />
                    </div>
                    <div>
                      <Button type="submit" variant="gradient">
                        Solicitar Orçamento de Tratamento
                      </Button>
                    </div>
                    <p className="text-xs italic text-muted">
                      Atendimento a residências,
                      propriedades rurais, condomínios e indústrias.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </section>
          </Reveal>
        </div>
      </ServiceGrid>

      <CTASection />
      <WhatsAppFloat />
    </>
  );
}
