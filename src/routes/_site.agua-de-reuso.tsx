import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo — redireciona permanentemente para o novo caminho em /servicos.
export const Route = createFileRoute("/_site/agua-de-reuso")({
  beforeLoad: () => {
    throw redirect({ to: "/servicos/agua-de-reuso", statusCode: 301 });
  },
});
