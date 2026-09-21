import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo — redireciona permanentemente para o novo caminho em /produtos.
export const Route = createFileRoute("/_site/desmineralizador-de-agua")({
  beforeLoad: () => {
    throw redirect({ to: "/produtos/desmineralizador-de-agua", statusCode: 301 });
  },
});
