import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["tratamento-de-agua-industrial"];

export const Route = createFileRoute("/_site/tratamento-de-agua-industrial")({
  head: () => headFor(page),
  component: TratamentoDeAguaIndustrialPage,
});

function TratamentoDeAguaIndustrialPage() {
  return <PageTemplate page={page} />;
}
