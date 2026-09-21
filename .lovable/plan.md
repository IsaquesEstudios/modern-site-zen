# Quatro páginas de "Problema específico"

Reescrever as quatro páginas de problema com o conteúdo enviado, usando o mesmo layout das páginas de serviço (coluna de conteúdo 80% + coluna lateral fixa 20% com o botão "Orçamento agora" e a lista de serviços), com espaços reservados para imagens.

## Páginas

1. **Água Dura** (`/agua-dura`) — hero "Água Dura: Entenda o problema e descubra a solução definitiva"; o que é água dura; prejuízos (incrustações, desperdício de sabão, danos a equipamentos, pele e cabelo); a solução (abrandador por troca iônica) com link para Abrandador de Água; processo de dimensionamento em 3 passos com link para Análise de Água; formulário (tipo de imóvel + descrição).
2. **Água com Ferro e Manganês** (`/agua-com-ferro-manganes`) — hero "Água Amarela ou Enferrujada?"; causas (rede antiga e poço artesiano); prejuízos; filtração catalítica em 2 etapas com link para Manutenção de Poço Artesiano; projeto em 3 passos com link para Análise de Água; formulário (origem da água + descrição).
3. **Água Turva e com Cheiro** (`/agua-turva-cheiro-cloro`) — hero "Água Turva, com Mau Cheiro ou Gosto de Cloro?"; o mito do cloro forte e origens do problema; sintomas do dia a dia; filtro central + carvão ativado, com nota sobre bombas dosadoras; padrão Vid'Água (retrolavagem); formulário (problema principal + local de instalação).
4. **Contaminação Biológica e Química** (`/contaminacao-agua`) — hero "Água com Bactéria ou Contaminação Química?"; tipos de contaminação (biológica, química, salinidade); diagnóstico com chamada para Análise de Água; soluções (cloração/UV, correção de pH, osmose reversa); monitoramento contínuo com link para Monitoramento da Qualidade da Água; formulário (possui laudo? + problema suspeito).

## Padrão aplicado em todas

- Mesmo layout das páginas de serviço: conteúdo à esquerda, coluna lateral fixa à direita com "Orçamento agora" e a lista de serviços (nenhum item aparece destacado, pois são páginas de problema).
- Hero com etiqueta "Problema", título, texto de abertura, botão principal (WhatsApp) e botão secundário que rola até a seção indicada no documento.
- Espaços reservados cinza "Imagem" onde entram fotos depois — nenhuma imagem será gerada.
- Formulário visual, sem envio real, com os campos exatos de cada documento e o texto do botão indicado.
- Balão "Fale com um especialista" no fim da página e botão flutuante de WhatsApp.
- Títulos e descrições de busca conforme as meta tags de cada documento.

## Detalhes técnicos

- Reescrever `src/routes/_site.agua-dura.tsx`, `_site.agua-com-ferro-manganes.tsx`, `_site.agua-turva-cheiro-cloro.tsx`, `_site.contaminacao-agua.tsx` (hoje só renderizam `PageTemplate`).
- Usar `ServiceGrid` / `QUOTE_ANCHOR` de `src/components/ServiceSidebar.tsx`, `Reveal`, `ImagePlaceholder`, `CTASection` + `WhatsAppFloat`, e `headFor({...page, title, description})` — mesmo padrão de `_site.servicos.monitoramento-qualidade-agua.tsx`.
- `ServiceGrid` passa a aceitar `currentSlug` opcional para funcionar sem item ativo.
- Somente componentes e tokens do design system; nenhuma outra página é alterada.
