import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Badge,
  Button,
  Card,
  CardContent,
  Input,
  Textarea,
} from "@/design-system/cozy-code-library-1062b4";
import { Reveal } from "@/components/Reveal";
import contextPhoto1 from "@/assets/coleta-agua-campo.jpg";
import { ProductGrid } from "@/components/ProductSidebar";
import { QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";
import filtrosAsset from "@/assets/filtros-vidagua.png.asset.json";

const page = PAGES_BY_SLUG["bomba-dosadora-cloro"];

const TITLE = "Bomba Dosadora de Cloro: Orçamento e Dimensionamento | Vid'Água";
const DESCRIPTION =
  "Precisa comprar bomba dosadora de cloro? A Vid'Água dimensiona o equipamento exato para a vazão do seu projeto, condomínio ou indústria. Solicite um orçamento!";

export const Route = createFileRoute("/_site/produtos/bomba-dosadora-cloro")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: BombaDosadoraCloroPage,
});

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">{children}</h2>;
}

const inlineLink = "font-semibold text-accent underline-offset-4 hover:underline";

const fatores = [
  {
    title: "Vazão da água",
    body: "Quantos litros de água o seu poço artesiano ou a sua rede envia por hora? A bomba precisa acompanhar esse ritmo.",
  },
  {
    title: "Pressão da linha (mca)",
    body: "O equipamento precisa ter força suficiente para vencer a pressão da tubulação onde o cloro será injetado.",
  },
  {
    title: "Ponto de injeção",
    body: "A aplicação será feita direto na tubulação de recalque, na entrada do reservatório ou em uma linha industrial?",
  },
];

const aplicacoes = [
  {
    title: "Poços artesianos",
    body: "Cloração automática assim que a bomba do poço é acionada, garantindo água tratada direto na fonte.",
    to: "/produtos/bomba-dosadora-agua",
    linkLabel: "Conheça as bombas dosadoras de água",
  },
  {
    title: "Condomínios residenciais",
    body: "Manutenção do residual de cloro livre nas caixas d'água e cisternas, protegendo a saúde de centenas de moradores.",
  },
  {
    title: "Indústrias e frigoríficos",
    body: "Dosagem precisa para processos produtivos que exigem assepsia total, como lavagem de alimentos e superfícies.",
  },
  {
    title: "Tratamento complementar",
    body: "Pode ser usada não apenas para cloro, mas também para dosagem de flúor, corretores de pH e polímeros em sistemas maiores.",
  },
];

function BombaDosadoraCloroPage() {
  return (
    <>
      {/* SEÇÃO 1 — Hero */}
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center">
              <img decoding="async" fetchPriority="high"
                width={800} height={706} src={filtrosAsset.url}
                alt="Filtros e sistema de tratamento de água instalados pela Vid'Água"
                className="aspect-3/4 w-full rounded-md border border-border object-cover max-lg:aspect-video max-lg:object-cover"
              />
              <div className="flex flex-col gap-6">
                <Badge>Produto</Badge>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Bomba Dosadora de Cloro: Precisão Absoluta para a Desinfecção da sua Água
                </h1>
                <p className="leading-relaxed text-muted">
                  A cloração manual, jogando pastilhas ou cloro líquido diretamente na caixa
                  d&rsquo;água, é um método ultrapassado, perigoso e ineficiente. Para garantir a
                  potabilidade real e contínua da sua água, a automatização é obrigatória.
                </p>
                <p className="leading-relaxed text-muted">
                  A <strong className="text-foreground">bomba dosadora de cloro</strong> é o coração
                  de qualquer sistema de desinfecção profissional. Ela injeta a quantidade
                  milimétrica exata de hipoclorito de sódio na sua rede, garantindo que a água esteja
                  protegida contra bactérias e coliformes, em total conformidade com a Portaria 888
                  do Ministério da Saúde.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={`#${QUOTE_ANCHOR}`}>
                    <Button variant="gradient">Solicitar Dimensionamento e Orçamento</Button>
                  </a>
                  <a href="#equipamento">
                    <Button variant="outline">Entender como funciona o equipamento</Button>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ProductGrid currentSlug="bomba-dosadora-cloro">
        <div className="flex flex-col gap-20">
          {/* SEÇÃO 2 */}
          <Reveal>
            <section id="equipamento" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Educação do cliente
              </p>
              <H2>Por que não vendemos bombas de prateleira?</H2>
              <p className="leading-relaxed text-muted">
                Muitas pessoas chegam até nós buscando simplesmente uma{" "}
                <strong className="text-foreground">bomba dosadora cloro comprar</strong> com um
                clique, como se fosse um eletrodoméstico comum. No entanto, em engenharia hídrica,
                não existe &ldquo;tamanho único&rdquo;.
              </p>
              <p className="leading-relaxed text-muted">
                Instalar um equipamento subdimensionado deixará sua água vulnerável a{" "}
                <Link to="/contaminacao-agua" className={inlineLink}>
                  contaminações biológicas
                </Link>
                . Por outro lado, um equipamento superdimensionado injetará cloro em excesso, causando{" "}
                <Link to="/agua-turva-cheiro-cloro" className={inlineLink}>
                  água com cheiro forte
                </Link>
                , gosto ruim e até riscos de intoxicação e corrosão das tubulações.
              </p>
              <p className="leading-relaxed text-muted">
                O sucesso da desinfecção depende da precisão. É por isso que a equipe técnica da
                Vid&rsquo;Água não apenas vende o equipamento: nós projetamos a solução.
              </p>
            </section>
          </Reveal>

          {/* SEÇÃO 3 — lista numerada */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Preço e dimensionamento
              </p>
              <H2>Bomba dosadora cloro preço: como o seu orçamento é calculado?</H2>
              <p className="leading-relaxed text-muted">
                Se você está pesquisando o{" "}
                <strong className="text-foreground">bomba dosadora cloro preço</strong>, saiba que o
                valor final do equipamento é determinado exclusivamente pelas características únicas
                do seu sistema de abastecimento. Para fornecer um orçamento exato, nossa engenharia
                calcula os seguintes fatores do seu projeto:
              </p>

              <ol className="flex flex-col gap-6">
                {fatores.map((f, i) => (
                  <Reveal key={f.title} delay={i * 60}>
                    <li className="flex gap-6 border-t border-border pt-6">
                      <span className="font-display text-2xl font-bold text-accent">{i + 1}</span>
                      <div className="flex flex-col gap-2">
                        <p className="font-display text-lg font-semibold">{f.title}</p>
                        <p className="leading-relaxed text-muted">{f.body}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
                <Reveal delay={180}>
                  <li className="flex gap-6 border-t border-border pt-6">
                    <span className="font-display text-2xl font-bold text-accent">4</span>
                    <div className="flex flex-col gap-2">
                      <p className="font-display text-lg font-semibold">Demanda de cloro</p>
                      <p className="leading-relaxed text-muted">
                        Baseado na{" "}
                        <Link to="/servicos/analise-de-agua" className={inlineLink}>
                          análise da sua água
                        </Link>
                        , definimos qual a concentração de químicos necessária para eliminar os
                        patógenos presentes.
                      </p>
                    </div>
                  </li>
                </Reveal>
              </ol>

              <Card tone="gradientSoft">
                <CardContent className="pt-6">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Resultado:</strong> você recebe um orçamento
                    transparente, contendo a bomba com a capacidade ideal (litros/hora e pressão), os
                    acessórios de injeção corretos e a garantia de funcionamento perfeito.
                  </p>
                </CardContent>
              </Card>
            </section>
          </Reveal>

          {/* SEÇÃO 4 — aplicações em linhas */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Aplicações e segurança
              </p>
              <H2>Onde a bomba dosadora de cloro é indispensável?</H2>
              <p className="leading-relaxed text-muted">
                Nossos equipamentos de dosagem eletromagnética e peristáltica são projetados para
                operação contínua e pesada, atendendo a diversas demandas:
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

              <Card tone="soft">
                <CardContent className="pt-6">
                  <p className="text-sm italic leading-relaxed text-muted">
                    Nota técnica: além de fornecer o equipamento, a Vid&rsquo;Água também oferece
                    serviços de{" "}
                    <Link to="/servicos/monitoramento-qualidade-agua" className={inlineLink}>
                      Monitoramento da Qualidade da Água
                    </Link>
                    , onde assumimos a responsabilidade pela calibração mensal da sua bomba e
                    reposição dos produtos químicos.
                  </p>
                </CardContent>
              </Card>

              <img decoding="async" loading="lazy" src={contextPhoto1} alt="Coleta de amostra para conferir o nível de cloro na água tratada" width={1440} height={1088} className="w-full h-auto rounded-md" />
            </section>
          </Reveal>

          {/* SEÇÃO 5 — CTA final e cotação técnica */}
          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Encontre a bomba dosadora exata para o seu projeto</H2>
              <p className="leading-relaxed text-muted">
                Não brinque com a qualidade da água. Fale com os especialistas da Vid&rsquo;Água,
                informe os dados básicos do seu sistema e receba uma proposta técnica e comercial sob
                medida, com os melhores equipamentos do mercado.
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
                          <option>Poço Artesiano</option>
                          <option>Rede Pública</option>
                          <option>Captação Superficial</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="vazao" className="text-sm font-semibold">
                          Vazão estimada da sua bomba de água (se souber)
                        </label>
                        <Input id="vazao" name="vazao" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="instalacao" className="text-sm font-semibold">
                        Descreva onde o equipamento será instalado
                      </label>
                      <Textarea id="instalacao" name="instalacao" rows={3} />
                    </div>
                    <div>
                      <Button type="submit" variant="gradient">
                        Solicitar Preço e Dimensionamento da Bomba
                      </Button>
                    </div>
                    <p className="text-xs italic text-muted">
                      Enviamos equipamentos para todo o Brasil, acompanhados de manual de instalação
                      e suporte remoto da nossa equipe de engenharia para o start-up.
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
