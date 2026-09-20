import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["produtos-quimicos-agua"];

export const Route = createFileRoute("/_site/produtos-quimicos-agua")({
  head: () => headFor(page),
  component: ProdutosQuimicosAguaPage,
});

function ProdutosQuimicosAguaPage() {
  return <PageTemplate page={page} />;
}
