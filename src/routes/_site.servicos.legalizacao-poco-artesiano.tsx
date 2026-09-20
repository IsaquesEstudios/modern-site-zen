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
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ServiceGrid, QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection, WHATSAPP_URL } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["legalizacao-poco-artesiano"];

const TITLE = "Legalizar Poço Artesiano: Outorga, Dispensa e Preço | Vid'Água";
const DESCRIPTION =
  "Precisa legalizar seu poço artesiano? A Vid'Água cuida de toda a documentação, registro no DAEE, Outorga ou Dispensa. Evite multas e fale com nossos especialistas!";

export const Route = createFileRoute("/_site/servicos/legalizacao-poco-artesiano")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: LegalizacaoPocoArtesianoPage,
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
    title: "Vistoria técnica",
    body: "Geólogos credenciados avaliam as condições estruturais e sanitárias do poço.",
  },
  {
    title: "Testes de bombeamento",
    body: "Dimensionamento da vazão e da capacidade do aquífero.",
  },
  {
    title: "Projetos e plantas",
    body: "Elaboração de croquis, perfil litológico e plantas de situação.",
  },
  {
    title: "Análise laboratorial",
    body: "Coleta e laudo atestando os padrões de qualidade da água.",
  },
  {
    title: "Montagem e acompanhamento do processo",
    body: "Inserimos toda a documentação no sistema do órgão regulador, monitorando cada etapa até a emissão do documento final.",
  },
];

function LegalizacaoPocoArtesianoPage() {
  return (
    <>
      {/* SEÇÃO 1 — Hero */}
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
              <div className="flex flex-col gap-6">
                <Badge>Serviço</Badge>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Evite multas e interdições: saiba como legalizar poço artesiano com quem entende
                </h1>
                <p className="leading-relaxed text-muted">
                  Ter um poço artesiano operando sem a documentação correta é um risco financeiro e
                  jurídico altíssimo. A fiscalização ambiental está cada vez mais rigorosa e operar
                  na irregularidade pode resultar em multas pesadas e na lacração imediata do seu
                  poço.
                </p>
                <p className="leading-relaxed text-muted">
                  Mas não se preocupe com a burocracia. A equipe de geólogos e engenheiros da
                  Vid&rsquo;Água é especialista em{" "}
                  <strong className="text-foreground">legalizar poço artesiano</strong> para
                  residências, condomínios, propriedades rurais e indústrias, cuidando de todo o
                  processo do início ao fim.
                </p>
                <div className="flex flex-wrap gap-4">
                  {/* TODO: trocar pelo número de WhatsApp oficial da Vid'Água */}
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="gradient">Falar com um Especialista e Iniciar Legalização</Button>
                  </a>
                  <a href="#processo">
                    <Button variant="outline">Entender o Processo e Documentação</Button>
                  </a>
                </div>
              </div>
              <ImagePlaceholder label="Imagem" ratio="aspect-[4/3]" />
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceGrid currentSlug="legalizacao-poco-artesiano">
        <div className="flex flex-col gap-20">
          {/* SEÇÃO 2 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                A importância da legalização
              </p>
              <H2>O que significa ter um poço artesiano legal?</H2>
              <p className="leading-relaxed text-muted">
                Muitas pessoas acreditam que, por o poço estar dentro do seu terreno, a água pode ser
                extraída livremente. Pela lei brasileira, toda água subterrânea é um bem público.
                Portanto, você precisa da permissão do Estado para utilizá-la.
              </p>
              <p className="leading-relaxed text-muted">
                Saber <strong className="text-foreground">como legalizar poço artesiano</strong> é o
                único caminho para obter um{" "}
                <strong className="text-foreground">poço artesiano legal</strong> e protegido. Ao
                manter seu poço regularizado, você garante:
              </p>
              <ul className="flex flex-col gap-3">
                <Bullet>Isenção de riscos de multas ambientais.</Bullet>
                <Bullet>Prevenção contra a lacração e interdição do abastecimento.</Bullet>
                <Bullet>Valorização do imóvel ou da propriedade.</Bullet>
                <Bullet>
                  Segurança jurídica para emissão de alvarás de funcionamento da sua empresa ou
                  indústria.
                </Bullet>
              </ul>
              <ImagePlaceholder label="Imagem" ratio="aspect-[16/7]" />
            </section>
          </Reveal>

          {/* SEÇÃO 3 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Entendendo a burocracia
              </p>
              <H2>Outorga ou dispensa? Entenda o que o seu poço precisa</H2>
              <p className="leading-relaxed text-muted">
                O processo de{" "}
                <strong className="text-foreground">legalização de poço artesiano</strong> varia de
                acordo com o volume de água extraído por dia e com a localização da propriedade. Os
                órgãos fiscalizadores estaduais (como o DAEE em São Paulo) classificam a legalização
                em duas modalidades principais:
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Outorga de poço artesiano</CardTitle>
                    <CardDescription>
                      É a concessão oficial para o uso da água. Geralmente exigida para condomínios,
                      indústrias, clubes e grandes propriedades rurais de alto consumo diário. O
                      processo exige estudo hidrogeológico aprofundado, planta do local e testes de
                      vazão (teste de bombeamento).
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Dispensa de outorga (uso insignificante)</CardTitle>
                    <CardDescription>
                      Aplica-se a extrações de baixo volume, geralmente pequenos usos residenciais ou
                      rurais. Apesar do nome, não significa que você não precisa registrar o poço: o
                      processo é mais simplificado, mas o cadastro no órgão competente continua 100%
                      obrigatório.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <p className="leading-relaxed text-muted">
                <strong className="text-foreground">Importante:</strong> para aprovar qualquer uma
                das modalidades, é imprescindível apresentar a comprovação de potabilidade. Conte com
                nosso laboratório para realizar a{" "}
                <Link to="/servicos/analise-de-agua" className={inlineLink}>
                  análise de água
                </Link>{" "}
                exigida pelo órgão.
              </p>
            </section>
          </Reveal>

          {/* SEÇÃO 4 */}
          <Reveal>
            <section id="processo" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                O processo na prática
              </p>
              <H2>Sem dor de cabeça: cuidamos de toda a documentação do poço artesiano</H2>
              <p className="leading-relaxed text-muted">
                Lidar com órgãos públicos exige conhecimento técnico. Um formulário preenchido errado
                pode atrasar seu processo por meses. A Vid&rsquo;Água atua diretamente na emissão do
                seu <strong className="text-foreground">registro no DAEE</strong> (ou órgão estadual
                correspondente). Nosso escopo de trabalho inclui:
              </p>
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
                Se durante a vistoria constatarmos que o poço precisa de adequações físicas ou
                sanitárias, nossa equipe também executa a{" "}
                <Link to="/servicos/manutencao-poco-artesiano" className={inlineLink}>
                  manutenção e tratamento do poço artesiano
                </Link>
                .
              </p>
            </section>
          </Reveal>

          {/* SEÇÃO 5 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Prazos e preços
              </p>
              <H2>Legalizar poço artesiano: preço e quanto tempo demora?</H2>
              <p className="leading-relaxed text-muted">
                As dúvidas mais comuns de quem nos procura são: qual o{" "}
                <strong className="text-foreground">preço para legalizar poço artesiano</strong> e em
                quanto tempo o documento fica pronto?
              </p>
              <p className="leading-relaxed text-muted">
                <strong className="text-foreground">Sobre os prazos:</strong> a montagem do processo
                pela nossa equipe é ágil. Após protocolado, o tempo de aprovação depende
                exclusivamente da fila do órgão regulador (DAEE), podendo variar de algumas semanas a
                poucos meses.
              </p>
              <p className="leading-relaxed text-muted">
                <strong className="text-foreground">Sobre os preços:</strong> desconfie de empresas
                que passam um valor tabelado sem conhecer a sua realidade. O custo varia de acordo
                com:
              </p>
              <ul className="flex flex-col gap-3">
                <Bullet>A modalidade aplicável (outorga completa ou dispensa).</Bullet>
                <Bullet>A profundidade e a vazão do poço.</Bullet>
                <Bullet>A documentação que você já possui (ou não).</Bullet>
                <Bullet>As taxas estaduais (recolhimentos).</Bullet>
              </ul>
              <p className="leading-relaxed text-muted">
                O processo é mais acessível do que você imagina e infinitamente mais barato do que
                pagar multas por extração ilegal.
              </p>

              <Card tone="gradientSoft">
                <CardHeader>
                  <CardTitle>Vamos avaliar o seu caso?</CardTitle>
                  <CardDescription>
                    Relate sua situação para nossos geólogos e receba uma estimativa de custos rápida
                    e transparente.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={`#${QUOTE_ANCHOR}`}>
                    <Button variant="gradient">Solicitar Orçamento para Legalização</Button>
                  </a>
                </CardContent>
              </Card>
            </section>
          </Reveal>

          {/* SEÇÃO 6 — CTA final e formulário */}
          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Regularize sua situação hídrica hoje mesmo</H2>
              <p className="leading-relaxed text-muted">
                Pare de se preocupar com fiscalizações. Terceirize a burocracia para quem tem mais de
                30 anos de experiência em regularização de águas subterrâneas.
              </p>

              <Card>
                <CardContent className="pt-6">
                  <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="nome" className="text-sm font-semibold">
                        Nome
                      </label>
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
                        <label htmlFor="email" className="text-sm font-semibold">
                          E-mail
                        </label>
                        <Input id="email" name="email" type="email" autoComplete="email" />
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
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
                          <option value="" disabled>
                            Selecione uma opção
                          </option>
                          <option>Residência</option>
                          <option>Condomínio</option>
                          <option>Empresa / Indústria</option>
                          <option>Sítio / Fazenda</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="situacao" className="text-sm font-semibold">
                          Qual a situação do poço?
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
                          <option>Já está perfurado e operando</option>
                          <option>Perfurado, mas sem uso</option>
                          <option>Vou perfurar ainda</option>
                          <option>Recebi notificação ou multa</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <Button type="submit" variant="gradient">
                        Enviar Mensagem aos Especialistas
                      </Button>
                    </div>
                    <p className="text-xs italic text-muted">
                      Atendimento realizado por geólogos e engenheiros devidamente registrados em
                      seus conselhos de classe (CREA/CRQ/CRM). Emissão de ART (Anotação de
                      Responsabilidade Técnica) em todos os processos.
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
