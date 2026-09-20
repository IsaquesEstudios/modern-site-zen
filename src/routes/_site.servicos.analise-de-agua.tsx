import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["analise-de-agua"];

export const Route = createFileRoute("/_site/servicos/analise-de-agua")({
  head: () => headFor(page),
  component: AnaliseDeAguaPage,
});

function AnaliseDeAguaPage() {
  return <PageTemplate page={page} />;
}
