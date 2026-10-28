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
import { ServiceGrid, QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection, WHATSAPP_URL } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";
import solucoesImageSrc from "@/assets/solucoes-empresariais.jpg";
const solucoesImage = { url: solucoesImageSrc };

const page = PAGES_BY_SLUG["tratamento-de-agua-industrial"];

const TITLE = "Tratamento de Água Industrial e para Empresas | Vid'Água";
const DESCRIPTION =
  "Tratamento de água para indústrias, condomínios, hotéis e restaurantes: projeto dimensionado, instalação, laudos e manutenção preventiva.";

export const Route = createFileRoute("/_site/servicos/tratamento-de-agua-industrial")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: TratamentoIndustrialPage,
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

const setores = [
  { label: "Hotéis e pousadas", to: "/tratamento-agua-hotel" },
  { label: "Restaurantes e cozinhas industriais", to: "/tratamento-agua-restaurante" },
  { label: "Piscinas de condomínios e clubes", to: "/tratamento-agua-piscina" },
  { label: "Academias, clínicas e consultórios", to: "/tratamento-agua-comercial" },
] as const;

const etapas = [
  {
    title: "Diagnóstico e análise laboratorial",
    body: "Coleta em todos os pontos relevantes da instalação e análise no nosso laboratório. É o laudo que define a rota de tratamento.",
  },
  {
    title: "Projeto e dimensionamento",
    body: "Cálculo por vazão de pico, pressão disponível, área técnica e carga de contaminantes, com previsão de consumo de insumos e de energia.",
  },
  {
    title: "Instalação e start-up",
    body: "Montagem, integração à rede hidráulica existente, regulagem das dosagens e entrega do sistema operando dentro dos parâmetros de projeto.",
  },
  {
    title: "Operação assistida e laudos",
    body: "Contrato de manutenção preventiva, troca de mídias no prazo, calibração das dosadoras e emissão dos laudos exigidos pelos órgãos fiscalizadores.",
  },
];

function TratamentoIndustrialPage() {
  return (
    <>
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
              <div className="flex flex-col gap-6">
                <div className="flex"><Badge>Serviço</Badge></div>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Tratamento de Água para Empresas, Indústrias e Condomínios
                </h1>
                <p className="leading-relaxed text-muted">
                  Em uma operação comercial ou industrial, a água não é um detalhe: ela entra no
                  processo, passa por caldeiras e trocadores, abastece cozinhas e vestiários e é
                  cobrada em laudo pela vigilância sanitária. Uma falha ali para a produção e gera
                  autuação.
                </p>
                <p className="leading-relaxed text-muted">
                  A Vid&rsquo;Água projeta, instala e mantém sistemas de{" "}
                  <strong className="text-foreground">tratamento de água industrial</strong> e
                  comercial dimensionados para o porte real de cada instalação.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="gradient">Falar com um Especialista no WhatsApp</Button>
                  </a>
                  <a href="#setores">
                    <Button variant="outline">Ver soluções por setor</Button>
                  </a>
                </div>
              </div>
              <img decoding="async" fetchPriority="high"
                width={1740} height={1086} src={solucoesImage.url}
                alt="Sistema industrial de tratamento de água"
                className="w-full max-lg:aspect-video max-lg:object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceGrid currentSlug="tratamento-de-agua-industrial">
        <div className="flex flex-col gap-20">
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                O que está em jogo
              </p>
              <H2>Água fora de padrão custa caro antes de virar multa</H2>
              <p className="leading-relaxed text-muted">
                Muito antes de uma notificação, a água inadequada já está cobrando o seu preço na
                operação:
              </p>
              <ul className="flex flex-col gap-3">
                <Bullet>Incrustação em caldeiras, trocadores e torres de resfriamento</Bullet>
                <Bullet>Queima de resistências e perda de eficiência térmica</Bullet>
                <Bullet>Produto final com cor, sabor ou aspecto alterado</Bullet>
              </ul>
              <img decoding="async" loading="lazy" src={contextPhoto1} alt="Técnico em visita a planta industrial para avaliar o tratamento de água" width={1536} height={1024} className="w-full h-auto rounded-md" />
            </section>
          </Reveal>

          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Como conduzimos o projeto
              </p>
              <H2>Do laudo à operação assistida</H2>
              <div className="grid gap-6 md:grid-cols-2">
                {etapas.map((e, i) => (
                  <Reveal key={e.title} delay={i * 60}>
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle>{e.title}</CardTitle>
                        <CardDescription>{e.body}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Reveal>
                ))}
              </div>
              <p className="leading-relaxed text-muted">
                Tudo começa pela{" "}
                <Link to="/servicos/analise-de-agua" className={inlineLink}>
                  análise de água
                </Link>{" "}
                e segue com{" "}
                <Link to="/servicos/monitoramento-qualidade-agua" className={inlineLink}>
                  monitoramento contínuo
                </Link>{" "}
                e{" "}
                <Link to="/servicos/manutencao-sistemas-tratamento" className={inlineLink}>
                  manutenção dos sistemas instalados
                </Link>
                .
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section id="setores" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Soluções por setor
              </p>
              <H2>Cada operação tem um ponto crítico diferente</H2>
              <ul className="flex flex-col">
                {setores.map((s) => (
                  <li key={s.to}>
                    <Link
                      to={s.to}
                      className="group flex items-center justify-between gap-6 border-t border-border py-6 transition-colors duration-300 hover:border-accent"
                    >
                      <span className="font-display text-lg font-semibold">{s.label}</span>
                      <span className="shrink-0 text-sm font-semibold text-accent transition-transform duration-300 group-hover:translate-x-1">
                        Ver solução →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="leading-relaxed text-muted">
                Para indústrias com captação própria, o projeto normalmente envolve também a{" "}
                <Link to="/servicos/monitoramento-poco-artesiano" className={inlineLink}>
                  monitoramento do poço artesiano junto à Covisa
                </Link>{" "}
                e a{" "}
                <Link to="/servicos/manutencao-poco-artesiano" className={inlineLink}>
                  manutenção da captação
                </Link>
                .
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>Solicite um projeto para a sua operação</H2>
              <p className="leading-relaxed text-muted">
                Informe o perfil da instalação e o problema observado. Nossa engenharia retorna com
                a proposta técnica e o orçamento.
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
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="perfil" className="text-sm font-semibold">
                          Perfil da instalação
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
                          <option>Indústria</option>
                          <option>Condomínio</option>
                          <option>Hotel ou pousada</option>
                          <option>Restaurante ou cozinha industrial</option>
                          <option>Clínica, academia ou consultório</option>
                          <option>Outro</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="captacao" className="text-sm font-semibold">
                          Origem da água
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
                    <div className="flex flex-col gap-2">
                      <label htmlFor="descricao" className="text-sm font-semibold">
                        Descreva o problema ou a necessidade
                      </label>
                      <Textarea id="descricao" name="descricao" rows={3} />
                    </div>
                    <div>
                      <Button type="submit" variant="gradient">
                        Solicitar Proposta Técnica
                      </Button>
                    </div>
                    <p className="text-xs italic text-muted">
                      Atendimento técnico em São Paulo e região; fornecimento de equipamentos e
                      insumos para todo o Brasil.
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
