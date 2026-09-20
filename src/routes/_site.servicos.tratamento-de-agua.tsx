import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["tratamento-de-agua"];

export const Route = createFileRoute("/_site/servicos/tratamento-de-agua")({
  head: () => headFor(page),
  component: TratamentoDeAguaPage,
});

function TratamentoDeAguaPage() {
  return <PageTemplate page={page} />;
}
