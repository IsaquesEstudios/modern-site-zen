import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["tratamento-agua-hotel"];

export const Route = createFileRoute("/_site/tratamento-agua-hotel")({
  head: () => headFor(page),
  component: TratamentoAguaHotelPage,
});

function TratamentoAguaHotelPage() {
  return <PageTemplate page={page} />;
}
