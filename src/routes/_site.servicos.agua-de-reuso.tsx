import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["agua-de-reuso"];

export const Route = createFileRoute("/_site/servicos/agua-de-reuso")({
  head: () => headFor(page),
  component: AguaDeReusoPage,
});

function AguaDeReusoPage() {
  return <PageTemplate page={page} />;
}
