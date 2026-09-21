import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo — redireciona permanentemente para o novo caminho em /produtos.
export const Route = createFileRoute("/_site/filtros-de-agua")({
  beforeLoad: () => {
    throw redirect({ to: "/produtos/filtros-de-agua", statusCode: 301 });
  },
});
