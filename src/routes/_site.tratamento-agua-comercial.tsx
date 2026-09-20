import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["tratamento-agua-comercial"];

export const Route = createFileRoute("/_site/tratamento-agua-comercial")({
  head: () => headFor(page),
  component: TratamentoAguaComercialPage,
});

function TratamentoAguaComercialPage() {
  return <PageTemplate page={page} />;
}
