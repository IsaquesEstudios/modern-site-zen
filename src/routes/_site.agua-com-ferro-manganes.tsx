import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["agua-com-ferro-manganes"];

export const Route = createFileRoute("/_site/agua-com-ferro-manganes")({
  head: () => headFor(page),
  component: AguaComFerroManganesPage,
});

function AguaComFerroManganesPage() {
  return <PageTemplate page={page} />;
}
