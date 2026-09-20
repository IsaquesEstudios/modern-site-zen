import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo — redireciona permanentemente para o novo caminho em /servicos.
export const Route = createFileRoute("/_site/analise-de-agua")({
  beforeLoad: () => {
    throw redirect({ to: "/servicos/analise-de-agua", statusCode: 301 });
  },
});
