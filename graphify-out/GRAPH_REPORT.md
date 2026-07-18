# Graph Report - mi-app  (2026-07-04)

## Corpus Check
- 74 files · ~330,998 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 347 nodes · 418 edges · 43 communities (30 shown, 13 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_useLanguage|useLanguage]]
- [[_COMMUNITY_page.tsx|page.tsx]]
- [[_COMMUNITY_📋 Riesgos Identificados & Defensas|📋 Riesgos Identificados & Defensas]]
- [[_COMMUNITY_Guía de Desarrollo - MogrovejoTrail|Guía de Desarrollo - MogrovejoTrail]]
- [[_COMMUNITY_Estructura del Proyecto MogrovejoTrail|Estructura del Proyecto MogrovejoTrail]]
- [[_COMMUNITY_scripts|scripts]]
- [[_COMMUNITY_layout.tsx|layout.tsx]]
- [[_COMMUNITY_compilerOptions|compilerOptions]]
- [[_COMMUNITY_devDependencies|devDependencies]]
- [[_COMMUNITY_page.tsx|page.tsx]]
- [[_COMMUNITY_font-showcase.tsx|font-showcase.tsx]]
- [[_COMMUNITY_optimize-images.mjs|optimize-images.mjs]]
- [[_COMMUNITY_README|README.md]]
- [[_COMMUNITY_MockObserver|MockObserver]]
- [[_COMMUNITY_media-carousel.tsx|media-carousel.tsx]]
- [[_COMMUNITY_next.config.ts|next.config.ts]]
- [[_COMMUNITY_layout.tsx|layout.tsx]]
- [[_COMMUNITY_layout.tsx|layout.tsx]]
- [[_COMMUNITY_layout.tsx|layout.tsx]]
- [[_COMMUNITY_layout.tsx|layout.tsx]]
- [[_COMMUNITY_hero-section.tsx|hero-section.tsx]]
- [[_COMMUNITY_modality-card.tsx|modality-card.tsx]]
- [[_COMMUNITY_rule-item.tsx|rule-item.tsx]]
- [[_COMMUNITY_AGENTS|AGENTS.md]]
- [[_COMMUNITY_eslint.config.mjs|eslint.config.mjs]]
- [[_COMMUNITY_postcss.config.mjs|postcss.config.mjs]]

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 46 edges
2. `compilerOptions` - 16 edges
3. `Guía de Desarrollo - MogrovejoTrail` - 13 edges
4. `Estructura del Proyecto MogrovejoTrail` - 12 edges
5. `📋 Riesgos Identificados & Defensas` - 11 edges
6. `scripts` - 9 edges
7. `🔒 Análisis de Seguridad - Mogrovejo Trail 2026` - 9 edges
8. `FloatingCTA()` - 6 edges
9. `CookieBanner()` - 6 edges
10. `📐 Convenciones de Código` - 5 edges

## Surprising Connections (you probably didn't know these)
- `ContactPage()` --calls--> `useLanguage()`  [EXTRACTED]
  src/app/contacto/page.tsx → src/contexts/language-context.tsx
- `AccessSection()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/access-section.tsx → src/contexts/language-context.tsx
- `ContactSection()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/contact-section.tsx → src/contexts/language-context.tsx
- `FAQSection()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/faq-section.tsx → src/contexts/language-context.tsx
- `GallerySection()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/gallery-section.tsx → src/contexts/language-context.tsx

## Import Cycles
- None detected.

## Communities (43 total, 13 thin omitted)

### Community 0 - "useLanguage"
Cohesion: 0.08
Nodes (33): ContactPage(), contactCards, ContactSection(), FloatingCTA(), GalleryImage, galleryImages, GallerySection(), CountdownTime (+25 more)

### Community 1 - "page.tsx"
Cohesion: 0.08
Nodes (22): AccessSection(), TransportOption, ElevationData, ElevationProfile(), ElevationProfileProps, FAQItem, FAQSection(), modalities (+14 more)

### Community 2 - "📋 Riesgos Identificados & Defensas"
Cohesion: 0.06
Nodes (32): 1️⃣ **XSS (Cross-Site Scripting)**, 2️⃣ **CSRF (Cross-Site Request Forgery)**, 3️⃣ **Inyección de Dependencias (Supply Chain)**, 4️⃣ **Información Sensible Expuesta**, 5️⃣ **Ataques de Fuerza Bruta (Rate Limiting)**, 6️⃣ **Man-in-the-Middle (MITM)**, 7️⃣ **Clickjacking / UI Redressing**, 8️⃣ **Exposición de Información de Error** (+24 more)

### Community 3 - "Guía de Desarrollo - MogrovejoTrail"
Cohesion: 0.07
Nodes (28): Animaciones, 🎬 Animaciones Sugeridas, "Animations not working", Button Pattern, 🚦 Checks Previos a Commit, 📐 Convenciones de Código, Datos Modelo, Datos Modelo (+20 more)

### Community 4 - "Estructura del Proyecto MogrovejoTrail"
Cohesion: 0.09
Nodes (22): 1. **HeroSection** (`hero-section.tsx`), 2. **Navbar** (`navbar.tsx`), 3. **ModalityCard** (`modality-card.tsx`), 4. **RuleItem** (`rule-item.tsx`), 🎬 Animaciones Implementadas, 🎯 Comandos Esenciales, 🎨 Componentes Implementados, 📦 Dependencias Clave (+14 more)

### Community 5 - "scripts"
Cohesion: 0.10
Nodes (20): dependencies, framer-motion, lucide-react, next, react, react-dom, @vercel/analytics, @vercel/speed-insights (+12 more)

### Community 6 - "layout.tsx"
Cohesion: 0.14
Nodes (15): bebasNeue, metadata, oswald, righteous, robotoFlex, spaceGrotesk, Header(), navItems (+7 more)

### Community 7 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 8 - "devDependencies"
Cohesion: 0.12
Nodes (16): devDependencies, babel-plugin-react-compiler, eslint, eslint-config-next, jsdom, sharp, tailwindcss, @tailwindcss/postcss (+8 more)

### Community 9 - "page.tsx"
Cohesion: 0.20
Nodes (6): PageIntro(), PageIntroProps, PhotoCarousel(), PhotoItem, photoItems, ResultsSection()

### Community 10 - "font-showcase.tsx"
Cohesion: 0.29
Nodes (5): bebasNeue, oswald, righteous, robotoFlex, spaceGrotesk

### Community 11 - "optimize-images.mjs"
Cohesion: 0.60
Nodes (4): formatKB(), IMG_DIR, main(), SOURCE_EXT

### Community 12 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **172 isolated node(s):** `eslintConfig`, `csp`, `nextConfig`, `name`, `version` (+167 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLanguage()` connect `useLanguage` to `page.tsx`, `layout.tsx`, `page.tsx`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `scripts`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `csp`, `nextConfig` to the rest of the system?**
  _172 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `useLanguage` be split into smaller, more focused modules?**
  _Cohesion score 0.07591836734693877 - nodes in this community are weakly interconnected._
- **Should `page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07777777777777778 - nodes in this community are weakly interconnected._
- **Should `📋 Riesgos Identificados & Defensas` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._
- **Should `Guía de Desarrollo - MogrovejoTrail` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._