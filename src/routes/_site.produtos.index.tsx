import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["produtos"];

export const Route = createFileRoute("/_site/produtos/")({
  head: () => headFor(page),
  component: ProdutosPage,
});

function ProdutosPage() {
  return <PageTemplate page={page} />;
}
