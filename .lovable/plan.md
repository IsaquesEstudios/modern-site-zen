# Reconstrução da Página Inicial (Home)

Refazer a home seguindo exatamente o texto do PDF enviado, com espaços reservados para as imagens que virão depois (nenhuma imagem será gerada).

## Seções da nova home

1. **Hero** — H1 "Vid'Água – Mais de 30 anos tratando e cuidando da qualidade da água.", subtítulo do PDF (Portaria 888 / DAEE), botões "Solicitar Orçamento" (→ /contato) e "Ver Nossos Serviços" (rolagem até a seção de serviços). Espaço reservado para a imagem principal ao lado.
2. **Quem Somos** — H2 "Três décadas de excelência em análise e tratamento de água", parágrafo do PDF e link "Conheça mais sobre a nossa história e equipe" (→ /sobre).
3. **Nossos Serviços** — H2 "Soluções completas para a sua água"; 6 cards com os textos do PDF (Análise, Tratamento, Poço Artesiano → /manutencao-poco-artesiano, Monitoramento, Soluções para Empresas, Produtos), cada um com espaço reservado para ícone/imagem e link "Saber mais".
4. **Problemas que Resolvemos** — H2 "Identificou algum problema? Nós temos a solução.", frase de apoio e os 5 sintomas com seus links e textos de ação do PDF.
5. **Por que escolher a Vid'Água** — H2 do PDF e os 5 diferenciais com título em negrito e descrição.
6. **Artigos e Blog** — H2 "Informação técnica de qualidade e dicas úteis"; 3 cards de artigo (espaço reservado para imagem, título, data, "Ler mais") e botão "Acessar o Blog da Vid'Água". Conteúdo de preenchimento até o blog ter posts reais.
7. **Contato / CTA final** — H2 "Fale com um especialista em água", texto do PDF e formulário curto: Nome, WhatsApp/Telefone, E-mail, lista "Como podemos ajudar hoje?" (Análise / Tratamento / Poços / Produtos) e botão "Enviar Mensagem e Solicitar Orçamento". Abaixo: horário de atendimento (com lacuna a preencher) e "Respondemos em até 1 dia útil".
8. **Botão flutuante de WhatsApp** — fixo no canto inferior direito da home, "Chamar no WhatsApp".

## Imagens de preenchimento

Blocos cinza-claro do próprio sistema de design, na proporção correta, com o rótulo "Imagem" — trocados pelas fotos reais quando você as enviar. Nenhuma imagem será criada.

## Detalhes técnicos

- Reescrever `src/routes/_site.index.tsx`; criar um pequeno componente `ImagePlaceholder` e um `WhatsAppFloat` em `src/components/`.
- Atualizar `title` e `description` da home em `src/lib/site.ts` para as meta tags do PDF.
- Âncora `id="servicos"` na seção 3 para o botão secundário do hero.
- Formulário visual apenas (sem envio), no mesmo padrão da página de contato; componentes e tokens do design system, animações Reveal mantidas.

## Pendências suas

- Horário de atendimento, número oficial de WhatsApp e as imagens.
