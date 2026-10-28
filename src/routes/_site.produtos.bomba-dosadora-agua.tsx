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
import contextPhoto1 from "@/assets/insumos-tratamento-agua.jpg";
import contextPhoto2 from "@/assets/agua-contexto-industrial.jpg";
import { ProductGrid } from "@/components/ProductSidebar";
import { QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["bomba-dosadora-agua"];

const TITLE = "Bomba Dosadora de Água: Industrial e Tratamento | Vid'Água";
const DESCRIPTION =
  "Buscando bomba dosadora de água? Especialistas em bomba dosadora industrial para produtos químicos e tratamento hídrico. Consulte o preço e solicite orçamento!";

export const Route = createFileRoute("/_site/produtos/bomba-dosadora-agua")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: BombaDosadoraAguaPage,
});

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">{children}</h2>;
}

const inlineLink = "font-semibold text-accent underline-offset-4 hover:underline";

const fatores = [
  {
    title: "Vazão de injeção (litros/hora)",
    body: "A capacidade que a bomba precisa ter para acompanhar o volume de água da sua rede.",
  },
  {
    title: "Pressão de trabalho (mca/bar)",
    body: "A bomba deve ter força suficiente para vencer a pressão da tubulação no exato ponto onde a injeção do produto será feita.",
  },
  {
    title: "Compatibilidade química",
    body: "O cabeçote da bomba, as válvulas e as mangueiras devem ser fabricados com materiais específicos (como PVDF, PTFE, Viton) resistentes ao produto químico que será dosado.",
  },
];

const aplicacoes = [
  {
    title: "Torres de resfriamento e caldeiras",
    body: "Dosagem precisa de biocidas, anticorrosivos e anti-incrustantes para proteger maquinários de alto custo contra desgastes.",
  },
  {
    title: "Estações de tratamento (ETA e ETE)",
    body: "Injeção de polímeros, floculantes e coagulantes (como sulfato de alumínio ou PAC) para separação de impurezas.",
    to: "/servicos/tratamento-efluentes",
    linkLabel: "Conheça o tratamento de efluentes",
  },
  {
    title: "Indústria alimentícia e farmacêutica",
    body: "Dosagens sanitárias em processos produtivos onde a assepsia e a repetibilidade da receita são inegociáveis.",
  },
  {
    title: "Correção de pH",
    body: "Dosagem automática de barrilha leve, soda cáustica ou ácidos para neutralizar o pH de efluentes industriais antes do descarte.",
    to: "/produtos/produtos-quimicos-agua",
    linkLabel: "Veja nossos produtos químicos",
  },
];

function BombaDosadoraAguaPage() {
  return (
    <>
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center">
              <img decoding="async" fetchPriority="high" src={contextPhoto1} alt="Recipientes de produtos para dosagem conferidos em área de armazenamento" width={1024} height={1360} className="w-full h-auto rounded-md max-lg:aspect-video max-lg:object-cover" />
              <div className="flex flex-col gap-6">
                <div className="flex"><Badge>Produto</Badge></div>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Bomba Dosadora de Água: Precisão para o seu Tratamento Hídrico
                </h1>
                <p className="leading-relaxed text-muted">
                  A automação é o segredo para uma água de qualidade constante e segura. Seja para
                  desinfecção, correção de pH ou processos industriais complexos, a precisão no
                  tratamento químico evita desperdícios e garante a total conformidade com as normas
                  sanitárias e operacionais.
                </p>
                <p className="leading-relaxed text-muted">
                  A <strong className="text-foreground">bomba dosadora de água</strong> é o
                  equipamento essencial para injetar a quantidade exata de produtos líquidos na sua
                  rede de abastecimento ou linha de produção. Na Vid&rsquo;Água, oferecemos
                  tecnologias de dosagem (eletromagnéticas, motorizadas e peristálticas) de alta
                  performance para garantir a excelência da sua operação.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={`#${QUOTE_ANCHOR}`}>
                    <Button variant="gradient">Solicitar Orçamento e Dimensionamento</Button>
                  </a>
                  <a href="#dosagem">
                    <Button variant="outline">Entender a importância da dosagem automática</Button>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ProductGrid currentSlug="bomba-dosadora-agua">
        <div className="flex flex-col gap-20">
          <Reveal>
            <section id="dosagem" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                A importância da dosagem exata
              </p>
              <H2>Por que o controle químico manual é um risco?</H2>
              <p className="leading-relaxed text-muted">
                Muitos sistemas ainda dependem da adição manual ou de métodos rústicos para aplicar
                produtos químicos nas caixas d&rsquo;água. Além de ser uma prática ultrapassada, ela
                gera picos perigosos de superdosagem e momentos de subdosagem, colocando em risco a
                saúde humana, alterando o sabor da água e acelerando a corrosão das tubulações.
              </p>
              <p className="leading-relaxed text-muted">
                Com uma <strong className="text-foreground">bomba dosadora de água</strong>, o
                processo se torna contínuo e proporcional. O equipamento injeta a gota exata do
                produto necessário (como{" "}
                <Link to="/produtos/produtos-quimicos-agua" className={inlineLink}>
                  hipoclorito de sódio
                </Link>
                , flúor, alcalinizantes ou coagulantes), mantendo a estabilidade físico-química da
                água 24 horas por dia, de forma 100% automatizada.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Preço e dimensionamento
              </p>
              <H2>Bomba dosadora água preço: o que compõe o seu investimento?</H2>
              <p className="leading-relaxed text-muted">
                Se você está buscando o{" "}
                <strong className="text-foreground">bomba dosadora água preço</strong>, é
                fundamental entender que o valor do equipamento não é tabelado, pois varia de acordo
                com as exigências técnicas exclusivas do seu sistema. Comprar uma bomba genérica na
                internet é a receita certa para falhas rápidas e vazamentos químicos.
              </p>
              <p className="leading-relaxed text-muted">
                Para que a engenharia da Vid&rsquo;Água forneça o orçamento exato, avaliamos três
                fatores cruciais:
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
              </ol>

              <Card tone="gradientSoft">
                <CardContent className="pt-6">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Resultado:</strong> você recebe um orçamento
                    transparente e a garantia de investir no equipamento perfeitamente dimensionado
                    para a sua realidade.
                  </p>
                </CardContent>
              </Card>
            </section>
          </Reveal>

          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Soluções industriais e corporativas
              </p>
              <H2>Robustez extrema: a bomba dosadora industrial</H2>
              <p className="leading-relaxed text-muted">
                Enquanto residências e condomínios utilizam bombas de menor vazão, o setor
                corporativo apresenta desafios agressivos. A{" "}
                <strong className="text-foreground">bomba dosadora industrial</strong> comercializada
                pela Vid&rsquo;Água é projetada para ciclos de trabalho pesado (heavy duty) e
                operação ininterrupta.
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
                    Nota técnica: para desinfecção específica com hipoclorito, conheça também a{" "}
                    <Link to="/produtos/bomba-dosadora-cloro" className={inlineLink}>
                      bomba dosadora de cloro
                    </Link>
                    , dimensionada exclusivamente para cloração de poços, condomínios e indústrias.
                  </p>
                </CardContent>
              </Card>

              <img decoding="async" loading="lazy" src={contextPhoto2} alt="Ambiente industrial com áreas verdes e profissional em visita" width={1536} height={1024} className="w-full h-auto rounded-md" />
            </section>
          </Reveal>

          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Encontre a dosadora ideal para o seu processo</H2>
              <p className="leading-relaxed text-muted">
                A eficiência do seu tratamento químico começa com o equipamento certo. Fale com a
                equipe de engenharia da Vid&rsquo;Água, explique a sua demanda e receba uma proposta
                técnica e comercial sob medida.
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
                      <label htmlFor="produto" className="text-sm font-semibold">
                        Qual produto químico será dosado? (ex.: cloro, flúor, coagulante, ácido)
                      </label>
                      <Input id="produto" name="produto" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="aplicacao" className="text-sm font-semibold">
                          Onde será a aplicação principal?
                        </label>
                        <select
                          id="aplicacao"
                          name="aplicacao"
                          defaultValue=""
                          className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                        >
                          <option value="" disabled>
                            Selecione uma opção
                          </option>
                          <option>Residência / Condomínio</option>
                          <option>Indústria / Fábrica</option>
                          <option>Poço Artesiano</option>
                          <option>ETA / ETE</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="vazao" className="text-sm font-semibold">
                          Qual a vazão ou pressão da linha? (se souber)
                        </label>
                        <Input id="vazao" name="vazao" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="detalhes" className="text-sm font-semibold">
                        Detalhes adicionais do projeto
                      </label>
                      <Textarea id="detalhes" name="detalhes" rows={3} />
                    </div>
                    <div>
                      <Button type="submit" variant="gradient">
                        Solicitar Preço e Dimensionamento da Bomba
                      </Button>
                    </div>
                    <p className="text-xs italic text-muted">
                      Enviamos equipamentos para todo o Brasil. Todos os produtos acompanham manual
                      de instalação, válvula de injeção, filtro de sucção e suporte técnico remoto
                      da nossa equipe para o start-up.
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
