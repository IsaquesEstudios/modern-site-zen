import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["sobre"];

export const Route = createFileRoute("/_site/sobre")({
  head: () => headFor(page),
  component: SobrePage,
});

function SobrePage() {
  return <PageTemplate page={page} />;
}
