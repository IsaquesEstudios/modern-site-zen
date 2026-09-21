# Nova seção "Problema específico" na página de Serviços

## O que muda

Na página **Serviços**, abaixo do bloco "Páginas relacionadas", entra uma nova
seção com o mesmo visual (cartões em grade), chamada **Problema específico**,
com 4 temas:

- Água Dura → página "Água Dura"
- Água com Ferro e Manganês → página "Água com Ferro e Manganês"
- Água com Cheiro → página "Água Turva, Cheiro e Cloro"
- Água com Bactéria → página "Contaminação da Água"

As 4 páginas de destino já existem no site; a seção apenas cria o caminho até
elas a partir de Serviços.

## Detalhes técnicos

- `src/lib/site.ts`: campo opcional `problems?: { label: string; to: string }[]`
  em `PageDef`, preenchido na entrada `slug: "servicos"` com os 4 links
  (`/agua-dura`, `/agua-com-ferro-manganes`, `/agua-turva-cheiro-cloro`,
  `/contaminacao-agua`).
- `src/components/PageTemplate.tsx`: renderiza, quando `page.problems` existir,
  um bloco `SectionTitle` (eyebrow "Links internos", título "Problema específico")
  + `LinkGrid`, logo após o bloco de páginas relacionadas, dentro do mesmo
  container (fluxo normal para páginas Hub, `ServiceGrid` para serviços).
- Apenas componentes e tokens do design system; nenhuma outra página é afetada.
