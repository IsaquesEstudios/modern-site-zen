import { createFileRoute } from "@tanstack/react-router";
import { PageTemplate } from "@/components/PageTemplate";
import { PAGES_BY_SLUG, headFor } from "@/lib/site";

const page = PAGES_BY_SLUG["monitoramento-qualidade-agua"];

export const Route = createFileRoute("/_site/monitoramento-qualidade-agua")({
  head: () => headFor(page),
  component: MonitoramentoQualidadeAguaPage,
});

function MonitoramentoQualidadeAguaPage() {
  return <PageTemplate page={page} />;
}
