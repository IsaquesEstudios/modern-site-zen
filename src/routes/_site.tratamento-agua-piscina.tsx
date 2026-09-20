import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["tratamento-agua-piscina"];

export const Route = createFileRoute("/_site/tratamento-agua-piscina")({
  head: () => headFor(page),
  component: TratamentoAguaPiscinaPage,
});

function TratamentoAguaPiscinaPage() {
  return <PageTemplate page={page} />;
}
