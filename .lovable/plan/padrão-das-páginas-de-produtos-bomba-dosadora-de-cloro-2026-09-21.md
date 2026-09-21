# Padrão das páginas de Produtos + Bomba Dosadora de Cloro

## Objetivo

Criar para os produtos o mesmo padrão 80/20 já usado nos serviços, com a coluna lateral listando **produtos** (não serviços), e reconstruir a página "Bomba Dosadora de Cloro" com o conteúdo enviado.

## 1. Novos endereços

As 7 páginas de produto passam a ficar dentro de "Produtos":

```text
/produtos                                (lista de produtos, inalterada)
/produtos/bomba-dosadora-cloro
/produtos/bomba-dosadora-agua
/produtos/filtros-de-agua
/produtos/abrandador-de-agua
/produtos/desmineralizador-de-agua
/produtos/agua-destilada
/produtos/produtos-quimicos-agua
```

Todos os links internos (menu, rodapé, páginas de serviço, página inicial, páginas de problema) passam a apontar para os novos endereços. Os endereços antigos continuam funcionando com redirecionamento permanente, para não perder posicionamento no Google.

## 2. Coluna lateral de produtos (20%)

Igual em estrutura à dos serviços, mas com conteúdo próprio:

- Botão azul "Orçamento agora" — rola até o formulário no fim da página.
- Lista com todos os produtos; o produto atual aparece destacado.
- Link "Ver todos os produtos".
- No celular vira um bloco acima do conteúdo.

## 3. Exposição do conteúdo (diferente da de serviços)

Para a coluna de 80% dos produtos o ritmo visual muda, mantendo o mesmo design system:

- **Hero de produto**: imagem do produto ao lado do texto (nos serviços a imagem vem depois do texto), com selo "Produto" e dois botões.
- **Blocos numerados**: os fatores técnicos aparecem como lista numerada em destaque, em vez dos cartões usados nos serviços.
- **Aplicações em linhas**: lista de aplicações em linhas separadas por filete, em vez de grade de cartões.
- **Faixa de nota técnica**: um bloco suave, largura total, para observações técnicas.
- **Formulário de cotação técnica**, mais longo que o de serviços (com campos de vazão e local de instalação).

## 4. Página Bomba Dosadora de Cloro

Conteúdo enviado, na coluna de 80%:

1. **Hero** — "Bomba Dosadora de Cloro: Precisão Absoluta para a Desinfecção da sua Água", dois parágrafos e botões "Solicitar Dimensionamento e Orçamento" e "Entender como funciona o equipamento".
2. **Por que não vendemos bombas de prateleira** — riscos de equipamento sub e superdimensionado, com links internos para contaminação da água e água com cheiro.
3. **Preço e dimensionamento** — os 4 fatores (vazão, pressão, ponto de injeção, demanda de cloro) em lista numerada, com link para análise de água, e o bloco "Resultado".
4. **Aplicações e segurança** — poços artesianos, condomínios, indústrias e tratamento complementar, mais a nota técnica com link para monitoramento da qualidade da água.
5. **CTA final + formulário de cotação** — nome/empresa, telefone/WhatsApp, e-mail, origem da água (Poço Artesiano / Rede Pública / Captação Superficial), vazão estimada, local de instalação e botão "Solicitar Preço e Dimensionamento da Bomba", com a nota de rodapé.
6. **Bloco azul "Fale com um especialista"** — mantido no fim da página, largura total.

Imagens: blocos marcados "Imagem". Nenhuma imagem será gerada.

Título e descrição da página passam a ser os do documento.

## Detalhes técnicos

- `src/lib/site.ts`: novo `PRODUCT_SLUGS` e `PRODUCT_LINKS`; `pathFor` passa a resolver `/produtos/<slug>` para esses slugs; links `related` das páginas existentes atualizados.
- Novo `src/components/ProductSidebar.tsx` com `ProductSidebar` + `ProductGrid` (mesma grade `lg:grid-cols-[minmax(0,4fr)_minmax(0,1fr)]`, sticky `lg:top-24`), reusando `QUOTE_ANCHOR`.
- `PageTemplate.tsx`: páginas de produto passam a usar `ProductGrid`, como os serviços já usam `ServiceGrid`.
- Rotas novas `src/routes/_site.produtos.<slug>.tsx`; as antigas `_site.<slug>.tsx` viram redirecionamentos 301.
- `src/routes/_site.produtos.tsx` renomeada para `_site.produtos.index.tsx` (flat routing).
- Página escrita à mão em `src/routes/_site.produtos.bomba-dosadora-cloro.tsx`; formulário sem envio real (sem backend).
- Apenas componentes e tokens do design system.
