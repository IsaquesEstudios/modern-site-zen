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
} from "@/design-system/cozy-code-library-1062b4";
import { Reveal } from "@/components/Reveal";
import contextPhoto1 from "@/assets/coleta-agua-campo.jpg";
import contextPhoto2 from "@/assets/agua-pura-laboratorio-panorama.jpg";
import { ServiceGrid, QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection, WHATSAPP_URL } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["monitoramento-poco-artesiano"];

const TITLE = "Monitoramento de Poço Artesiano junto à Covisa | Vid'Água";
const DESCRIPTION =
  "Seu poço artesiano já é legalizado? A Vid'Água faz o monitoramento periódico da qualidade da água, com coletas, análises e laudos para a Vigilância Sanitária (Covisa).";

export const Route = createFileRoute("/_site/servicos/monitoramento-poco-artesiano")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: MonitoramentoPocoArtesianoPage,
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
    title: "Plano de monitoramento",
    body: "Definimos parâmetros e frequência de coleta conforme o uso da água e as exigências da Covisa.",
  },
  {
    title: "Coleta técnica",
    body: "Técnicos treinados coletam as amostras no ponto correto, com frascos e conservação adequados.",
  },
  {
    title: "Análises laboratoriais",
    body: "Ensaios físico-químicos e microbiológicos conforme a Portaria GM/MS 888/2021.",
  },
  {
    title: "Laudos com ART",
    body: "Laudos assinados por responsável técnico, prontos para apresentação à Vigilância Sanitária.",
  },
  {
    title: "Histórico e acompanhamento",
    body: "Mantemos o histórico dos resultados e avisamos antes de cada nova coleta, para você nunca ficar fora do prazo.",
  },
];

function MonitoramentoPocoArtesianoPage() {
  return (
    <>
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
              <div className="flex flex-col gap-6">
                <Badge>Serviço</Badge>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Monitoramento de poço artesiano junto à Vigilância Sanitária (Covisa)
                </h1>
                <p className="leading-relaxed text-muted">
                  Ter o poço legalizado é só o começo. Para continuar usando a água com segurança,
                  a Vigilância Sanitária exige o controle periódico da qualidade, com análises e
                  laudos em dia.
                </p>
                <p className="leading-relaxed text-muted">
                  A Vid&rsquo;Água faz o{" "}
                  <strong className="text-foreground">monitoramento de poços artesianos já
                  legalizados</strong> para residências, condomínios, empresas e indústrias:
                  coletamos, analisamos e entregamos os laudos que a Covisa pede.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="gradient">Falar com um Especialista</Button>
                  </a>
                  <a href="#processo">
                    <Button variant="outline">Como funciona o monitoramento</Button>
                  </a>
                </div>
              </div>
              <img decoding="async" fetchPriority="high" src={contextPhoto1} alt="Técnico coletando amostra da água de poço artesiano para monitoramento" width={1440} height={1088} className="w-full h-auto rounded-md max-lg:aspect-video max-lg:object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceGrid currentSlug="monitoramento-poco-artesiano">
        <div className="flex flex-col gap-20">
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Por que monitorar
              </p>
              <H2>Poço legalizado também precisa de acompanhamento</H2>
              <p className="leading-relaxed text-muted">
                A água subterrânea pode mudar com o tempo: chuvas, obras próximas, desgaste da
                estrutura ou contaminação do lençol alteram a qualidade sem aviso. O monitoramento
                periódico identifica esses desvios antes que virem risco à saúde ou problema com a
                fiscalização. Com o monitoramento em dia, você garante:
              </p>
              <ul className="flex flex-col gap-3">
                <Bullet>Água dentro dos padrões de potabilidade da Portaria 888.</Bullet>
                <Bullet>Laudos atualizados para apresentar à Vigilância Sanitária (Covisa).</Bullet>
                <Bullet>Menos risco de autuações e interrupção do uso do poço.</Bullet>
                <Bullet>Histórico técnico da água para auditorias e alvarás.</Bullet>
              </ul>
              <img decoding="async" loading="lazy" src={contextPhoto2} alt="Amostras da água do poço analisadas em laboratório para o laudo da Covisa" width={1152} height={768} className="w-full h-auto rounded-md" />
            </section>
          </Reveal>

          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Importante
              </p>
              <H2>Atendemos poços que já estão legalizados</H2>
              <Card tone="soft">
                <CardHeader>
                  <CardTitle>Não realizamos legalização nem outorga</CardTitle>
                  <CardDescription>
                    Nosso trabalho começa depois da legalização: cuidamos do monitoramento contínuo
                    da qualidade da água e da documentação sanitária exigida pela Covisa.
                  </CardDescription>
                </CardHeader>
              </Card>
              <p className="leading-relaxed text-muted">
                Se precisa apenas de um laudo pontual, conheça também nossa{" "}
                <Link to="/servicos/analise-de-agua" className={inlineLink}>
                  análise de água
                </Link>
                .
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section id="processo" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Como funciona
              </p>
              <H2>Monitoramento completo, do plano ao laudo</H2>
              <div className="grid gap-6 md:grid-cols-2">
                {escopo.map((e, i) => (
                  <Reveal key={e.title} delay={i * 60}>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>{e.title}</CardTitle>
                        <CardDescription>{e.body}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Reveal>
                ))}
              </div>
              <p className="leading-relaxed text-muted">
                Se algum resultado sair do padrão, nossa equipe indica a correção e pode executar o{" "}
                <Link to="/servicos/manutencao-poco-artesiano" className={inlineLink}>
                  tratamento da água do poço artesiano
                </Link>
                .
              </p>
              <Card tone="gradientSoft">
                <CardHeader>
                  <CardTitle>Vamos montar o plano do seu poço?</CardTitle>
                  <CardDescription>
                    Conte como o poço é usado e receba uma proposta de monitoramento sob medida.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={`#${QUOTE_ANCHOR}`}>
                    <Button variant="gradient">Solicitar Orçamento de Monitoramento</Button>
                  </a>
                </CardContent>
              </Card>
            </section>
          </Reveal>

          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Mantenha seu poço em dia com a Vigilância Sanitária</H2>
              <p className="leading-relaxed text-muted">
                Deixe o controle da qualidade da água com quem tem mais de 30 anos de experiência
                em águas subterrâneas.
              </p>
              <Card>
                <CardContent className="pt-6">
                  <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="nome" className="text-sm font-semibold">Nome</label>
                      <Input id="nome" name="nome" autoComplete="name" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="telefone" className="text-sm font-semibold">
                          WhatsApp / Telefone
                        </label>
                        <Input id="telefone" name="telefone" type="tel" autoComplete="tel" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold">E-mail</label>
                        <Input id="email" name="email" type="email" autoComplete="email" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="perfil" className="text-sm font-semibold">
                        Qual o perfil do local do poço?
                      </label>
                      <select
                        id="perfil"
                        name="perfil"
                        defaultValue=""
                        className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                      >
                        <option value="" disabled>Selecione uma opção</option>
                        <option>Residência</option>
                        <option>Condomínio</option>
                        <option>Empresa / Indústria</option>
                        <option>Sítio / Fazenda</option>
                      </select>
                    </div>
                    <div>
                      <Button type="submit" variant="gradient">
                        Enviar Mensagem aos Especialistas
                      </Button>
                    </div>
                    <p className="text-xs italic text-muted">
                      Atendimento para poços já legalizados. Laudos com ART (Anotação de
                      Responsabilidade Técnica).
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
