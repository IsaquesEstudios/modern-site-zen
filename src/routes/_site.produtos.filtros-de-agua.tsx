import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["filtros-de-agua"];

export const Route = createFileRoute("/_site/produtos/filtros-de-agua")({
  head: () => headFor(page),
  component: FiltrosDeAguaPage,
});

function FiltrosDeAguaPage() {
  return <PageTemplate page={page} />;
}
