# Correções de conteúdo (serviços que a Vid'Água não faz)

Só ajustes de texto: nada de layout ou imagem.

## 1. Osmose reversa: tirar de todo o site
- Manutenção de Sistemas: remover o item "Sistemas de osmose reversa: limpeza química e substituição de membranas...".
- Tratamento de Água: tirar "osmose reversa" da lista de equipamentos ("filtros centrais, dosadoras, entre outros").
- Artigo Contaminação da Água: remover o parágrafo sobre osmose reversa.

## 2. "Manutenção de Poço Artesiano" vira "Tratamento da Água de Poço"
- Página `/servicos/manutencao-poco-artesiano`: título, abertura e textos reescritos para falar do tratamento da água do poço, não do poço. Remover:
  - "Queda de vazão ou pressão nas torneiras do imóvel"
  - "Bomba ligando e desligando com frequência ou disjuntor desarmando" (e a opção "Queda de vazão ou bomba com problema" do formulário)
  - Cartões "Limpeza e desinfecção do poço", "Verificação da bomba submersa", "Níveis estático e dinâmico"
- Bloco do formulário: título "Solicite o orçamento para tratamento de água de poço" e texto "Conte o que está acontecendo com a água do seu poço e nossa equipe técnica retorna com a orientação e o orçamento adequados."
- Mesmo nome novo nos menus, barra lateral, cartões e links de outras páginas ("Conhecer a Manutenção de Poço Artesiano", "Veja a manutenção de poço artesiano", Monitoramento de Poço etc.). O endereço da página continua o mesmo para não quebrar links.
- Artigo Ferro e Manganês: trocar o cartão "Poço com água suja ou perda de vazão? Isso pode ser incrustação de ferro na bomba submersa" por um chamado sobre água de poço com cor/ferro, levando ao tratamento.
- Quem Somos: remover a menção a "níveis dinâmicos e estáticos".

## 3. Monitoramento da Qualidade da Água
- Remover "24 horas por dia" (também no artigo Contaminação da Água).
- "condomínios de alto padrão" vira "condomínios".
- Frequência: "Duas visitas mensais ou visitas extras em caso de necessidade".
- Manutenção preventiva de equipamentos: "verificação de bombas dosadoras e verificação de produtos químicos" (sem "limpeza de cilindros").
- Remover o parágrafo "O monitoramento de poço artesiano constante não só garante a renovação das suas licenças... bomba submersa e das tubulações...".

## 4. Tratamento de Água Industrial
- Remover "Parada não programada de linha para limpeza química".
- Remover "Ausência de laudo válido em uma fiscalização ou manutenção de equipamentos" e o trecho "não o catálogo de equipamentos".

## 5. Frases a ajustar (Manutenção de Sistemas)
- "...os metais começam a passar direto para a sua torneira (com matação)" → "...passam direto para a sua torneira, deixando a água com cor e manchas."
- "...dosagem de cloro, flúor ou corretores de pH esteja exata" → "...dosagem de cloro e de corretores de pH fique dentro do ideal."
- "Sistemas para ferro e manganês: substituição de mídias catalíticas desgastadas." (correção da grafia)
- "Abrandadores e desmineralizadores: troca de resina catiônica e aniônica e manutenção no tanque de salmoura. Saiba mais sobre abrandadores e desmineralizadores." (grafia + link)
- "...troca dos elementos filtrantes e desinfecção no prazo correto, com emissão de laudos de calibração..." (correção)

Se você preferir outra redação para as frases do item 5, me diga.

## Detalhes técnicos
- Arquivos: `src/routes/_site.servicos.manutencao-poco-artesiano.tsx`, `_site.servicos.manutencao-sistemas-tratamento.tsx`, `_site.servicos.monitoramento-qualidade-agua.tsx`, `_site.servicos.tratamento-de-agua-industrial.tsx`, `_site.servicos.tratamento-de-agua.tsx`, `_site.contaminacao-agua.tsx`, `_site.agua-com-ferro-manganes.tsx`, `_site.produtos.filtros-de-agua.tsx`, `_site.servicos.monitoramento-poco-artesiano.tsx`, `_site.sobre.tsx`, e rótulos/meta em `src/lib/site.ts` (entrada `manutencao-poco-artesiano`, `nav`, `related`, `SERVICE_LINKS`, home se citar).
- Varredura final com busca por "osmose", "bomba submersa", "manutenção de poço", "24 horas", "alto padrão" para garantir zero ocorrências.
