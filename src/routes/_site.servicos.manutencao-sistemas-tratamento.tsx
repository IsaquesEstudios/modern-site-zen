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
import contextPhoto1 from "@/assets/visita-tecnica-agua.jpg";
import contextPhoto2 from "@/assets/agua-cristalina-uso-panorama.jpg";
import { ServiceGrid, QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["manutencao-sistemas-tratamento"];

const TITLE = "Manutenção de Sistema de Tratamento de Água e Filtros | Vid'Água";
const DESCRIPTION =
  "Precisa reparar sistema de tratamento ou fazer a troca de filtro de água? A Vid'Água oferece manutenção e instalação de sistemas de filtração. Fale conosco!";

export const Route = createFileRoute("/_site/servicos/manutencao-sistemas-tratamento")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: ManutencaoSistemasTratamentoPage,
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

const servicos = [
  {
    title: "Instalação de sistema de filtração",
    body: "Comprou um equipamento e precisa de profissionais para instalá-lo com segurança e dentro das normas hidráulicas? Realizamos a montagem, o start-up e a regulagem inicial para que o sistema opere na pressão e vazão corretas.",
  },
  {
    title: "Troca de filtro de água (mídias e refis)",
    body: "Substituição completa dos elementos filtrantes internos dos cilindros (quartzo, zeólita, carvão ativado) e regeneração de resinas de troca iônica para equipamentos de água dura.",
  },
  {
    title: "Manutenção preventiva e corretiva",
    body: "Conserto de válvulas automáticas (cabeçotes), troca de peças danificadas, desentupimento de tubulações acopladas ao sistema e higienização de componentes.",
  },
  {
    title: "Calibração de dosadoras",
    body: "Regulagem minuciosa de equipamentos químicos para garantir que a dosagem de cloro e de corretores de pH fique dentro do ideal.",
  },
];

function ManutencaoSistemasTratamentoPage() {
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
                  Manutenção de Sistema de Tratamento de Água: Eficiência Contínua para sua Rede
                </h1>
                <p className="leading-relaxed text-muted">
                  Um equipamento de purificação de água trabalha incansavelmente todos os dias. Com o
                  tempo, é natural que as mídias filtrantes saturem, as válvulas precisem de ajustes
                  e as bombas exijam calibração. Ignorar esses sinais coloca em risco a qualidade da
                  água que você consome ou utiliza em seus processos.
                </p>
                <p className="leading-relaxed text-muted">
                  Se o seu equipamento parou, perdeu pressão ou a água voltou a apresentar problemas,
                  a Vid&rsquo;Água resolve. Somos especialistas em{" "}
                  <strong className="text-foreground">
                    manutenção de sistema de tratamento de água
                  </strong>{" "}
                  para residências, condomínios e indústrias.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={`#${QUOTE_ANCHOR}`}>
                    <Button variant="gradient">Solicitar Visita Técnica / Orçamento</Button>
                  </a>
                  <a href="#escopo">
                    <Button variant="outline">Conhecer nossos Serviços de Instalação</Button>
                  </a>
                </div>
              </div>
              <img decoding="async" fetchPriority="high" src={contextPhoto1} alt="Profissional com prancheta e frascos para acompanhamento da qualidade da água" width={1440} height={1088} className="w-full h-auto rounded-md" />
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceGrid currentSlug="manutencao-sistemas-tratamento">
        <div className="flex flex-col gap-20">
          {/* SEÇÃO 2 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                A importância da manutenção
              </p>
              <H2>Filtros não duram para sempre: o risco da saturação</H2>
              <p className="leading-relaxed text-muted">
                Muitas pessoas instalam um sistema robusto e acreditam que o problema da água está
                resolvido para o resto da vida. No entanto, todo filtro atua como uma barreira física
                ou química que retém impurezas. Quando essa barreira enche, a sujeira ou os metais
                passam direto para a sua torneira, deixando a água com cor e manchas.
              </p>
              <p className="leading-relaxed text-muted">
                Se você está notando diminuição na vazão da água, retorno de odores, água amarelada
                ou aumento de incrustações, é urgente{" "}
                <strong className="text-foreground">reparar o sistema de tratamento</strong>. Uma
                manutenção atrasada não apenas prejudica a qualidade da água, como pode causar o
                rompimento de cilindros, a queima de bombas e forçar a troca precoce do equipamento
                inteiro.
              </p>
              <img decoding="async" loading="lazy" src={contextPhoto2} alt="Água tratada e cristalina servida após a manutenção do sistema de tratamento" width={1152} height={768} className="w-full h-auto rounded-md" />
            </section>
          </Reveal>

          {/* SEÇÃO 3 */}
          <Reveal>
            <section id="escopo" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Escopo de serviços técnicos
              </p>
              <H2>Soluções completas: da instalação à troca de refil</H2>
              <p className="leading-relaxed text-muted">
                A engenharia da Vid&rsquo;Água domina o funcionamento de praticamente todas as
                tecnologias de purificação do mercado. Nosso escopo de atuação técnica inclui:
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {servicos.map((s, i) => (
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

          {/* SEÇÃO 4 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Quais sistemas atendemos
              </p>
              <H2>Expertise em diversas tecnologias hídricas</H2>
              <p className="leading-relaxed text-muted">
                Nossos mais de 30 anos de mercado nos capacitam a dar suporte aos mais diversos
                equipamentos, sejam eles projetados por nós ou por terceiros:
              </p>
              <ul className="flex flex-col gap-3">
                <Bullet>
                  <strong className="text-foreground">Filtros centrais e industriais:</strong>{" "}
                  retrolavagem e troca de leito filtrante para remoção de barro e areia.{" "}
                  <Link to="/produtos/filtros-de-agua" className={inlineLink}>
                    Veja nossos filtros de água
                  </Link>
                  .
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Sistemas para ferro e manganês:</strong>{" "}
                  substituição de mídias catalíticas desgastadas.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Abrandadores e desmineralizadores:</strong>{" "}
                  troca de resina catiônica e aniônica e manutenção no tanque de salmoura.{" "}
                  <Link to="/produtos/abrandador-de-agua" className={inlineLink}>
                    Saiba mais sobre abrandadores e desmineralizadores
                  </Link>
                  .
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Bombas dosadoras de cloro:</strong> limpeza de
                  injetores e substituição de mangueiras.{" "}
                  <Link to="/produtos/bomba-dosadora-cloro" className={inlineLink}>
                    Veja nossas bombas dosadoras
                  </Link>
                  .
                </Bullet>
              </ul>
            </section>
          </Reveal>

          {/* SEÇÃO 5 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Prevenção para empresas e condomínios
              </p>
              <H2>Não espere a água parar ou contaminar</H2>
              <p className="leading-relaxed text-muted">
                Para instalações comerciais, hospitais, hotéis e condomínios, uma falha no sistema de
                tratamento não é apenas um incômodo: é um risco sanitário e operacional grave.
              </p>
              <p className="leading-relaxed text-muted">
                A Vid&rsquo;Água oferece contratos de manutenção preventiva e{" "}
                <Link to="/servicos/monitoramento-qualidade-agua" className={inlineLink}>
                  monitoramento da qualidade da água
                </Link>
                . Nossos técnicos realizam visitas programadas para atestar o funcionamento dos
                equipamentos, realizar a{" "}
                <strong className="text-foreground">troca dos elementos filtrantes</strong> e a
                desinfecção no prazo correto, com emissão de laudos de calibração, garantindo tranquilidade 365 dias por ano.
              </p>
            </section>
          </Reveal>

          {/* SEÇÃO 6 — CTA final e formulário */}
          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Agende a manutenção do seu sistema de tratamento</H2>
              <p className="leading-relaxed text-muted">
                Pare de lidar com água de má qualidade por falta de manutenção. Fale com a equipe
                técnica da Vid&rsquo;Água e deixe que nossos especialistas cuidem da parte complexa.
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
                      <label htmlFor="servico" className="text-sm font-semibold">
                        Qual o serviço desejado?
                      </label>
                      <select
                        id="servico"
                        name="servico"
                        defaultValue=""
                        className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                      >
                        <option value="" disabled>
                          Selecione uma opção
                        </option>
                        <option>Manutenção e conserto</option>
                        <option>Troca de filtros / mídias</option>
                        <option>Instalação de equipamento novo</option>
                        <option>Contrato de manutenção preventiva</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="descricao" className="text-sm font-semibold">
                        Descreva brevemente o equipamento e o problema atual
                      </label>
                      <Textarea id="descricao" name="descricao" rows={3} />
                    </div>
                    <div>
                      <Button type="submit" variant="gradient">
                        Solicitar Orçamento de Manutenção
                      </Button>
                    </div>
                    <p className="text-xs italic text-muted">
                      Equipe técnica altamente capacitada com NR-33 e NR-35. Atendimento ágil para
                      residências, propriedades rurais, condomínios e complexos industriais.
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
