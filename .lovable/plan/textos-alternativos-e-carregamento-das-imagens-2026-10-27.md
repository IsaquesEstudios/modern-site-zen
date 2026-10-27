# Textos alternativos e carregamento das imagens

## Objetivo
Toda foto do site com descrição clara para leitores de tela e carregamento mais leve, sem mudar o visual.

## O que muda
1. **Textos alternativos**
   - Revisar as cerca de 50 imagens (logo, topos das páginas, fotos do meio, cartões de blog, serviços e produtos).
   - Descrições específicas de cada página, em português, sem repetir a mesma frase em páginas diferentes (hoje várias fotos usam textos idênticos, como "Copo sendo preenchido com água cristalina").
   - Imagens só decorativas (fundo do topo da home) continuam com descrição vazia, para não serem lidas.
   - Logo: "Vid'Água — tratamento de água".

2. **Carregamento**
   - Foto do topo de cada página: carrega com prioridade (`fetchpriority="high"`, sem atraso).
   - Todas as demais (fotos do meio, cartões, rodapé): carregamento sob demanda (`loading="lazy"`) e `decoding="async"`.
   - Incluir largura e altura reais em todas as imagens que ainda não têm, evitando que a página "pule" ao carregar.
   - Pré-carregar a foto principal da home (analista) no cabeçalho da página.

## Fora do escopo
- Não trocar nenhuma imagem nem layout. Não mexer no design system.

## Detalhes técnicos
- Arquivos: `SiteLayout.tsx`, `_site.index.tsx`, `_site.blog.tsx`, `_site.servicos.*.tsx`, `_site.produtos.*.tsx`, artigos (`agua-dura`, `agua-turva-cheiro-cloro`, `agua-com-ferro-manganes`, `contaminacao-agua`, `qualidade-agua-anvisa`).
- Dimensões lidas dos arquivos reais (`identify`/PIL; assets do CDN via `size` no pointer ou download).
- Verificação: typecheck, Playwright conferindo que nenhuma `<img>` fica sem `alt`, sem `width/height` ou com topo em lazy.
