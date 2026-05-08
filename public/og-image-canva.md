# Instrucciones para crear og-image.jpg en Canva

## Especificaciones

| Atributo | Valor |
|---|---|
| **Dimensiones** | 1200 × 630 px (preset Open Graph / Facebook) |
| **Fondo** | Color sólido `#0066CC` (azul primario del sitio) |
| **Formato de salida** | JPG (calidad alta, ~80%) |
| **Peso objetivo** | < 200 KB |
| **Nombre de archivo final** | `og-image.jpg` |
| **Ubicación** | `public/og-image.jpg` (reemplaza el placeholder actual) |

## Composición

```
┌──────────────────────────────────────────┐
│                                          │
│                                          │  ← padding superior ~80px
│            [LOGO-FULL]                   │
│         (centrado horizontal)            │
│                                          │
│                                          │
│   Plomero Profesional en Panamá          │  ← H1 grande
│                                          │
│   Servicio de Emergencias                │  ← subtítulo
│   • Ciudad de Panamá                     │
│                                          │
└──────────────────────────────────────────┘
```

### Elemento 1 — Logo

- Archivo: `public/images/logo-full.png` (incluido en este repo)
- Posición: centrado horizontalmente, en la mitad superior del lienzo
- Altura aproximada: 200-240 px (no estirar — mantener proporción)
- Margen superior desde el borde: ~80-100 px

### Elemento 2 — Título principal

- Texto: **"Plomero Profesional en Panamá"**
- Color: blanco `#FFFFFF`
- Fuente: Inter Bold o equivalente sans-serif bold
- Tamaño: ~64-72 px
- Posición: debajo del logo, centrado horizontal
- Espaciado superior desde el logo: ~50 px

### Elemento 3 — Subtítulo

- Texto: **"Servicio de Emergencias • Ciudad de Panamá"**
- Color: `#E6F0FA` (azul muy claro, casi blanco con tinte azul)
- Fuente: Inter Regular o Medium
- Tamaño: ~32-36 px
- Posición: debajo del título, centrado horizontal
- Espaciado superior desde el título: ~30 px

## Pasos en Canva

1. Crea un diseño nuevo con dimensiones personalizadas: **1200 × 630 px**
2. **Fondo**: Color sólido `#0066CC`
3. **Sube el logo** (`logo-full.png` desde `public/images/`)
4. Coloca el logo centrado en la mitad superior, altura ~220 px
5. Agrega texto "**Plomero Profesional en Panamá**" — Inter Bold 70px, color blanco, centrado
6. Agrega texto "**Servicio de Emergencias • Ciudad de Panamá**" — Inter Regular 34px, color `#E6F0FA`, centrado
7. Verifica con la guía que todo está bien centrado y respira
8. **Descarga como JPG** (no PNG — JPG pesa menos)
9. Renombra a `og-image.jpg`
10. Reemplaza el archivo `public/og-image.jpg` (el placeholder actual)

## Validación post-creación

Una vez generado y reemplazado:

1. Push del archivo al repo
2. Abre https://www.opengraph.xyz/url/https%3A%2F%2Fplomeropanama24h.com
3. Verifica que la imagen carga y se ve bien en preview de Twitter, Facebook y LinkedIn
4. Si hay caché de Facebook, usa: https://developers.facebook.com/tools/debug/

## Alternativa rápida (si no usas Canva)

Plantilla equivalente en Figma, Photopea o cualquier editor que acepte:
- Lienzo 1200×630
- Background fill #0066CC
- Imagen logo-full.png centrada
- 2 textos como se describe arriba

## Versión textual de respaldo

Si por alguna razón no se puede crear la imagen ahora, la versión SVG mínima podría generarse programáticamente, pero la calidad visual de un editor manual es claramente superior. Mantener este archivo `og-image-canva.md` como referencia hasta que `og-image.jpg` real esté en el repo.
