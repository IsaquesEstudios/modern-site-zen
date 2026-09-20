# Logo, limpeza da seção SEO e botões do CTA

## 1. Logo Vid'Água

- Usar a logo enviada no cabeçalho (substituindo o texto "Vid'Água") e no rodapé, com altura controlada e link para a home.
- Texto alternativo: "Vid'Água — Soluções para Água".
- Gerar também o ícone do site (favicon) a partir da mesma logo, recortado em quadrado, substituindo o ícone padrão atual.

## 2. Remover a seção "Referência SEO"

- Remover o bloco "Palavras-chave desta página" (keyword principal + etiquetas) do modelo usado por todas as páginas internas.
- As palavras-chave continuam ativas onde importam para busca: título e descrição de cada página. Nada de SEO é perdido — apenas deixa de ficar visível para o visitante.

## 3. Seção "Fale com um especialista"

- Botão 1: **Orçamento por e-mail** — mantém o estilo atual em destaque e leva ao formulário de contato.
- Botão 2: **Orçamento pelo WhatsApp** — muda para um botão branco (fundo branco, texto azul), abrindo a conversa no WhatsApp em nova aba.
- Como o botão branco não existe hoje no design system, ele será criado como uma variação do botão do sistema, usando os tokens de cor existentes (superfície clara + texto primário) — sem cores inventadas.

## Pendência

Preciso do número de WhatsApp oficial e do e-mail de contato. Até você enviar, o botão de WhatsApp fica apontando para um número de exemplo, claramente marcado para troca.

## Detalhes técnicos

- Logo enviada como asset CDN (`lovable-assets`), importada via ponteiro `.asset.json` em `SiteLayout`; cópia quadrada real em `public/` apenas para o favicon, referenciada em `src/routes/__root.tsx`.
- Bloco de keywords removido de `src/components/PageTemplate.tsx` (afeta as 27 páginas do template); `page.keyword`/`page.secondary` permanecem em `src/lib/site.ts` para uso no `head()`.
- `CTASection` em `PageTemplate.tsx`: novo rótulo dos botões e nova variante de botão branco adicionada em código do app (wrapper), sem editar `src/design-system/`.
