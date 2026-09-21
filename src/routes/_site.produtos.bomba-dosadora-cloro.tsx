import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["bomba-dosadora-cloro"];

export const Route = createFileRoute("/_site/produtos/bomba-dosadora-cloro")({
  head: () => headFor(page),
  component: BombaDosadoraCloroPage,
});

function BombaDosadoraCloroPage() {
  return <PageTemplate page={page} />;
}
