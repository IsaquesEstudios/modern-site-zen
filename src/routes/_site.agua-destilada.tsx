import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo — redireciona permanentemente para o novo caminho em /produtos.
export const Route = createFileRoute("/_site/agua-destilada")({
  beforeLoad: () => {
    throw redirect({ to: "/produtos/agua-destilada", statusCode: 301 });
  },
});
