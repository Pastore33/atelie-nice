# Validação — 14/10/2026

Executada no Ubuntu/WSL com Node.js 24.22.0 local ao projeto.

| Verificação | Resultado |
| --- | --- |
| `npm run lint` | Passou |
| `npm run typecheck` | Passou |
| `npm test` | 12 testes passaram |
| `npm run build` | Passou, exportação em `out/` |
| `npm run test:e2e` | 12 testes passaram, Chromium desktop e iPhone 13 emulado |
| Auditoria de dependências na instalação final | Zero vulnerabilidades |

Os testes verificam campos obrigatórios, quantidades inválidas, categoria do serviço, montagem e codificação da mensagem, links de contato, navegação das seis páginas, ausência de overflow horizontal, imagens, menu mobile, galeria por teclado e resposta HTTP 404. A abertura de WhatsApp é interceptada; nenhuma mensagem foi enviada.

Capturas em `artifacts/desktop.png` e `artifacts/mobile.png` foram inspecionadas visualmente. O site usa somente as quatro imagens fornecidas; os PNGs foram preservados e as cópias WebP totalizam aproximadamente 578 KB.

O domínio final permanece pendente. Canonical, URLs absolutas de Open Graph e URLs do sitemap são habilitados ao definir `NEXT_PUBLIC_SITE_URL` e reconstruir o site. Não houve publicação, criação de repositório remoto ou push.

A tentativa inicial com ferramentas Windows sobre o caminho UNC do WSL apresentou incompatibilidades. A execução final diretamente no Linux passou. O runtime temporário e o navegador ficam em `.tools/`, ignorado pelo Git, sem alteração global de Node.js ou de outros projetos.
