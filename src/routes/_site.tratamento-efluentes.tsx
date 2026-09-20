import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo — redireciona permanentemente para o novo caminho em /servicos.
export const Route = createFileRoute("/_site/tratamento-efluentes")({
  beforeLoad: () => {
    throw redirect({ to: "/servicos/tratamento-efluentes", statusCode: 301 });
  },
});
