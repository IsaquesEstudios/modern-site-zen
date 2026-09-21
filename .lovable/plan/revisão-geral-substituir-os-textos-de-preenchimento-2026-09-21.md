# Revisão geral: substituir os textos de preenchimento

Varri o site inteiro e listei abaixo tudo o que ainda é texto genérico. A proposta é eliminar todos eles, escrevendo conteúdo real e coerente com o que já está publicado, e inserir os dados oficiais de contato que você enviou.

## 1. Dados oficiais de contato (em todo o site)

Entram no rodapé, na página de Contato, no bloco "Fale com um especialista" e no botão flutuante:

- Telefones: (11) 3746-6747 e (11) 3746-0889
- WhatsApp: (11) 97796-7170 — passa a ser o link real de todos os botões de WhatsApp (hoje é um número de exemplo)
- E-mail: vidagua@vidagua.com.br
- Endereço: R. José Pedro do Amaral, 379 — Jardim Monte Kemel, São Paulo/SP, CEP 05632-030

Na página de Contato, o cartão "Canais de atendimento" deixa de dizer que os dados "serão preenchidos" e passa a mostrar telefones, WhatsApp, e-mail e endereço clicáveis.

## 2. Páginas que ainda mostram o texto genérico

Nestas, o conteúdo hoje é uma lista de títulos com o mesmo parágrafo repetido. Todas serão reescritas com texto real, no padrão visual das páginas já prontas (coluna 80/20 com a barra lateral onde faz sentido, blocos com Reveal, espaços reservados "Imagem", formulário de orçamento e bloco final "Fale com um especialista").

- **Serviços** (/servicos) e **Produtos** (/produtos) — passam a ser páginas de vitrine: introdução real, cartões com descrição própria de cada serviço/produto (hoje todos repetem a mesma frase) e as seções de links internos mantidas.
- **Por que a Vid'Água** (/por-que-vidagua) — diferenciais reais: 30+ anos, laboratório próprio em SP, equipe de engenheiros/geólogos/químicos, conformidade Portaria 888 e DAEE, atendimento nacional.
- **Manutenção de Poço Artesiano**, **Tratamento de Efluentes**, **Água de Reuso**, **Tratamento de Água Industrial** — conteúdo escrito por mim, coerente com as páginas irmãs já publicadas.
- **Setores**: Tratamento de Água para Comércio, Hotel, Piscina e Restaurante — versões mais curtas e focadas em cada setor, com links para os serviços e produtos correspondentes.

Você revisa esses textos depois e me manda ajustes.

## 3. Detalhes soltos de preenchimento

- **Home**: o horário "das [inserir horário] às [inserir horário]" passa a "segunda a sexta, em horário comercial" (me diga o horário exato se quiser preciso) e ganha telefone/WhatsApp reais.
- **Cartões de links internos**: a frase "Texto de preenchimento com uma linha descritiva da página" é trocada pela descrição real de cada página.
- **Etiqueta "Prioridade Alta/Média"** que aparece no topo de algumas páginas: era uma marcação interna de planejamento, será removida da parte visível.
- **Blog** e os 3 cartões de artigo da home: ficam como estão, conforme sua escolha.

## Detalhes técnicos

- `src/lib/site.ts`: remover o `lorem` e o helper `s()`; preencher `sections` reais nas páginas afetadas; adicionar descrição própria em cada item de `related`/`problems`/`SERVICE_LINKS`/`PRODUCT_LINKS`; nova constante `CONTACT` (telefones, WhatsApp, e-mail, endereço).
- `src/components/PageTemplate.tsx`: `WHATSAPP_URL` passa a `https://wa.me/5511977967170`; `LinkGrid` usa a descrição real do item; remover o badge de prioridade.
- `src/components/SiteLayout.tsx`: rodapé com os dados de contato.
- Reescrever as rotas `_site.servicos.index.tsx`, `_site.produtos.index.tsx`, `_site.por-que-vidagua.tsx`, `_site.servicos.{manutencao-poco-artesiano,tratamento-efluentes,agua-de-reuso,tratamento-de-agua-industrial}.tsx` e `_site.tratamento-agua-{comercial,hotel,piscina,restaurante}.tsx` no padrão das páginas já prontas.
- Apenas componentes e tokens do design system; nenhuma imagem será gerada.

## Pendência

- Horário exato de atendimento (ex.: 8h às 17h30) — sem ele, uso "horário comercial".
