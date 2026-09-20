# Situação das páginas de Serviços

## Nada foi perdido

As páginas refeitas no padrão novo (coluna 80/20, conteúdo dos PDFs) estão no ar:

- Análise de Água
- Tratamento de Água
- Legalização de Poço Artesiano
- Monitoramento da Qualidade da Água
- Manutenção de Sistemas de Tratamento

Ainda estão no modelo antigo, com texto de preenchimento, exatamente estas 4:

- Manutenção de Poço Artesiano
- Tratamento de Efluentes
- Água de Reuso
- Tratamento de Água Industrial (Para Empresas)

Ao clicar no card de uma dessas 4 na lista de Serviços, o que aparece é o modelo
antigo — é isso que você viu. Elas ainda não foram reescritas porque o conteúdo
delas não chegou.

## Próximo passo

Você envia os 4 PDFs. Ao recebê-los, reescrevo cada uma das 4 páginas no mesmo
padrão das outras:

- Coluna de conteúdo (80%) com as seções do PDF.
- Coluna lateral fixa (20%) com o botão "Orçamento agora" e a lista de serviços.
- Abertura com título, dois parágrafos e dois botões (WhatsApp e âncora interna).
- Espaços reservados "Imagem" onde houver foto (nenhuma imagem será gerada).
- Formulário de orçamento ao fim da página, ainda sem envio real.
- Bloco azul "Fale com um especialista" no rodapé da página.
- Título e descrição da página conforme as meta tags do PDF.

## Detalhes técnicos

- Arquivos a reescrever: `src/routes/_site.servicos.manutencao-poco-artesiano.tsx`,
  `_site.servicos.tratamento-efluentes.tsx`, `_site.servicos.agua-de-reuso.tsx`,
  `_site.servicos.tratamento-de-agua-industrial.tsx` — hoje apenas renderizam
  `PageTemplate`.
- Padrão de referência: `_site.servicos.monitoramento-qualidade-agua.tsx`
  (`ServiceGrid` + `QUOTE_ANCHOR`, `Reveal`, `ImagePlaceholder`, `CTASection`,
  `WhatsAppFloat`, `headFor` com título/descrição do PDF).
- Links internos e rotas já apontam para `/servicos/<slug>`; nada muda ali.
- Somente componentes e tokens do design system.
