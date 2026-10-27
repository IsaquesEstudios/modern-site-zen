# Dados estruturados: negócio local, serviços e artigos

Informações invisíveis para o visitante, mas lidas pelo Google, para que ele entenda quem é a Vid'Água, o que ela oferece e quais páginas são artigos. Nada muda no visual.

## O que entra

**1. Negócio local (Vid'Água)**, nas páginas Início, Quem Somos e Contato:
- Nome, logo, site (https://www.vidagua.com.br), telefones (11) 3746-6747 e (11) 3746-0889, WhatsApp, e-mail
- Endereço: R. José Pedro do Amaral, 379 — Jardim Monte Kemel, São Paulo/SP, CEP 05632-030
- Área atendida: São Paulo e atendimento nacional
- Horário: segunda a sexta, horário comercial (sem horário exato, fica sem hora marcada; se você me passar, ex.: 8h às 17h30, eu incluo)

**2. Serviço**, nas 8 páginas de serviço (análise de água, tratamento de água, tratamento de água de poço, monitoramento de poço, monitoramento da qualidade da água, manutenção de sistemas, água de reuso, tratamento de efluentes, tratamento industrial):
- Nome do serviço, descrição, prestado pela Vid'Água, área atendida.

**3. Artigo**, nos 5 artigos do blog (água dura, ferro e manganês, água turva, contaminação, qualidade da água ANVISA):
- Título, descrição, imagem de destaque, autor/editora Vid'Água, endereço da página.

**4. Caminho da página** (Início › Serviços › Análise de Água, por exemplo) em serviços, produtos e artigos, para o Google mostrar esse trilho nos resultados.

## Fora do escopo
- Produtos não recebem dados de "produto à venda" (o Google exige preço, e o site não mostra preços).
- Avaliações/estrelas: não há avaliações reais no site, então não entram.
- Datas de publicação dos artigos: o site não tem datas; ficam de fora até você informar.

## Verificação
- Conferir na prévia que cada tipo de página carrega os dados corretos e válidos.

## Detalhes técnicos
- Novo `src/lib/schema.ts`: `localBusinessSchema()` (`@type: ["LocalBusiness","ProfessionalService"]`, a partir de `CONTACT`), `serviceSchema(page)`, `articleSchema(page, image)`, `breadcrumbSchema(page)`; base `https://www.vidagua.com.br`.
- `headFor` em `src/lib/site.ts` passa a adicionar `scripts` JSON-LD conforme `page.type`: "Serviço" → Service + Breadcrumb; "Blog" com post em `BLOG_POSTS` → Article + Breadcrumb; "Produto" → Breadcrumb; home, "sobre" e "contato" → LocalBusiness. Assim as ~30 rotas recebem os dados sem editar cada arquivo.
- Imagem do artigo vem de `BLOG_POSTS` (URL absoluta montada com o domínio quando a imagem for relativa).
- `analise-de-agua` tem `head` customizado que estende `headFor`; manter os `scripts` ao mesclar.
- Validar com curl no HTML renderizado + `JSON.parse` de cada bloco.
