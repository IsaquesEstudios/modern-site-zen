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
  Stat,
} from "@/design-system/cozy-code-library-1062b4";
import { Reveal } from "@/components/Reveal";
import { Section, SectionTitle } from "@/components/PageTemplate";
import { BLOG_POSTS } from "@/lib/blog";
import { useEffect, useState } from "react";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { HOME, headFor, CONTACT } from "@/lib/site";
import heroAguaImage from "@/assets/hero-agua.jpg.asset.json";
import analistaImage from "@/assets/analista-vidagua.png.asset.json";
import analiseImage from "@/assets/analise-de-agua.jpg.asset.json";
import tratamentoImage from "@/assets/tratamento-de-agua.jpg.asset.json";
import pocoImage from "@/assets/poco-artesiano.jpg.asset.json";
import monitoramentoImage from "@/assets/monitoramento.jpg.asset.json";
import solucoesImage from "@/assets/solucoes-empresariais.jpg.asset.json";
import produtosImage from "@/assets/equipamentos-e-produtos.jpg.asset.json";

export const Route = createFileRoute("/_site/")({
  head: () => headFor(HOME),
  component: Home,
});

const services = [
  {
    label: "Análise de Água",
    to: "/servicos/analise-de-agua",
    desc: "Diagnóstico laboratorial completo e emissão de laudos técnicos de potabilidade.",
    image: analiseImage.url,
    alt: "Coleta de amostra para análise de água",
  },
  {
    label: "Tratamento de Água",
    to: "/servicos/tratamento-de-agua",
    desc: "Sistemas eficientes e sob medida para purificação e adequação hídrica.",
    image: tratamentoImage.url,
    alt: "Sistema de tratamento de água da Vid'Água",
  },
  {
    label: "Poço Artesiano",
    to: "/servicos/manutencao-poco-artesiano",
    desc: "Manutenção técnica, adequação estrutural e soluções para captação subterrânea.",
    image: pocoImage.url,
    alt: "Estrutura hidráulica de poço artesiano",
  },
  {
    label: "Monitoramento Contínuo",
    to: "/servicos/monitoramento-qualidade-agua",
    desc: "Controle recorrente e preventivo da qualidade para indústrias e condomínios.",
    image: monitoramentoImage.url,
    alt: "Equipamentos da Vid'Água para monitoramento da qualidade da água",
  },
  {
    label: "Soluções para Empresas",
    to: "/servicos/tratamento-de-agua-industrial",
    desc: "Projetos de tratamento de água industrial para hotéis, restaurantes e fábricas.",
    image: solucoesImage.url,
    alt: "Sistema industrial de tratamento de água",
  },
  {
    label: "Produtos e Equipamentos",
    to: "/produtos",
    desc: "Linha completa de filtros, abrandadores, bombas dosadoras e químicos.",
    image: produtosImage.url,
    alt: "Equipamentos para tratamento de água",
  },
] as const;

const problems = [
  {
    q: "Sua água está amarelada ou com gosto de ferrugem?",
    action: "Ver solução para remoção de ferro e manganês",
    to: "/agua-com-ferro-manganes",
  },
  {
    q: "Água com cheiro ruim ou excesso de cloro?",
    action: "Ver solução de filtração e dosagem",
    to: "/agua-turva-cheiro-cloro",
  },
  {
    q: "Suspeita de bactérias ou contaminação na rede?",
    action: "Solicitar análise e descontaminação",
    to: "/contaminacao-agua",
  },
  {
    q: "Seu poço artesiano precisa de laudos para a Vigilância Sanitária?",
    action: "Ver o monitoramento de poços",
    to: "/servicos/monitoramento-poco-artesiano",
  },
  {
    q: "Água muito “dura”, entupindo torneiras, canos e chuveiros?",
    action: "Ver solução de abrandamento",
    to: "/agua-dura",
  },
] as const;

const differentials = [
  {
    title: "Mais de 30 anos de experiência",
    desc: "Tradição, solidez e um profundo conhecimento técnico aplicado a cada desafio hídrico.",
  },
  {
    title: "Corpo técnico especializado",
    desc: "Engenheiros e técnicos altamente capacitados, dedicados exclusivamente à análise e tratamento.",
  },
  {
    title: "Segurança e legalidade",
    desc: "Laudos com total validade legal, operando em estrita conformidade com a Portaria 888 e órgãos fiscalizadores.",
  },
  {
    title: "Soluções escaláveis",
    desc: "Estrutura e tecnologia para atender desde uma simples residência até grandes indústrias e condomínios.",
  },
  {
    title: "Atendimento rápido e objetivo",
    desc: "Suporte direto em horário comercial, com agilidade no retorno para que seu problema seja resolvido o quanto antes.",
  },
];


const field = "flex flex-col gap-2";
const labelClass = "text-sm font-medium";

function Home() {
  return (
    <>
      {/* SEÇÃO 1 — Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroAguaImage.url}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-surface" />
        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 pb-24 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="flex flex-col gap-6">
              <div className="flex">
                <Badge>Portaria 888 · Covisa</Badge>
              </div>
              <h1 className="font-display text-3xl font-extrabold leading-[1.15] md:text-5xl">
                Vid&rsquo;Água – Mais de 30 anos tratando e cuidando da qualidade da água.
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted">
                Empresa de tratamento de água, segurança hídrica absoluta para o seu projeto.
                Emitimos laudos técnicos, operando em total conformidade com a Portaria 888 do
                Ministério da Saúde e as exigências da Vigilância Sanitária.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contato">
                  <Button variant="gradient" size="lg">
                    Solicitar Orçamento
                  </Button>
                </Link>
                <a href="#servicos">
                  <Button variant="outline" size="lg">
                    Ver Nossos Serviços
                  </Button>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <img
                src={analistaImage.url}
                alt="Analista da Vid'Água examinando amostra de água em laboratório"
                className="w-full"
              />
              <div className="absolute inset-x-4 bottom-4 grid gap-4 sm:grid-cols-2">
                <Card tone="gradientSoft">
                  <CardContent>
                    <Stat label="Experiência" value="30+" detail="anos no setor" trend="up" />
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <Stat label="Atuação" value="São Paulo" detail="e atendimento nacional" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEÇÃO 2 — Quem Somos */}
      <Section>
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-16">
            <h2 className="font-display text-3xl font-bold leading-tight">
              Três décadas de excelência em análise e tratamento de água
            </h2>
            <div className="flex flex-col items-start gap-6">
              <p className="max-w-2xl text-lg leading-relaxed text-muted">
                Desde a nossa fundação, a Vid&rsquo;Água consolidou-se como uma empresa de análise
                de água e purificação de altíssima confiabilidade. Com mais de 30 anos de atuação
                prática, somos especialistas e referência não apenas no tratamento hídrico, mas
                também no monitoramento de poços artesianos junto à Vigilância Sanitária. Soluções para residências,
                condomínios e complexos industriais, garantindo a qualidade da água.
              </p>
              <Link to="/sobre">
                <Button variant="ghost">Conheça mais sobre a nossa história e equipe</Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* SEÇÃO 3 — Serviços */}
      <Section soft>
        <div id="servicos" className="scroll-mt-24">
          <SectionTitle eyebrow="O que fazemos" title="Soluções completas para a sua água" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <Reveal key={item.to} delay={i * 60}>
              <Link to={item.to} className="group block h-full">
                <Card className="h-full transition-transform duration-300 group-hover:-translate-y-1">
                  <CardContent>
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full"
                    />
                  </CardContent>
                  <CardHeader>
                    <CardTitle>{item.label}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm font-semibold text-accent">Saber mais →</span>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SEÇÃO 4 — Problemas que resolvemos */}
      <Section>
        <SectionTitle
          eyebrow="Diagnóstico rápido"
          title="Identificou algum problema? Nós temos a solução."
        />
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted">
          Não precisa ser um especialista para saber que algo está errado. Se você notou algum
          destes sinais, nós podemos ajudar:
        </p>
        <ul className="flex flex-col">
          {problems.map((p, i) => (
            <Reveal as="li" key={p.to} delay={i * 50}>
              <Link
                to={p.to}
                className="group flex flex-col gap-2 border-t border-border py-7 transition-colors duration-300 hover:border-accent md:flex-row md:items-center md:justify-between md:gap-6"
              >
                <span className="font-display text-lg font-semibold md:text-xl">{p.q}</span>
                <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent transition-transform duration-300 group-hover:translate-x-1">
                  {p.action} →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* SEÇÃO 5 — Diferenciais */}
      <Section soft>
        <SectionTitle
          eyebrow="Diferenciais"
          title="O que nos torna a melhor escolha para a sua segurança hídrica?"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d, i) => (
            <Reveal key={d.title} delay={i * 60}>
              <Card tone="soft" className="h-full">
                <CardHeader>
                  <CardTitle>{d.title}</CardTitle>
                  <CardDescription>{d.desc}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SEÇÃO 6 — Blog */}
      <Section>
        <SectionTitle eyebrow="Conteúdo" title="Informação técnica de qualidade e dicas úteis" />
        <BlogCarousel />
        <div className="mt-10">
          <Link to="/blog">
            <Button variant="outline">Acessar o Blog da Vid&rsquo;Água</Button>
          </Link>
        </div>
      </Section>

      {/* SEÇÃO 7 — Contato / CTA final */}
      <Section soft>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <div className="flex flex-col gap-6">
              <SectionTitle eyebrow="Contato" title="Fale com um especialista em água" />
              <p className="max-w-xl text-lg leading-relaxed text-muted">
                Não deixe a segurança da sua saúde ou da sua empresa para depois. Nossa equipe está
                pronta para entender sua necessidade e propor a melhor solução técnica. Atendemos em
                todo o Brasil.
              </p>
              <div className="flex flex-col gap-1 text-sm text-muted">
                {CONTACT.phones.map((phone, i) => (
                  <a
                    key={phone}
                    href={CONTACT.phoneHrefs[i]}
                    className="transition-colors hover:text-primary"
                  >
                    {phone}
                  </a>
                ))}
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  WhatsApp {CONTACT.whatsapp}
                </a>
                <a href={CONTACT.emailHref} className="transition-colors hover:text-primary">
                  {CONTACT.email}
                </a>
              </div>
              <p className="text-sm text-muted">
                {CONTACT.hours}. Respondemos sua solicitação em até 1 dia útil.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Card>
              <CardHeader>
                <CardTitle>Solicite seu orçamento</CardTitle>
                <CardDescription>
                  Formulário curto — apenas o essencial para o primeiro contato.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-6">
                  <div className={field}>
                    <label className={labelClass} htmlFor="home-nome">
                      Nome
                    </label>
                    <Input id="home-nome" name="nome" placeholder="Seu nome" />
                  </div>
                  <div className={field}>
                    <label className={labelClass} htmlFor="home-telefone">
                      WhatsApp / Telefone
                    </label>
                    <Input id="home-telefone" name="telefone" placeholder="(00) 00000-0000" />
                  </div>
                  <div className={field}>
                    <label className={labelClass} htmlFor="home-email">
                      E-mail
                    </label>
                    <Input
                      id="home-email"
                      name="email"
                      type="email"
                      placeholder="nome@empresa.com"
                    />
                  </div>
                  <div className={field}>
                    <label className={labelClass} htmlFor="home-interesse">
                      Como podemos ajudar hoje?
                    </label>
                    <select
                      id="home-interesse"
                      name="interesse"
                      className="h-10 rounded-md border border-border bg-surface px-3 text-sm text-foreground"
                    >
                      <option>Análise</option>
                      <option>Tratamento</option>
                      <option>Poços</option>
                      <option>Produtos</option>
                    </select>
                  </div>
                  <div>
                    <Button variant="gradient" type="submit">
                      Enviar Mensagem e Solicitar Orçamento
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Section>

      <WhatsAppFloat />
    </>
  );
}

function BlogCarousel() {
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = BLOG_POSTS.length;
  useEffect(() => {
    if (paused || n <= 3) return;
    const id = setInterval(() => setStart((s) => (s + 1) % n), 4000);
    return () => clearInterval(id);
  }, [paused, n]);
  const visible = [0, 1, 2].map((k) => BLOG_POSTS[(start + k) % n]!);
  return (
    <div
      className="grid gap-6 md:grid-cols-3"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {visible.map((post, k) => (
        <div key={post.to} className={k > 0 ? "hidden md:block animate-in fade-in" : "animate-in fade-in"}>
          <Link to={post.to} className="block h-full">
            <Card className="h-full">
              <CardContent>
                <img src={post.image} alt={post.alt} loading="lazy" className="aspect-video w-full object-cover" />
              </CardContent>
              <CardHeader>
                <Badge variant="neutral">{post.cat}</Badge>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.body}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm font-semibold text-accent">Ler o artigo →</span>
              </CardContent>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}
