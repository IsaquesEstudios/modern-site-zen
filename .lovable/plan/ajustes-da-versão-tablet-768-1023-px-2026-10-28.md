# Ajustes da versão tablet (768–1023 px)

## Menu
- Hoje o menu completo + botão de orçamento aparece a partir de 768 px, ficando espremido em tablets (ex.: 834 px).
- Mudar: tablet passa a usar o menu recolhível (botão hambúrguer), com links maiores e botão de contato no final da lista. Menu completo só a partir de 1024 px.

## Imagens e layout
- Revisar no tamanho tablet (768 e 834 px, retrato e paisagem) as páginas: início, serviços (lista e cada serviço), produtos (lista e cada produto), blog e artigos, sobre e contato.
- Hero da home: limitar a altura da foto da analista e reposicionar os dois quadros para não cobrirem o rosto nem vazarem da seção.
- Páginas com barra lateral (serviços/produtos): em tablet, a barra vai para baixo do conteúdo em vez de dividir a largura.
- Grades de cartões: 2 colunas em tablet (em vez de 3 apertadas), imagens com proporção fixa e recorte uniforme.
- Imagens de topo das páginas internas: altura máxima e recorte proporcional, sem esticar.
- Rodapé: 2 colunas em tablet em vez de 4.
- Conferir que nenhuma página gera rolagem lateral.

## Detalhes técnicos
- `SiteLayout.tsx`: trocar `md:` por `lg:` no nav/CTA/hambúrguer; rodapé `sm:grid-cols-2 lg:grid-cols-4`.
- Rotas `_site.*`, `PageTemplate`, `ServiceSidebar`, `ProductSidebar`: ajustar breakpoints de grades e sidebars para `lg:`, imagens com `aspect-*` + `object-cover`.
- Apenas classes do design system; nada em `src/design-system/`.
- Validação com Playwright a 768 e 834 px (capturas + checagem de rolagem horizontal), e a 375/1280 para não quebrar celular e desktop.
