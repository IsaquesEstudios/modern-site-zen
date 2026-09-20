import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["contato"];

export const Route = createFileRoute("/_site/contato")({
  head: () => headFor(page),
  component: ContatoPage,
});

function ContatoPage() {
  return <PageTemplate page={page} />;
}
