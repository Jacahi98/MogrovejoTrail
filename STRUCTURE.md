# Estructura del Proyecto MogrovejoTrail

## 📁 Organización de Carpetas

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz con metadatos SEO y Navbar
│   ├── page.tsx            # Página principal con HeroSection
│   └── globals.css         # Estilos globales Tailwind
└── components/
    ├── hero-section.tsx    # Hero principal con cuenta atrás
    ├── navbar.tsx          # Barra de navegación responsiva
    ├── modality-card.tsx   # Tarjeta de modalidad
    └── rule-item.tsx       # Item de regla/reglamento
```

## 🎨 Componentes Implementados

### 1. **HeroSection** (`hero-section.tsx`)
- **Propósito**: Presentación principal de la carrera
- **Características**:
  - Fondo con gradiente y animaciones SVG de montañas
  - Título animado con efecto de texto degradado
  - Cuenta atrás en tiempo real (días, horas, minutos, segundos)
  - Botones CTA: Inscribirse en GedSports + Descubre más
  - Animaciones suaves con Framer Motion
  - Indicador de scroll con animación

### 2. **Navbar** (`navbar.tsx`)
- **Propósito**: Navegación superior persistente
- **Características**:
  - Logo interactivo (vuelve al top)
  - Menú de navegación (Modalidades, Reglamento, Contacto)
  - Botón CTA de inscripción
  - Menú móvil responsivo con animación
  - Estilos con glassmorphism (backdrop blur)

### 3. **ModalityCard** (`modality-card.tsx`)
- **Propósito**: Mostrar información de cada modalidad
- **Props**:
  - `title`: Nombre de la modalidad
  - `distance`: Distancia en km
  - `elevation`: Desnivel acumulativo
  - `description`: Descripción de la modalidad
  - `difficulty`: Nivel de dificultad (Fácil/Medio/Difícil)
  - `color`: Color del tema (orange/red/purple)
  - `index`: Para animaciones escalonadas
- **Características**:
  - Efecto hover con elevación
  - Badges con información clave
  - Enlace directo a GedSports

### 4. **RuleItem** (`rule-item.tsx`)
- **Propósito**: Mostrar reglas y material obligatorio
- **Props**:
  - `icon`: Icono React
  - `title`: Título de la sección
  - `description`: Descripción
  - `items`: Array de items/puntos
  - `index`: Para animaciones
- **Características**:
  - Icono circular con gradiente
  - Animación al entrar en viewport
  - Lista de items con check icon

## 🎬 Animaciones Implementadas

### Framer Motion Variants:
- **containerVariants**: Stagger de elementos hijos
- **itemVariants**: Fade in + slide up
- **floatVariants**: Animación flotante continua
- **countdownItemVariants**: Scale + fade in
- **hoverVariants**: Lift effect en hover
- **menuVariants**: Collapse/expand del menú móvil

### Transiciones:
- Scroll suave en toda la página (`scroll-smooth`)
- Indicador de scroll animado
- Hover states con transformaciones
- Animaciones al entrar en viewport (`whileInView`)

## 🎨 Sistema de Colores

### Tema Principal:
```css
-- Fondo oscuro: slate-950 / slate-900
-- Acentos: orange-400, red-500, pink-400
-- Texto: white / gray-300 / gray-400
```

### Gradientes de Modalidades:
```
- Orange: from-orange-500 to-yellow-500
- Red: from-red-500 to-pink-500
- Purple: from-purple-500 to-pink-500
```

## 📱 Responsive Design

- **Mobile First**: Tailwind breakpoints
- **Breakpoints Utilizados**:
  - `sm:` (640px)
  - `md:` (768px)
  - `lg:` (1024px)

## 🔗 Rutas de Navegación

```
/                    → Home (Hero + placeholder sections)
#modalidades        → Scroll a sección Modalidades
#reglamento         → Scroll a sección Reglamento
#contacto           → Para agregar contacto futuro
```

## 📦 Dependencias Clave

```json
{
  "next": "16.2.4",
  "react": "19.2.4",
  "framer-motion": "^11.0.0",
  "lucide-react": "^0.416.0",
  "tailwindcss": "^4"
}
```

## 🚀 Funcionalidades Implementadas

✅ Hero section con cuenta atrás dinámica
✅ Navegación responsiva con menú móvil
✅ Componentes reutilizables tipados
✅ Animaciones fluidas con Framer Motion
✅ Optimizado para SEO (metadatos completos)
✅ Diseño totalmente responsivo
✅ Dark mode optimizado
✅ Accesibilidad con semántica HTML correcta
✅ Icons con Lucide React

## 📝 Próximas Secciones a Implementar

### Modalidades Section
```tsx
<ModalityCard
  title="Trail 10K"
  distance="10 km"
  elevation="400m"
  description="..."
  difficulty="Fácil"
  color="orange"
  index={0}
/>
```

### Reglamento Section
```tsx
<RuleItem
  icon={<AlertCircle />}
  title="Material Obligatorio"
  description="..."
  items={[...]}
  index={0}
/>
```

## 🎯 Comandos Esenciales

```bash
# Instalación
npm install --no-audit --no-fund

# Desarrollo
npm run dev

# Verificación
npm run lint
npm run build

# CI Local
npm run lint && npm test && npm run build
```

## 💡 Notas de Desarrollo

- Todos los componentes son Client Components (`'use client'`)
- Se utilizan TypeScript interfaces para props tipado
- Las animaciones se adaptan a `prefers-reduced-motion`
- Optimización de imágenes con Next.js Image component
- SEO optimizado con metadatos dinámicos
