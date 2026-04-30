# Guía de Desarrollo - MogrovejoTrail

## 🎯 Estado Actual

✅ **Completado:**
- Navbar responsive con menú móvil
- Hero Section con cuenta atrás dinámica
- Sistema de componentes reutilizables
- Animaciones fluidas con Framer Motion
- SEO optimizado
- Dark theme optimizado
- TypeScript totalmente tipado

⏳ **Próximas Secciones:**
1. Sección de Modalidades
2. Sección de Reglamento y Material Obligatorio
3. Sección de Contacto / FAQ
4. Footer

## 📋 Instrucciones para Implementar Modalidades

### Datos Modelo
```typescript
interface Modality {
  id: string;
  title: string;
  distance: string;
  elevation: string;
  description: string;
  difficulty: 'Fácil' | 'Medio' | 'Difícil';
  color: 'orange' | 'red' | 'purple';
  trackUrl?: string; // URL del track en GedSports
}
```

### Ejemplo de Uso
```tsx
import { ModalityCard } from '@/components/modality-card';

const modalities: Modality[] = [
  {
    id: 'trail-10k',
    title: 'Trail 10K',
    distance: '10 km',
    elevation: '+400m',
    description: 'Perfecta para iniciarse en las carreras de trail. Recorrido accesible con vistas espectaculares.',
    difficulty: 'Fácil',
    color: 'orange',
  },
  // ... más modalidades
];

export function ModalitiesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12">Modalidades</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {modalities.map((mod, idx) => (
            <ModalityCard
              key={mod.id}
              {...mod}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

## 📋 Instrucciones para Implementar Reglamento

### Datos Modelo
```typescript
interface RuleSection {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}
```

### Ejemplo de Uso
```tsx
import { RuleItem } from '@/components/rule-item';
import { AlertCircle, MapPin, ClipboardList } from 'lucide-react';

const rules: RuleSection[] = [
  {
    id: 'equipment',
    icon: <AlertCircle className="w-5 h-5" />,
    title: 'Material Obligatorio',
    description: 'Todo participante debe llevar consigo el siguiente material...',
    items: [
      'DNI o documento de identidad válido',
      'Número de dorsal (facilitado por organización)',
      'Pulsera de control (facilitada por organización)',
      'Silbato de emergencia',
      'Mochila con hidratación mínima',
    ],
  },
  // ... más secciones
];

export function RegulationSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12">Reglamento</h2>
        <div className="space-y-12">
          {rules.map((rule, idx) => (
            <RuleItem
              key={rule.id}
              {...rule}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

## 🎨 Patrón de Estilos

### Section Template
```tsx
<section className="py-16 sm:py-20 bg-gradient-to-b from-[color1] to-[color2]">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <motion.h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
      Título Sección
    </motion.h2>
    
    {/* Contenido */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {/* Items */}
    </div>
  </div>
</section>
```

### Button Pattern
```tsx
<a
  href="https://gedsports.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all"
>
  Acción
  <ArrowRight className="w-4 h-4" />
</a>
```

## 🔄 Workflow de Desarrollo

1. **Crear Componente**
   ```bash
   # En src/components/
   touch src/components/new-component.tsx
   ```

2. **Agregar a Página**
   ```tsx
   // En src/app/page.tsx o nueva ruta
   import { NewComponent } from '@/components/new-component';
   ```

3. **Validar**
   ```bash
   npm run lint    # Verificar TypeScript/ESLint
   npm run build   # Compilar producción
   ```

4. **Visualizar**
   ```bash
   npm run dev     # Ver en http://localhost:3000
   ```

## 🚦 Checks Previos a Commit

```bash
# Lint check
npm run lint

# Type check (integrado en build)
npm run build

# Pruebas locales
npm run dev  # Verificar visualmente en navegador
```

## 📐 Convenciones de Código

### Nombres de Componentes
- `ComponentName.tsx` (PascalCase)
- Función principal: `export function ComponentName()`
- Props interface: `interface ComponentNameProps`

### Animaciones
- Usar `motion.` de framer-motion
- Definir `variants` fuera del JSX
- Usar `whileInView` para animaciones al scroll
- Usar `viewport={{ once: true }}` para que animen solo una vez

### Estilos
- Tailwind CSS clases directamente en className
- Gradientes en variables CSS cuando se reutilizen
- Responsive con `sm:`, `md:`, `lg:` prefixes

### Tipos
- Siempre tipear props con interfaces
- Usar tipos de Lucide: `React.ReactNode` para iconos
- Exportar interfaces para reutilización

## 🎬 Animaciones Sugeridas

### Para Modalidades
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
```

### Para Reglamento
```tsx
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};
```

## 🔗 Enlaces Útiles

- **Next.js 16**: `node_modules/next/dist/docs/`
- **Framer Motion**: https://www.framer.com/motion/
- **Lucide Icons**: https://lucide.dev/
- **Tailwind CSS v4**: https://tailwindcss.com/docs

## 💡 Tips de Performance

- ✅ Usar `whileInView` en lugar de `animate` para el viewport
- ✅ Lazy load componentes cuando sea posible
- ✅ Optimizar imágenes con `next/image`
- ✅ Usar `backdrop-blur-md` con cuidado (performance)
- ✅ Debounce de eventos de scroll

## 🐛 Troubleshooting

### "Module not found"
```bash
npm install
npm run dev
```

### "Type errors"
```bash
npm run build  # Ejecutar TypeScript check
```

### "Animations not working"
- Verificar que el componente tiene `'use client'`
- Asegurarse que Framer Motion está importado
- Revisar que `motion.div` se usa correctamente

## 📚 Recursos del Proyecto

- `STRUCTURE.md` - Arquitectura del proyecto
- `CLAUDE.md` - Instrucciones generales (raíz)
- `.github/copilot-instructions.md` - Instrucciones para AI
- `AGENTS.md` - Información sobre Next.js 16
