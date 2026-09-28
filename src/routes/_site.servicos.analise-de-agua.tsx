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
} from "@/design-system/cozy-code-library-1062b4";
import { Reveal } from "@/components/Reveal";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ServiceGrid, QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection, WHATSAPP_URL } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";
import analiseImage from "@/assets/analise-de-agua.jpg.asset.json";

const page = PAGES_BY_SLUG["analise-de-agua"];

const TITLE = "Análise de Água: Preço, Laudos e Potabilidade | Vid'Água";
const DESCRIPTION =
  "Onde fazer análise de água? Realizamos teste de qualidade da água com laudo técnico e conformidade com a Portaria 888 (antiga 2914). Consulte preços e agende hoje!";

export const Route = createFileRoute("/_site/servicos/analise-de-agua")({
  head: () => {
    const base = headFor({ ...page, title: TITLE, description: DESCRIPTION });
    return base;
  },
  component: AnaliseDeAguaPage,
});

const documentos = [
  {
    title: "Relatório de análise de água",
    body: "Detalhamento completo dos parâmetros físico-químicos (pH, cor, turbidez, dureza, ferro, cloro) e bacteriológicos (Escherichia coli e coliformes totais).",
  },
  {
    title: "Parecer técnico água",
    body: "Avaliação escrita por nossos engenheiros e geólogos, traduzindo os números do laboratório em orientações claras para o seu caso.",
  },
  {
    title: "Certificado de análise de água",
    body: "Documento resumido que atesta que a água de um determinado ponto está apta (ou não) para consumo ou uso específico.",
  },
  {
    title: "Laudo técnico água",
    body: "Documento oficial e assinado (ART), indispensável para apresentações à Vigilância Sanitária, prefeituras e auditorias.",
  },
];

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">{children}</h2>
  );
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

function AnaliseDeAguaPage() {
  return (
    <>
      {/* SEÇÃO 1 — Hero */}
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
              <div className="flex flex-col gap-6">
                <Badge>Serviço</Badge>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Análise de Água: Segurança, Potabilidade e Conformidade Legal
                </h1>
                <p className="leading-relaxed text-muted">
                  Aparência cristalina não é sinônimo de água pura. Uma{" "}
                  <strong className="text-foreground">análise de água</strong> profissional é o
                  único método seguro para atestar a qualidade do que você consome, utiliza em sua
                  empresa ou extrai do seu poço artesiano.
                </p>
                <p className="leading-relaxed text-muted">
                  Na Vid&rsquo;Água, unimos mais de 30 anos de experiência para oferecer
                  diagnósticos laboratoriais precisos. Emitimos laudos com total validade técnica e
                  legal, garantindo a proteção da sua saúde e do seu patrimônio.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={`#${QUOTE_ANCHOR}`}>
                    <Button variant="gradient">Consultar preço da análise de água</Button>
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">Falar com um Especialista no WhatsApp</Button>
                  </a>
                </div>
              </div>
              <img
                src={analiseImage.url}
                alt="Coleta de amostra para análise de água"
                className="aspect-[4/3] w-full rounded-md border border-border object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceGrid currentSlug="analise-de-agua">
        <div className="flex flex-col gap-20">
          {/* SEÇÃO 2 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <H2>O primeiro passo para a segurança hídrica</H2>
              <p className="leading-relaxed text-muted">
                Se você está se perguntando{" "}
                <strong className="text-foreground">onde fazer análise de água</strong> com total
                confiabilidade técnica, a Vid&rsquo;Água é a resposta. Muitos problemas hídricos,
                como a presença de bactérias, coliformes ou metais pesados, são silenciosos,
                incolores e inodoros.
              </p>
              <p className="leading-relaxed text-muted">
                Realizar um <strong className="text-foreground">teste de qualidade da água</strong>{" "}
                periódico é indispensável nas seguintes situações:
              </p>
              <ul className="flex flex-col gap-3">
                <Bullet>
                  <strong className="text-foreground">Consumo Humano e Saúde:</strong> a análise de
                  água para beber é estritamente obrigatória para garantir que o recurso esteja
                  livre de patógenos nocivos.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Vigilância Sanitária:</strong> exigência da
                  Covisa para o monitoramento e a{" "}
                  <Link to="/servicos/manutencao-poco-artesiano" className={inlineLink}>
                    manutenção de poços artesianos
                  </Link>
                  .
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Prevenção Industrial e Condominial:</strong>{" "}
                  evita danos a caldeiras, tubulações e garante processos industriais seguros.
                </Bullet>
              </ul>
              <p className="leading-relaxed text-muted">
                Não espere notar cheiro ruim,{" "}
                <Link to="/agua-com-ferro-manganes" className={inlineLink}>
                  água amarela
                </Link>{" "}
                ou casos de virose para agir. A prevenção é sempre o caminho mais barato e seguro.
              </p>
              <ImagePlaceholder label="Imagem" ratio="aspect-[16/7]" />
            </section>
          </Reveal>

          {/* SEÇÃO 3 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Padrões, laudos e certificações
              </p>
              <H2>Rigor técnico e conformidade com o Ministério da Saúde</H2>
              <p className="leading-relaxed text-muted">
                Um diagnóstico hídrico não pode ser feito com base em &ldquo;achismos&rdquo;.
                Buscando o mais alto nível de precisão de um{" "}
                <strong className="text-foreground">laboratório análise de água</strong>, a
                Vid&rsquo;Água trabalha pautada nas legislações mais rígidas do país.
              </p>
              <p className="leading-relaxed text-muted">
                Nossa equipe técnica possui o conhecimento normativo necessário para garantir que a
                sua <strong className="text-foreground">análise de água potabilidade</strong> atenda
                rigorosamente aos parâmetros federais vigentes. Ao longo de nossa história, atuamos
                desde as exigências da histórica{" "}
                <strong className="text-foreground">análise de água portaria 2914</strong>,
                evoluindo hoje para a total conformidade com a atual{" "}
                <strong className="text-foreground">Portaria 888</strong> do Ministério da Saúde.
              </p>
              <p className="leading-relaxed text-muted">
                Dependendo da sua necessidade (residencial, comercial ou Vigilância Sanitária), entregamos as
                seguintes documentações com validade legal:
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {documentos.map((d, i) => (
                  <Reveal key={d.title} delay={i * 60}>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>{d.title}</CardTitle>
                        <CardDescription>{d.body}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </section>
          </Reveal>

          {/* SEÇÃO 4 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Custos, prazos e urgência
              </p>
              <H2>Análise de água: preço, quanto custa e como solicitar</H2>
              <p className="leading-relaxed text-muted">
                Uma das perguntas que mais recebemos é: afinal,{" "}
                <strong className="text-foreground">análise de água quanto custa?</strong>
              </p>
              <p className="leading-relaxed text-muted">
                O <strong className="text-foreground">análise de água preço</strong> varia de acordo
                com o escopo analítico exigido. Uma análise básica de potabilidade para uma
                residência terá um valor diferente de uma análise completa com pesquisa de metais
                pesados exigida no monitoramento de um poço artesiano industrial.
              </p>

              <Card tone="soft">
                <CardHeader>
                  <CardTitle>Precisa de agilidade? Nós resolvemos.</CardTitle>
                  <CardDescription>
                    Sabemos que, muitas vezes, a demanda por regularização ou a suspeita de{" "}
                    <Link to="/contaminacao-agua" className={inlineLink}>
                      contaminação
                    </Link>{" "}
                    não pode esperar.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-3">
                    <Bullet>
                      Precisa de uma{" "}
                      <strong className="text-foreground">análise de água urgente</strong> para
                      liberar uma licença ou proteger sua família?
                    </Bullet>
                    <Bullet>
                      Quer acionar uma{" "}
                      <strong className="text-foreground">análise de água hoje</strong> mesmo para
                      não atrasar a abertura do seu negócio?
                    </Bullet>
                  </ul>
                  <p className="mt-4 leading-relaxed text-muted">
                    A Vid&rsquo;Água oferece um serviço de{" "}
                    <strong className="text-foreground">análise de água rápida</strong>, com
                    orientações precisas sobre a coleta (nós mesmos coletamos ou orientamos o passo
                    a passo com frascos esterilizados adequados) e agilidade na emissão dos laudos
                    laboratoriais.
                  </p>
                </CardContent>
              </Card>

              <Card tone="gradientSoft">
                <CardHeader>
                  <CardTitle>Orçamento rápido</CardTitle>
                  <CardDescription>
                    Cada poço ou rede tem uma exigência diferente. Fale com nossa equipe, explique
                    sua situação (residência, indústria, poço, vigilância sanitária) e receba sua
                    cotação exata em minutos.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={`#${QUOTE_ANCHOR}`}>
                    <Button variant="gradient">Solicitar meu Orçamento Rápido</Button>
                  </a>
                </CardContent>
              </Card>
            </section>
          </Reveal>

          {/* SEÇÃO 5 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Próximos passos
              </p>
              <H2>A análise apontou problemas? A Vid&rsquo;Água tem a solução.</H2>
              <p className="leading-relaxed text-muted">
                O grande diferencial de escolher uma empresa com 30 anos de mercado é que não
                entregamos apenas o problema: nós executamos a solução técnica. Se o seu laudo
                técnico apontar inconformidades, nossa engenharia já possui o projeto corretivo
                pronto para você:
              </p>
              <ul className="flex flex-col gap-3">
                <Bullet>
                  Excesso de cálcio e magnésio (água dura)?{" "}
                  <Link to="/produtos/abrandador-de-agua" className={inlineLink}>
                    Conheça nossos abrandadores
                  </Link>
                  .
                </Bullet>
                <Bullet>
                  Excesso de ferro ou manganês (água amarelada)?{" "}
                  <Link to="/produtos/filtros-de-agua" className={inlineLink}>
                    Sistemas de filtração específicos
                  </Link>
                  .
                </Bullet>
                <Bullet>
                  Contaminação bacteriológica?{" "}
                  <Link to="/produtos/bomba-dosadora-cloro" className={inlineLink}>
                    Soluções de desinfecção e bombas dosadoras
                  </Link>
                  .
                </Bullet>
                <Bullet>
                  Necessidade empresarial?{" "}
                  <Link to="/servicos/monitoramento-qualidade-agua" className={inlineLink}>
                    Planos de monitoramento da qualidade da água
                  </Link>
                  .
                </Bullet>
              </ul>
            </section>
          </Reveal>

          {/* SEÇÃO 6 — CTA final e formulário */}
          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Solicite sua análise com a Vid&rsquo;Água</H2>
              <p className="leading-relaxed text-muted">
                Não arrisque a sua saúde e nem a documentação da sua empresa com laudos sem
                validade. Solicite seu teste hoje mesmo e tenha a tranquilidade que apenas uma
                empresa com três décadas de experiência pode oferecer. Atendemos em todo o Brasil.
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
                      <label htmlFor="motivo" className="text-sm font-semibold">
                        Qual o motivo da análise?
                      </label>
                      <select
                        id="motivo"
                        name="motivo"
                        defaultValue=""
                        className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                      >
                        <option value="" disabled>
                          Selecione uma opção
                        </option>
                        <option>Consumo Humano</option>
                        <option>Poço Artesiano</option>
                        <option>Vigilância Sanitária - Indústria</option>
                        <option>Outros</option>
                      </select>
                    </div>
                    <div>
                      <Button type="submit" variant="gradient">
                        Solicitar Preço da Análise de Água
                      </Button>
                    </div>
                    <p className="text-xs italic text-muted">
                      Atendimento especializado em horário comercial. Retorno rápido para cotações e
                      dúvidas técnicas.
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
