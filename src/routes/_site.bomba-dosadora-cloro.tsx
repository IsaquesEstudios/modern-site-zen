import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo — redireciona permanentemente para o novo caminho em /produtos.
export const Route = createFileRoute("/_site/bomba-dosadora-cloro")({
  beforeLoad: () => {
    throw redirect({ to: "/produtos/bomba-dosadora-cloro", statusCode: 301 });
  },
});
