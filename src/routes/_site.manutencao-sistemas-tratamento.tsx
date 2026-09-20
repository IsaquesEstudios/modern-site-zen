import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo — redireciona permanentemente para o novo caminho em /servicos.
export const Route = createFileRoute("/_site/manutencao-sistemas-tratamento")({
  beforeLoad: () => {
    throw redirect({ to: "/servicos/manutencao-sistemas-tratamento", statusCode: 301 });
  },
});
