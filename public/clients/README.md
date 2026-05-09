# Handoff: Telex Telecomunicações — Home Page Redesign

## Overview
Redesign completo da home institucional da **Telex Telecomunicações**, empresa de telecom + segurança eletrônica + aluguel de equipamentos sediada em Santo André (ABC). A página posiciona a Telex como provedor único para empresas, comércio e condomínios, com 4 categorias de serviço e destaque para o novo serviço de Aluguel.

## About the Design Files
Os arquivos em `source/` são **referências de design feitas em HTML/JSX** (protótipo de alta fidelidade rodando em React via Babel inline). Eles mostram exatamente a aparência e o comportamento desejados, **não devem ser copiados como código de produção**. A tarefa é **recriar este design no ambiente do codebase alvo** (Next.js, Astro, WordPress, etc.) seguindo os padrões já estabelecidos do projeto. Se não houver codebase ainda, recomenda-se **Next.js 14+ com Tailwind CSS** ou **Astro + Tailwind**.

A intenção do cliente é "EXATAMENTE o que estou vendo", então preserve cada detalhe abaixo.

## Fidelity
**Hi-fi.** Pixel-perfect. Cores, tipografia, espaçamentos, animações e copy devem ser reproduzidos com fidelidade. Os tokens de design abaixo são canônicos.

---

## Stack Recomendada
- **Framework**: Next.js 14 (App Router) ou Astro
- **CSS**: Tailwind CSS (com tokens custom no `tailwind.config`) **ou** CSS Modules importando os tokens do `:root`
- **Tipografia**: Google Fonts — `Inter Tight` (400/500/600/700) + `JetBrains Mono` (400/500/600)
- **Imagens**: Next/Image ou `<img>` com lazy load
- **Sem dependências de UI**: todos os componentes são custom

---

## Design Tokens

### Cores (definidas em OKLCH; equivalentes hex aproximados em comentário)
```css
:root {
  /* Marca — azul escuro */
  --blue: oklch(30% 0.13 250);        /* ~ #1c2c66 */
  --blue-2: oklch(40% 0.15 250);      /* ~ #2d4290 */
  --blue-deep: oklch(20% 0.09 252);   /* ~ #131c45 */
  --blue-soft: oklch(94% 0.04 245);   /* ~ #e7eef8 */

  /* Acentos por seção */
  --teal: oklch(58% 0.13 195);        /* ~ #2d9aa6 — Segurança Eletrônica */
  --teal-soft: oklch(94% 0.04 195);
  --green: oklch(58% 0.14 155);       /* ~ #2da37a — SLA / sucesso */
  --green-soft: oklch(94% 0.05 155);
  --magenta: oklch(56% 0.18 340);     /* ~ #c93a8e — Comunicação Condominial */
  --magenta-soft: oklch(95% 0.04 340);
  --amber: oklch(70% 0.16 65);        /* ~ #d4933a — RESERVADO p/ Aluguel */
  --amber-2: oklch(80% 0.14 75);
  --amber-soft: oklch(96% 0.05 75);

  /* Neutros */
  --ink: oklch(18% 0.015 250);        /* ~ #1a1d28 */
  --ink-2: oklch(34% 0.012 250);
  --ink-3: oklch(52% 0.01 250);
  --ink-4: oklch(70% 0.008 250);
  --paper: oklch(98.5% 0.005 240);
  --paper-2: oklch(96.5% 0.008 240);
  --rule: oklch(88% 0.008 240);
  --rule-strong: oklch(76% 0.01 240);
  --night: oklch(20% 0.04 255);       /* fundo da seção Aluguel */
  --night-2: oklch(26% 0.045 255);
}
```
**Regra de cor crítica**: âmbar é exclusivo da seção Aluguel. Não use em outros lugares.

### Tipografia
- **Display / texto**: `Inter Tight`
- **Mono / labels técnicas**: `JetBrains Mono`
- **Antialiasing**: `-webkit-font-smoothing: antialiased`
- **Escala**:
  - H1 hero: 62px / line 1.04 / -0.025em (mobile 42px / 32px)
  - H2 seção: 42px / line 1.1 / -0.02em (mobile 30px)
  - H3 card: 18-22px / line 1.2 / -0.005 a -0.01em
  - Lede: 19px / line 1.55
  - Body: 14-16px / line 1.55
  - Mono labels: 10-13px com letter-spacing 0.06-0.14em e UPPERCASE

### Espaçamento
- Container `max-width: 1280px`, padding lateral 32px (mobile 18px)
- Seções: `padding: 96px 0` (mobile 64px)
- Grids gap: 16-24px entre cards

### Border radius
- Cards: 12px
- Inputs/botões: 6-8px
- Pills/chips: 99px

### Sombras
- Card destaque: `0 1px 0 var(--rule), 0 28px 60px -32px oklch(20% 0.05 250 / .25)`
- Hover de card: `0 14px 32px -20px oklch(30% 0.05 250 / .25)`

---

## Estrutura da Página (ordem dos blocos)

1. **TopBar** (preto, 36px) — horário + endereço + telefone + e-mail
2. **Header** (sticky, branco, 84px) — logo + nav + CTAs
3. **Hero** — H1 + lede + CTAs + meta-strip de números + card lateral "Como trabalhamos"
4. **Proof** (fundo preto) — marquee infinito de 10 logos parceiros
5. **Categories** — 4 cards de categoria de serviço
6. **Aluguel** (fundo escuro, acento âmbar) — 3 cards de caso de uso + CTA
7. **Processo** — 3 etapas numeradas
8. **PorQue** (fundo paper-2) — grid 3x2 de diferenciais
9. **Modalidades** — 3 colunas (Instalação / Manutenção / Assistência Técnica)
10. **Cases** (fundo paper-2) — 3 cards com métrica + quote
11. **Cobertura** — mapa SVG ABC + tabela de cidades com SLA
12. **Selos** — 6 certificações
13. **FormBlock** — promessas + formulário "Pedir um orçamento"
14. **Footer** (preto) — 4 colunas
15. **FAB WhatsApp** (fixo bottom-right)

---

## Especificações por Bloco

### Logo
- Marca "TELEX" com **dois traços horizontais** (símbolo "=") à esquerda
- Traços: 26x5px, gap 4px, ambos azuis (`--blue` e `--blue-2`)
- Wordmark "TELEX" 22px bold + small "TELECOMUNICAÇÕES" mono 9.5px com letter-spacing 0.22em
- **NUNCA** use âmbar/amarelo no logo

### Hero
- Background: gradiente vertical `--blue-soft` → `--paper`
- Decoração: grid 64x64 com mask radial + 2 blobs blur (teal top-right, magenta bottom-left)
- H1: "A concorrência instala." (com strikethrough em ink-3) + "A Telex **planeja**, **executa**, **documenta** e **garante**." (verbos em `--blue`)
- Lede: "Telecom e segurança eletrônica com um só fornecedor para empresas, comércio e condomínios em São Paulo. Cabeamento, internet por fibra, câmeras, alarmes, telefonia digital e aluguel de equipamentos."
- CTAs: primary "Pedir orçamento →" + ghost "Ver todos os serviços"
- Meta-strip: 15+ anos / 800+ instalações / 50+ condomínios / 24h SLA — cada número em cor diferente (blue/teal/magenta/green)
- Card lateral: 4 etapas (Análise / Projeto e orçamento / Execução / Garantia) com bullets numerados coloridos + top-border gradient azul→teal→magenta

### Proof / Marquee de Parceiros (corrigido para rotação infinita)
- Fundo `--ink` (preto), padding 64px 0 72px, overflow hidden
- Header centralizado: "Quem confia **na Telex**" (em em teal)
- **Marquee**: track flex com 20px de gap, anima translateX(0) → translateX(-50% - 10px) em 38s linear infinite
- Pausa no hover (`animation-play-state: paused`)
- Mask de fade nas laterais: `linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)`
- **Logos duplicados** no array (rendered 2x) para loop seamless
- Card: 188x130px, branco, radius 10px, padding 14px 16px, contém `<img>` (max-h 60px, max-w 140px, object-fit contain) + segmento em mono caps abaixo
- **Lista de parceiros** (arquivos em `source/logos/`):
  1. direcional.png — Engenharia
  2. podpah.png — Entretenimento
  3. senai.png — Educação
  4. pmsp.png — Órgão público
  5. sany.png — Indústria
  6. wtc.png — Corporativo
  7. orcafascio.png — Tecnologia
  8. rottas.png — Construtora
  9. polemica.png — Construtora
  10. atualcargas.png — Logística
- **Atenção**: estes PNGs são recortes da screenshot enviada pelo cliente. Substitua por SVGs/PNGs oficiais quando disponíveis, mantendo as mesmas proporções.

### Categorias (grid 4 colunas, 2 em tablet, 1 em mobile)
- Cards 380px min-height com border-left colorido 4px
- 4 categorias com cores próprias:
  1. **Telecom e Conectividade** (azul) — Rede de computadores / Internet por fibra óptica / Telefonia digital e em nuvem
  2. **Segurança Eletrônica** (teal) — Câmeras de monitoramento / Sistemas de alarme / Cerca elétrica / Controle de acesso
  3. **Comunicação Condominial** (magenta) — Interfonia coletiva / Vídeo porteiro / Interfone no celular do morador
  4. **Aluguel de Equipamentos** (âmbar) com pill "Novo" no canto sup. direito — Câmeras temporárias / Alarmes e sensores / Telefonia para eventos
- Glyph 48x48 com fundo soft da cor + ícone stroke 1.6
- Lista com divisores tracejados, item com seta `→` em mono
- "Ver categoria ↗" no rodapé (cor da categoria, mono caps)

### Aluguel (fundo escuro)
- Background composto: 2 radial-gradients (âmbar + magenta) + `--night`
- 3 cards `--night-2`, border-left 1px, min-height 420px:
  1. **Obras e canteiros de construção** — locação 30+ dias / monitoramento pelo celular / desmobilização sem custo
  2. **Eventos corporativos** — diária/semana / telefonia com ramais / câmeras temporárias com gravação
  3. **Locação comercial e sazonalidade** — 3 a 24 meses / migração simples / substituição em falha
- Cada card: ícone 54x54 com border âmbar + título 20px white + parágrafo + lista com bullets `+` âmbar
- CTA final: "Conte o equipamento, prazo e local. Devolvemos uma **cotação em até 24 horas**." + botão âmbar "Quero alugar →" + botão branco "Falar com especialista"

### Processo (3 cards)
- Cada card tem gradiente sutil de cor própria no topo (blue-soft / teal-soft / magenta-soft) → branco
- Numeração mono 32px + label
- 3 etapas: Análise (Visita técnica) / Projeto e orçamento (Memorial + ART CREA) / Execução (Equipe própria + dossiê)

### Por Que (grid 3x2 em fundo `--paper-2`)
- 6 células: Projeto documentado / Garantia escrita / SLA 24h / Revenda autorizada Intelbras / Equipe própria / Ciclo completo
- Cada célula: ícone 42x42 com fundo soft + h4 18px + parágrafo + tag técnica mono na base separada por divisor

### Modalidades
- Tabela de 3 colunas: Instalação / Manutenção / Assistência Técnica
- Cada coluna: top-border 5px colorido (blue/teal/green) + lista de 9 itens compartilhada (Alarmes / Câmeras de monitoramento / Cerca elétrica / Interfonia / Vídeo porteiro / Controle de acesso / Telefonia digital / Rede de computadores / Internet por fibra)
- CTA inferior "Solicitar [modalidade] →"

### Cases (fundo paper-2)
- 3 cards: Indústria (azul) / Condomínio (magenta) / Comércio (âmbar)
- Cada card: imagem placeholder com gradiente + label de segmento + título + métrica destaque (40% / 96 / 0) + quote com border-left colorido + avatar redondo + nome/papel
- **Importante**: nomes "Cliente placeholder" — substituir por reais quando o cliente fornecer
- Avatar `.who .ph` com `flex-shrink:0`, bloco texto com `min-width:0` e `text-overflow:ellipsis` (corrige overlap em larguras estreitas)

### Cobertura
- Grid 2 colunas: info à esquerda (h3 + lista de cidades com SLA) + mapa SVG à direita
- SVG: forma da região ABC com pontos coloridos por cidade + raio dashed indicando alcance
- Cidades: Santo André (mesmo dia) / São Caetano / São Bernardo / Mauá / Diadema (24h) / Ribeirão Pires / Rio Grande da Serra (48h) / São Paulo Capital (24h)

### Selos
- 6 certificações em row: Intelbras (revenda autorizada) / ABESE (associada) / CREA e ART (resp. técnico) / ANATEL (homologação) / Furukawa (parceria) / Hikvision (parceria)
- Cada selo com top-border colorido próprio

### Formulário "Pedir um orçamento"
- Grid 2 colunas: lado esquerdo com h2 + lede + 3 promessas numeradas (Resposta em 24h / Visita técnica gratuita / Proposta escrita com ART)
- **Promise rows**: `display:flex; gap:14px; align-items:flex-start` e o `<div>` interno com `flex:1 1 auto; min-width:0` (corrigir overflow)
- Card de formulário: branco com top-border gradient azul→teal
- Título: "Pedir um orçamento" + sub "Leva menos de 1 minuto. Volto pra você no mesmo dia útil."
- Campos: Nome / WhatsApp / E-mail (opcional) / **Chips multi-select** "Do que você precisa?" (4 chips coloridos por categoria) / Onde será o atendimento (opcional) / Detalhes (opcional textarea)
- Botão: "Enviar e receber resposta em 24h" com ícone send
- Legal text mono 12px

### Footer
- Fundo `--ink`, 4 colunas: Brand / Serviços (10 itens em grid 2x5) / Empresa / Contato
- Bottom: copyright + região, mono 11px

### FAB WhatsApp
- 60x60 fixo `bottom:24px right:24px`, fundo `#25D366`, sombra verde
- z-index 30

---

## Interações

### Header sticky
- `position:sticky; top:0; z-index:20`
- Em < 1180px: esconde tag placeholder
- Em < 1100px: esconde nav e botão WhatsApp ghost

### Hover de cards
- Categoria: `translateY(-2px)` + sombra de elevação, transition 0.2s

### Marquee de logos
- Animação `marquee` 38s linear infinite (translateX 0 → -50%-10px)
- `animation-play-state: paused` no hover

### Form
- Chips: clique alterna `data-on="true"` que troca background pela cor da categoria
- Inputs focus: border `--blue` + `box-shadow: 0 0 0 4px color-mix(--blue 12%, transparent)`

### Acessibilidade
- `aria-label` nos botões de ícone (FAB, marquee)
- `aria-hidden="true"` no equals do logo
- Labels associadas a inputs

---

## Copy crítica (preservar exata)

- Hero: "A concorrência instala. A Telex planeja, executa, documenta e garante."
- Aluguel CTA: "Conte o equipamento, prazo e local. Devolvemos uma cotação em até 24 horas."
- Processo h2: "Análise, orçamento e execução. Documentado em cada etapa."
- PorQue h2: "Por que escolher a Telex. Provas, não promessas."
- Modalidades h2: "Não fazemos só instalação. Fazemos o ciclo todo."
- Form h2: "Conte o seu problema. A gente resolve."

**Regras de copy**: sem travessões longos (—), sem siglas técnicas (CFTV/PABX/CAPEX), tom direto e conversacional.

---

## Responsivo
- Breakpoints principais: 1180 / 1100 / 980 / 880 / 720 / 560 / 520
- Grids 4-col → 2-col em <980px → 1-col em <560px
- Hero grid 2-col → 1-col em <980px
- Form grid 2-col → 1-col em <980px

---

## Arquivos no bundle

```
design_handoff_telex_home/
├── README.md                              (este arquivo)
└── source/
    ├── Home Telex - Redesign.html         (entry point — apenas head + scripts)
    ├── styles.css                         (TODO o CSS — 539 linhas, fonte canônica)
    ├── home.jsx                           (componentes React inline)
    └── logos/
        ├── direcional.png
        ├── podpah.png
        ├── senai.png
        ├── pmsp.png
        ├── sany.png
        ├── wtc.png
        ├── orcafascio.png
        ├── rottas.png
        ├── polemica.png
        └── atualcargas.png
```

## Observações finais para o desenvolvedor
1. O `styles.css` é a fonte da verdade para todos os tokens, layouts e medidas. Use-o como referência mesmo se converter para Tailwind.
2. O `home.jsx` mostra a estrutura JSX e a lógica de estado (apenas o form tem state — multi-select de chips).
3. Os ícones SVG estão inline no componente `Icon` em `home.jsx` — copie-os ou substitua por uma lib (Lucide, Heroicons) mantendo stroke 1.6.
4. Os logos PNG são extrações da screenshot do cliente. Solicite assets oficiais antes do go-live.
5. Para `oklch()`, todos os browsers modernos suportam; se precisar de fallback IE/Safari antigo, gere hex equivalentes.
