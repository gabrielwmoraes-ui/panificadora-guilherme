# Meu Coffe — Site institucional

Site institucional para a panificadora **Meu Coffe**: Next.js 16 + TypeScript +
Tailwind v4 + Framer Motion + Lenis. Foco em estética calorosa, animações
cinematográficas, SEO local e conversão (WhatsApp, ligações, visitas).

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000).

Outros scripts:

| Script | O que faz |
|---|---|
| `npm run dev` | Dev server com Turbopack |
| `npm run build` | Build de produção |
| `npm run start` | Roda o build de produção |
| `npm run lint` | ESLint |

## Estrutura

```
app/                     Rotas (App Router)
  layout.tsx             Layout raiz, fontes, providers, SEO base
  page.tsx               Home — 9 seções
  cardapio/              Cardápio com tabs e filtros de dieta
  sobre/                 História + timeline + equipe
  contato/               Tiles, formulário, FAQ, mapa
  encomendas/            Tipos, formulário, galeria
  opengraph-image.tsx    OG image gerada dinamicamente (1200x630)
  sitemap.ts             Sitemap automático
  robots.ts              robots.txt
  not-found.tsx          404 customizada

components/
  layout/                Header, Footer, WhatsApp FAB, Newsletter, Cookies
  sections/              Blocos reutilizáveis (Hero, AboutSplit, Timeline...)
  ui/                    Primitivos (Button, Container, SectionLabel)
  animations/            SmoothScroll (Lenis), MaskReveal, Parallax,
                         Counter, Loader, CustomCursor, Marquee, PageTransition
  seo/                   JSON-LD LocalBusiness/Bakery/Restaurant

data/content.ts          Todo o conteúdo mockado (produtos, depoimentos,
                         FAQ, equipe, timeline, galeria)

lib/
  site.ts                Identidade, endereço, horários, contatos, WhatsApp link
  cn.ts                  clsx + tailwind-merge
  format.ts              Formatação BRL
```

## Onde editar conteúdo

- **Produtos, cardápio, depoimentos, FAQ, equipe, timeline, galeria:** `data/content.ts`
- **Endereço, telefone, WhatsApp, horários, redes sociais, URL:** `lib/site.ts`
- **Imagens próprias:** substitua os links em `data/content.ts` por caminhos como
  `/images/seu-arquivo.jpg` e coloque os arquivos em `public/images/`. As imagens
  remotas autorizadas estão em `next.config.ts` (`images.remotePatterns`).
- **Paleta e tipografia:** `app/globals.css` (bloco `@theme`).

## Stack

- **Next.js 16** com App Router, RSC, Turbopack, `next/image`, `next/font`
- **TypeScript** estrito
- **Tailwind v4** com tokens via `@theme`
- **Framer Motion** para UI / scroll-driven
- **GSAP** disponível (importável onde quiser usar `ScrollTrigger`)
- **Lenis** smooth scroll
- **Lucide React** + ícones SVG inline para marcas
- **react-hook-form + zod** para formulários

## Acessibilidade

- Hierarquia semântica (um `<h1>` por página)
- Foco visível dourado em qualquer elemento focável
- `prefers-reduced-motion: reduce` desabilita animações pesadas
- Cursor customizado só em pointer fino + hover
- Contraste WCAG AA no tema cream/coffee/caramel
- `alt` descritivo em todas as imagens

## SEO

- Metadata API por rota (title, description, canonical, OpenGraph, Twitter)
- JSON-LD `Bakery` + `CafeOrCoffeeShop` + `Restaurant` em todas as páginas
- `sitemap.xml` e `robots.txt` automáticos
- OG image gerada dinamicamente via `app/opengraph-image.tsx`
- URLs em português (`/cardapio`, `/sobre`, `/encomendas`, `/contato`)

## Próximos passos sugeridos

- Substituir imagens do Unsplash pelas reais em `public/images/`
- Conectar o formulário de contato/encomendas a um backend (Resend, Brevo, API própria)
- Conectar o newsletter a uma plataforma (Mailchimp, Beehiiv)
- Validar Schema.org em [validator.schema.org](https://validator.schema.org)
- Rodar Lighthouse para checar Core Web Vitals e ajustar ainda mais
