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
import turvaLimpa from "@/assets/agua-turva-vs-limpa.jpg";
import turvaCausas from "@/assets/agua-turva-causas.jpg";
import { ServiceGrid, QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection, WHATSAPP_URL } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["agua-turva-cheiro-cloro"];

const TITLE = "Água com Cheiro, Turva ou com Cloro Forte: Tratamento | Vid'Água";
const DESCRIPTION =
  "Sofrendo com água turva, cheiro de esgoto ou gosto ruim? Descubra como eliminar impurezas e o excesso de cloro com os sistemas de filtração da Vid'Água.";

export const Route = createFileRoute("/_site/agua-turva-cheiro-cloro")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: AguaTurvaPage,
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

function AguaTurvaPage() {
  return (
    <>
      {/* SEÇÃO 1 — Hero */}
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
              <div className="flex flex-col gap-6">
                <Badge>Problema</Badge>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Água Turva, com Mau Cheiro ou Gosto de Cloro? Volte a ter água pura e cristalina
                </h1>
                <p className="leading-relaxed text-muted">
                  O momento de abrir a torneira ou entrar no chuveiro não deve causar repulsa. Se
                  você está lidando com uma <strong className="text-foreground">água turva</strong>{" "}
                  (com aspecto leitoso ou cor de barro), gosto ruim ou um cheiro insuportável, o seu
                  abastecimento está comprometido.
                </p>
                <p className="leading-relaxed text-muted">
                  Na Vid&rsquo;Água, sabemos que a qualidade da água impacta diretamente a sua
                  saúde, o sabor dos seus alimentos e o conforto do seu banho. Oferecemos sistemas
                  de filtração central e purificação avançada que eliminam definitivamente sólidos
                  em suspensão, matéria orgânica e odores desagradáveis da sua rede.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="gradient">Falar com um Especialista e Resolver Agora</Button>
                  </a>
                  <a href="#causas">
                    <Button variant="outline">Entender o que causa o mau cheiro na água</Button>
                  </a>
                </div>
              </div>
              <img decoding="async" fetchPriority="high" src={turvaLimpa} alt="Copo de água turva ao lado de copo de água limpa tratada" width={1200} height={912} className="w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceGrid>
        <div className="flex flex-col gap-20">
          {/* SEÇÃO 2 */}
          <Reveal>
            <section id="causas" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Desmistificando o problema
              </p>
              <H2>O grande mito: água com cloro forte NÃO é sinal de água limpa</H2>
              <p className="leading-relaxed text-muted">
                É muito comum acreditar que uma{" "}
                <strong className="text-foreground">água com cloro forte</strong> é sinônimo de água
                muito bem tratada. Na verdade, do ponto de vista químico, o oposto é real.
              </p>
              <p className="leading-relaxed text-muted">
                Aquele cheiro forte e incômodo de piscina nas torneiras geralmente ocorre quando o
                cloro reage com uma alta quantidade de matéria orgânica (sujeira) presente na água
                ou nas tubulações. Ou seja, o cheiro forte é o resultado da reação química — e não
                da limpeza em si — ou indica uma dosagem completamente desregulada no sistema de
                tratamento.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Água turva</CardTitle>
                    <CardDescription>
                      Causada por sólidos em suspensão: barro, lodo, areia fina ou resíduos de
                      tubulações antigas que se desprendem na rede pública ou são puxados pela bomba
                      do poço artesiano.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Água com cheiro de terra ou &ldquo;ovo podre&rdquo;</CardTitle>
                    <CardDescription>
                      Geralmente ligada à presença de algas, matéria orgânica em decomposição na
                      caixa d&rsquo;água ou a gases como o gás sulfídrico, comum em águas
                      subterrâneas.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <img decoding="async" loading="lazy" src={turvaCausas} alt="Barro em suspensão, matéria orgânica, cloro reagindo e gás sulfídrico na água" width={1600} height={704} className="w-full" />
            </section>
          </Reveal>

          {/* SEÇÃO 3 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Sintomas no dia a dia
              </p>
              <H2>O custo invisível de não tratar a sua água</H2>
              <p className="leading-relaxed text-muted">
                Conviver com esses problemas hídricos afeta toda a rotina da sua casa, condomínio ou
                indústria. O tratamento é urgente se você passa por situações como:
              </p>
              <ul className="flex flex-col gap-3">
                <Bullet>
                  <strong className="text-foreground">Banho desconfortável:</strong> tomar banho com
                  água com cloro forte resseca severamente a pele e os cabelos, podendo causar
                  alergias, coceiras e irritações respiratórias.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Sabor alterado:</strong> a água com cheiro ou
                  gosto residual altera o sabor de sucos, cafés e qualquer alimento cozido.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Filtros entupidos rapidamente:</strong> a água
                  turva satura em poucas semanas os refis dos purificadores de geladeira e da
                  cozinha, forçando trocas constantes.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Aspecto de sujeira constante:</strong> roupas
                  brancas que saem encardidas da máquina e fundos de caixa d&rsquo;água que acumulam
                  lodo escorregadio em pouco tempo.
                </Bullet>
              </ul>
            </section>
          </Reveal>

          {/* SEÇÃO 4 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Solução técnica
              </p>
              <H2>Como funciona o tratamento da água turva e a remoção de odores?</H2>
              <p className="leading-relaxed text-muted">
                Para resolver esse combo de problemas — sujeira, odores e cloro —, a Vid&rsquo;Água
                utiliza uma abordagem técnica de duas etapas, desenhada sob medida para a sua vazão:
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>1. Filtração física (para água turva)</CardTitle>
                    <CardDescription>
                      Filtro central na entrada da rede, preenchido com mídias de alta performance
                      (quartzo de diferentes granulometrias ou zeólita), retendo terra, barro e lodo
                      e deixando a água 100% transparente.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>2. Filtração adsortiva (para odores e cloro)</CardTitle>
                    <CardDescription>
                      Sistema com carvão ativado, altamente poroso, que adsorve o excesso de cloro,
                      remove toxinas e elimina odores e gostos desagradáveis.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <p className="leading-relaxed text-muted">
                <em>Nota técnica:</em> caso a origem do problema seja um poço artesiano sem
                cloração, nossa engenharia também instala{" "}
                <Link to="/produtos/bomba-dosadora-cloro" className={inlineLink}>
                  bombas dosadoras
                </Link>{" "}
                automáticas para garantir a desinfecção na medida exata.
              </p>
            </section>
          </Reveal>

          {/* SEÇÃO 5 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                O padrão Vid&rsquo;Água
              </p>
              <H2>Por que não comprar qualquer filtro de loja de construção?</H2>
              <p className="leading-relaxed text-muted">
                Filtros pequenos de celulose ou polipropileno (os famosos &ldquo;copinhos&rdquo;
                azuis ou brancos) saturam rápido demais se a sua água for muito turva, reduzindo a
                pressão nos chuveiros e exigindo manutenção quase mensal.
              </p>
              <p className="leading-relaxed text-muted">
                A Vid&rsquo;Água projeta sistemas de retrolavagem automática ou manual. Nossos
                cilindros (em PRFV ou inox) duram anos e o elemento filtrante pode ser lavado apenas
                invertendo o fluxo da água, expulsando a sujeira retida direto para o esgoto, sem a
                necessidade de comprar refis constantemente.
              </p>
            </section>
          </Reveal>

          {/* SEÇÃO 6 — CTA final e formulário */}
          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Beba e use água com confiança novamente</H2>
              <p className="leading-relaxed text-muted">
                Não comprometa a sua qualidade de vida com água de má qualidade. Fale com a equipe
                de engenharia da Vid&rsquo;Água e descubra o sistema de filtração perfeito para a
                sua casa ou empresa.
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
                        <label htmlFor="problema" className="text-sm font-semibold">
                          Qual o problema principal?
                        </label>
                        <select
                          id="problema"
                          name="problema"
                          defaultValue=""
                          className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                        >
                          <option value="" disabled>
                            Selecione uma opção
                          </option>
                          <option>Água turva / barro</option>
                          <option>Cheiro ruim</option>
                          <option>Excesso de cloro</option>
                          <option>Outro</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="local" className="text-sm font-semibold">
                          Onde será instalado?
                        </label>
                        <select
                          id="local"
                          name="local"
                          defaultValue=""
                          className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                        >
                          <option value="" disabled>
                            Selecione uma opção
                          </option>
                          <option>Casa</option>
                          <option>Condomínio</option>
                          <option>Empresa / Indústria</option>
                          <option>Sítio</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button type="submit" variant="gradient">
                        Solicitar Orçamento do Tratamento
                      </Button>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" type="button">
                          Falar no WhatsApp
                        </Button>
                      </a>
                    </div>
                    <p className="text-xs italic text-muted">
                      Atendimento especializado. Desenvolvemos filtros e estações de tratamento para
                      todas as vazões, com envio e instalação para todo o Brasil.
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
