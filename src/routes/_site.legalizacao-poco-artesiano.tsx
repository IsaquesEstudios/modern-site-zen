import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo — redireciona permanentemente para o novo caminho em /servicos.
export const Route = createFileRoute("/_site/legalizacao-poco-artesiano")({
  beforeLoad: () => {
    throw redirect({ to: "/servicos/monitoramento-poco-artesiano", statusCode: 301 });
  },
});
