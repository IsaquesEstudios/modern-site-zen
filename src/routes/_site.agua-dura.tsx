import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["agua-dura"];

export const Route = createFileRoute("/_site/agua-dura")({
  head: () => headFor(page),
  component: AguaDuraPage,
});

function AguaDuraPage() {
  return <PageTemplate page={page} />;
}
