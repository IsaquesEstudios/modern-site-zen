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
import ferroHero from "@/assets/ferro-agua-amarela.jpg";
import ferroCausas from "@/assets/ferro-oxidacao-causas.jpg";
import { ServiceGrid, QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection, WHATSAPP_URL } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["agua-com-ferro-manganes"];

const TITLE = "Água com Ferro e Manganês: Filtros e Tratamento | Vid'Água";
const DESCRIPTION =
  "Sua água está amarela, enferrujada ou com gosto metálico? Descubra como remover ferro e manganês da água do seu poço ou rede com as soluções da Vid'Água.";

export const Route = createFileRoute("/_site/agua-com-ferro-manganes")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: FerroManganesPage,
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

function FerroManganesPage() {
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
                  Água Amarela ou Enferrujada? Entenda o problema e veja a solução definitiva
                </h1>
                <p className="leading-relaxed text-muted">
                  Você abriu a torneira e notou a{" "}
                  <strong className="text-foreground">água amarela</strong>, com manchas escuras,
                  tom amarronzado ou um forte cheiro metálico? Estes são os sinais mais claros da
                  presença de metais na sua rede de abastecimento ou poço artesiano.
                </p>
                <p className="leading-relaxed text-muted">
                  A água com ferro e manganês não apenas causa repulsa visual e mau gosto, mas
                  também é uma das maiores causadoras de prejuízos em roupas, tubulações e
                  equipamentos industriais. A Vid&rsquo;Água possui a tecnologia de filtração exata
                  para oxidar e remover esses metais, devolvendo a cristalinidade e a pureza à sua
                  água.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="gradient">Falar com um Especialista e Resolver Agora</Button>
                  </a>
                  <a href="#causas">
                    <Button variant="outline">Entender as causas da água amarela</Button>
                  </a>
                </div>
              </div>
              <img decoding="async" fetchPriority="high" src={ferroHero} alt="Torneira enchendo copo com água amarelada por ferro e manganês" width={1200} height={912} className="w-full max-lg:aspect-video max-lg:object-cover" />
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
                Entendendo as causas
              </p>
              <H2>Afinal, de onde vêm o ferro e o manganês?</H2>
              <p className="leading-relaxed text-muted">
                Muitas pessoas se assustam ao ver a{" "}
                <strong className="text-foreground">água enferrujada</strong> saindo pelo chuveiro e
                acham que a caixa d&rsquo;água está suja, mas a raiz do problema quase sempre está na
                própria captação ou na tubulação. Existem duas causas principais:
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Tubulações antigas (rede pública)</CardTitle>
                    <CardDescription>
                      Em algumas regiões, a água da concessionária pode arrastar resíduos de
                      tubulações de ferro fundido muito antigas ou sem manutenção até a sua casa.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Poços artesianos (a causa nº 1)</CardTitle>
                    <CardDescription>
                      A água subterrânea dissolve ferro e manganês das rochas. Ao ser bombeada e
                      entrar em contato com oxigênio ou cloro, esses metais oxidam quase
                      instantaneamente, colorindo a água.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <img decoding="async" loading="lazy" src={ferroCausas} alt="Ilustração da oxidação do ferro e manganês da água do poço e de tubulações antigas" width={1600} height={704} className="w-full" />
            </section>
          </Reveal>

          {/* SEÇÃO 3 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Sintomas e prejuízos
              </p>
              <H2>Os prejuízos ocultos de não tratar a água</H2>
              <p className="leading-relaxed text-muted">
                Ignorar a presença desses metais vai muito além da estética. Se você precisa de um
                tratamento para água amarela, provavelmente já está enfrentando alguns destes
                transtornos:
              </p>
              <ul className="flex flex-col gap-3">
                <Bullet>
                  <strong className="text-foreground">Manchas impossíveis de tirar:</strong> roupas
                  brancas, louças sanitárias, pias e azulejos ficam com manchas amareladas,
                  alaranjadas ou pretas.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Sabor e odor metálico:</strong> a água fica
                  imprópria para o consumo, alterando o gosto de alimentos e do café, além de
                  apresentar cheiro forte de &ldquo;ferro&rdquo;.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Danos em tubulações e poços:</strong> o
                  acúmulo desses metais cria um lodo ferruginoso que entope canos, queima
                  resistências e pode destruir as bombas submersas do seu poço artesiano.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Risco industrial:</strong> a presença de ferro
                  compromete a qualidade do produto final (como nas indústrias têxtil e de
                  alimentos) e causa danos catastróficos em caldeiras e torres de resfriamento.
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
              <H2>O filtro comum não funciona. Veja como remover ferro e manganês da água</H2>
              <p className="leading-relaxed text-muted">
                A tentativa de usar filtros comuns de carvão, areia simples ou vela de cerâmica para
                reter esses metais é um erro que custa caro. Eles saturam rapidamente e não resolvem
                o problema. Para remover ferro e manganês de poço ou de rede com eficiência, a
                Vid&rsquo;Água utiliza sistemas de filtração catalítica, em duas etapas:
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>1. Oxidação</CardTitle>
                    <CardDescription>
                      O ferro e o manganês dissolvidos (invisíveis) são forçados a reagir com
                      oxigênio ou cloro, transformando-se em partículas sólidas.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>2. Filtração específica</CardTitle>
                    <CardDescription>
                      Mídias catalíticas especiais (como Zeólita e Birm) capturam as partículas de
                      metal. Uma válvula automática limpa o filtro, jogando a ferrugem retida direto
                      para o esgoto.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <Card tone="soft">
                <CardHeader>
                  <CardTitle>Água de poço amarelada ou com gosto metálico?</CardTitle>
                  <CardDescription>
                    É sinal de ferro e manganês. Tratamos a água do seu poço com filtração adequada.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/servicos/manutencao-poco-artesiano">
                    <Button variant="outline">Conhecer o Tratamento de Água de Poço</Button>
                  </Link>
                </CardContent>
              </Card>
            </section>
          </Reveal>

          {/* SEÇÃO 5 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                O processo Vid&rsquo;Água
              </p>
              <H2>Como projetamos o sistema ideal para você?</H2>
              <p className="leading-relaxed text-muted">
                O segredo para remover manganês e ferro de forma definitiva é o dimensionamento
                correto. A Vid&rsquo;Água segue um protocolo de engenharia seguro:
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>1. Análise da água</CardTitle>
                    <CardDescription>
                      Verificamos em laboratório a concentração exata de ferro, manganês e o nível de
                      pH da sua água.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/servicos/analise-de-agua" className={inlineLink}>
                      Ver o serviço de análise
                    </Link>
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>2. Projeto sob medida</CardTitle>
                    <CardDescription>
                      Escolhemos a mídia filtrante correta e dimensionamos o cilindro com base no seu
                      consumo diário — residência, condomínio ou indústria.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>3. Instalação e suporte</CardTitle>
                    <CardDescription>
                      Instalamos o sistema completo e automatizado, garantindo água pura em todas as
                      torneiras sem limpezas manuais complexas.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </section>
          </Reveal>

          {/* SEÇÃO 6 — CTA final e formulário */}
          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Pare de perder roupas e equipamentos hoje mesmo</H2>
              <p className="leading-relaxed text-muted">
                A água da sua casa ou empresa precisa ser sinônimo de limpeza, não de dor de cabeça.
                Fale com a equipe técnica da Vid&rsquo;Água e receba o orçamento do sistema de
                filtração exato para o seu caso.
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
                    <div className="flex flex-col gap-2">
                      <label htmlFor="origem" className="text-sm font-semibold">
                        Qual a origem da água?
                      </label>
                      <select
                        id="origem"
                        name="origem"
                        defaultValue=""
                        className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                      >
                        <option value="" disabled>
                          Selecione uma opção
                        </option>
                        <option>Poço artesiano</option>
                        <option>Rede pública</option>
                        <option>Outro</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="problema" className="text-sm font-semibold">
                        Descreva o problema (ex: água amarelada, gosto ruim, manchas)
                      </label>
                      <Textarea id="problema" name="problema" rows={4} />
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button type="submit" variant="gradient">
                        Solicitar Orçamento de Filtro para Ferro
                      </Button>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" type="button">
                          Falar no WhatsApp
                        </Button>
                      </a>
                    </div>
                    <p className="text-xs italic text-muted">
                      Atendimento especializado. Nossa engenharia desenvolve sistemas para
                      residências, propriedades rurais, condomínios e indústrias em todo o Brasil.
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
