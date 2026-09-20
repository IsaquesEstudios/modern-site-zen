import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["servicos"];

export const Route = createFileRoute("/_site/servicos")({
  head: () => headFor(page),
  component: ServicosPage,
});

function ServicosPage() {
  return <PageTemplate page={page} />;
}
