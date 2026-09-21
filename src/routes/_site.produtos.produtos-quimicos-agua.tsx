import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Badge,
  Button,
  Card,
  CardContent,
  Input,
} from "@/design-system/cozy-code-library-1062b4";
import { Reveal } from "@/components/Reveal";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ProductGrid } from "@/components/ProductSidebar";
import { QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["produtos-quimicos-agua"];

const TITLE = "Produtos Químicos para Tratamento de Água: Cloro e Coagulantes | Vid'Água";
const DESCRIPTION =
  "Compre produtos químicos para tratamento de água com garantia de procedência. Fornecemos cloro, soda cáustica e coagulantes para indústrias e condomínios.";

export const Route = createFileRoute("/_site/produtos/produtos-quimicos-agua")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: ProdutosQuimicosAguaPage,
});

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">{children}</h2>;
}

const inlineLink = "font-semibold text-accent underline-offset-4 hover:underline";

function ProdutosQuimicosAguaPage() {
  return (
    <>
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center">
              <ImagePlaceholder label="Imagem" ratio="aspect-[3/4]" />
              <div className="flex flex-col gap-6">
                <Badge>Produto</Badge>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Produtos Químicos para Tratamento de Água: A Base para a Pureza da sua Rede
                </h1>
                <p className="leading-relaxed text-muted">
                  A eficiência de qualquer sistema de desinfecção ou filtração depende diretamente
                  da qualidade dos insumos utilizados. O uso de produtos químicos adulterados, com
                  baixa concentração ou procedência duvidosa, não apenas falha em tratar a água,
                  como também danifica tubulações e corrói equipamentos caros.
                </p>
                <p className="leading-relaxed text-muted">
                  A Vid&rsquo;Água fornece uma linha completa e certificada de insumos químicos para
                  garantir a potabilidade, o ajuste de pH e a clarificação da sua rede. Atendemos
                  desde pequenos condomínios até grandes demandas de processos industriais, com
                  garantia de estabilidade química e suporte técnico para a dosagem correta.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={`#${QUOTE_ANCHOR}`}>
                    <Button variant="gradient">Solicitar Cotação de Produtos Químicos</Button>
                  </a>
                  <a href="#catalogo">
                    <Button variant="outline">Conhecer nossos insumos</Button>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ProductGrid currentSlug="produtos-quimicos-agua">
        <div className="flex flex-col gap-20">
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                A importância da procedência
              </p>
              <H2>Por que a concentração do seu produto importa?</H2>
              <p className="leading-relaxed text-muted">
                Muitos gestores buscam economizar comprando produtos químicos sem registro no
                Ministério da Saúde. O problema é que um galão de hipoclorito barato geralmente
                perde sua concentração de cloro em poucos dias de armazenamento. O resultado? Sua{" "}
                <Link to="/produtos/bomba-dosadora-agua" className={inlineLink}>
                  bomba dosadora
                </Link>{" "}
                continua injetando o líquido, mas a água permanece contaminada por bactérias.
              </p>
              <p className="leading-relaxed text-muted">
                Ao comprar insumos com a Vid&rsquo;Água, você tem a segurança de adquirir produtos
                estabilizados, armazenados corretamente e com laudo de qualidade, garantindo que a
                sua água cumpra rigorosamente os parâmetros da Portaria 888.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section id="catalogo" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Catálogo de soluções químicas
              </p>
              <H2>O insumo exato para o seu desafio hídrico</H2>
              <p className="leading-relaxed text-muted">
                Nossa linha de produtos cobre todas as etapas do tratamento físico-químico e
                bacteriológico da água. Conheça nossos principais insumos:
              </p>

              <ol className="flex flex-col gap-6">
                <Reveal>
                  <li className="flex gap-6 border-t border-border pt-6">
                    <span className="font-display text-2xl font-bold text-accent">1</span>
                    <div className="flex flex-col gap-3">
                      <p className="font-display text-lg font-semibold">
                        Desinfecção (cloro para tratamento de água)
                      </p>
                      <p className="leading-relaxed text-muted">
                        O uso do cloro no tratamento de água é o método mais seguro e exigido por lei
                        para eliminar vírus, bactérias e{" "}
                        <Link to="/contaminacao-agua" className={inlineLink}>
                          coliformes fecais
                        </Link>
                        .
                      </p>
                      <ul className="flex flex-col gap-2 text-muted">
                        <li className="leading-relaxed">
                          <strong className="text-foreground">
                            Hipoclorito de sódio (cloro líquido):
                          </strong>{" "}
                          ideal para injeção automática em redes de abastecimento e poços artesianos
                          através de bombas dosadoras.
                        </li>
                        <li className="leading-relaxed">
                          <strong className="text-foreground">
                            Cloro em pastilhas (dicloro / tricloro):
                          </strong>{" "}
                          para uso em cloradores de passagem, piscinas ou caixas d&rsquo;água
                          menores, com dissolução lenta e residual prolongado.
                        </li>
                      </ul>
                    </div>
                  </li>
                </Reveal>

                <Reveal delay={60}>
                  <li className="flex gap-6 border-t border-border pt-6">
                    <span className="font-display text-2xl font-bold text-accent">2</span>
                    <div className="flex flex-col gap-3">
                      <p className="font-display text-lg font-semibold">
                        Correção de pH (alcalinizantes e ácidos)
                      </p>
                      <p className="leading-relaxed text-muted">
                        Uma água muito ácida corrói canos metálicos, enquanto uma água muito
                        alcalina gera incrustações e anula o efeito do cloro.
                      </p>
                      <ul className="flex flex-col gap-2 text-muted">
                        <li className="leading-relaxed">
                          <strong className="text-foreground">
                            Soda cáustica para água (líquida ou em escamas):
                          </strong>{" "}
                          utilizada para elevar o pH de águas ácidas, comuns em poços profundos,
                          estabilizando a rede.
                        </li>
                        <li className="leading-relaxed">
                          <strong className="text-foreground">
                            Barrilha leve e ácidos específicos:
                          </strong>{" "}
                          soluções para ajustes finos em processos industriais e caldeiras.
                        </li>
                      </ul>
                    </div>
                  </li>
                </Reveal>

                <Reveal delay={120}>
                  <li className="flex gap-6 border-t border-border pt-6">
                    <span className="font-display text-2xl font-bold text-accent">3</span>
                    <div className="flex flex-col gap-3">
                      <p className="font-display text-lg font-semibold">
                        Clarificação (coagulantes e floculantes)
                      </p>
                      <p className="leading-relaxed text-muted">
                        Se a sua água capta terra, barro ou argila fina que não decanta, a filtração
                        simples pode não ser suficiente.
                      </p>
                      <p className="leading-relaxed text-muted">
                        <strong className="text-foreground">
                          Coagulante para água (PAC e sulfato de alumínio):
                        </strong>{" "}
                        injetados antes dos{" "}
                        <Link to="/produtos/filtros-de-agua" className={inlineLink}>
                          filtros de água
                        </Link>
                        , esses produtos desestabilizam as partículas de sujeira, fazendo com que se
                        agrupem em flocos maiores, facilmente retidos pela areia ou quartzo do
                        filtro, entregando uma água 100% transparente.
                      </p>
                    </div>
                  </li>
                </Reveal>
              </ol>

              <ImagePlaceholder label="Imagem" ratio="aspect-[16/7]" />
            </section>
          </Reveal>

          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Solução completa
              </p>
              <H2>Não vendemos apenas o produto. Entregamos a solução.</H2>
              <p className="leading-relaxed text-muted">
                O manuseio e a injeção de químicos exigem precisão matemática. Jogar cloro
                manualmente na caixa d&rsquo;água é uma prática perigosa e ultrapassada.
              </p>
              <p className="leading-relaxed text-muted">
                A Vid&rsquo;Água oferece o pacote completo de engenharia. Além de fornecermos os
                galões de cloro, soda ou coagulantes, nós dimensionamos e instalamos a{" "}
                <Link to="/produtos/bomba-dosadora-agua" className={inlineLink}>
                  bomba dosadora de água
                </Link>{" "}
                ideal e regulamos o equipamento para que a injeção seja milimetricamente
                proporcional à sua vazão diária de água.
              </p>

              <Card tone="soft">
                <CardContent className="pt-6">
                  <p className="text-sm italic leading-relaxed text-muted">
                    Nota: para indústrias e condomínios, oferecemos contratos de fornecimento
                    mensal, nos quais nossa equipe realiza a entrega programada dos galões e a{" "}
                    <Link to="/servicos/monitoramento-qualidade-agua" className={inlineLink}>
                      calibração periódica dos seus equipamentos
                    </Link>
                    .
                  </p>
                </CardContent>
              </Card>
            </section>
          </Reveal>

          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Garanta seu estoque com segurança técnica</H2>
              <p className="leading-relaxed text-muted">
                Evite interrupções no seu tratamento. Fale com nossa equipe comercial, informe seu
                consumo médio e receba uma cotação competitiva para o fornecimento contínuo de
                químicos para a sua empresa.
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
                        <label htmlFor="produto" className="text-sm font-semibold">
                          Qual produto você precisa?
                        </label>
                        <select
                          id="produto"
                          name="produto"
                          defaultValue=""
                          className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                        >
                          <option value="" disabled>
                            Selecione uma opção
                          </option>
                          <option>Cloro líquido</option>
                          <option>Pastilhas</option>
                          <option>Soda cáustica</option>
                          <option>Coagulante</option>
                          <option>Outros</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="bomba" className="text-sm font-semibold">
                          Possui bomba dosadora automática?
                        </label>
                        <select
                          id="bomba"
                          name="bomba"
                          defaultValue=""
                          className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                        >
                          <option value="" disabled>
                            Selecione uma opção
                          </option>
                          <option>Sim</option>
                          <option>Não, quero um orçamento</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="volume" className="text-sm font-semibold">
                        Qual o volume estimado mensal?
                      </label>
                      <Input id="volume" name="volume" />
                    </div>
                    <div>
                      <Button type="submit" variant="gradient">
                        Solicitar Cotação de Produtos Químicos
                      </Button>
                    </div>
                    <p className="text-xs italic text-muted">
                      Produtos acompanham Ficha de Informações de Segurança de Produtos Químicos
                      (FISPQ) e boletim técnico. Entregas programadas para clientes com contrato
                      corporativo.
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
