import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["tratamento-efluentes"];

export const Route = createFileRoute("/_site/tratamento-efluentes")({
  head: () => headFor(page),
  component: TratamentoEfluentesPage,
});

function TratamentoEfluentesPage() {
  return <PageTemplate page={page} />;
}
