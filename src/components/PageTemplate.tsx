import { Link } from "@tanstack/react-router";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/design-system/cozy-code-library-1062b4";
import { Reveal } from "@/components/Reveal";
import { WhiteButton } from "@/components/WhiteButton";
import type { PageDef } from "@/lib/site";

// TODO: substituir pelo número de WhatsApp oficial da Vid'Água
export const WHATSAPP_URL = "https://wa.me/5511999999999";

export function Section({
  children,
  soft = false,
  id,
}: {
  children: React.ReactNode;
  soft?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={soft ? "bg-surface-soft" : "bg-background"}>
      <div className="mx-auto max-w-6xl px-6 py-20">{children}</div>
    </section>
  );
}


export function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-12 flex max-w-2xl flex-col gap-4">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
    </div>
  );
}

export function LinkGrid({ items }: { items: { label: string; to: string }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.to} delay={i * 60}>
          <Link to={item.to} className="group block h-full">
            <Card className="h-full transition-transform duration-300 group-hover:-translate-y-1">
              <CardHeader>
                <CardTitle>{item.label}</CardTitle>
                <CardDescription>
                  Texto de preenchimento com uma linha descritiva da página.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function CTASection() {
  return (
    <Section soft>
      <Reveal>
        <Card tone="gradientDepth">
          <CardHeader>
            <CardTitle>Fale com um especialista</CardTitle>
            <CardDescription className="text-primary-foreground">
              Solicite um orçamento de análise ou tratamento de água. Atendimento em horário
              comercial com retorno ágil, em todo o Brasil.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Link to="/contato">
                <Button variant="gradient">Orçamento por e-mail</Button>
              </Link>
              {/* TODO: trocar pelo número de WhatsApp oficial da Vid'Água */}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhiteButton>Orçamento pelo WhatsApp</WhiteButton>
              </a>
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </Section>
  );
}

export function PageTemplate({ page }: { page: PageDef }) {
  return (
    <>
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-24">
          <Reveal>
            <div className="flex max-w-3xl flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Badge>{page.type}</Badge>
                <Badge variant="outline">Prioridade {page.priority}</Badge>
              </div>
              <h1 className="font-display text-4xl font-extrabold leading-tight md:text-5xl">
                {page.h1}
              </h1>
              <p className="text-lg leading-relaxed text-muted">{page.intro}</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contato">
                  <Button variant="gradient">Solicitar orçamento</Button>
                </Link>
                <Link to="/servicos">
                  <Button variant="outline">Ver serviços</Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {page.sections.length > 0 ? (
        <Section>
          <SectionTitle eyebrow="Outline da página" title={`Conteúdo sobre ${page.keyword}`} />
          <div className="flex flex-col gap-12">
            {page.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 50}>
                <article className="grid gap-4 border-t border-border pt-8 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-12">
                  <h2 className="font-display text-xl font-bold leading-snug">
                    {section.heading}
                  </h2>
                  <div className="flex flex-col gap-4">
                    <p className="leading-relaxed text-muted">{section.body}</p>
                    {section.bullets ? (
                      <ul className="flex flex-col gap-2">
                        {section.bullets.map((b) => (
                          <li key={b} className="flex gap-3 text-sm text-muted">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-accent" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      {page.related?.length ? (
        <Section soft={page.sections.length > 0}>
          <SectionTitle eyebrow="Links internos" title="Páginas relacionadas" />
          <LinkGrid items={page.related} />
        </Section>
      ) : null}

      <CTASection />
    </>
  );
}
