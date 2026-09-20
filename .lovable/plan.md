# Padrão das páginas de Serviços + Análise de Água

## Objetivo

Criar um padrão visual e de navegação para todas as páginas de serviço (layout 80/20) e reconstruir a página "Análise de Água" com o conteúdo do PDF.

## 1. Novos endereços

As 9 páginas de serviço passam a ficar dentro de "Serviços":

```text
/servicos                              (lista de serviços, inalterada)
/servicos/analise-de-agua
/servicos/tratamento-de-agua
/servicos/legalizacao-poco-artesiano
/servicos/manutencao-poco-artesiano
/servicos/monitoramento-qualidade-agua
/servicos/manutencao-sistemas-tratamento
/servicos/tratamento-efluentes
/servicos/agua-de-reuso
/servicos/tratamento-de-agua-industrial
```

Todos os links internos (menu, rodapé, blocos "páginas relacionadas", página inicial) são atualizados. Os endereços antigos continuam funcionando com redirecionamento permanente, para não perder posicionamento no Google.

Páginas de produtos e institucionais ficam como estão.

## 2. Layout padrão de serviço (80/20)

- **Coluna esquerda (80%)**: conteúdo da página, estética livre por página.
- **Coluna direita (20%)**: sempre igual, fixa acompanhando a rolagem:
  - Botão azul "Orçamento agora" — rola até o formulário no fim da página.
  - Lista com todos os serviços; o serviço atual aparece destacado.
- No celular a coluna lateral vira um bloco acima do conteúdo (botão + lista compacta).

## 3. Página Análise de Água

Conteúdo do PDF, na coluna de 80%:

1. **Hero** — "Análise de Água: Segurança, Potabilidade e Conformidade Legal", dois parágrafos, botões "Consultar preço da análise de água" e "Falar com um Especialista no WhatsApp", com espaço reservado para imagem.
2. **Por que e onde fazer** — texto + lista de 3 situações (consumo humano, regularização/DAEE, prevenção industrial e condominial), com links internos para manutenção de poços e água amarela.
3. **Padrões, laudos e certificações** — texto sobre Portaria 888 / 2914 e 4 documentos entregues (relatório, parecer técnico, certificado, laudo com ART), em cartões.
4. **Custos, prazos e urgência** — preço variável por escopo, bloco de urgência e box "Orçamento Rápido" com botão.
5. **Próximos passos** — 4 problemas → soluções, com links para abrandador, filtros, bombas dosadoras e monitoramento.
6. **CTA final + formulário** — nome, WhatsApp/telefone, e-mail, motivo da análise (lista: Consumo Humano / Poço Artesiano / Vigilância Sanitária - Indústria / Outros) e botão "Solicitar Preço da Análise de Água", com a nota de rodapé.

Imagens: blocos marcados "Imagem", como na página inicial. Nenhuma imagem será gerada.

Título e descrição da página passam a ser os do PDF.

## Detalhes técnicos

- Novas rotas em `src/routes/_site.servicos.<slug>.tsx`; rotas antigas viram redirecionamentos (`beforeLoad` + `redirect`).
- `src/lib/site.ts`: campo de caminho por página (`path`) para que `headFor`, links relacionados e navegação usem o novo endereço; lista `SERVICE_LINKS` compartilhada pela barra lateral.
- Novo `src/components/ServicePageLayout.tsx` com a grade 80/20 (`lg:grid-cols-[minmax(0,1fr)_16rem]`) e `ServiceSidebar` (`sticky top-24`).
- Página nova em `src/routes/_site.servicos.analise-de-agua.tsx`, escrita à mão (não usa `PageTemplate`).
- Formulário sem envio real por enquanto (sem backend); botão de orçamento rola até `#orcamento`.
- Somente componentes e tokens do design system (Button, Card, Input, Textarea, Badge).
