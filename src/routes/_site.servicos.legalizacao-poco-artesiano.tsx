import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["legalizacao-poco-artesiano"];

export const Route = createFileRoute("/_site/servicos/legalizacao-poco-artesiano")({
  head: () => headFor(page),
  component: LegalizacaoPocoArtesianoPage,
});

function LegalizacaoPocoArtesianoPage() {
  return <PageTemplate page={page} />;
}
