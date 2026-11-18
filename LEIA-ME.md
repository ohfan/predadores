# Predadores — site v1 (HTML + CSS)

Site estático, sem dependências. Abra pelo servidor local (veja abaixo) e suba a pasta toda na Netlify, Vercel ou Cloudflare Pages.

## Estrutura
```
index.html         Home (opção #1 do layout)
experiencia.html   Sobre a experiência
faq.html           Perguntas frequentes (com "Ver mais")
css/style.css      Todo o visual. Cores e fontes nas variáveis do :root
js/main.js         Menu, "ver mais" do FAQ e animação de entrada
assets/img/        Imagens extraídas do PDF do layout
assets/fonts/      Fontes provisórias (Anton + Roboto Condensed, licença OFL)
```

## Para testar no computador
O logo usa `mask-image`, que **não aparece abrindo o arquivo direto (file://)**.
Rode um servidor local na pasta:
```
python3 -m http.server
```
e acesse http://localhost:8000. (Ou use a extensão Live Server do VS Code.)

## Pendências (procure "TROCAR" no código)
- **Link da bilheteria:** todos os botões "Compre seus ingressos" apontam para `#ingressos`.
- **Fontes do layout:** Field Gothic e Prohibition são pagas. Com a licença web,
  coloque os arquivos em `assets/fonts/` e troque `--f-display`, `--f-text` e `--f-label` no `:root`.
- **Imagens em alta:** as fotos dos ambientes vieram do PDF em baixa resolução. Peça os originais.
  O T-rex e o megalodon estão razoáveis, mas vale pedir os PNGs recortados originais também.
- **Logo:** `assets/img/logo-predadores.webp` foi gerado a partir do PDF. Se o cliente mandar um SVG, troque o `url()` em `.brand`.
- **Patrocinadores:** `patrocinadores.png` também veio do PDF. O ideal é receber os logos em SVG.
- **Textos:** tudo ainda está em lorem ipsum. "Ministério da Cultura e nononononon" também é placeholder.
- **Escolas:** não tem tela no layout. Por enquanto o link aponta para uma pergunta no FAQ.
- **Home opção #2:** não está montada. Se escolherem essa, dá para trocar só o hero.
