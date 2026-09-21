import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo — redireciona permanentemente para o novo caminho em /produtos.
export const Route = createFileRoute("/_site/produtos-quimicos-agua")({
  beforeLoad: () => {
    throw redirect({ to: "/produtos/produtos-quimicos-agua", statusCode: 301 });
  },
});
