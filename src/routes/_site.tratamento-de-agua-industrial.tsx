import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo — redireciona permanentemente para o novo caminho em /servicos.
export const Route = createFileRoute("/_site/tratamento-de-agua-industrial")({
  beforeLoad: () => {
    throw redirect({ to: "/servicos/tratamento-de-agua-industrial", statusCode: 301 });
  },
});
