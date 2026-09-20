import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo — redireciona permanentemente para o novo caminho em /servicos.
export const Route = createFileRoute("/_site/monitoramento-qualidade-agua")({
  beforeLoad: () => {
    throw redirect({ to: "/servicos/monitoramento-qualidade-agua", statusCode: 301 });
  },
});
