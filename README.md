# RG Dental — Landing Page

Landing page de una sección (4 bloques) para un consultorio dental, construida con React + TypeScript + Tailwind CSS.

## Estructura

```
src/
  components/
    Navbar/       -> Barra de navegación (con menú responsive)
    Hero/          -> Sección principal (imagen + texto corto)
    AboutMe/       -> Información de la dentista
    Services/      -> Servicios ofrecidos, en tarjetas
    Footer/        -> Contacto, redes sociales y horario
    shared/        -> Iconos SVG reutilizados
  data/services.ts -> Contenido de los servicios (edítalo aquí)
  types/index.ts   -> Tipos compartidos
```

## Instalación

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview
```

## Modo oscuro / claro

Se activa con la clase `dark` en `<html>` (estrategia `class` de Tailwind). El botón está en `Navbar.tsx` y usa el hook `src/hooks/useTheme.ts`, que guarda la preferencia en `localStorage` bajo la llave `rg-dental-theme`. Un script en `index.html` aplica el tema antes de montar React para evitar parpadeos.

## Personalización

- **Contenido**: textos de cada sección están directamente en sus componentes (`Hero.tsx`, `AboutMe.tsx`, `Footer.tsx`) y en `src/data/services.ts`.
- **Colores y tipografías**: definidos en `tailwind.config.ts` (paleta `indigo`/`violet`/`pink` como acento sobre `canvas`/`ink` en claro y `canvas-dark`/`paper` en oscuro) y cargados en `index.html` (Fraunces + Work Sans).
- **Imágenes**: el Hero usa un fondo generado con gradientes/SVG (sin fotos de stock, para evitar temas de derechos de autor) y "Sobre mí" una ilustración propia. Puedes reemplazarlos por fotos reales del consultorio y del doctor colocando un `<img>` dentro de `HeroBackground.tsx` / `AboutPortrait.tsx`, o sustituyendo el componente completo.
- **Datos de contacto**: teléfono y redes sociales reales están en `Footer.tsx`. El correo y la dirección no se incluyeron por no haber sido proporcionados — agrégalos ahí cuando los tengas.
