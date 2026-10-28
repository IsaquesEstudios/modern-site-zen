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
import laudoImage from "@/assets/qualidade-agua-laudo.jpg";
import parametrosImage from "@/assets/portaria-888-parametros.jpg";
import { ServiceGrid, QUOTE_ANCHOR } from "@/components/ServiceSidebar";
import { CTASection, WHATSAPP_URL } from "@/components/PageTemplate";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["qualidade-agua-anvisa"];

const TITLE = "Qual a qualidade da água potável segundo a ANVISA e Portaria 888? | Vid'Água";
const DESCRIPTION =
  "Entenda as exigências da ANVISA (RDC 275) e os parâmetros da Portaria 888 para aprovar a qualidade da água potável na sua empresa ou condomínio.";

export const Route = createFileRoute("/_site/qualidade-agua-anvisa")({
  head: () => headFor({ ...page, title: TITLE, description: DESCRIPTION }),
  component: QualidadeAguaAnvisaPage,
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

function QualidadeAguaAnvisaPage() {
  return (
    <>
      {/* SEÇÃO 1 — Hero */}
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
              <div className="flex flex-col gap-6">
                <Badge>Legislação</Badge>
                <h1 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">
                  Você sabe qual a qualidade da água potável segundo a ANVISA?
                </h1>
                <p className="leading-relaxed text-muted">
                  Quando abrimos a torneira de casa para beber um copo d&rsquo;água, nossa única
                  preocupação costuma ser se ela está gelada. Porém, quando falamos de indústrias,
                  condomínios, hotéis ou fábricas de alimentos, a conversa muda completamente de
                  figura. A água deixa de ser apenas um recurso e passa a ser uma{" "}
                  <strong className="text-foreground">responsabilidade sanitária e legal</strong>.
                </p>
                <p className="leading-relaxed text-muted">
                  Mas afinal, quem define o que é uma água segura para consumo no Brasil? Muitas
                  pessoas nos perguntam sobre o padrão exigido pela ANVISA (Agência Nacional de
                  Vigilância Sanitária). A verdade é que garantir uma água 100% segura exige o
                  cumprimento de legislações rigorosas, e entender essas regras é o primeiro passo
                  para proteger a saúde das pessoas e evitar multas severas para o seu negócio.
                </p>
                <p className="leading-relaxed text-muted">
                  Vamos desmistificar de forma simples o que a lei exige e como você pode ter
                  certeza de que a sua água está aprovada.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="gradient">Falar com um Especialista Agora</Button>
                  </a>
                  <a href="#portaria-888">
                    <Button variant="outline">Ver os parâmetros da Portaria 888</Button>
                  </a>
                </div>
              </div>
              <img decoding="async" fetchPriority="high"
                src={laudoImage}
                alt="Copo de amostra de água cristalina ao lado de laudo técnico e lupa em bancada de laboratório"
                width={1200}
                height={912}
                className="w-full max-lg:aspect-video max-lg:object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ServiceGrid>
        <div className="flex flex-col gap-20">
          {/* SEÇÃO 2 — RDC 275 */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                O que a ANVISA exige
              </p>
              <H2>O que a RDC 275/2002 da ANVISA estabelece?</H2>
              <p className="leading-relaxed text-muted">
                A ANVISA tem um papel crucial na proteção da saúde pública, especialmente quando o
                assunto é o manuseio e a fabricação de alimentos. É aí que entra a famosa{" "}
                <strong className="text-foreground">RDC 275/2002</strong>.
              </p>
              <p className="leading-relaxed text-muted">
                Se você atua no setor alimentício, hospitalar ou de serviços, já deve ter ouvido
                falar nos POPs (Procedimentos Padrões de Higiene Operacional). O que a RDC 275 faz é
                exigir que toda empresa tenha um controle rigoroso sobre os seus processos de
                higiene. E adivinhe qual é o item número um dessa lista?{" "}
                <strong className="text-foreground">O controle da potabilidade da água.</strong>
              </p>
              <p className="leading-relaxed text-muted">
                Isso significa que, segundo a ANVISA, não basta dizer que a sua água é limpa porque
                ela vem da rua ou porque o seu poço é profundo. A RDC 275 exige que você{" "}
                <strong className="text-foreground">prove</strong> isso através de laudos técnicos
                periódicos, garantindo que a água usada para lavar alimentos, higienizar
                equipamentos, fazer gelo ou servir aos funcionários não seja um veículo de
                contaminação.
              </p>
            </section>
          </Reveal>

          {/* SEÇÃO 3 — Três pilares */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                O check-up da água
              </p>
              <H2>Requisitos para aprovar a qualidade da água</H2>
              <p className="leading-relaxed text-muted">
                Para que um laboratório emita um laudo dizendo &ldquo;Sim, esta água está aprovada
                para consumo&rdquo;, ela precisa passar por um verdadeiro &ldquo;check-up&rdquo; que
                avalia três pilares fundamentais:
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Requisitos biológicos</CardTitle>
                    <CardDescription>
                      A água não pode, em hipótese alguma, conter bactérias causadoras de doenças
                      (patógenos), vírus ou parasitas. Este é o critério de maior urgência para a
                      saúde.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Requisitos físicos</CardTitle>
                    <CardDescription>
                      Estão ligados à aparência da água. Ela não pode ser turva (aparência de barro
                      ou leite), não pode ter cheiro desagradável e não pode ter cor ou sabor
                      alterados.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Requisitos químicos</CardTitle>
                    <CardDescription>
                      A água não pode conter metais pesados (como excesso de chumbo, ferro ou
                      manganês) nem substâncias tóxicas, além de precisar manter um nível seguro de
                      cloro para se manter protegida dentro das tubulações.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <p className="leading-relaxed text-muted">
                Mas onde estão os números exatos desses requisitos? É aqui que a ANVISA passa o
                bastão para o Ministério da Saúde.
              </p>
            </section>
          </Reveal>

          {/* SEÇÃO 4 — Portaria 888 */}
          <Reveal>
            <section id="portaria-888" className="flex flex-col gap-6 scroll-mt-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Quem define os limites
              </p>
              <H2>Análise de Água Potável: Portaria GM/MS N° 888</H2>
              <p className="leading-relaxed text-muted">
                Aqui está o grande segredo técnico:{" "}
                <strong className="text-foreground">
                  a ANVISA exige que você controle a água, mas quem dita os números e os limites
                  exatos desse controle é o Ministério da Saúde
                </strong>
                , através da atual{" "}
                <Link to="/servicos/monitoramento-qualidade-agua" className={inlineLink}>
                  Portaria GM/MS N° 888
                </Link>{" "}
                (que atualizou as antigas Portarias 2914 e de Consolidação n° 5).
              </p>
              <p className="leading-relaxed text-muted">
                A Portaria 888 é a &ldquo;Bíblia&rdquo; do{" "}
                <Link to="/servicos/tratamento-de-agua" className={inlineLink}>
                  tratamento de água no Brasil
                </Link>
                . É ela que o nosso laboratório e nossa equipe de engenharia utilizam como base para
                avaliar se a sua água está segura ou não.
              </p>
              <p className="leading-relaxed text-muted">
                Seja a sua água proveniente da concessionária local ou de um{" "}
                <Link to="/servicos/monitoramento-poco-artesiano" className={inlineLink}>
                  poço artesiano
                </Link>
                , ela é obrigada por lei a se enquadrar nas tabelas e limites impostos por esta
                Portaria para ser considerada potável. Fazer uma análise de água baseada na Portaria
                888 não é apenas uma recomendação; é um escudo jurídico para o seu negócio.
              </p>
            </section>
          </Reveal>

          {/* SEÇÃO 5 — Parâmetros */}
          <Reveal>
            <section className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Limites que os fiscais olham
              </p>
              <H2>Principais parâmetros de potabilidade e seus limites</H2>
              <p className="leading-relaxed text-muted">
                A Portaria 888 lista dezenas de parâmetros analíticos, mas no dia a dia do
                monitoramento de qualidade, os fiscais e laboratórios olham com atenção redobrada
                para os seguintes indicadores básicos:
              </p>
              <ul className="flex flex-col gap-3">
                <Bullet>
                  <strong className="text-foreground">Escherichia coli e Coliformes Totais:</strong>{" "}
                  o limite é ausência em 100mL. A presença dessas bactérias indica contaminação por
                  fezes/esgoto. É o parâmetro mais crítico: se der positivo, a água está proibida
                  para consumo imediato.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Cloro Residual Livre (CRL):</strong>{" "}
                  recomenda-se entre 0,2 mg/L e 2,0 mg/L (com limite máximo de 5,0 mg/L). É o
                  &ldquo;soldado&rdquo; que fica na água para matar bactérias. Se estiver abaixo de
                  0,2, sua água está desprotegida; se estiver muito alto, pode causar irritações e
                  gosto ruim. Por isso, o uso de uma{" "}
                  <Link to="/produtos/bomba-dosadora-cloro" className={inlineLink}>
                    bomba dosadora de cloro
                  </Link>{" "}
                  é essencial.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Turbidez:</strong> até 5,0 uT (Unidade de
                  Turbidez) para água de consumo. Mede a quantidade de partículas em suspensão
                  (sujeira). Água turva dificulta a ação do cloro e esconde bactérias.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">pH (Potencial Hidrogeniônico):</strong>{" "}
                  recomendado entre 6,0 e 9,5. Águas muito ácidas (abaixo de 6,0) podem corroer os
                  canos da sua empresa, soltando metais pesados na água que você consome.
                </Bullet>
                <Bullet>
                  <strong className="text-foreground">Cor Aparente:</strong> até 15 uH (Unidades
                  Hazen). Garante que a água seja visualmente agradável e cristalina, sem tons
                  amarelados (geralmente causados por{" "}
                  <Link to="/agua-com-ferro-manganes" className={inlineLink}>
                    ferro e manganês
                  </Link>
                  ).
                </Bullet>
              </ul>
              <img decoding="async" loading="lazy"
                src={parametrosImage}
                alt="Infográfico: parâmetros de potabilidade da Portaria GM/MS 888 com limites de E. coli, cloro, turbidez, pH e cor"
                width={1600}
                height={800}
                className="w-full"
              />
            </section>
          </Reveal>

          {/* SEÇÃO 6 — Fechamento e CTA */}
          <Reveal>
            <section id={QUOTE_ANCHOR} className="flex flex-col gap-6 scroll-mt-28">
              <H2>A sua água passaria neste teste hoje?</H2>
              <p className="leading-relaxed text-muted">
                Ler sobre portarias e leis pode parecer burocrático, mas a saúde das pessoas que
                dependem da sua água está escrita nessas regras. Se você é síndico, gestor
                industrial ou dono de um negócio e não tem certeza se a sua água atende à Portaria
                888 e à ANVISA, não espere a fiscalização bater à sua porta.
              </p>
              <p className="leading-relaxed text-muted">
                A <strong className="text-foreground">Vid&rsquo;Água</strong> possui mais de 30 anos
                de experiência em segurança hídrica. Realizamos desde a{" "}
                <Link to="/servicos/analise-de-agua" className={inlineLink}>
                  análise laboratorial da água
                </Link>{" "}
                até a instalação do equipamento corretivo necessário para colocar sua empresa 100%
                dentro da lei.
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
                        Qual o seu perfil?
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
                        <option>Síndico / Condomínio</option>
                        <option>Gestor industrial</option>
                        <option>Alimentos / Restaurantes</option>
                        <option>Hotéis e pousadas</option>
                        <option>Outro</option>
                      </select>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Link to="/servicos/analise-de-agua">
                        <Button variant="gradient">Agende a sua Análise de Água</Button>
                      </Link>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" type="button">
                          Falar no WhatsApp
                        </Button>
                      </a>
                    </div>
                    <p className="text-xs italic text-muted">
                      Fale agora com nossos especialistas e garanta que a sua água está aprovada
                      conforme a Portaria 888.
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
