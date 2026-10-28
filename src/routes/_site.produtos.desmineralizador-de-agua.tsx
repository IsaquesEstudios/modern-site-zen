import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Badge,
  Button,
  Card,
  CardContent,
  Input,
} from "@/design-system/cozy-code-library-1062b4";
import { Reveal } from "@/components/Reveal";
import contextPhoto1 from "@/assets/agua-pura-laboratorio.jpg";
import contextPhoto2 from "@/assets/agua-contexto-industrial.jpg";
import { ProductGrid } from "@/components/ProductSidebar";
import { QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["desmineralizador-de-agua"];

const TITLE = "Desmineralizador de Água: Resina Troca Iônica | Vid'Água";
const DESCRIPTION =
  "Precisa de água de altíssima pureza? Conheça nosso desmineralizador de água industrial com resina de troca iônica. Solicite um orçamento e projeto sob medida!";

export const Route = createFileRoute("/_site/produtos/desmineralizador-de-agua")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: DesmineralizadorDeAguaPage,
});

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">{children}</h2>;
}

const inlineLink = "font-semibold text-accent underline-offset-4 hover:underline";

const etapas = [
  {
    title: "Fase catiônica",
    body: "A água passa por uma resina que captura os íons positivos (cátions, como cálcio e sódio) e libera íons de hidrogênio (H+).",
  },
  {
    title: "Fase aniônica",
    body: "Em seguida, a água passa por outra resina que captura os íons negativos (ânions, como cloretos e sulfatos) e libera íons hidroxila (OH-).",
  },
  {
    title: "O resultado",
    body: "Os íons H+ e OH- se unem, formando H2O pura. O resultado final é uma água desmineralizada de excelente qualidade, essencial para processos que não toleram interferências químicas.",
  },
];

const aplicacoes = [
  {
    title: "Caldeiras e torres de resfriamento",
    body: "Evita a formação de incrustações severas e corrosão, prolongando a vida útil dos equipamentos e prevenindo acidentes.",
  },
  {
    title: "Indústria farmacêutica e cosmética",
    body: "Água pura como solvente ou matéria-prima, garantindo a estabilidade e a qualidade das fórmulas.",
  },
  {
    title: "Laboratórios e análises clínicas",
    body: "Fundamental para o preparo de reagentes e funcionamento de equipamentos sensíveis que exigem condutividade zerada.",
  },
  {
    title: "Processos industriais específicos",
    body: "Banhos galvânicos (zincagem, cromagem), fabricação de espelhos, baterias, lavagem de placas eletrônicas e até ferros a vapor industriais.",
  },
];

const fatores = [
  "A qualidade da água bruta de entrada (condutividade e concentração de íons).",
  "O grau de pureza exigido pelo seu processo final.",
  "A vazão necessária (litros por hora) e o tempo de operação contínua.",
];

function DesmineralizadorDeAguaPage() {
  return (
    <>
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center">
              <img decoding="async" fetchPriority="high" src={contextPhoto1} alt="Vidrarias com água desmineralizada em bancada de laboratório" width={1024} height={1360} className="w-full h-auto rounded-md max-lg:aspect-video max-lg:object-cover" />
              <div className="flex flex-col gap-6">
                <Badge>Produto</Badge>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Desmineralizador de Água: Pureza para Processos Críticos
                </h1>
                <p className="leading-relaxed text-muted">
                  Quando a sua operação exige uma água quimicamente pura, livre de sais e minerais
                  que interferem em reações ou danificam equipamentos, a filtração comum não é
                  suficiente. Você precisa de tecnologia em nível molecular.
                </p>
                <p className="leading-relaxed text-muted">
                  O <strong className="text-foreground">desmineralizador de água</strong> da
                  Vid&rsquo;Água é projetado para entregar água com condutividade próxima a zero.
                  Utilizando a avançada tecnologia de{" "}
                  <strong className="text-foreground">resina de troca iônica</strong>, nossos
                  sistemas removem cátions e ânions com precisão, atendendo às mais rigorosas
                  exigências de laboratórios, indústrias e processos de alta performance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={`#${QUOTE_ANCHOR}`}>
                    <Button variant="gradient">Solicitar Dimensionamento e Preço</Button>
                  </a>
                  <a href="#tecnologia">
                    <Button variant="outline">Entender como funciona a tecnologia</Button>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ProductGrid currentSlug="desmineralizador-de-agua">
        <div className="flex flex-col gap-20">
          <Reveal>
            <section id="tecnologia" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Educação técnica
              </p>
              <H2>Muito além da filtração: a ação da resina de troca iônica</H2>
              <p className="leading-relaxed text-muted">
                Filtros de carvão ou areia removem partículas sólidas e cloro, mas os minerais (como
                cálcio, magnésio, cloretos e sulfatos) continuam dissolvidos na água. Para extraí-los,
                o desmineralizador atua através de um processo químico.
              </p>
              <p className="leading-relaxed text-muted">
                O sistema é composto por colunas preenchidas com resina de troca iônica. O processo
                geralmente ocorre em duas etapas (ou em leito misto):
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
            </section>
          </Reveal>

          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Aplicações
              </p>
              <H2>Essencial para a indústria e laboratórios</H2>
              <p className="leading-relaxed text-muted">
                O uso de <strong className="text-foreground">água desmineralizada</strong> é um
                requisito técnico inegociável em diversos setores, pois a presença de minerais pode
                arruinar produtos finais ou causar prejuízos catastróficos em maquinários. Nossos
                sistemas atendem perfeitamente a demandas como:
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
                    Nota: se o seu objetivo é apenas remover cálcio e magnésio para evitar
                    entupimentos em tubulações, a solução ideal é o{" "}
                    <Link to="/produtos/abrandador-de-agua" className={inlineLink}>
                      abrandador de água
                    </Link>
                    .
                  </p>
                </CardContent>
              </Card>

              <img decoding="async" loading="lazy" src={contextPhoto2} alt="Ambiente industrial que utiliza água desmineralizada em seus processos" width={1536} height={1024} className="w-full h-auto rounded-md" />
            </section>
          </Reveal>

          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Preço e dimensionamento
              </p>
              <H2>Como é calculado o orçamento do seu desmineralizador?</H2>
              <p className="leading-relaxed text-muted">
                Diferente de um purificador doméstico, não existe um{" "}
                <strong className="text-foreground">desmineralizador de água</strong> universal, de
                prateleira. Comprar um equipamento genérico sem calcular a carga mineral da sua água
                resultará em saturação rápida das resinas e paralisação do seu processo.
              </p>
              <p className="leading-relaxed text-muted">
                Na Vid&rsquo;Água, o projeto é tratado com a seriedade que a engenharia exige. Para
                fornecer um orçamento transparente e a garantia de pureza contínua, nossa equipe
                avalia:
              </p>

              <ol className="flex flex-col gap-6">
                {fatores.map((f, i) => (
                  <Reveal key={f} delay={i * 60}>
                    <li className="flex gap-6 border-t border-border pt-6">
                      <span className="font-display text-2xl font-bold text-accent">{i + 1}</span>
                      <p className="leading-relaxed text-muted">
                        {f}
                        {i === 0 ? (
                          <>
                            {" "}
                            Muitas vezes diagnosticada através de uma{" "}
                            <Link to="/servicos/analise-de-agua" className={inlineLink}>
                              análise de água
                            </Link>
                            .
                          </>
                        ) : null}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ol>

              <Card tone="gradientSoft">
                <CardContent className="pt-6">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Resultado:</strong> com esses dados,
                    calculamos o volume exato de resina, o tamanho dos cilindros (ou a necessidade
                    de um sistema de leito misto) e o método de regeneração com ácido e soda,
                    garantindo o melhor custo total de propriedade para a sua empresa.
                  </p>
                </CardContent>
              </Card>
            </section>
          </Reveal>

          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Garanta a pureza que o seu processo exige</H2>
              <p className="leading-relaxed text-muted">
                A estabilidade da sua produção começa pela qualidade da água. Fale com os
                engenheiros da Vid&rsquo;Água e receba um projeto de desmineralização robusto,
                eficiente e totalmente alinhado às suas necessidades.
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
                    <div className="flex flex-col gap-2">
                      <label htmlFor="aplicacao" className="text-sm font-semibold">
                        Qual será a aplicação da água desmineralizada? (ex.: caldeira, laboratório,
                        galvanoplastia)
                      </label>
                      <Input id="aplicacao" name="aplicacao" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="vazao" className="text-sm font-semibold">
                          Qual a vazão estimada (litros/hora) que você precisa?
                        </label>
                        <Input id="vazao" name="vazao" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="origem" className="text-sm font-semibold">
                          Qual a origem da água que vai alimentar o sistema?
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
                          <option>Rede Pública</option>
                          <option>Poço Artesiano</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <Button type="submit" variant="gradient">
                        Solicitar Dimensionamento e Preço
                      </Button>
                    </div>
                    <p className="text-xs italic text-muted">
                      Atendimento corporativo em nível nacional. Equipamentos acompanham manuais
                      técnicos, e nossa equipe oferece suporte completo para instalação, start-up e
                      manutenção preventiva das resinas.
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
