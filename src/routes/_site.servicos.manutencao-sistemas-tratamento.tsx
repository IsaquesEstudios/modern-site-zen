import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["manutencao-sistemas-tratamento"];

export const Route = createFileRoute("/_site/servicos/manutencao-sistemas-tratamento")({
  head: () => headFor(page),
  component: ManutencaoSistemasTratamentoPage,
});

function ManutencaoSistemasTratamentoPage() {
  return <PageTemplate page={page} />;
}
