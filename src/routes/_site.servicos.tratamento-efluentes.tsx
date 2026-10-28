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
import contextPhoto1 from "@/assets/agua-contexto-industrial.jpg";
import contextPhoto2 from "@/assets/amostras-efluentes-laboratorio.jpg";
import { ServiceGrid, QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection, WHATSAPP_URL } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["tratamento-efluentes"];

const TITLE = "Tratamento de Efluentes Industriais | Vid'Água";
const DESCRIPTION =
  "Projeto e operação de estações de tratamento de efluentes com foco em conformidade ambiental e redução do custo de descarte.";

export const Route = createFileRoute("/_site/servicos/tratamento-efluentes")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: TratamentoEfluentesPage,
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

const processos = [
  {
    title: "Tratamento preliminar e primário",
    body: "Gradeamento, caixa de areia, equalização e separação de óleos e gordura. É a etapa que protege todo o restante da estação e responde por boa parte da redução de carga.",
  },
  {
    title: "Físico-químico",
    body: "Coagulação, floculação e decantação ou flotação, com dosagem automática de coagulante e polímero. Indicado para efluentes com sólidos suspensos, cor e metais.",
  },
  {
    title: "Biológico",
    body: "Lodos ativados, reatores anaeróbios ou aeração prolongada para remoção de carga orgânica (DBO e DQO) em efluentes sanitários e de indústria de alimentos.",
  },
  {
    title: "Polimento e desidratação de lodo",
    body: "Filtração final, desinfecção e tratamento do lodo gerado, reduzindo o volume — e o custo — do material enviado para destinação final.",
  },
];

function TratamentoEfluentesPage() {
  return (
    <>
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
              <div className="flex flex-col gap-6">
                <Badge>Serviço</Badge>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Tratamento de Efluentes: conformidade ambiental sem desperdício
                </h1>
                <p className="leading-relaxed text-muted">
                  Lançar efluente fora dos padrões expõe a empresa a multas, embargos e danos de
                  imagem. Por outro lado, uma estação superdimensionada consome energia, produtos
                  químicos e mão de obra muito acima do necessário.
                </p>
                <p className="leading-relaxed text-muted">
                  A Vid&rsquo;Água projeta o{" "}
                  <strong className="text-foreground">tratamento de efluentes</strong> a partir da
                  caracterização laboratorial do que a sua operação realmente gera.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="gradient">Falar com um Especialista no WhatsApp</Button>
                  </a>
                  <a href="#processos">
                    <Button variant="outline">Conhecer os processos</Button>
                  </a>
                </div>
              </div>
              <img decoding="async" fetchPriority="high" src={contextPhoto1} alt="Ambiente industrial com áreas verdes e profissional em visita" width={1536} height={1024} className="w-full h-auto rounded-md max-lg:aspect-video max-lg:object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceGrid currentSlug="tratamento-efluentes">
        <div className="flex flex-col gap-20">
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Ponto de partida
              </p>
              <H2>Caracterização do efluente antes do projeto</H2>
              <p className="leading-relaxed text-muted">
                Não existe estação padrão. O efluente de uma indústria de alimentos não se parece com
                o de uma metalúrgica ou o de uma lavanderia. Por isso o projeto começa no
                laboratório, com a medição dos parâmetros que definem a rota de tratamento:
              </p>
              <ul className="flex flex-col gap-3">
                <Bullet>Vazão média e vazão de pico da operação</Bullet>
                <Bullet>DBO, DQO, sólidos suspensos e sedimentáveis</Bullet>
                <Bullet>pH, temperatura, óleos e graxas</Bullet>
                <Bullet>Metais, nitrogênio, fósforo e carga bacteriológica</Bullet>
              </ul>
              <p className="leading-relaxed text-muted">
                Com esses dados definimos a combinação de processos e o padrão de lançamento exigido
                pelo órgão ambiental ou pela concessionária que recebe o efluente.
              </p>
              <img decoding="async" loading="lazy" src={contextPhoto2} alt="Amostras de água com diferentes aspectos em bancada de laboratório" width={1536} height={1024} className="w-full h-auto rounded-md" />
            </section>
          </Reveal>

          <Reveal>
            <section id="processos" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Processos empregados
              </p>
              <H2>Rotas de tratamento que combinamos no projeto</H2>
              <div className="grid gap-6 md:grid-cols-2">
                {processos.map((p, i) => (
                  <Reveal key={p.title} delay={i * 60}>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>{p.title}</CardTitle>
                        <CardDescription>{p.body}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Conformidade e operação
              </p>
              <H2>Licenças, laudos e acompanhamento da estação</H2>
              <p className="leading-relaxed text-muted">
                Elaboramos os relatórios técnicos exigidos no licenciamento ambiental e mantemos um
                cronograma de análises do efluente bruto e tratado, comprovando o atendimento aos
                padrões de lançamento ao longo do tempo.
              </p>
              <p className="leading-relaxed text-muted">
                Também assumimos a operação e a manutenção da estação: calibração das{" "}
                <Link to="/produtos/bomba-dosadora-agua" className={inlineLink}>
                  bombas dosadoras
                </Link>
                , controle de consumo de produtos químicos e ajuste dos processos conforme a
                variação da produção. Quando o efluente tratado pode voltar ao processo, avaliamos a{" "}
                <Link to="/servicos/agua-de-reuso" className={inlineLink}>
                  implantação de um sistema de água de reuso
                </Link>
                .
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Solicite um projeto de tratamento de efluentes</H2>
              <p className="leading-relaxed text-muted">
                Descreva a sua operação e, se já tiver, envie os laudos existentes. Nossa engenharia
                avalia e retorna com a proposta técnica.
              </p>

              <Card>
                <CardContent className="pt-6">
                  <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="empresa" className="text-sm font-semibold">
                          Empresa
                        </label>
                        <Input id="empresa" name="empresa" autoComplete="organization" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="responsavel" className="text-sm font-semibold">
                          Nome do responsável
                        </label>
                        <Input id="responsavel" name="responsavel" autoComplete="name" />
                      </div>
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
                      <label htmlFor="segmento" className="text-sm font-semibold">
                        Segmento da operação
                      </label>
                      <select
                        id="segmento"
                        name="segmento"
                        defaultValue=""
                        className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                      >
                        <option value="" disabled>
                          Selecione uma opção
                        </option>
                        <option>Alimentos e bebidas</option>
                        <option>Metalurgia e galvanoplastia</option>
                        <option>Química e farmacêutica</option>
                        <option>Lavanderia industrial</option>
                        <option>Efluente sanitário / condomínio</option>
                        <option>Outro</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="vazao" className="text-sm font-semibold">
                        Vazão estimada de efluente (m³/dia)
                      </label>
                      <Input id="vazao" name="vazao" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="descricao" className="text-sm font-semibold">
                        Situação atual e exigência do órgão ambiental
                      </label>
                      <Textarea id="descricao" name="descricao" rows={3} />
                    </div>
                    <div>
                      <Button type="submit" variant="gradient">
                        Solicitar Proposta Técnica
                      </Button>
                    </div>
                    <p className="text-xs italic text-muted">
                      Projetos para indústrias, condomínios e operações comerciais, com
                      acompanhamento do licenciamento ambiental.
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
