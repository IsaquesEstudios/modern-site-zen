# Como colocar o site da Vid'Água no ar em uma VPS com Coolify

Este pacote contém o código-fonte completo do site, já com os arquivos de
container prontos (`Dockerfile` e `server.mjs`). O Coolify detecta o
`Dockerfile` e faz o resto sozinho.

## O que este pacote faz

O site é renderizado no servidor (SSR), então ele precisa de um servidor
rodando — não basta hospedar arquivos estáticos. O `Dockerfile` incluído:

1. Instala as dependências e gera o site de produção (`npm ci` + `npm run build`).
2. Cria uma imagem final enxuta que sobe o servidor Node na **porta 3000**.

Não é necessário Node, Bun ou PM2 na VPS — tudo roda dentro do container Docker
que o Coolify gerencia.

## Passo a passo

### 1. Suba o código para o GitHub

Envie **todo o conteúdo deste pacote** para um repositório (ex.: `vidagua-site`).
Não envie as pastas `node_modules` nem `dist` (são geradas no build). O `.gitignore`
incluído já ignora o que não deve ir.

### 2. Crie o aplicativo no Coolify

1. No Coolify: **+ New Resource** → escolha o repositório (GitHub App) e a branch
   (ex.: `main`).
2. Em **Build Pack**, selecione **Dockerfile** (deixe o caminho `/Dockerfile`).
3. **Porta do aplicativo:** `3000` (é a porta que o `Dockerfile` expõe).
4. Opcional: em **Environment Variables**, adicione `ORIGIN=https://www.vidagua.com.br`
   (define a origem usada internamente pelo servidor; as URLs canônicas do site já
   apontam para esse domínio por padrão).
5. Clique em **Deploy**. O primeiro build leva alguns minutos.

### 3. Aponte o domínio

1. No app do Coolify: aba **Domains** → adicione `https://www.vidagua.com.br`.
2. Configure no seu provedor de DNS um registro **A** (ou **CNAME**, conforme o
   guia do Coolify) apontando `www` para o IP/domínio da VPS.
3. O Coolify emite o certificado SSL (Let's Encrypt) automaticamente.

### 4. Evite conteúdo duplicado no Google

- As tags `canonical`, o `og:url`, o `robots.txt` e o `sitemap.xml` do site já
  apontam para `https://www.vidagua.com.br`, então o Google entende esse domínio
  como o endereço oficial mesmo se encontrar a versão temporária.
- Depois que o site estiver no ar no domínio novo, **despublique a versão da
  Lovable** (ou remova o endereço temporário) para as duas versões não
  competirem. Não cadastre o endereço temporário no Google Search Console;
  cadastre apenas `https://www.vidagua.com.br` e envie o sitemap
  `https://www.vidagua.com.br/sitemap.xml`.

### 5. Atualizações futuras

Sempre que você pedir uma mudança aqui, envie o código atualizado para o GitHub
e clique em **Redeploy** no Coolify — o container é reconstruído e o site volta
ao ar com a versão nova.

## Estrutura dos arquivos novos

| Arquivo | Função |
| --- | --- |
| `Dockerfile` | Receita do container: build + imagem final (porta 3000) |
| `.dockerignore` | Arquivos que não entram na imagem (acelera o build) |
| `server.mjs` | Servidor Node que entrega o HTML renderizado e os arquivos estáticos |
| `package-lock.json` | Versões exatas das dependências usadas no build |

## Verificação rápida (opcional)

Dentro da VPS, depois do deploy:

```bash
curl -I https://www.vidagua.com.br
curl -s https://www.vidagua.com.br/sitemap.xml | head
```

A primeira deve responder `200` (ou `301` para a versão com `www`) e a segunda
deve listar as páginas do site.
