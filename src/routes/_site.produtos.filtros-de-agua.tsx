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

const page = PAGES_BY_SLUG["filtros-de-agua"];

const TITLE = "Filtros de Água: Residencial, Poço Artesiano e Industrial | Vid'Água";
const DESCRIPTION =
  "Precisa comprar filtro de água? Conheça nossa linha de filtro de carvão ativado, filtro de areia e sistemas industriais. Consulte o preço e solicite orçamento!";

export const Route = createFileRoute("/_site/produtos/filtros-de-agua")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: FiltrosDeAguaPage,
});

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">{children}</h2>;
}

const inlineLink = "font-semibold text-accent underline-offset-4 hover:underline";

const tecnologias = [
  {
    title: "Filtro de areia / quartzo / zeólita",
    subtitle: "Retenção de partículas",
    body: "Ideal para reter sólidos em suspensão. Se a sua água apresenta aspecto de barro, lodo ou terra, este filtro atua como uma barreira física implacável, devolvendo a total transparência à água.",
    to: "/agua-turva-cheiro-cloro",
    linkLabel: "Saiba mais sobre água turva e tratamento",
  },
  {
    title: "Filtro de carvão ativado",
    subtitle: "Remoção de odores e cloro",
    body: "O carvão ativado atua por adsorção química. É obrigatório para remover o excesso de cloro da rede pública, toxinas e eliminar completamente sabores e odores desagradáveis, como cheiro de terra ou esgoto.",
    to: "/agua-turva-cheiro-cloro",
    linkLabel: "Veja a solução completa para cheiro na água",
  },
  {
    title: "Filtros catalíticos para metais",
    subtitle: "Ferro e manganês",
    body: "Filtros comuns não retêm metais dissolvidos. Utilizamos mídias oxidantes (como Birm ou zeólita específica) para remover o ferro e o manganês, evitando manchas em roupas e louças.",
    to: "/agua-com-ferro-manganes",
    linkLabel: "Conheça nosso sistema para água com ferro",
  },
];

const aplicacoes = [
  {
    title: "Filtro água residencial",
    body: "Sistemas compactos instalados logo após o hidrômetro (relógio da rua) ou antes da caixa d'água. Protegem todos os encanamentos e eletrodomésticos da casa.",
  },
  {
    title: "Filtro água poço artesiano",
    body: "Equipamentos desenhados para suportar a alta pressão das bombas submersas e lidar com as variações químicas naturais das águas subterrâneas.",
    to: "/servicos/manutencao-poco-artesiano",
    linkLabel: "Veja o tratamento de água de poço",
  },
  {
    title: "Filtro industrial água",
    body: "Baterias de filtros de grande porte operando em paralelo. Projetados para operação contínua (heavy duty) em fábricas, hotéis e hospitais que exigem vazões altíssimas sem perda de carga.",
  },
];

const fatores = [
  {
    title: "A qualidade da água bruta",
    body: "Baseado em uma análise de água, definimos quais mídias filtrantes serão necessárias.",
  },
  {
    title: "A vazão desejada",
    body: "Quantos mil litros por hora o equipamento precisa filtrar para atender sua casa ou indústria sem perder a pressão?",
  },
  {
    title: "O nível de automação",
    body: "Válvulas com retrolavagem manual (mais econômicas) ou cabeçotes 100% automatizados.",
  },
];

function FiltrosDeAguaPage() {
  return (
    <>
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center">
              <img decoding="async" fetchPriority="high" src={contextPhoto1} alt="Água cristalina saindo da torneira para um copo, resultado de uma água bem filtrada" width={1024} height={1360} className="w-full h-auto rounded-md" />
              <div className="flex flex-col gap-6">
                <Badge>Produto</Badge>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Filtro de Água: A Barreira Definitiva para a Pureza da sua Rede
                </h1>
                <p className="leading-relaxed text-muted">
                  Seja para garantir a saúde da sua família, proteger os equipamentos do seu
                  condomínio ou assegurar a qualidade do seu processo produtivo, a etapa de
                  filtração é o coração de qualquer sistema hídrico eficiente.
                </p>
                <p className="leading-relaxed text-muted">
                  Na Vid&rsquo;Água, não vendemos equipamentos genéricos. Somos especialistas em
                  projetar e dimensionar o <strong className="text-foreground">filtro de água</strong>{" "}
                  central exato para a sua necessidade. Trabalhamos com cilindros robustos (em PRFV
                  ou inox) e válvulas automáticas que garantem alta vazão e água 100% cristalina em
                  todas as torneiras, sem a dor de cabeça de manutenções constantes.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={`#${QUOTE_ANCHOR}`}>
                    <Button variant="gradient">Solicitar Dimensionamento e Orçamento</Button>
                  </a>
                  <a href="#tecnologias">
                    <Button variant="outline">Conhecer os tipos de filtros</Button>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ProductGrid currentSlug="filtros-de-agua">
        <div className="flex flex-col gap-20">
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                A escolha técnica
              </p>
              <H2>Por que não existe um &ldquo;filtro universal&rdquo;?</H2>
              <p className="leading-relaxed text-muted">
                O maior erro ao procurar um{" "}
                <strong className="text-foreground">filtro água comprar</strong> na internet é achar
                que um único modelo resolve todos os problemas. A água carrega diferentes tipos de
                impurezas, e para cada contaminante existe uma tecnologia específica.
              </p>
              <p className="leading-relaxed text-muted">
                O segredo de um sistema eficiente está nos elementos filtrantes (as mídias que vão
                dentro do cilindro). Escolher a mídia errada significa saturação precoce, queda na
                pressão da água e dinheiro jogado fora. É por isso que a engenharia da
                Vid&rsquo;Água avalia a sua demanda antes de indicar o equipamento.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section id="tecnologias" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Nossas tecnologias
              </p>
              <H2>Conheça nossa linha de elementos filtrantes</H2>
              <p className="leading-relaxed text-muted">
                Oferecemos sistemas completos, montados sob medida para a sua vazão. Conheça as
                tecnologias disponíveis e o que elas resolvem:
              </p>

              <ol className="flex flex-col gap-6">
                {tecnologias.map((t, i) => (
                  <Reveal key={t.title} delay={i * 60}>
                    <li className="flex gap-6 border-t border-border pt-6">
                      <span className="font-display text-2xl font-bold text-accent">{i + 1}</span>
                      <div className="flex flex-col gap-2">
                        <p className="font-display text-lg font-semibold">{t.title}</p>
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                          {t.subtitle}
                        </p>
                        <p className="leading-relaxed text-muted">
                          {t.body}{" "}
                          <Link to={t.to} className={inlineLink}>
                            {t.linkLabel}
                          </Link>
                          .
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>

              <Card tone="soft">
                <CardContent className="pt-6">
                  <p className="text-sm italic leading-relaxed text-muted">
                    Nota: se o seu problema for entupimento por calcário e sabão que não faz espuma,
                    você precisa de um abrandador.{" "}
                    <Link to="/produtos/abrandador-de-agua" className={inlineLink}>
                      Conheça nossos abrandadores de água dura
                    </Link>
                    .
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
              <H2>Um projeto para cada cenário</H2>
              <p className="leading-relaxed text-muted">
                A Vid&rsquo;Água possui expertise para adequar o tamanho dos cilindros e das
                tubulações para qualquer ambiente:
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
                    Atenção: filtros não matam bactérias. Para{" "}
                    <Link to="/contaminacao-agua" className={inlineLink}>
                      contaminação biológica ou coliformes
                    </Link>
                    , é obrigatória a instalação de{" "}
                    <Link to="/produtos/bomba-dosadora-cloro" className={inlineLink}>
                      bombas dosadoras de cloro
                    </Link>{" "}
                    em conjunto com o filtro.
                  </p>
                </CardContent>
              </Card>

              <img decoding="async" loading="lazy" src={contextPhoto2} alt="Uso cotidiano de água para higiene das mãos" width={1536} height={1024} className="w-full h-auto rounded-md" />
            </section>
          </Reveal>

          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Preço e dimensionamento
              </p>
              <H2>Filtro água preço: como garantir o melhor investimento?</H2>
              <p className="leading-relaxed text-muted">
                Se você está pesquisando o{" "}
                <strong className="text-foreground">filtro água preço</strong>, saiba que o valor do
                seu projeto dependerá de três fatores fundamentais:
              </p>

              <ol className="flex flex-col gap-6">
                {fatores.map((f, i) => (
                  <Reveal key={f.title} delay={i * 60}>
                    <li className="flex gap-6 border-t border-border pt-6">
                      <span className="font-display text-2xl font-bold text-accent">{i + 1}</span>
                      <div className="flex flex-col gap-2">
                        <p className="font-display text-lg font-semibold">{f.title}</p>
                        <p className="leading-relaxed text-muted">
                          {i === 0 ? (
                            <>
                              Baseado em uma{" "}
                              <Link to="/servicos/analise-de-agua" className={inlineLink}>
                                análise de água
                              </Link>
                              , definimos quais mídias filtrantes serão necessárias.
                            </>
                          ) : (
                            f.body
                          )}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>

              <Card tone="gradientSoft">
                <CardContent className="pt-6">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Resultado:</strong> com essas informações,
                    nossa equipe elabora um orçamento técnico transparente, garantindo que você
                    compre exatamente o que precisa, nem mais, nem menos.
                  </p>
                </CardContent>
              </Card>
            </section>
          </Reveal>

          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Fale com a engenharia da Vid&rsquo;Água</H2>
              <p className="leading-relaxed text-muted">
                Pare de gastar dinheiro trocando pequenos refis toda semana. Invista em um sistema
                central robusto e definitivo.
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
                        <label htmlFor="local" className="text-sm font-semibold">
                          Qual o local de instalação?
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
                          <option>Residência</option>
                          <option>Condomínio</option>
                          <option>Indústria</option>
                          <option>Sítio / Poço</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="problema" className="text-sm font-semibold">
                          Qual o problema atual da água?
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
                          <option>Água suja / barro</option>
                          <option>Gosto e cheiro ruim</option>
                          <option>Água amarela / ferro</option>
                          <option>Apenas prevenção</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="vazao" className="text-sm font-semibold">
                        Qual a vazão estimada? (se souber)
                      </label>
                      <Input id="vazao" name="vazao" />
                    </div>
                    <div>
                      <Button type="submit" variant="gradient">
                        Solicitar Dimensionamento e Preço do Filtro
                      </Button>
                    </div>
                    <p className="text-xs italic text-muted">
                      Enviamos equipamentos para todo o Brasil. Todos os sistemas acompanham manual
                      de instalação e suporte técnico da nossa equipe. Oferecemos também serviço de
                      montagem no local para regiões atendidas.
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
