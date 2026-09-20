import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo — redireciona permanentemente para o novo caminho em /servicos.
export const Route = createFileRoute("/_site/manutencao-poco-artesiano")({
  beforeLoad: () => {
    throw redirect({ to: "/servicos/manutencao-poco-artesiano", statusCode: 301 });
  },
});
