import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Badge,
  Button,
  Card,
  CardContent,
  Input,
} from "@/design-system/cozy-code-library-1062b4";
import { Reveal } from "@/components/Reveal";
import contextPhoto1 from "@/assets/agua-cristalina-uso.jpg";
import contextPhoto2 from "@/assets/agua-conforto-dia-a-dia.jpg";
import { ProductGrid } from "@/components/ProductSidebar";
import { QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["abrandador-de-agua"];

const TITLE = "Abrandador de Água: Residencial e Industrial | Vid'Água";
const DESCRIPTION =
  "Precisa comprar abrandador de água? Acabe com o cálcio e magnésio (água dura) que entopem tubulações e caldeiras. Consulte o preço e solicite seu orçamento!";

export const Route = createFileRoute("/_site/produtos/abrandador-de-agua")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: AbrandadorDeAguaPage,
});

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">{children}</h2>;
}

const inlineLink = "font-semibold text-accent underline-offset-4 hover:underline";

const etapas = [
  {
    title: "A captura",
    body: "O cilindro é preenchido com uma resina catiônica especial. Quando a água rica em cálcio e magnésio passa por essa resina, ocorre uma atração iônica: a resina segura os minerais duros e libera sódio em pequenas quantidades, que não causa incrustações, entregando a água totalmente abrandada.",
  },
  {
    title: "A regeneração (retrolavagem)",
    body: "Com o tempo, a resina fica saturada. O próprio equipamento, através da válvula automática, puxa uma solução de água com sal (salmoura) do tanque anexo, lavando a resina e expulsando o cálcio direto para o esgoto. Depois disso, o sistema está pronto para um novo ciclo, garantindo anos de vida útil sem trocar a resina constantemente.",
  },
];

const aplicacoes = [
  {
    title: "Residências e condomínios",
    body: "Instalado na entrada da rede. Protege todas as tubulações contra entupimentos, aumenta a vida útil de aquecedores a gás e solares e de máquinas de lavar, e garante banhos muito mais confortáveis para a pele e o cabelo.",
  },
  {
    title: "Indústrias e hospitais",
    body: "O abrandamento é uma etapa obrigatória antes de enviar água para caldeiras e torres de resfriamento. Água dura em caldeiras gera isolamento térmico, perda de eficiência energética e risco iminente de explosão por superaquecimento.",
    to: "/servicos/tratamento-de-agua-industrial",
    linkLabel: "Conheça o tratamento de água industrial",
  },
];

function AbrandadorDeAguaPage() {
  return (
    <>
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center">
              <img decoding="async" fetchPriority="high" src={contextPhoto1} alt="Água limpa e sem calcário enchendo um copo na cozinha de casa" width={1024} height={1360} className="w-full h-auto rounded-md max-lg:aspect-video max-lg:object-cover" />
              <div className="flex flex-col gap-6">
                <div className="flex"><Badge>Produto</Badge></div>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Abrandador de Água: A Solução Perfeita Contra as Incrustações na sua Rede
                </h1>
                <p className="leading-relaxed text-muted">
                  Proteger o seu patrimônio hídrico contra minerais invisíveis exige tecnologia de
                  ponta. O acúmulo de cálcio e magnésio destrói tubulações, queima equipamentos
                  caros e anula a eficiência de produtos de limpeza, gerando prejuízos silenciosos e
                  constantes.
                </p>
                <p className="leading-relaxed text-muted">
                  O <strong className="text-foreground">abrandador de água</strong> é o equipamento
                  central projetado pela engenharia da Vid&rsquo;Água para erradicar esse problema
                  pela raiz. Utilizando tecnologia de troca iônica, nossos sistemas residenciais e
                  industriais removem a dureza da água, entregando um recurso 100% leve, seguro para
                  as suas tubulações e perfeito para os seus processos produtivos.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={`#${QUOTE_ANCHOR}`}>
                    <Button variant="gradient">Solicitar Dimensionamento do Abrandador</Button>
                  </a>
                  <a href="#tecnologia">
                    <Button variant="outline">Entender como funciona o equipamento</Button>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ProductGrid currentSlug="abrandador-de-agua">
        <div className="flex flex-col gap-20">
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                A conexão com o problema
              </p>
              <H2>Por que você precisa de um abrandador?</H2>
              <p className="leading-relaxed text-muted">
                Muitos clientes chegam até nós buscando filtros comuns porque estão com o chuveiro
                entupindo, crostas brancas nas torneiras ou porque o sabão não faz espuma. No
                entanto, filtros de carvão ou areia são inúteis contra esse problema.
              </p>
              <p className="leading-relaxed text-muted">
                Esses sintomas são causados pela chamada água dura. Como os minerais causadores
                (cálcio e magnésio) estão dissolvidos em nível molecular, eles não podem ser
                simplesmente peneirados: precisam ser quimicamente separados. É exatamente esse o
                papel do abrandador.
              </p>
              <Card tone="soft">
                <CardContent className="pt-6">
                  <p className="text-sm italic leading-relaxed text-muted">
                    Quer entender melhor os prejuízos causados por esse fenômeno?{" "}
                    <Link to="/agua-dura" className={inlineLink}>
                      Acesse nosso guia completo sobre água dura
                    </Link>
                    .
                  </p>
                </CardContent>
              </Card>
            </section>
          </Reveal>

          <Reveal>
            <section id="tecnologia" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Tecnologia e autoridade técnica
              </p>
              <H2>Como funciona a tecnologia de abrandamento?</H2>
              <p className="leading-relaxed text-muted">
                Os sistemas projetados pela Vid&rsquo;Água operam através de um processo
                automatizado de troca iônica. O equipamento é composto basicamente por um cilindro
                reforçado, uma válvula de controle (cabeçote) e um tanque de salmoura.
              </p>

              <ol className="flex flex-col gap-6">
                {etapas.map((e, i) => (
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

              <img decoding="async" loading="lazy" src={contextPhoto2} alt="Uso cotidiano de água para higiene das mãos" width={1536} height={1024} className="w-full h-auto rounded-md" />
            </section>
          </Reveal>

          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Preço e dimensionamento
              </p>
              <H2>Abrandador água preço: como não errar na compra?</H2>
              <p className="leading-relaxed text-muted">
                O maior risco ao pesquisar um{" "}
                <strong className="text-foreground">abrandador água comprar</strong> na internet é
                adquirir um equipamento subdimensionado. Se você comprar um abrandador genérico, a
                resina vai saturar antes do tempo previsto, a água dura vai vazar para a sua rede e
                o seu investimento terá sido em vão.
              </p>
              <p className="leading-relaxed text-muted">
                Por isso, na Vid&rsquo;Água, o{" "}
                <strong className="text-foreground">abrandador água preço</strong> é calculado de
                forma consultiva e personalizada. Nossa engenharia dimensiona o seu projeto com base
                em dois pilares fundamentais:
              </p>

              <ol className="flex flex-col gap-6">
                <Reveal>
                  <li className="flex gap-6 border-t border-border pt-6">
                    <span className="font-display text-2xl font-bold text-accent">1</span>
                    <div className="flex flex-col gap-2">
                      <p className="font-display text-lg font-semibold">
                        A dureza total da sua água (mg/L)
                      </p>
                      <p className="leading-relaxed text-muted">
                        Diagnosticada através de uma{" "}
                        <Link to="/servicos/analise-de-agua" className={inlineLink}>
                          análise de água laboratorial
                        </Link>
                        .
                      </p>
                    </div>
                  </li>
                </Reveal>
                <Reveal delay={60}>
                  <li className="flex gap-6 border-t border-border pt-6">
                    <span className="font-display text-2xl font-bold text-accent">2</span>
                    <div className="flex flex-col gap-2">
                      <p className="font-display text-lg font-semibold">O consumo diário</p>
                      <p className="leading-relaxed text-muted">
                        Quantos mil litros sua residência, condomínio ou indústria consome por dia
                        ou por hora (vazão).
                      </p>
                    </div>
                  </li>
                </Reveal>
              </ol>

              <Card tone="gradientSoft">
                <CardContent className="pt-6">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Resultado:</strong> com esses dados,
                    calculamos o volume exato de resina e o tamanho do cilindro ideal, entregando um
                    orçamento técnico transparente e a certeza de que o equipamento funcionará com
                    perfeição.
                  </p>
                </CardContent>
              </Card>
            </section>
          </Reveal>

          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Aplicações
              </p>
              <H2>Proteção para todos os cenários</H2>
              <p className="leading-relaxed text-muted">
                Nossa linha abrange desde sistemas compactos até montagens (skids) pesadas em
                paralelo:
              </p>

              <ul className="flex flex-col divide-y divide-border border-y border-border">
                {aplicacoes.map((a) => (
                  <li
                    key={a.title}
                    className="grid gap-2 py-6 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-8"
                  >
                    <p className="font-display text-lg font-semibold">{a.title}</p>
                    <p className="leading-relaxed text-muted">
                      {a.body}
                      {a.to ? (
                        <>
                          {" "}
                          <Link to={a.to} className={inlineLink}>
                            {a.linkLabel}
                          </Link>
                          .
                        </>
                      ) : null}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Acabe com a incrustação hoje mesmo</H2>
              <p className="leading-relaxed text-muted">
                Proteja seu patrimônio hidráulico e evite manutenções caríssimas. Fale com os
                especialistas da Vid&rsquo;Água e receba o projeto do abrandador ideal para a sua
                vazão.
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
                          E-mail
                        </label>
                        <Input id="email" name="email" type="email" autoComplete="email" />
                      </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="perfil" className="text-sm font-semibold">
                          Qual o perfil da instalação?
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
                          <option>Residencial</option>
                          <option>Condomínio</option>
                          <option>Indústria</option>
                          <option>Hotel</option>
                          <option>Sítio / Poço</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="analise" className="text-sm font-semibold">
                          Já tem análise da água (sabe o nível de dureza)?
                        </label>
                        <select
                          id="analise"
                          name="analise"
                          defaultValue=""
                          className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                        >
                          <option value="" disabled>
                            Selecione uma opção
                          </option>
                          <option>Sim</option>
                          <option>Não</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="vazao" className="text-sm font-semibold">
                        Qual a vazão estimada por dia ou por hora? (se souber)
                      </label>
                      <Input id="vazao" name="vazao" />
                    </div>
                    <div>
                      <Button type="submit" variant="gradient">
                        Solicitar Dimensionamento e Preço
                      </Button>
                    </div>
                    <p className="text-xs italic text-muted">
                      Atendemos em todo o Brasil. Sistemas completos: incluem cilindro em PRFV,
                      resina catiônica, válvula, tanque de salmoura e manual técnico. Suporte
                      especializado da nossa engenharia.
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
