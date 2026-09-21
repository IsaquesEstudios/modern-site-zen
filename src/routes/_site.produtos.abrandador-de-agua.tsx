import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["abrandador-de-agua"];

export const Route = createFileRoute("/_site/produtos/abrandador-de-agua")({
  head: () => headFor(page),
  component: AbrandadorDeAguaPage,
});

function AbrandadorDeAguaPage() {
  return <PageTemplate page={page} />;
}
