import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["contaminacao-agua"];

export const Route = createFileRoute("/_site/contaminacao-agua")({
  head: () => headFor(page),
  component: ContaminacaoAguaPage,
});

function ContaminacaoAguaPage() {
  return <PageTemplate page={page} />;
}
