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
import contextPhoto1 from "@/assets/reuso-irrigacao-jardim.jpg";
import contextPhoto2 from "@/assets/agua-contexto-industrial.jpg";
import { ServiceGrid, QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection, WHATSAPP_URL } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["agua-de-reuso"];

const TITLE = "Água de Reuso: Sistemas, Economia e Conformidade | Vid'Água";
const DESCRIPTION =
  "Sistemas de água de reuso para indústrias e condomínios: redução da conta de água, segurança sanitária e retorno sobre o investimento.";

export const Route = createFileRoute("/_site/servicos/agua-de-reuso")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: AguaDeReusoPage,
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

const aplicacoes = [
  {
    title: "Condomínios e edifícios",
    body: "Rega de jardins, lavagem de garagens e calçadas e descarga de bacias sanitárias. São usos que não exigem água potável e costumam representar uma fatia relevante da conta.",
  },
  {
    title: "Indústrias",
    body: "Água de resfriamento, lavagem de pisos e equipamentos, sistemas de combate a incêndio e processos que toleram água de qualidade intermediária.",
  },
  {
    title: "Frotas e lava-rápidos",
    body: "Recirculação da água de lavagem com remoção de sólidos, óleos e tensoativos, reduzindo drasticamente o consumo por veículo.",
  },
  {
    title: "Áreas verdes e irrigação",
    body: "Aproveitamento de água de chuva e de efluente tratado para irrigação, com desinfecção dimensionada conforme o contato humano previsto.",
  },
];

function AguaDeReusoPage() {
  return (
    <>
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
              <div className="flex flex-col gap-6">
                <Badge>Serviço</Badge>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Água de Reuso: economia real com segurança sanitária
                </h1>
                <p className="leading-relaxed text-muted">
                  Boa parte da água potável que uma empresa ou um condomínio paga é usada em
                  atividades que não exigem potabilidade: lavagem, descarga, irrigação e
                  resfriamento. Tratar e reaproveitar essa água reduz a conta e a dependência da
                  concessionária.
                </p>
                <p className="leading-relaxed text-muted">
                  A Vid&rsquo;Água projeta sistemas de{" "}
                  <strong className="text-foreground">água de reuso</strong> com o grau de tratamento
                  adequado a cada finalidade — nem menos, nem mais do que o necessário.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="gradient">Falar com um Especialista no WhatsApp</Button>
                  </a>
                  <a href="#aplicacoes">
                    <Button variant="outline">Ver onde o reuso se aplica</Button>
                  </a>
                </div>
              </div>
              <img decoding="async" fetchPriority="high" src={contextPhoto1} alt="Irrigação de jardim em condomínio, aplicação de água de reuso" width={1536} height={1024} className="w-full h-auto rounded-md max-lg:aspect-video max-lg:object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceGrid currentSlug="agua-de-reuso">
        <div className="flex flex-col gap-20">
          <Reveal>
            <section id="aplicacoes" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Onde o reuso faz diferença
              </p>
              <H2>Aplicações mais comuns</H2>
              <div className="grid gap-6 md:grid-cols-2">
                {aplicacoes.map((a, i) => (
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
              <img decoding="async" loading="lazy" src={contextPhoto2} alt="Profissional em visita a área industrial que reaproveita água tratada" width={1536} height={1024} className="w-full h-auto rounded-md" />
            </section>
          </Reveal>

          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Tecnologias empregadas
              </p>
              <H2>O tratamento é definido pelo destino da água</H2>
              <p className="leading-relaxed text-muted">
                Cada finalidade exige um padrão de qualidade diferente. A partir da origem (efluente
                sanitário, água cinza, água de chuva ou efluente industrial) e do uso pretendido,
                combinamos:
              </p>
              <ul className="flex flex-col gap-3">
                <Bullet>Separação de sólidos, gordura e óleo na entrada do sistema</Bullet>
                <Bullet>Tratamento biológico ou físico-químico para redução de carga orgânica</Bullet>
                <Bullet>
                  Filtração multicamada e{" "}
                  <Link to="/produtos/filtros-de-agua" className={inlineLink}>
                    filtração por carvão ativado
                  </Link>{" "}
                  para cor e odor
                </Bullet>
                <Bullet>
                  Desinfecção com{" "}
                  <Link to="/produtos/bomba-dosadora-cloro" className={inlineLink}>
                    dosagem automática de cloro
                  </Link>{" "}
                  ou ultravioleta
                </Bullet>
                <Bullet>Rede independente, sinalizada, sem qualquer conexão com a rede potável</Bullet>
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Viabilidade
              </p>
              <H2>Retorno sobre o investimento e conformidade</H2>
              <p className="leading-relaxed text-muted">
                Antes de propor qualquer obra, levantamos o consumo atual, o custo do metro cúbico
                pago hoje e o volume que pode ser substituído por água de reuso. Esse estudo mostra,
                em números, o prazo de retorno do investimento.
              </p>
              <p className="leading-relaxed text-muted">
                O sistema é acompanhado por análises periódicas que comprovam o padrão da água de
                reuso e a ausência de risco sanitário — o mesmo rigor do nosso{" "}
                <Link to="/servicos/monitoramento-qualidade-agua" className={inlineLink}>
                  monitoramento da qualidade da água
                </Link>
                . Quando a origem é o efluente da própria operação, o projeto é integrado ao{" "}
                <Link to="/servicos/tratamento-efluentes" className={inlineLink}>
                  tratamento de efluentes
                </Link>
                .
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Avalie o reuso na sua operação</H2>
              <p className="leading-relaxed text-muted">
                Envie os dados básicos do seu consumo e nossa equipe retorna com uma avaliação
                preliminar de viabilidade.
              </p>

              <Card>
                <CardContent className="pt-6">
                  <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="empresa" className="text-sm font-semibold">
                          Empresa / Condomínio
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
                      <label htmlFor="finalidade" className="text-sm font-semibold">
                        Uso pretendido para a água de reuso
                      </label>
                      <select
                        id="finalidade"
                        name="finalidade"
                        defaultValue=""
                        className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                      >
                        <option value="" disabled>
                          Selecione uma opção
                        </option>
                        <option>Descarga sanitária e limpeza predial</option>
                        <option>Irrigação e áreas verdes</option>
                        <option>Processo industrial ou resfriamento</option>
                        <option>Lavagem de veículos e frota</option>
                        <option>Ainda não sei, quero uma avaliação</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="consumo" className="text-sm font-semibold">
                        Consumo mensal atual de água (m³ ou valor da conta)
                      </label>
                      <Input id="consumo" name="consumo" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="descricao" className="text-sm font-semibold">
                        Descreva brevemente a operação
                      </label>
                      <Textarea id="descricao" name="descricao" rows={3} />
                    </div>
                    <div>
                      <Button type="submit" variant="gradient">
                        Solicitar Estudo de Viabilidade
                      </Button>
                    </div>
                    <p className="text-xs italic text-muted">
                      Projetos para condomínios, indústrias e operações comerciais, com análises
                      periódicas de comprovação da qualidade.
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
