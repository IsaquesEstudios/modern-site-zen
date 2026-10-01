# Hero da Home — Imagem da Analista com Balões Sobrepostos

Substituir o espaço reservado "Imagem principal" do hero da home pela imagem enviada (analista de laboratório, recorte transparente) e posicionar os dois cartões (Experiência 30+ / Atuação São Paulo) flutuando por cima da imagem.

## Mudanças

1. **Upload da imagem** — criar o asset `src/assets/analista-vidagua.png.asset.json` a partir do arquivo enviado via `lovable-assets` (mantém o fundo transparente).

2. **`src/routes/_site.index.tsx` — coluna direita do hero (Seção 1)**
   - Remover o `ImagePlaceholder` "Imagem principal".
   - Colocar a imagem da analista em um contêiner `relative`: `<img>` com `w-full`, sem recorte de proporção agressiva (a imagem é um recorte transparente e deve respirar).
   - Sobrepor os dois cartões de `Stat` (Experiência 30+ / Atuação São Paulo) em posição absoluta dentro desse contêiner — por exemplo, na parte inferior, lado a lado — usando os próprios `Card`/`Stat` do design system (apenas posicionamento, sem re-estilização).
   - Em telas pequenas os cartões permanecem sobre a imagem, empilhados quando necessário.
   - Texto alternativo descritivo (ex.: "Analista da Vid'Água examinando amostra de água").

## Fora do escopo

- Nenhuma outra seção da home ou outra página é alterada.
- Nenhuma nova imagem será gerada — apenas a enviada.

## Verificação

- `tsgo --noEmit` sem erros e home respondendo 200, com a imagem visível e os balões sobrepostos na prévia.
