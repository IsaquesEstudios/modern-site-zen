import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["agua-turva-cheiro-cloro"];

export const Route = createFileRoute("/_site/agua-turva-cheiro-cloro")({
  head: () => headFor(page),
  component: AguaTurvaCheiroCloroPage,
});

function AguaTurvaCheiroCloroPage() {
  return <PageTemplate page={page} />;
}
