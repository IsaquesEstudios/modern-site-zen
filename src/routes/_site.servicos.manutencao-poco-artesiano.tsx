import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["manutencao-poco-artesiano"];

export const Route = createFileRoute("/_site/servicos/manutencao-poco-artesiano")({
  head: () => headFor(page),
  component: ManutencaoPocoArtesianoPage,
});

function ManutencaoPocoArtesianoPage() {
  return <PageTemplate page={page} />;
}
