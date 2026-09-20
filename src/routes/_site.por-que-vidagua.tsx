import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["por-que-vidagua"];

export const Route = createFileRoute("/_site/por-que-vidagua")({
  head: () => headFor(page),
  component: PorQueVidaguaPage,
});

function PorQueVidaguaPage() {
  return <PageTemplate page={page} />;
}
