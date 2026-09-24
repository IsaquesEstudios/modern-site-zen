import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo — redireciona permanentemente para o monitoramento de poços.
export const Route = createFileRoute("/_site/servicos/legalizacao-poco-artesiano")({
  beforeLoad: () => {
    throw redirect({ to: "/servicos/monitoramento-poco-artesiano", statusCode: 301 });
  },
});
