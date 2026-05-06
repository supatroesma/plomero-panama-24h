# Imágenes pendientes

Esta carpeta queda como placeholder. Antes de producción, agregar:

## Críticos
- `og-image.jpg` (1200×630) — tarjeta social que muestra Facebook/Twitter/WhatsApp al compartir el sitio. Debe contener: logo, "Plomero Panamá 24h", tagline corto, número de teléfono. Fondo azul de marca (#0066CC). **Sin esta imagen, el sitio se ve sin tarjeta atractiva al compartirse.**

## Secundarios (mejoran la experiencia, no críticos para SEO)
- `hero-home.webp` — imagen hero para el home (1920×800 o similar). Plomero trabajando o herramientas profesionales.
- `hero-emergencia.webp` — para página de emergencias.
- `servicios/*.webp` — una imagen por cada uno de los 6 servicios (1200×630 cada una).
- `zonas/*.webp` — opcional, vista de cada zona.
- `equipo.webp` — para Sobre Nosotros.

## Recomendaciones técnicas
- Formato WebP con fallback JPG.
- Optimizar peso: máx 100 KB por imagen.
- Width y height explícitos en el HTML.
- Alt text descriptivo en español.
- `loading="lazy"` excepto en hero del home.

## Orden de prioridad
1. `og-image.jpg` (sin esto la marca se ve sin imagen al compartirse).
2. `hero-home.webp` (impacto visual del home).
3. `servicios/*.webp` (contexto visual a páginas de servicio).

## Proveedores sugeridos
- Imágenes propias (mejor: mostrar el equipo real).
- Bancos de imágenes con licencia comercial (Unsplash, Pexels): plomería profesional.
- Generadas con IA respetando derechos del proveedor.

**No usar imágenes con copyright sin licencia.**
