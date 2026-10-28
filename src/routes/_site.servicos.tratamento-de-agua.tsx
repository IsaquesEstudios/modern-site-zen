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
import contextPhoto1 from "@/assets/agua-pura-laboratorio-panorama.jpg";
import { ServiceGrid, QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection, WHATSAPP_URL } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";
import tratamentoImageSrc from "@/assets/tratamento-de-agua.jpg";
const tratamentoImage = { url: tratamentoImageSrc };

const page = PAGES_BY_SLUG["tratamento-de-agua"];

const TITLE = "Tratamento de Água: Residencial, Condomínios e Indústrias | Vid'Água";
const DESCRIPTION =
  "Especialistas em sistema de tratamento de água de acordo com a Portaria 888. Instalação, manutenção e equipamentos. Consulte preços e resolva o problema da sua água!";

export const Route = createFileRoute("/_site/servicos/tratamento-de-agua")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: TratamentoDeAguaPage,
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

const areas = [
  {
    title: "Tratamento de água residencial",
    body: "Soluções compactas e de fácil operação, instaladas na entrada da residência ou em pontos específicos. Água limpa em todas as torneiras, chuveiros e eletrodomésticos, preservando encanamentos e sua saúde.",
  },
  {
    title: "Tratamento de água condomínio",
    body: "Projetos centralizados de alta vazão. Elimine reclamações sobre água turva ou amarelada nas caixas d'água e garanta a conformidade legal do edifício perante a Vigilância Sanitária e as administradoras.",
  },
  {
    title: "Tratamento Industrial e Comercial",
    body: "Soluções robustas para hotéis, indústrias e hospitais, dimensionadas para operação contínua e alta exigência sanitária.",
  },
];

const etapas = [
  {
    title: "Diagnóstico e dimensionamento",
    body: "Analisamos o laudo da sua água e indicamos o equipamento de tratamento de água com a capacidade correta (filtros centrais, dosadoras, entre outros).",
  },
  {
    title: "Instalação do tratamento de água",
    body: "Nossos técnicos realizam a montagem no local, garantindo vedações perfeitas, conexões hidráulicas corretas e o start-up do sistema, deixando tudo funcionando perfeitamente.",
  },
  {
    title: "Manutenção do tratamento de água",
    body: "Troca de elementos filtrantes, retrolavagem de válvulas e calibragem de bombas. Oferecemos serviços pontuais e contratos para que seu sistema nunca pare.",
  },
];

function TratamentoDeAguaPage() {
  return (
    <>
      {/* SEÇÃO 1 — Hero */}
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
              <div className="flex flex-col gap-6">
                <div className="flex"><Badge>Serviço</Badge></div>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Tratamento de Água: Água Pura, Segura e Sob Medida para Você
                </h1>
                <p className="leading-relaxed text-muted">
                  Não importa a origem da sua água — poço artesiano, captação superficial ou rede
                  pública com falhas —, garantir que ela seja potável e segura é essencial. Na
                  Vid&rsquo;Água, projetamos soluções completas e definitivas em{" "}
                  <strong className="text-foreground">tratamento de água</strong>.
                </p>
                <p className="leading-relaxed text-muted">
                  Com mais de 30 anos de expertise técnica, entregamos projetos que protegem a saúde
                  da sua família, valorizam o seu condomínio e garantem a eficiência contínua dos
                  processos da sua empresa.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="gradient">Falar com um Especialista no WhatsApp</Button>
                  </a>
                  <a href="#problemas">
                    <Button variant="outline">Descobrir o Tratamento Ideal para Mim</Button>
                  </a>
                </div>
              </div>
              <img decoding="async" fetchPriority="high"
                width={1740} height={1086} src={tratamentoImage.url}
                alt="Sistema de tratamento de água da Vid'Água"
                className="w-full max-lg:aspect-video max-lg:object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceGrid currentSlug="tratamento-de-agua">
        <div className="flex flex-col gap-20">
          {/* SEÇÃO 2 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Autoridade e segurança
              </p>
              <H2>Potabilidade levada a sério: conformidade com a lei</H2>
              <p className="leading-relaxed text-muted">
                A adequação hídrica não permite imprevistos. A nossa engenharia garante que todo{" "}
                <strong className="text-foreground">tratamento de água para beber</strong> ou para
                contato direto seja rigorosamente dimensionado para atender e superar os padrões do
                Ministério da Saúde.
              </p>
              <p className="leading-relaxed text-muted">
                Executamos cada etapa do projeto pautados pelas normativas federais, assegurando que
                o seu <strong className="text-foreground">tratamento de água Portaria 888</strong>{" "}
                entregue não apenas água cristalina, mas total segurança biológica e físico-química,
                livrando você de multas em fiscalizações e protegendo a saúde de quem consome.
              </p>
              <img decoding="async" loading="lazy" src={contextPhoto1} alt="Amostras de água tratada conferidas em laboratório" width={1152} height={768} className="w-full h-auto rounded-md" />
            </section>
          </Reveal>

          {/* SEÇÃO 3 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Nossas áreas de atuação
              </p>
              <H2>Um sistema de tratamento de água para cada necessidade</H2>
              <p className="leading-relaxed text-muted">
                Entendemos que o volume e o desafio hídrico mudam drasticamente dependendo do
                ambiente. Por isso, a Vid&rsquo;Água oferece soluções segmentadas:
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {areas.map((a, i) => (
                  <Reveal key={a.title} delay={i * 60}>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>{a.title}</CardTitle>
                        <CardDescription>{a.body}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Reveal>
                ))}
              </div>
              <p className="leading-relaxed text-muted">
                Interessado no setor empresarial?{" "}
                <Link to="/servicos/tratamento-de-agua-industrial" className={inlineLink}>
                  Conheça nosso hub de soluções industriais
                </Link>
                .
              </p>
            </section>
          </Reveal>

          {/* SEÇÃO 4 */}
          <Reveal>
            <section id="problemas" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                O que está acontecendo com a sua água?
              </p>
              <H2>Identifique o problema. Nós entregamos a solução.</H2>
              <p className="leading-relaxed text-muted">
                Muitas vezes, você não sabe o nome do{" "}
                <strong className="text-foreground">equipamento de tratamento de água</strong> que
                precisa, mas sabe exatamente qual é o sintoma que sai da sua torneira. Selecione o
                que está ocorrendo:
              </p>
              <ul className="flex flex-col gap-3">
                <Bullet>
                  <strong className="text-foreground">
                    Água deixando manchas amareladas ou enferrujadas?
                  </strong>{" "}
                  A presença de metais exige filtração específica.{" "}
                  <Link to="/agua-com-ferro-manganes" className={inlineLink}>
                    Ver solução para água com ferro e manganês
                  </Link>
                  .
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">
                    Crostras brancas em torneiras, chuveiros entupidos e sabão que não faz espuma?
                  </strong>{" "}
                  Você está lidando com excesso de cálcio e magnésio.{" "}
                  <Link to="/agua-dura" className={inlineLink}>
                    Ver solução para água dura (abrandamento)
                  </Link>
                  .
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">
                    Aparência leitosa, com barro, ou cheiro forte de cloro / esgoto?
                  </strong>{" "}
                  O problema exige correção de turbidez e polimento com carvão ativado.{" "}
                  <Link to="/agua-turva-cheiro-cloro" className={inlineLink}>
                    Ver solução para água turva e com cheiro
                  </Link>
                  .
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">
                    Suspeita de bactérias ou laudo de análise reprovado?
                  </strong>{" "}
                  É urgente implementar um sistema de desinfecção e cloração contínua.{" "}
                  <Link to="/contaminacao-agua" className={inlineLink}>
                    Ver solução para contaminação biológica
                  </Link>
                  .
                </Bullet>
              </ul>
            </section>
          </Reveal>

          {/* SEÇÃO 5 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Do projeto à operação
              </p>
              <H2>Equipamento, instalação e manutenção contínua</H2>
              <p className="leading-relaxed text-muted">
                Ao escolher a Vid&rsquo;Água, você não compra apenas uma peça de maquinário: você
                contrata tranquilidade. Nosso escopo de atuação abrange todo o ciclo de vida do seu
                sistema:
              </p>
              <ol className="flex flex-col gap-6">
                {etapas.map((e, i) => (
                  <Reveal key={e.title} delay={i * 60}>
                    <li className="grid gap-4 border-t border-border pt-6 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-12">
                      <h3 className="font-display text-lg font-bold leading-snug">
                        {i + 1}. {e.title}
                      </h3>
                      <p className="leading-relaxed text-muted">{e.body}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>
              <p className="leading-relaxed text-muted">
                <Link to="/servicos/manutencao-sistemas-tratamento" className={inlineLink}>
                  Saiba mais sobre manutenção de sistemas
                </Link>
                .
              </p>
            </section>
          </Reveal>

          {/* SEÇÃO 6 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Transparência comercial
              </p>
              <H2>Tratamento de água: preço e como funciona o orçamento</H2>
              <p className="leading-relaxed text-muted">
                A pergunta mais comum que recebemos é: afinal,{" "}
                <strong className="text-foreground">tratamento de água quanto custa?</strong>
              </p>
              <p className="leading-relaxed text-muted">
                Na internet, é comum encontrar soluções baratas de &ldquo;prateleira&rdquo;. No
                entanto, o <strong className="text-foreground">preço justo e correto</strong>{" "}
                baseia-se exclusivamente em dois pilares: a qualidade da sua água bruta e a vazão
                necessária (quantos litros por hora você consome). Uma residência com água levemente
                turva requer um investimento muito menor do que um condomínio cujo poço possui alto
                índice de ferro e bactérias.
              </p>

              <Card tone="soft">
                <CardHeader>
                  <CardTitle>Fuja do desperdício de dinheiro com filtros errados</CardTitle>
                  <CardDescription>O processo correto é simples:</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-3">
                    <Bullet>
                      Avaliamos a{" "}
                      <Link to="/servicos/analise-de-agua" className={inlineLink}>
                        análise da sua água
                      </Link>{" "}
                      (se não tiver, nós fazemos).
                    </Bullet>
                    <Bullet>
                      Nossa engenharia desenha a estação ou filtro exato para aquele problema.
                    </Bullet>
                    <Bullet>
                      Você recebe um orçamento técnico transparente e sem surpresas.
                    </Bullet>
                  </ul>
                </CardContent>
              </Card>

              <Card tone="gradientSoft">
                <CardHeader>
                  <CardTitle>Quer saber o valor exato para a sua necessidade?</CardTitle>
                  <CardDescription>
                    Conte o perfil do local e o problema notado na água. Nossa engenharia devolve uma
                    cotação técnica sob medida.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={`#${QUOTE_ANCHOR}`}>
                    <Button variant="gradient">Solicitar Cotação de Tratamento de Água</Button>
                  </a>
                </CardContent>
              </Card>
            </section>
          </Reveal>

          {/* SEÇÃO 7 — CTA final e formulário */}
          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Dê o primeiro passo para ter água de qualidade hoje</H2>
              <p className="leading-relaxed text-muted">
                Pare de lidar com equipamentos danificados, roupas manchadas ou riscos à saúde. A
                engenharia da Vid&rsquo;Água está pronta para projetar a sua estação de tratamento.
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
                      <label htmlFor="perfil" className="text-sm font-semibold">
                        Qual o perfil do local?
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
                        <option>Residência</option>
                        <option>Condomínio</option>
                        <option>Indústria</option>
                        <option>Sítio / Fazenda</option>
                        <option>Outro</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="problema" className="text-sm font-semibold">
                        Qual o principal problema notado na água?
                      </label>
                      <Textarea id="problema" name="problema" rows={3} />
                    </div>
                    <div>
                      <Button type="submit" variant="gradient">
                        Enviar Mensagem para a Engenharia
                      </Button>
                    </div>
                    <p className="text-xs italic text-muted">
                      Equipe de especialistas disponível em horário comercial. Atendimento técnico
                      ágil.
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
