import { createFileRoute } from "@tanstack/react-router";
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
import { Section } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["contato"];

export const Route = createFileRoute("/_site/contato")({
  head: () => headFor(page),
  component: ContatoPage,
});

const field = "flex flex-col gap-2";
const label = "text-sm font-medium";

function ContatoPage() {
  return (
    <>
      <section className="bg-gradient-surface">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-24">
          <Reveal>
            <div className="flex max-w-2xl flex-col gap-5">
              <Badge>Conversão</Badge>
              <h1 className="font-display text-4xl font-extrabold leading-tight md:text-5xl">
                Entre em Contato
              </h1>
              <p className="text-lg leading-relaxed text-muted">
                Fale com nossos especialistas e solicite seu orçamento. Atendimento em horário
                comercial.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
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
                    <label className={label} htmlFor="nome">
                      Nome
                    </label>
                    <Input id="nome" name="nome" placeholder="Seu nome" />
                  </div>
                  <div className={field}>
                    <label className={label} htmlFor="email">
                      E-mail
                    </label>
                    <Input id="email" name="email" type="email" placeholder="nome@empresa.com" />
                  </div>
                  <div className={field}>
                    <label className={label} htmlFor="telefone">
                      Telefone / WhatsApp
                    </label>
                    <Input id="telefone" name="telefone" placeholder="(00) 00000-0000" />
                  </div>
                  <div className={field}>
                    <label className={label} htmlFor="interesse">
                      Tipo de interesse
                    </label>
                    <select
                      id="interesse"
                      name="interesse"
                      className="h-10 rounded-md border border-border bg-surface px-3 text-sm text-foreground"
                    >
                      <option>Análise de água</option>
                      <option>Tratamento de água</option>
                      <option>Poço artesiano</option>
                      <option>Produtos</option>
                      <option>Empresas / indústria</option>
                    </select>
                  </div>
                  <div className={field}>
                    <label className={label} htmlFor="mensagem">
                      Mensagem
                    </label>
                    <Textarea id="mensagem" name="mensagem" placeholder="Conte o seu caso…" />
                  </div>
                  <div>
                    <Button variant="gradient" type="submit">
                      Enviar solicitação
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col gap-6">
              <Card tone="soft">
                <CardHeader>
                  <CardTitle>Canais de atendimento</CardTitle>
                  <CardDescription>
                    Telefone, WhatsApp e e-mail serão preenchidos com os dados oficiais.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card tone="soft">
                <CardHeader>
                  <CardTitle>Horário de atendimento</CardTitle>
                  <CardDescription>
                    Segunda a sexta, em horário comercial. Retorno no mesmo dia útil.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card tone="soft">
                <CardHeader>
                  <CardTitle>Área de atuação</CardTitle>
                  <CardDescription>Atendemos em todo o Brasil.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
