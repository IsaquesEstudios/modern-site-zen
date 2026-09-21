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

const page = PAGES_BY_SLUG["contaminacao-agua"];

const TITLE = "Água com Bactéria, Coliformes ou Contaminação: Tratamento | Vid'Água";
const DESCRIPTION =
  "Laudo reprovado? Água com bactéria, coliformes, nitrato ou água salobra? A Vid'Água possui soluções de emergência e desinfecção definitiva. Aja rápido!";

export const Route = createFileRoute("/_site/contaminacao-agua")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: ContaminacaoAguaPage,
});

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">{children}</h2>;
}

const inlineLink = "font-semibold text-accent underline-offset-4 hover:underline";

function ContaminacaoAguaPage() {
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
                  Água com Bactéria ou Contaminação Química? Aja rápido e proteja sua saúde
                </h1>
                <p className="leading-relaxed text-muted">
                  Diferente do barro ou da ferrugem, as maiores ameaças presentes na sua água são
                  totalmente invisíveis. Se um laudo apontou a presença de{" "}
                  <strong className="text-foreground">água com bactéria</strong>, coliformes ou
                  altos índices de compostos químicos nocivos, o fornecimento precisa de intervenção
                  imediata.
                </p>
                <p className="leading-relaxed text-muted">
                  Não arrisque a saúde da sua família, dos moradores do seu condomínio ou a licença
                  de operação da sua empresa. A Vid&rsquo;Água projeta e instala sistemas de
                  desinfecção, correção de pH e purificação extrema que eliminam qualquer patógeno
                  ou toxina, devolvendo a potabilidade absoluta à sua rede.
                </p>
                <div className="flex flex-wrap gap-4">
                  {/* TODO: trocar pelo número de WhatsApp oficial da Vid'Água */}
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="gradient">Falar com um Especialista Agora</Button>
                  </a>
                  <a href="#diagnostico">
                    <Button variant="outline">Preciso de uma Análise de Água Urgente</Button>
                  </a>
                </div>
              </div>
              <ImagePlaceholder label="Imagem" ratio="aspect-[4/3]" />
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
                O perigo invisível
              </p>
              <H2>O que os olhos não veem, o laudo revela</H2>
              <p className="leading-relaxed text-muted">
                Acreditamos que a água cristalina é segura, mas isso é um erro perigoso. Os poços
                artesianos e as redes desprotegidas estão sujeitos a três grandes categorias de
                contaminação que exigem tratamentos completamente diferentes:
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Contaminação biológica</CardTitle>
                    <CardDescription>
                      A mais crítica para a saúde. Coliformes totais, Escherichia coli e outros vírus
                      e bactérias causam surtos gastrointestinais severos, geralmente por infiltração
                      de esgoto ou fossas no lençol freático.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Contaminação química</CardTitle>
                    <CardDescription>
                      Nitrato (de fertilizantes ou esgoto) é perigoso sobretudo para bebês e
                      gestantes. A água ácida, de pH muito baixo, corrói tubulações de cobre e metal,
                      liberando toxinas na água que você bebe.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Excesso de sais (salinidade)</CardTitle>
                    <CardDescription>
                      Comum em regiões litorâneas ou perfurações profundas, onde a água apresenta
                      alta concentração de cloretos.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <ImagePlaceholder label="Imagem" ratio="aspect-[16/7]" />
            </section>
          </Reveal>

          {/* SEÇÃO 3 */}
          <Reveal>
            <section id="diagnostico" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Diagnóstico rápido
              </p>
              <H2>Você não pode tratar o que não conhece</H2>
              <p className="leading-relaxed text-muted">
                Filtros comuns de barro ou carvão{" "}
                <strong className="text-foreground">não removem</strong> bactérias, nitrato ou
                excesso de sal. Instalar qualquer equipamento sem saber a gravidade da contaminação
                é colocar vidas em risco.
              </p>
              <p className="leading-relaxed text-muted">
                O único caminho seguro é o diagnóstico laboratorial. Se você suspeita de
                contaminação ou tem pessoas doentes no local, o primeiro passo obrigatório é
                realizar uma coleta para atestar a qualidade atual.
              </p>
              <Card tone="gradientSoft">
                <CardHeader>
                  <CardTitle>Ainda não tem um laudo atualizado?</CardTitle>
                  <CardDescription>Não perca tempo — cada dia conta.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/servicos/analise-de-agua">
                    <Button variant="gradient">Solicitar uma Análise de Água Urgente</Button>
                  </Link>
                </CardContent>
              </Card>
            </section>
          </Reveal>

          {/* SEÇÃO 4 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Nossas soluções técnicas
              </p>
              <H2>Tecnologia avançada para eliminação de qualquer ameaça</H2>
              <p className="leading-relaxed text-muted">
                A partir do momento em que o laudo identifica o contaminante, a engenharia da
                Vid&rsquo;Água entra em ação com a tecnologia corretiva exata:
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Bactérias e coliformes</CardTitle>
                    <CardDescription>
                      Dosagem automática de cloro (hipoclorito) na medida exata da sua vazão, ou
                      esterilizadores por radiação ultravioleta (UV), que destroem o DNA dos
                      micro-organismos sem adicionar produtos químicos.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Correção de pH (água ácida)</CardTitle>
                    <CardDescription>
                      Filtros com mídias alcalinizantes (como calcita) elevam o pH da água,
                      estabilizando-a e interrompendo imediatamente a corrosão dos canos.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Água salobra ou com nitrato</CardTitle>
                    <CardDescription>
                      Osmose reversa: membranas de alta pressão separam as moléculas de água dos
                      sais e toxinas em nível microscópico, transformando água intragável em água
                      100% pura.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </section>
          </Reveal>

          {/* SEÇÃO 5 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Prevenção e segurança
              </p>
              <H2>O problema foi resolvido. Como garantir que não volte?</H2>
              <p className="leading-relaxed text-muted">
                Especialmente para condomínios, hospitais e indústrias de alimentos, não basta
                instalar um dosador de cloro. A lei (Portaria 888) exige a garantia contínua de
                potabilidade.
              </p>
              <p className="leading-relaxed text-muted">
                A Vid&rsquo;Água oferece contratos de monitoramento contínuo. Nossa equipe realiza
                visitas periódicas, recolhe amostras, calibra as bombas dosadoras e emite laudos
                regulares, garantindo que o seu sistema de desinfecção esteja operando 24 horas por
                dia, 7 dias por semana.{" "}
                <Link to="/servicos/monitoramento-qualidade-agua" className={inlineLink}>
                  Conheça nosso serviço de Monitoramento da Qualidade da Água
                </Link>
                .
              </p>
            </section>
          </Reveal>

          {/* SEÇÃO 6 — CTA final e formulário */}
          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Interrompa os riscos imediatamente</H2>
              <p className="leading-relaxed text-muted">
                Se a sua água não está segura, cada minuto conta. Entre em contato com a equipe de
                especialistas da Vid&rsquo;Água para avaliação do seu laudo ou agendamento de uma
                intervenção rápida.
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
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="laudo" className="text-sm font-semibold">
                          Já possui um laudo de análise de água?
                        </label>
                        <select
                          id="laudo"
                          name="laudo"
                          defaultValue=""
                          className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                        >
                          <option value="" disabled>
                            Selecione uma opção
                          </option>
                          <option>Sim</option>
                          <option>Não, preciso fazer</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="suspeita" className="text-sm font-semibold">
                          Qual o problema suspeito ou confirmado?
                        </label>
                        <select
                          id="suspeita"
                          name="suspeita"
                          defaultValue=""
                          className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                        >
                          <option value="" disabled>
                            Selecione uma opção
                          </option>
                          <option>Bactérias / Coliformes</option>
                          <option>Água salobra</option>
                          <option>Nitrato</option>
                          <option>Água ácida</option>
                          <option>Outro</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button type="submit" variant="gradient">
                        Solicitar Intervenção / Tratamento
                      </Button>
                      {/* TODO: trocar pelo número de WhatsApp oficial da Vid'Água */}
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" type="button">
                          Falar no WhatsApp
                        </Button>
                      </a>
                    </div>
                    <p className="text-xs italic text-muted">
                      Atendemos projetos residenciais, condomínios e indústrias. Laudos e projetos em
                      total conformidade com o Ministério da Saúde (Portaria 888).
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
