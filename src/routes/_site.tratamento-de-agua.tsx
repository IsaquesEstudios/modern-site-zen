import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo — redireciona permanentemente para o novo caminho em /servicos.
export const Route = createFileRoute("/_site/tratamento-de-agua")({
  beforeLoad: () => {
    throw redirect({ to: "/servicos/tratamento-de-agua", statusCode: 301 });
  },
});
