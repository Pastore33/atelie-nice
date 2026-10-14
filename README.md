# Ateliê Nice

Site institucional de um ateliê de costura no Parque Real, Diadema. Next.js App Router, TypeScript, React, Tailwind CSS e Lucide. Exportação estática, sem backend, autenticação ou armazenamento de dados de clientes.

## Executar

Requer Node.js 22.13+ ou 24 LTS e npm. No terminal dentro deste projeto:

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Abra http://localhost:3000. No PowerShell, use `Copy-Item .env.example .env.local`. Em pastas WSL, prefira Node instalado dentro do WSL, evitando comandos Windows em caminhos UNC.

Neste workspace, um Node oficial foi colocado em `.tools/node-v24.22.0-linux-x64`, sem instalação global. No terminal Ubuntu/WSL, você pode usar:

```sh
cd /home/leandro_ub/projetos/atelie-nice
export PATH="$PWD/.tools/node-v24.22.0-linux-x64/bin:$PATH"
npm run dev
```

O runtime local não faz parte do deploy. Para rodar os testes de navegador com o Chromium já baixado neste workspace, defina `PLAYWRIGHT_BROWSERS_PATH="$PWD/.tools/browsers"`. Faça o build antes dos testes E2E, pois eles avaliam a versão exportada.

## Estrutura e manutenção

- `src/app`: início, serviços, sobre, galeria, orçamento, contato, 404 e metadados.
- `src/components`: navegação, blocos compartilhados, galeria e formulário.
- `src/lib/data.ts`: dados institucionais, contato, navegação, serviços e imagens.
- `src/lib/whatsapp.ts`: validação e mensagem de orçamento.
- `src/lib/seo.ts`: canonical e Open Graph.
- `assets/originals`: PNGs originais preservados.
- `public/images`: cópias WebP otimizadas.
- `scripts/optimize-images.mjs`: otimização reproduzível.
- `tests`: testes unitários e de navegador.

Edite `business` em `src/lib/data.ts` para alterar nome, endereço e contato. Para trocar WhatsApp, atualize `whatsapp`, `phone` e `tel`. Os serviços ficam em `services`; demais textos institucionais ficam nas páginas.

Para substituir imagens, preserve originais em `assets/originals`, ajuste a lista do script e execute `npm run images`. Atualize dimensões, descrições alternativas e caminhos em `photos` se necessário. Não modifique a identidade das pessoas retratadas. As imagens recebidas apresentam o universo do ateliê e não são exibidas como comprovação de encomendas específicas.

## Verificação e build

```sh
npm run images
npm run lint
npm run typecheck
npm test
npm run build
npm run preview
```

O build gera `out/`. `npm run preview` serve essa pasta. Testes de navegador: `npx playwright install chromium` e `npm run test:e2e` (desktop e mobile). A instalação do navegador é separada dos testes unitários. Os testes de orçamento interceptam a abertura de janela e não enviam mensagens.

## SEO e publicação

Defina `NEXT_PUBLIC_SITE_URL` com a URL HTTPS final, sem barra no fim, antes do build. Isso habilita canonical, URLs de Open Graph, dados estruturados e sitemap absoluto. Sem domínio configurado, URLs absolutas são omitidas e o sitemap fica vazio, evitando publicar um domínio fictício. `robots.txt` é gerado em ambos os casos. Após receber um subdomínio Pages, configure a variável e reconstrua.

Não há scripts de análise ou cookies. Uma futura integração pode ser adicionada no layout, com configuração por variável pública e avaliação de privacidade antes de ativá-la. Nunca coloque segredos em variáveis `NEXT_PUBLIC_*`.

## Cloudflare Pages

Versionar o código no GitHub não publica o site automaticamente. Quando autorizado, crie um projeto Pages no painel Cloudflare:

1. **Upload direto:** execute o build com a URL configurada e envie a pasta `out` pelo fluxo de upload de assets do Pages. Não envie código-fonte ou `node_modules`.
2. **Integração Git:** conecte seu repositório, escolha Next.js Static HTML Export, configure build command **`npm run build`**, output directory **`out`**, Node 22 ou 24 e `NEXT_PUBLIC_SITE_URL`.

O upload direto permite publicar sem repositório. O projeto usa `output: 'export'` e `trailingSlash: true`; mantenha `404.html`. Não crie redirecionamento SPA para `/index.html`.

Referências: [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports) e [Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/).

## Limitações e pendências

- Domínio final pendente para SEO absoluto.
- Logotipo tipográfico provisório, substituível pela identidade definitiva.
- Sem horários, depoimentos, certificações ou datas de fundação inventados.
- Orçamentos dependem da conversa com a Nice; não há cálculo automático de preços ou prazos.
- WhatsApp depende do aplicativo/navegador e da confirmação de envio pelo cliente.

Possíveis evoluções: identidade definitiva, catálogo documentado de trabalhos e análise de visitas com respeito à privacidade.
