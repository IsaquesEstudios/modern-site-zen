import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["blog"];

export const Route = createFileRoute("/_site/blog")({
  head: () => headFor(page),
  component: BlogPage,
});

function BlogPage() {
  return <PageTemplate page={page} />;
}
