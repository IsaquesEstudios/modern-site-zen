import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["tratamento-agua-restaurante"];

export const Route = createFileRoute("/_site/tratamento-agua-restaurante")({
  head: () => headFor(page),
  component: TratamentoAguaRestaurantePage,
});

function TratamentoAguaRestaurantePage() {
  return <PageTemplate page={page} />;
}
