# NAPBAK_DEV - Landing Page

Landing page profesional para servicios de desarrollo de sistemas web para tiendas de repuestos y autopartes.

## 🚀 Stack Tecnológico

- **Vite** - Bundler ultra-rápido con HMR instantáneo
- **React 18** + **TypeScript** - Tipado estático para mantenibilidad
- **Tailwind CSS v3** - Estilos utilitarios con diseño neo-brutalist
- **lucide-react** - Iconos modernos y ligeros

## 📦 Instalación

```bash
npm install
```

## 🛠️ Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🏗️ Build de Producción

```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/`.

## 🚢 Despliegue en Vercel

### Opción 1: Desde GitHub (Recomendado)

1. Sube tu código a un repositorio de GitHub
2. Ve a [vercel.com](https://vercel.com) e inicia sesión
3. Haz clic en "Add New Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente Vite y configurará el build
6. Haz clic en "Deploy"

### Opción 2: Desde la CLI

```bash
npm install -g vercel
vercel
```

### Configuración Automática

Vercel detectará automáticamente:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Dominio Personalizado

Si tienes el dominio `napbak.dev`:

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar los DNS

## 📝 Configuración

Edita `src/App.tsx` para personalizar:

- `MY_PHONE_NUMBER`: Tu número de WhatsApp (formato internacional sin +)
- `PRICE_USD`: Precio del servicio en USD
- `INITIAL_RATE`: Tasa de cambio inicial en Bs
- `BRAND_NAME`: Nombre de tu marca

## 📄 Licencia

Privado - NAPBAK_DEV © 2026
