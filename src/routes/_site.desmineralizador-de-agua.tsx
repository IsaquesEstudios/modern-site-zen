import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["desmineralizador-de-agua"];

export const Route = createFileRoute("/_site/desmineralizador-de-agua")({
  head: () => headFor(page),
  component: DesmineralizadorDeAguaPage,
});

function DesmineralizadorDeAguaPage() {
  return <PageTemplate page={page} />;
}
