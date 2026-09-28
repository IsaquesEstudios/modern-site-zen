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
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ServiceGrid, QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection, WHATSAPP_URL } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";
import pocoImage from "@/assets/poco-artesiano.jpg.asset.json";

const page = PAGES_BY_SLUG["manutencao-poco-artesiano"];

const TITLE = "Manutenção e Tratamento de Poço Artesiano | Vid'Água";
const DESCRIPTION =
  "Limpeza, desinfecção e tratamento de água de poço artesiano com laudo técnico. Manutenção preventiva e corretiva em São Paulo e região.";

export const Route = createFileRoute("/_site/servicos/manutencao-poco-artesiano")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: ManutencaoPocoPage,
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

const escopo = [
  {
    title: "Limpeza e desinfecção do poço",
    body: "Remoção de material acumulado no fundo, higienização das paredes e desinfecção com produto adequado, seguida de esgotamento até a água voltar a sair limpa.",
  },
  {
    title: "Verificação da bomba submersa",
    body: "Teste de rendimento, medição de corrente, avaliação do cabo elétrico e do quadro de comando. Uma bomba trabalhando forçada é a causa mais comum de parada inesperada.",
  },
  {
    title: "Níveis estático e dinâmico",
    body: "Medimos o nível da água parada e em bombeamento para saber se o poço está sendo explorado acima da sua capacidade — informação que evita queimar equipamento e comprometer o aquífero.",
  },
  {
    title: "Tratamento da água captada",
    body: "Água de poço costuma trazer ferro, manganês, dureza ou carga bacteriológica. Depois da manutenção, dimensionamos a filtração e a cloração necessárias.",
  },
];

function ManutencaoPocoPage() {
  return (
    <>
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
              <div className="flex flex-col gap-6">
                <Badge>Serviço</Badge>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Manutenção e Tratamento de Poço Artesiano
                </h1>
                <p className="leading-relaxed text-muted">
                  Um poço artesiano não é uma obra que se faz e se esquece. Com o tempo, o fundo
                  acumula material, a bomba perde rendimento e a água pode voltar a apresentar ferro,
                  turbidez ou contaminação bacteriológica.
                </p>
                <p className="leading-relaxed text-muted">
                  A Vid&rsquo;Água realiza a{" "}
                  <strong className="text-foreground">manutenção completa do poço artesiano</strong>{" "}
                  e o tratamento da água captada, com laudo técnico ao final do serviço.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="gradient">Falar com um Especialista no WhatsApp</Button>
                  </a>
                  <a href="#escopo">
                    <Button variant="outline">Ver o que a manutenção inclui</Button>
                  </a>
                </div>
              </div>
              <img
                src={pocoImage.url}
                alt="Estrutura hidráulica de poço artesiano"
                className="w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceGrid currentSlug="manutencao-poco-artesiano">
        <div className="flex flex-col gap-20">
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Quando chamar a manutenção
              </p>
              <H2>Sinais de que o seu poço precisa de atenção</H2>
              <p className="leading-relaxed text-muted">
                Na maioria dos casos, o poço avisa antes de parar. Fique atento a:
              </p>
              <ul className="flex flex-col gap-3">
                <Bullet>Queda de vazão ou pressão nas torneiras do imóvel</Bullet>
                <Bullet>Água saindo turva, com areia ou com coloração amarelada</Bullet>
                <Bullet>Cheiro de terra, de ovo podre ou gosto metálico</Bullet>
                <Bullet>Bomba ligando e desligando com frequência ou disjuntor desarmando</Bullet>
                <Bullet>Resultado de análise fora dos padrões de potabilidade</Bullet>
              </ul>
              <p className="leading-relaxed text-muted">
                Como referência, recomendamos manutenção preventiva a cada 12 meses e{" "}
                <Link to="/servicos/analise-de-agua" className={inlineLink}>
                  análise da água
                </Link>{" "}
                no mínimo semestral para poços de uso coletivo.
              </p>
              <ImagePlaceholder label="Imagem" ratio="aspect-[16/7]" />
            </section>
          </Reveal>

          <Reveal>
            <section id="escopo" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Escopo do serviço
              </p>
              <H2>O que a manutenção da Vid&rsquo;Água inclui</H2>
              <div className="grid gap-6 md:grid-cols-2">
                {escopo.map((s, i) => (
                  <Reveal key={s.title} delay={i * 60}>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>{s.title}</CardTitle>
                        <CardDescription>{s.body}</CardDescription>
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
                Documentação
              </p>
              <H2>Laudo técnico e acompanhamento sanitário</H2>
              <p className="leading-relaxed text-muted">
                Ao final da manutenção emitimos o relatório técnico do serviço e, quando solicitado,
                o laudo de potabilidade da água. Para poços já legalizados, também fazemos o{" "}
                <Link to="/servicos/monitoramento-poco-artesiano" className={inlineLink}>
                  monitoramento periódico junto à Covisa
                </Link>
                .
              </p>
              <p className="leading-relaxed text-muted">
                Para condomínios, indústrias e propriedades rurais, o acompanhamento contínuo pode
                ser feito por meio do nosso{" "}
                <Link to="/servicos/monitoramento-qualidade-agua" className={inlineLink}>
                  plano de monitoramento da qualidade da água
                </Link>
                .
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Solicite a manutenção do seu poço</H2>
              <p className="leading-relaxed text-muted">
                Conte o que está acontecendo com o seu poço e nossa equipe técnica retorna com a
                orientação e o orçamento adequados.
              </p>

              <Card>
                <CardContent className="pt-6">
                  <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="responsavel" className="text-sm font-semibold">
                        Nome do responsável
                      </label>
                      <Input id="responsavel" name="responsavel" autoComplete="name" />
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
                      <label htmlFor="situacao" className="text-sm font-semibold">
                        Situação do poço
                      </label>
                      <select
                        id="situacao"
                        name="situacao"
                        defaultValue=""
                        className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                      >
                        <option value="" disabled>
                          Selecione uma opção
                        </option>
                        <option>Manutenção preventiva anual</option>
                        <option>Queda de vazão ou bomba com problema</option>
                        <option>Água suja, com cheiro ou fora do padrão</option>
                        <option>Poço parado, quero reativar</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="descricao" className="text-sm font-semibold">
                        Conte brevemente o que está acontecendo
                      </label>
                      <Textarea id="descricao" name="descricao" rows={3} />
                    </div>
                    <div>
                      <Button type="submit" variant="gradient">
                        Solicitar Orçamento de Manutenção
                      </Button>
                    </div>
                    <p className="text-xs italic text-muted">
                      Equipe técnica com certificações NR-33 e NR-35. Atendimento a residências,
                      propriedades rurais, condomínios e indústrias.
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
