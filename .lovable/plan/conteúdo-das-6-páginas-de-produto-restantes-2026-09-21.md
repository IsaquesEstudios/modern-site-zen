# Conteúdo das 6 páginas de produto restantes

Reescrever as seis páginas de produto com o conteúdo enviado, no mesmo padrão visual já aprovado na página Bomba Dosadora de Cloro: coluna de conteúdo (80%) + coluna lateral fixa (20%) com o botão "Orçamento agora" e a lista de produtos, espaços reservados para imagens, formulário de cotação sem envio real, balão "Fale com um especialista" no fim e botão flutuante de WhatsApp.

## Páginas

**Bomba Dosadora de Água** (/produtos/bomba-dosadora-agua)
Hero "Precisão para o seu Tratamento Hídrico" com dois botões; risco do controle químico manual; os 3 fatores de preço (vazão de injeção, pressão de trabalho, compatibilidade química) em lista numerada + bloco "Resultado"; aplicações industriais em linhas (torres/caldeiras, ETA/ETE, alimentícia/farmacêutica, correção de pH); formulário: nome, telefone, e-mail, produto químico dosado, local de aplicação (Residência-Condomínio / Indústria-Fábrica / Poço Artesiano / ETA-ETE), vazão ou pressão.

**Filtros de Água** (/produtos/filtros-de-agua)
Hero "A Barreira Definitiva para a Pureza da sua Rede"; "Por que não existe um filtro universal?"; três tecnologias (areia/quartzo, carvão ativado, catalíticos para metais) cada uma com link para o problema correspondente (água turva, cheiro, ferro) e nota para o abrandador; aplicações residencial / poço artesiano / industrial com aviso sobre bactérias (links para contaminação e bomba dosadora de cloro); 3 fatores de preço em lista numerada; formulário: local de instalação, problema atual da água, vazão estimada.

**Abrandador de Água** (/produtos/abrandador-de-agua)
Hero "A Solução Perfeita Contra as Incrustações"; conexão com o problema Água Dura (link); tecnologia de troca iônica em duas etapas (captura e regeneração) em lista numerada; preço e dimensionamento (dureza total via análise de água, consumo diário); aplicações residenciais/condomínios e indústrias/hospitais; formulário: perfil da instalação, já tem análise (Sim/Não), vazão estimada.

**Desmineralizador de Água** (/produtos/desmineralizador-de-agua)
Hero "Pureza para Processos Críticos"; resina de troca iônica em três passos (catiônica, aniônica, resultado); aplicações obrigatórias (caldeiras, farmacêutica, laboratórios, processos específicos) com nota linkando o abrandador; cálculo do orçamento em lista numerada com link para análise de água; formulário: aplicação da água, vazão, origem da água (Rede Pública / Poço Artesiano).

**Água Destilada** (/produtos/agua-destilada)
Página mais comercial que técnica: hero "Pureza para os seus Processos Mais Exigentes" com botões "Solicitar Cotação / Preço" e "Ver opções de embalagem"; por que a origem importa; aplicações (saúde/estética, laboratórios, automotivo/industrial, limpeza de precisão) com nota linkando o desmineralizador; opções de embalagem (5L, 20-50L, IBC 1.000L/granel) em linhas + bloco de preço por volume e contrato; formulário: embalagem (Galões 5L / Bombonas 20L-50L / IBC 1000L / Caminhão Pipa) e volume mensal.

**Produtos Químicos** (/produtos/produtos-quimicos-agua)
Hero "A Base para a Pureza da sua Rede"; importância da procedência e Portaria 888 (link para bomba dosadora); catálogo em três grupos (desinfecção/cloro, correção de pH, clarificação/coagulantes) com links para filtros de água; seção "Química + Equipamento" com link para bomba dosadora de água e nota sobre contratos de fornecimento; formulário: produto necessário, volume mensal, possui bomba dosadora (Sim / Não, quero orçamento).

## Observações

- Títulos e descrições de busca de cada página passam a ser os dos documentos.
- Nenhuma imagem será gerada: os pontos de imagem continuam como blocos reservados.
- Formulários são visuais (sem envio), como nas demais páginas — ainda não há backend.
- Apenas componentes e tokens do design system; nenhuma outra página é alterada.

## Detalhes técnicos

Reescrever `src/routes/_site.produtos.{bomba-dosadora-agua,filtros-de-agua,abrandador-de-agua,desmineralizador-de-agua,agua-destilada,produtos-quimicos-agua}.tsx`, hoje apenas `PageTemplate`. Cada arquivo segue `_site.produtos.bomba-dosadora-cloro.tsx`: consts TITLE/DESCRIPTION, `head: () => headFor({ ...page, title, description })`, hero `bg-gradient-surface` com `Badge` "Produto" e `ImagePlaceholder` ao lado, `ProductGrid currentSlug=...` envolvendo as seções, `Reveal`, helpers `H2`/`inlineLink`, `Card tone="gradientSoft"`/`"soft"` para notas, formulário com `onSubmit={(e) => e.preventDefault()}`, `CTASection` + `WhatsAppFloat` no fim. Rotas, sidebar e redirecionamentos 301 já existem — sem mudanças em `site.ts` ou `ProductSidebar.tsx`.
