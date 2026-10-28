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
import soloCalcario from "@/assets/agua-dura-solo-calcario.jpg";
import torneiraImage from "@/assets/agua-dura-torneira.jpg.asset.json";
import cromadosImage from "@/assets/cromados-agua-dura.png.asset.json";
import panelasImage from "@/assets/dureza-panelas.png.asset.json";
import resistenciaImage from "@/assets/dureza-resistencia.png.asset.json";
import { ServiceGrid, QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection, WHATSAPP_URL } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["agua-dura"];

const TITLE = "Água Dura: Tratamento, Soluções e Como Identificar | Vid'Água";
const DESCRIPTION =
  "Torneiras manchadas, chuveiros entupidos e sabão que não faz espuma? Entenda o que é água dura e descubra a solução definitiva com nossos sistemas de abrandamento.";

export const Route = createFileRoute("/_site/agua-dura")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: AguaDuraPage,
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

function AguaDuraPage() {
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
                  Água Dura: Entenda o problema e descubra a solução definitiva
                </h1>
                <p className="leading-relaxed text-muted">
                  Você já notou crostas brancas em suas torneiras, chuveiros que entopem com
                  frequência, ou percebeu que o sabonete e o shampoo simplesmente não fazem espuma?
                  Estes são os sintomas clássicos de um problema invisível, mas altamente
                  destrutivo: <strong className="text-foreground">a água dura</strong>.
                </p>
                <p className="leading-relaxed text-muted">
                  Na Vid&rsquo;Água, entendemos a frustração e os prejuízos financeiros que a
                  incrustação causa em residências, condomínios e indústrias. Nossa engenharia
                  oferece tecnologias precisas para eliminar esse excesso de minerais, protegendo
                  suas tubulações, seus eletrodomésticos e o seu bem-estar.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="gradient">Falar com um Especialista e Resolver o Problema</Button>
                  </a>
                  <a href="#sintomas">
                    <Button variant="outline">Entender mais sobre os sintomas</Button>
                  </a>
                </div>
              </div>
              <img decoding="async" fetchPriority="high"
                width={444} height={298} src={torneiraImage.url}
                alt="Torneira cromada com manchas brancas de calcário causadas pela água dura"
                className="w-full max-lg:aspect-video max-lg:object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceGrid>
        <div className="flex flex-col gap-20">
          {/* SEÇÃO 2 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                O que é água dura
              </p>
              <H2>Afinal, por que a água se torna &ldquo;dura&rdquo;?</H2>
              <p className="leading-relaxed text-muted">
                O termo <strong className="text-foreground">água dura</strong> não se refere à
                textura física da água, mas sim à sua composição química. Trata-se de uma água que
                possui altas concentrações de minerais dissolvidos, especificamente{" "}
                <strong className="text-foreground">o Cálcio (Ca) e o Magnésio (Mg)</strong>.
              </p>
              <p className="leading-relaxed text-muted">
                Esse fenômeno é extremamente comum em águas provenientes de{" "}
                <Link to="/servicos/manutencao-poco-artesiano" className={inlineLink}>
                  poços artesianos
                </Link>{" "}
                ou de regiões com solo calcário. Quando a água da chuva penetra no solo e atravessa
                rochas ricas nesses minerais, ela os absorve. Embora o cálcio e o magnésio não sejam
                necessariamente tóxicos para a saúde humana na água de beber, os danos materiais e
                estéticos causados por eles são enormes e de rápida progressão.
              </p>
              <img decoding="async" loading="lazy" src={soloCalcario} alt="Corte do solo calcário liberando cálcio e magnésio na água subterrânea" width={1600} height={704} className="w-full" />
            </section>
          </Reveal>

          {/* SEÇÃO 3 */}
          <Reveal>
            <section id="sintomas" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Como identificar
              </p>
              <H2>Os prejuízos ocultos nas suas tubulações</H2>
              <p className="leading-relaxed text-muted">
                O grande perigo desse problema hídrico é que ele age silenciosamente por dentro dos
                canos antes de se manifestar do lado de fora. Você precisa de um{" "}
                <strong className="text-foreground">tratamento água dura</strong> urgente se estiver
                enfrentando:
              </p>
              <ul className="flex flex-col gap-3">
                <Bullet>
                  <strong className="text-foreground">Incrustações e entupimentos:</strong> formação
                  de pedras calcárias (crostas brancas ou acinzentadas) dentro de canos, válvulas e
                  resistências de chuveiros, reduzindo a vazão e queimando resistências elétricas.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Desperdício de produtos de limpeza:</strong> a
                  água dura reage com sabões e detergentes, anulando seu poder de limpeza. Você
                  acaba gastando até 3 vezes mais produto para lavar roupas ou louças.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Danos a equipamentos:</strong> em indústrias e
                  caldeiras, a falta de uma solução para água dura pode causar superaquecimento,
                  explosões ou perda total do maquinário. Em casas, detona lavadoras de roupas,
                  máquinas de lavar louça e cafeteiras.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Ressecamento de pele e cabelo:</strong> o
                  excesso de minerais adere à pele e aos fios de cabelo durante o banho, deixando-os
                  ásperos, opacos e sem vida.
                </Bullet>
              </ul>
              <img decoding="async" loading="lazy"
                width={1402} height={1122} src={cromadosImage.url}
                alt="Torneiras, chuveiro, registro e outros cromados manchados pelo calcário da água dura"
                className="w-full"
              />
            </section>
          </Reveal>

          {/* SEÇÃO 3.1 — Complemento: química da incrustação */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                A química por trás do problema
              </p>
              <H2>O inimigo invisível: como a química da água dura sabota seus equipamentos</H2>
              <p className="leading-relaxed text-muted">
                Você já se perguntou por que aquela resistência do chuveiro ou da máquina industrial
                queima com tanta frequência, ou por que o fundo da sua panela de inox ganha uma
                crosta branca impossível de limpar? A resposta geralmente está na própria água que
                utilizamos. A chamada &ldquo;água dura&rdquo; é rica em minerais invisíveis a olho
                nu, principalmente{" "}
                <strong className="text-foreground">
                  íons de cálcio (Ca²⁺) e magnésio (Mg²⁺)
                </strong>
                .
              </p>
              <p className="leading-relaxed text-muted">
                O verdadeiro problema começa quando aplicamos calor. Ao aquecer essa água,
                desencadeamos uma reação química: a solubilidade desses sais diminui, ocorre a
                liberação de dióxido de carbono (CO₂) e aqueles íons livres se transformam em
                carbonatos sólidos (como o carbonato de cálcio, o CaCO₃). O resultado é um
                precipitado branco e duro, o famoso{" "}
                <strong className="text-foreground">calcário</strong>, que se agarra
                obstinadamente às superfícies metálicas mais quentes. É um processo cumulativo; a
                cada ciclo de aquecimento, a camada de incrustação se torna mais espessa, dura e
                problemática.
              </p>
              <img decoding="async" loading="lazy"
                width={1402} height={1122} src={panelasImage.url}
                alt="Infográfico: como a dureza da água forma incrustação de carbonato de cálcio em panelas"
                className="w-full"
              />
            </section>
          </Reveal>

          {/* SEÇÃO 3.2 — Complemento: isolamento térmico */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Eficiência energética
              </p>
              <H2>O custo oculto da incrustação: isolamento térmico e superaquecimento</H2>
              <p className="leading-relaxed text-muted">
                Seja na resistência de um aquecedor ou no fundo de uma panela, o efeito dessa camada
                de calcário é devastador para a eficiência energética. Isso porque essa crosta atua
                como um excelente isolante térmico. Ela literalmente forma uma barreira porosa que
                impede o calor de passar do metal para a água.
              </p>
              <p className="leading-relaxed text-muted">
                As consequências formam um efeito dominó que pesa no bolso:
              </p>
              <ul className="flex flex-col gap-3">
                <Bullet>
                  <strong className="text-foreground">Perda de eficiência:</strong> como o calor não
                  é transferido corretamente, a água demora muito mais para aquecer, o que dispara o
                  consumo de energia elétrica ou de gás.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Superaquecimento do metal:</strong> o calor
                  gerado que não consegue escapar para a água acaba se concentrando na própria
                  resistência (ou no fundo da panela).
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Risco de queima:</strong> esse aumento
                  drástico na temperatura interna do metal gera pontos de superaquecimento (os
                  chamados <em>hot spots</em>), que são a causa número um da fadiga do material,
                  redução drástica da vida útil e queima prematura das resistências elétricas.
                </Bullet>
              </ul>
              <img decoding="async" loading="lazy"
                width={1536} height={1024} src={resistenciaImage.url}
                alt="Infográfico: resistência elétrica limpa comparada a resistência incrustada pela dureza da água"
                className="w-full"
              />
              <p className="leading-relaxed text-muted">
                Em termos práticos: você gasta mais energia para gerar um calor que não é
                aproveitado e, de quebra, destrói seu equipamento de dentro para fora. A solução
                definitiva para esse ciclo, especialmente em aplicações industriais e comerciais,
                passa invariavelmente pelo tratamento prévio da água, utilizando sistemas de{" "}
                <Link to="/produtos/abrandador-de-agua" className={inlineLink}>
                  abrandamento
                </Link>{" "}
                ou{" "}
                <Link to="/produtos/desmineralizador-de-agua" className={inlineLink}>
                  desmineralização
                </Link>{" "}
                para remover esses íons antes que o problema se forme.
              </p>
            </section>
          </Reveal>

          {/* SEÇÃO 4 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Solução técnica
              </p>
              <H2>Como funciona o tratamento para água dura?</H2>
              <p className="leading-relaxed text-muted">
                Não adianta usar filtros comuns de carvão ou areia; os minerais estão totalmente
                dissolvidos na água. O único tratamento eficaz e reconhecido na engenharia hídrica é
                o processo de troca iônica, realizado através de um equipamento chamado{" "}
                <strong className="text-foreground">Abrandador</strong>.
              </p>
              <p className="leading-relaxed text-muted">
                O Abrandador é um cilindro preenchido com uma resina especial (catiônica). Quando a
                água mineralizada passa por essa resina, ocorre uma atração em nível molecular. O
                cálcio e o magnésio ficam presos na resina, e a água é liberada 100%
                &ldquo;mole&rdquo; (abrandada) para as tubulações da sua casa ou empresa.
              </p>
              <Card tone="soft">
                <CardHeader>
                  <CardTitle>Conheça o equipamento ideal</CardTitle>
                  <CardDescription>
                    Quer saber mais sobre como esse equipamento é instalado e suas capacidades?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/produtos/abrandador-de-agua">
                    <Button variant="outline">Acessar a página do Abrandador de Água</Button>
                  </Link>
                </CardContent>
              </Card>
            </section>
          </Reveal>

          {/* SEÇÃO 5 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Processo de avaliação
              </p>
              <H2>Como dimensionamos o seu sistema de abrandamento?</H2>
              <p className="leading-relaxed text-muted">
                O segredo para um tratamento eficiente não é apenas comprar um equipamento, mas
                comprar o equipamento com o volume de resina exato para a sua realidade. Para evitar
                que você gaste dinheiro à toa, a Vid&rsquo;Água segue um protocolo rigoroso:
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>1. Análise de água</CardTitle>
                    <CardDescription>
                      Verificamos a quantidade exata (em mg/L) de Cálcio e Magnésio (dureza total)
                      presentes na sua água.
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
                    <CardTitle>2. Cálculo de consumo</CardTitle>
                    <CardDescription>
                      Analisamos quantos litros de água você consome por dia (residência, condomínio
                      ou indústria).
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>3. Dimensionamento</CardTitle>
                    <CardDescription>
                      Projetamos o Abrandador e as válvulas automáticas de retrolavagem perfeitamente
                      adequados à sua demanda.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </section>
          </Reveal>

          {/* SEÇÃO 6 — CTA final e formulário */}
          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Proteja sua rede hidráulica e seus equipamentos hoje mesmo</H2>
              <p className="leading-relaxed text-muted">
                Interrompa o ciclo de prejuízos com manutenções frequentes, chuveiros queimados e
                roupas manchadas. Com mais de 30 anos de experiência, a equipe da Vid&rsquo;Água
                está pronta para entregar a solução exata para abrandar a sua água.
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
                      <label htmlFor="imovel" className="text-sm font-semibold">
                        Qual o seu tipo de imóvel?
                      </label>
                      <select
                        id="imovel"
                        name="imovel"
                        defaultValue=""
                        className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                      >
                        <option value="" disabled>
                          Selecione uma opção
                        </option>
                        <option>Residência</option>
                        <option>Condomínio</option>
                        <option>Indústria</option>
                        <option>Sítio / Fazenda</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="problemas" className="text-sm font-semibold">
                        Descreva brevemente os problemas que tem notado
                      </label>
                      <Textarea id="problemas" name="problemas" rows={4} />
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button type="submit" variant="gradient">
                        Solicitar Orçamento de Abrandador
                      </Button>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" type="button">
                          Falar no WhatsApp
                        </Button>
                      </a>
                    </div>
                    <p className="text-xs italic text-muted">
                      Atendemos em todo o Brasil. Respostas ágeis em horário comercial para proteger
                      o seu patrimônio sem atrasos.
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
