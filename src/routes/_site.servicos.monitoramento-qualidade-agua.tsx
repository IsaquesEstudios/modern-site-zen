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
import contextPhoto1 from "@/assets/coleta-agua-campo.jpg";
import { ServiceGrid, QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection, WHATSAPP_URL } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";
import monitoramentoImage from "@/assets/monitoramento.jpg.asset.json";

const page = PAGES_BY_SLUG["monitoramento-qualidade-agua"];

const TITLE = "Monitoramento da Qualidade da Água: Contrato para Empresas | Vid'Água";
const DESCRIPTION =
  "Evite multas e riscos à saúde. A Vid'Água oferece contrato de monitoramento da qualidade da água e consultoria hídrica para condomínios e indústrias.";

export const Route = createFileRoute("/_site/servicos/monitoramento-qualidade-agua")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: MonitoramentoQualidadeAguaPage,
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

function MonitoramentoQualidadeAguaPage() {
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
                  Monitoramento da Qualidade da Água: Segurança Contínua para o seu Negócio
                </h1>
                <p className="leading-relaxed text-muted">
                  Garantir a potabilidade da água uma única vez não é suficiente para proteger o seu
                  condomínio, indústria ou estabelecimento comercial. Oscilações climáticas, falhas
                  em equipamentos e mudanças no lençol freático podem alterar os parâmetros hídricos
                  de um dia para o outro.
                </p>
                <p className="leading-relaxed text-muted">
                  Para empresas que não podem correr riscos sanitários ou operacionais, a
                  Vid&rsquo;Água oferece um serviço completo de{" "}
                  <strong className="text-foreground">monitoramento da qualidade da água</strong>.
                  Assumimos a coleta regular, as análises laboratoriais e a calibração de
                  equipamentos, garantindo conformidade com a Portaria 888.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={`#${QUOTE_ANCHOR}`}>
                    <Button variant="gradient">Solicitar Proposta de Monitoramento</Button>
                  </a>
                  <a href="#contrato">
                    <Button variant="outline">Entender como funciona o contrato</Button>
                  </a>
                </div>
              </div>
              <img
                src={monitoramentoImage.url}
                alt="Equipamentos da Vid'Água para monitoramento da qualidade da água"
                className="w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceGrid currentSlug="monitoramento-qualidade-agua">
        <div className="flex flex-col gap-20">
          {/* SEÇÃO 2 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Análise pontual vs. monitoramento
              </p>
              <H2>Por que um laudo antigo não protege sua empresa?</H2>
              <p className="leading-relaxed text-muted">
                Muitos gestores cometem o erro de fazer um{" "}
                <strong className="text-foreground">diagnóstico da água</strong> apenas quando
                inauguram um poço ou quando o fiscal bate à porta. Uma{" "}
                <Link to="/servicos/analise-de-agua" className={inlineLink}>
                  análise de água
                </Link>{" "}
                pontual é apenas uma &ldquo;fotografia&rdquo; daquele momento exato.
              </p>
              <p className="leading-relaxed text-muted">
                No entanto, a legislação exige garantia contínua. Para hospitais, fábricas de
                alimentos e condomínios, a nossa{" "}
                <strong className="text-foreground">consultoria hídrica</strong> transforma essa
                fotografia em um filme contínuo de segurança. Monitoramos o comportamento
                físico-químico e bacteriológico da sua rede, antecipando problemas antes que a água
                turva chegue às torneiras ou que uma contaminação paralise sua produção.
              </p>
              <img src={contextPhoto1} alt="Coleta de amostra de água em ponto externo" width={1440} height={1088} loading="lazy" className="w-full h-auto rounded-md" />
            </section>
          </Reveal>

          {/* SEÇÃO 3 */}
          <Reveal>
            <section id="contrato" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                O que está incluso
              </p>
              <H2>Como funciona o contrato de monitoramento de água?</H2>
              <p className="leading-relaxed text-muted">
                Terceirizar a gestão hídrica para a Vid&rsquo;Água significa eliminar a dor de cabeça
                com fiscalizações e focar no que realmente importa: a gestão do seu negócio. Ao
                firmar um <strong className="text-foreground">contrato de monitoramento</strong>{" "}
                conosco, sua empresa passa a contar com um escopo robusto e previsível:
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Cronograma de coletas</CardTitle>
                    <CardDescription>
                      Duas visitas mensais, ou visitas extras em caso de necessidade, para coleta de
                      amostras em pontos estratégicos.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Emissão de laudos oficiais</CardTitle>
                    <CardDescription>
                      Análises laboratoriais com emissão de relatórios atestando a potabilidade ou
                      apontando desvios.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Manutenção preventiva de equipamentos</CardTitle>
                    <CardDescription>
                      Verificação de bombas dosadoras e verificação de produtos químicos.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Gestão de crise</CardTitle>
                    <CardDescription>
                      Se os parâmetros saírem do padrão, nossa engenharia intervém rapidamente para
                      corrigir o pH, regular a cloração ou ajustar a filtração.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <p className="leading-relaxed text-muted">
                Conheça também nossas{" "}
                <Link to="/produtos/bomba-dosadora-cloro" className={inlineLink}>
                  bombas dosadoras
                </Link>{" "}
                e a{" "}
                <Link to="/servicos/manutencao-sistemas-tratamento" className={inlineLink}>
                  manutenção de sistemas de tratamento
                </Link>
                .
              </p>
            </section>
          </Reveal>

          {/* SEÇÃO 4 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Para quem é este serviço
              </p>
              <H2>Especialistas no seu setor de atuação</H2>
              <p className="leading-relaxed text-muted">
                Cada setor possui normativas específicas de Vigilância Sanitária e exigências
                operacionais diferentes. A Vid&rsquo;Água possui mais de 30 anos de expertise em{" "}
                <strong className="text-foreground">consultoria hídrica</strong> para diversos nichos
                de mercado:
              </p>
              <ul className="flex flex-col gap-3">
                <Bullet>
                  <strong className="text-foreground">Indústrias e fábricas:</strong> controle
                  rigoroso para água de caldeiras, torres de resfriamento e processos produtivos.{" "}
                  <Link to="/servicos/tratamento-de-agua-industrial" className={inlineLink}>
                    Veja nossas soluções industriais
                  </Link>
                  .
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Rede hoteleira:</strong> segurança sanitária e
                  excelência para a água servida aos hóspedes em chuveiros e cozinhas.{" "}
                  <Link to="/tratamento-agua-hotel" className={inlineLink}>
                    Saiba mais sobre tratamento para hotéis
                  </Link>
                  .
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Bares e restaurantes:</strong> garantia de que
                  o gelo, o café e o preparo de alimentos utilizem água 100% segura e livre de
                  odores.{" "}
                  <Link to="/tratamento-agua-restaurante" className={inlineLink}>
                    Veja soluções para restaurantes
                  </Link>
                  .
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Condomínios residenciais:</strong> proteção da
                  saúde dos moradores e preservação da estrutura hidráulica do prédio contra
                  incrustações e corrosão.
                </Bullet>
              </ul>
            </section>
          </Reveal>

          {/* SEÇÃO 5 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Captações subterrâneas
              </p>
              <H2>A importância do monitoramento de poço artesiano</H2>
              <p className="leading-relaxed text-muted">
                Se a sua empresa capta água do subsolo, a responsabilidade legal é dobrada. A Vigilância
                Sanitária (Covisa) exige a comprovação periódica da qualidade da água do poço.
              </p>
            </section>
          </Reveal>

          {/* SEÇÃO 6 — CTA final e formulário */}
          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Proteja sua operação com quem entende do assunto</H2>
              <p className="leading-relaxed text-muted">
                Profissionalize a gestão hídrica do seu negócio hoje mesmo. Fale com o nosso
                departamento de engenharia e receba um plano de monitoramento contínuo sob medida
                para o volume e a complexidade da sua operação.
              </p>

              <Card>
                <CardContent className="pt-6">
                  <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="responsavel" className="text-sm font-semibold">
                          Nome do responsável
                        </label>
                        <Input id="responsavel" name="responsavel" autoComplete="name" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="cargo" className="text-sm font-semibold">
                          Cargo (ex: síndico, gerente, engenheiro)
                        </label>
                        <Input id="cargo" name="cargo" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="empresa" className="text-sm font-semibold">
                        Nome da empresa / condomínio
                      </label>
                      <Input id="empresa" name="empresa" autoComplete="organization" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="telefone" className="text-sm font-semibold">
                          Telefone corporativo / WhatsApp
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
                        <label htmlFor="instalacao" className="text-sm font-semibold">
                          Qual o perfil da instalação?
                        </label>
                        <select
                          id="instalacao"
                          name="instalacao"
                          defaultValue=""
                          className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                        >
                          <option value="" disabled>
                            Selecione uma opção
                          </option>
                          <option>Condomínio</option>
                          <option>Indústria</option>
                          <option>Hotelaria</option>
                          <option>Alimentos / Restaurante</option>
                          <option>Hospitalar</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="captacao" className="text-sm font-semibold">
                          A captação de água é feita por
                        </label>
                        <select
                          id="captacao"
                          name="captacao"
                          defaultValue=""
                          className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-focus"
                        >
                          <option value="" disabled>
                            Selecione uma opção
                          </option>
                          <option>Concessionária</option>
                          <option>Poço artesiano</option>
                          <option>Caminhão-pipa</option>
                          <option>Mista</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Button type="submit" variant="gradient">
                        Solicitar Proposta de Monitoramento
                      </Button>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" type="button">
                          Falar no WhatsApp
                        </Button>
                      </a>
                    </div>
                    <p className="text-xs italic text-muted">
                      Atendimento corporativo em nível nacional. Consultores disponíveis em horário
                      comercial para elaboração de propostas, cronogramas físicos e SLAs de
                      atendimento.
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
