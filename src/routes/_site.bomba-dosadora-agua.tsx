import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["bomba-dosadora-agua"];

export const Route = createFileRoute("/_site/bomba-dosadora-agua")({
  head: () => headFor(page),
  component: BombaDosadoraAguaPage,
});

function BombaDosadoraAguaPage() {
  return <PageTemplate page={page} />;
}
