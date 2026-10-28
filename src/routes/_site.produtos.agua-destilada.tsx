import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Badge,
  Button,
  Card,
  CardContent,
  Input,
} from "@/design-system/cozy-code-library-1062b4";
import { Reveal } from "@/components/Reveal";
import contextPhoto1 from "@/assets/bombonas-agua-pura.jpg";
import contextPhoto2 from "@/assets/agua-pura-laboratorio-panorama.jpg";
import { ProductGrid } from "@/components/ProductSidebar";
import { QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["agua-destilada"];

const TITLE = "Água Destilada: Comprar Direto do Fabricante | Vid'Água";
const DESCRIPTION =
  "Buscando água destilada de alta pureza para laboratórios, autoclaves, baterias ou indústrias? Consulte nosso preço e compre galões e atacado com a Vid'Água.";

export const Route = createFileRoute("/_site/produtos/agua-destilada")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: AguaDestiladaPage,
});

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">{children}</h2>;
}

const inlineLink = "font-semibold text-accent underline-offset-4 hover:underline";

const aplicacoes = [
  {
    title: "Saúde e estética",
    body: "Uso obrigatório em autoclaves (esterilização de alicates e instrumentos médicos e odontológicos), evitando a formação de crostas e oxidação.",
  },
  {
    title: "Laboratórios e farmácias",
    body: "Preparo de reagentes, diluição de medicamentos, cosméticos e análises clínicas precisas.",
  },
  {
    title: "Uso automotivo e industrial",
    body: "Baterias de empilhadeiras e automóveis, radiadores, sistemas de arrefecimento e corte a laser.",
  },
  {
    title: "Limpeza de precisão",
    body: "Enxágue de placas de circuito impresso e vidrarias de laboratório sem deixar resíduos ou manchas.",
  },
];

const embalagens = [
  {
    title: "Galões / bombonas de 5 litros",
    body: "Ideal para clínicas de estética, consultórios odontológicos e pequenos usos.",
  },
  {
    title: "Bombonas de 20 ou 50 litros",
    body: "Para farmácias de manipulação, laboratórios de médio porte e oficinas.",
  },
  {
    title: "IBCs (1.000 litros) e granel",
    body: "Voltado para indústrias, fábricas de cosméticos e grandes linhas de produção.",
  },
];

function AguaDestiladaPage() {
  return (
    <>
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center">
              <img decoding="async" fetchPriority="high" src={contextPhoto1} alt="Bombonas fechadas para armazenamento de água pura" width={1024} height={1360} className="w-full h-auto rounded-md max-lg:aspect-video max-lg:object-cover" />
              <div className="flex flex-col gap-6">
                <div className="flex"><Badge>Produto</Badge></div>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Água Destilada: Pureza para os seus Processos Mais Exigentes
                </h1>
                <p className="leading-relaxed text-muted">
                  Quando o seu equipamento ou formulação exige um solvente universal completamente
                  livre de minerais, íons e impurezas, a qualidade da água não pode ser
                  negligenciada.
                </p>
                <p className="leading-relaxed text-muted">
                  A <strong className="text-foreground">água destilada</strong> fornecida pela
                  Vid&rsquo;Água passa por um rigoroso processo térmico de evaporação e condensação,
                  garantindo pureza extrema e condutividade praticamente nula. Atendemos clínicas,
                  laboratórios, farmácias de manipulação e indústrias que não podem abrir mão de
                  segurança e padronização.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={`#${QUOTE_ANCHOR}`}>
                    <Button variant="gradient">Solicitar Cotação / Preço</Button>
                  </a>
                  <a href="#embalagens">
                    <Button variant="outline">Ver opções de embalagem (galões e IBC)</Button>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ProductGrid currentSlug="agua-destilada">
        <div className="flex flex-col gap-20">
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Qualidade e processo
              </p>
              <H2>Por que a origem da sua água destilada importa?</H2>
              <p className="leading-relaxed text-muted">
                Muitos equipamentos caros, como autoclaves odontológicas e maquinários a laser, são
                danificados precocemente porque os usuários optam por comprar águas de origem
                duvidosa, muitas vezes vendidas em postos de combustível, que não passaram por uma
                destilação real.
              </p>
              <p className="leading-relaxed text-muted">
                Na Vid&rsquo;Água, nossa{" "}
                <strong className="text-foreground">água destilada</strong> é produzida sob rígido
                controle de qualidade em laboratório. O processo retira 100% dos sais minerais (como
                cálcio e magnésio), cloro, metais pesados e compostos orgânicos. O resultado é um
                produto inerte, estável, que protege a integridade das suas formulações e a vida
                útil dos seus equipamentos.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Aplicações
              </p>
              <H2>Versatilidade para diversos setores comerciais e industriais</H2>
              <p className="leading-relaxed text-muted">
                Devido ao seu alto grau de pureza, nosso produto é o insumo perfeito para:
              </p>

              <ul className="flex flex-col divide-y divide-border border-y border-border">
                {aplicacoes.map((a) => (
                  <li
                    key={a.title}
                    className="grid gap-2 py-6 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-8"
                  >
                    <p className="font-display text-lg font-semibold">{a.title}</p>
                    <p className="leading-relaxed text-muted">{a.body}</p>
                  </li>
                ))}
              </ul>

              <Card tone="soft">
                <CardContent className="pt-6">
                  <p className="text-sm italic leading-relaxed text-muted">
                    Nota técnica: se você precisa de altos volumes de água sem minerais de forma
                    contínua para sua caldeira ou fábrica, a instalação de um{" "}
                    <Link to="/produtos/desmineralizador-de-agua" className={inlineLink}>
                      desmineralizador de água
                    </Link>{" "}
                    próprio pode ser a solução mais econômica.
                  </p>
                </CardContent>
              </Card>

              <img decoding="async" loading="lazy" src={contextPhoto2} alt="Água destilada em vidrarias de laboratório, pronta para uso em análises" width={1152} height={768} className="w-full h-auto rounded-md" />
            </section>
          </Reveal>

          <Reveal>
            <section id="embalagens" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Fornecimento
              </p>
              <H2>Água destilada comprar: opções para o seu consumo</H2>
              <p className="leading-relaxed text-muted">
                Se você está buscando{" "}
                <strong className="text-foreground">água destilada comprar</strong> com constância e
                garantia de procedência, nós temos a estrutura logística para atender a sua demanda.
                Oferecemos nosso produto em diferentes apresentações para facilitar o armazenamento
                na sua empresa:
              </p>

              <ol className="flex flex-col gap-6">
                {embalagens.map((e, i) => (
                  <Reveal key={e.title} delay={i * 60}>
                    <li className="flex gap-6 border-t border-border pt-6">
                      <span className="font-display text-2xl font-bold text-accent">{i + 1}</span>
                      <div className="flex flex-col gap-2">
                        <p className="font-display text-lg font-semibold">{e.title}</p>
                        <p className="leading-relaxed text-muted">{e.body}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>

              <Card tone="gradientSoft">
                <CardContent className="flex flex-col gap-3 pt-6">
                  <p className="font-display text-lg font-semibold">
                    Água destilada preço: peça sua cotação
                  </p>
                  <p className="leading-relaxed">
                    O preço varia de acordo com o volume (litragem) solicitado e a frequência de
                    fornecimento. Clientes parceiros com contratos de fornecimento contínuo possuem
                    condições comerciais exclusivas. Comprando direto da Vid&rsquo;Água, você elimina
                    intermediários, reduz custos operacionais e garante um insumo com a garantia de
                    uma empresa com mais de 30 anos de expertise em águas.
                  </p>
                </CardContent>
              </Card>
            </section>
          </Reveal>

          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Garanta o seu estoque hoje mesmo</H2>
              <p className="leading-relaxed text-muted">
                Não arrisque seus equipamentos com produtos de qualidade inferior. Fale com a equipe
                comercial da Vid&rsquo;Água, informe a sua demanda mensal e receba uma cotação
                competitiva.
              </p>

              <Card>
                <CardContent className="pt-6">
                  <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="nome" className="text-sm font-semibold">
                        Nome / Empresa
                      </label>
                      <Input id="nome" name="nome" autoComplete="name" />
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
                          E-mail corporativo
                        </label>
                        <Input id="email" name="email" type="email" autoComplete="email" />
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="embalagem" className="text-sm font-semibold">
                          Qual embalagem atende melhor sua necessidade?
                        </label>
                        <select
                          id="embalagem"
                          name="embalagem"
                          defaultValue=""
                          className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                        >
                          <option value="" disabled>
                            Selecione uma opção
                          </option>
                          <option>Galões 5L</option>
                          <option>Bombonas 20L / 50L</option>
                          <option>IBC 1000L</option>
                          <option>Caminhão-pipa</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="volume" className="text-sm font-semibold">
                          Qual o volume estimado mensal?
                        </label>
                        <Input id="volume" name="volume" />
                      </div>
                    </div>
                    <div>
                      <Button type="submit" variant="gradient">
                        Solicitar Preço da Água Destilada
                      </Button>
                    </div>
                    <p className="text-xs italic text-muted">
                      Produto acompanha laudo de pureza e especificações técnicas de condutividade
                      mediante solicitação.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </section>
          </Reveal>
        </div>
      </ProductGrid>

      <CTASection />
      <WhatsAppFloat />
    </>
  );
}
