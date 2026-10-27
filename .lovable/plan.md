# Mapa do site com o domínio www.vidagua.com.br

## O que muda
- O mapa do site (/sitemap.xml) passa a listar todas as páginas com o endereço **https://www.vidagua.com.br** em vez do endereço provisório.
- O arquivo de regras para buscadores (robots.txt) passa a apontar para https://www.vidagua.com.br/sitemap.xml.
- Endereços antigos que só redirecionam ficam fora do mapa; entram apenas as páginas reais (home, serviços, produtos, artigos, blog, contato, sobre e setores).

## Verificação
- Abrir /sitemap.xml na prévia e conferir que cada endereço listado abre normalmente (sem página "não encontrada" nem redirecionamento).
- Marcar o item "Adicionar mapa do site" da revisão de SEO como corrigido.

## Observação
- O mapa só funciona no domínio novo depois que ele estiver conectado ao projeto e o site for publicado. Até lá, os buscadores verão o endereço provisório.

## Detalhes técnicos
- `src/routes/sitemap[.]xml.ts`: `BASE_URL = "https://www.vidagua.com.br"`; filtrar slugs cujo `pathFor` cai em rota de redirecionamento (ex.: `legalizacao-poco-artesiano`), checando cada URL com curl.
- `public/robots.txt`: linha `Sitemap:` com o novo domínio.
- Canonical/og:url seguem relativos em `headFor`, então se ajustam sozinhos ao domínio.
- A prévia ficou sem responder durante o reinício anterior; religar o servidor antes de validar.
