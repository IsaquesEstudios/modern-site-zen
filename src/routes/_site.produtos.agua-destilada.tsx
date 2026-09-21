import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["agua-destilada"];

export const Route = createFileRoute("/_site/produtos/agua-destilada")({
  head: () => headFor(page),
  component: AguaDestiladaPage,
});

function AguaDestiladaPage() {
  return <PageTemplate page={page} />;
}
