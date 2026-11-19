# Guía de estilo Slidev · DrupalCamp Spain 2026

Implementación en Slidev de la plantilla oficial para ponentes de la DrupalCamp Spain 2026 (Madrid, 19-21 de noviembre).

- Plantilla de referencia: [Google Slides](https://docs.google.com/presentation/d/16diyoWejFQS-shxSeyONHnag3u193sun/edit), 26 diapositivas. La diapositiva 26, "Recursos para la presentación", es la fuente de los colores, la tipografía y los fondos.
- Tokens y estilos base: `styles/index.css`.
- Layouts: `layouts/`. Componentes: `components/`.

## Principios

- Una idea por diapositiva. Una frase importante merece una diapositiva propia y pocas palabras.
- Unos 70 caracteres por línea como máximo (`--dc-measure`).
- Cifras siempre tabulares. Ya está activado en todo el deck con `font-variant-numeric: tabular-nums`.
- El número de la cabecera indica la sección en la que estás. Se calcula solo: ver [Numeración de secciones](#numeración-de-secciones).
- Tamaño mínimo de texto: 12 pt (16 px).
- Ningún color ni tamaño escrito a mano en un layout o en `slides.md`: siempre un token de `:root`.

## Lienzo y escala

La plantilla mide 960 × 540 pt; el lienzo de Slidev, 1280 × 720 px (`canvasWidth: 1280`, `aspectRatio: 16/9`). **1 pt = 1,333 px.** Cada token de tamaño indica en un comentario su valor en pt.

## Colores

| Token | Nombre en la plantilla | Hex | Uso |
|---|---|---|---|
| `--dc-navy` | Navy | `#12285F` | Títulos, fondos oscuros, viñetas |
| `--dc-blue` | Azul Drupal | `#016AA9` | Número de sección, subtítulos, enlaces, pie |
| `--dc-cyan` | Cian | `#009CDE` | Comillas de la cita |
| `--dc-yellow` | Amarillo | `#FFC422` | Antetítulo de ponente, acentos puntuales |
| `--dc-ink` | Tinta | `#1A2238` | Texto de cuerpo |
| `--dc-sky` | Azul cielo | `#CCEDF9` | Tarjeta 1, huecos de imagen, barras |
| `--dc-mist` | Azul bruma | `#EDF9FD` | Fondo de las diapositivas de contenido |
| `--dc-dusk` | Violeta atardecer | `#EEEAF6` | Tarjeta 2, frase destacada |
| `--dc-dawn` | Violeta amanecer | `#FFEAAF` | Tarjeta 3, resaltado, píldoras |
| `--dc-white` | Blanco | `#FFFFFF` | Tarjetas, texto sobre fondos oscuros |

## Tipografía

Solo Inter, en Regular (400) y Bold (700). Se carga desde Google Fonts con `fonts:` en la cabecera de `slides.md`.

| Token | pt | px | Uso |
|---|---|---|---|
| `--dc-size-section-num` | 60 | 80 | Número en la portadilla de sección |
| `--dc-size-section` | 44 | 59 | Título de portadilla y de cierre |
| `--dc-size-cover` | ~40 | 54 | Título de la portada |
| `--dc-size-header-num` | 40 | 53 | Número de la cabecera, nombre del ponente |
| `--dc-size-statement` | 32 | 43 | Frase destacada |
| `--dc-size-header` | 28 | 37 | Título de la cabecera |
| `--dc-size-card-title` | 22 | 29 | Título de tarjeta |
| `--dc-size-subhead` | 20 | 27 | Subtítulo de columna (`###`) |
| `--dc-size-body` | 18 | 24 | Texto de cuerpo |
| `--dc-size-small` | 16 | 21 | Texto en columnas, tarjetas y junto a imagen |
| `--dc-size-eyebrow` | 12 | 16 | Antetítulos, píldoras, pie. Mínimo absoluto |
| `--dc-size-display` | n/a | 160 | Cifras grandes (`statement` con `big`) y "Gracias" |

## Fondos y recursos

Todos en `public/img/`, extraídos de la plantilla:

| Archivo | Fondo en la plantilla | Dónde se usa |
|---|---|---|
| `bg-map.jpg` | Plano (mapa claro) | `cover` |
| `bg-mist.jpg` | Azul bruma liso | Contenido (fondo por defecto) |
| `bg-sky.jpg` | Cielo (amanecer a bruma) | `section` `sky`, `end`, `big` |
| `bg-sun.jpg` | Sol/navy | `section` `sun` |
| `bg-navy.jpg` | Navy con brillo | `quote`, `big` `navy` |
| `bg-navy-map.jpg` | Navy con mapa | `speaker` |
| `bg-map-soft.jpg`, `bg-agenda.jpg` | Portada con tarjeta, agenda | Sin uso todavía |
| `logo.png`, `logo-white.png` | Logo en color y en blanco | Componente `DcLogo` |
| `torres-blancas.png` | Ilustración de Torres Blancas | `cover`, `big` |
| `icons/*.png` | Iconos de línea | Componente `DcIcon` |

## Layouts

Todas las diapositivas de contenido llevan el logo arriba a la derecha y el pie `#DrupalCampSpain2026`. No hay número de página: la barra de progreso indica en qué punto de la charla estás.

### `cover`: portada

```md
---
layout: cover
date: Madrid · 19-21 noviembre 2026
subtitle: Subtítulo de la presentación
speaker: Nombre Apellido · Empresa
profile: drupal.org/u/usuario
---

# Título de la presentación
```

### `speaker`: ponente

Fondo navy con mapa. `#` es el nombre, `##` el cargo, y el resto es la bio. La foto va en `::aside::`.

```md
---
layout: speaker
---

# Nombre Apellido

## Cargo · Empresa

- Bio breve.

::aside::

<Placeholder label="foto del ponente" />
```

### `section`: portadilla de sección

Cuatro variantes, como las diapositivas 4 a 7 de la plantilla: `sun` (degradado sol/navy), `sky` (degradado cielo), `card` (tarjeta blanca) y `navy` (tarjeta navy). `block` es el texto bajo el título. `::aside::` es opcional: en `card` y `navy` ocupa el hueco de imagen de la derecha. Una foto (`<img>`) se ajusta al ancho con esquinas redondeadas; una ilustración con fondo transparente, como Torres Blancas, lleva `class="illustration"` para mostrarse entera y sin recorte.

```md
---
layout: section
variant: card
block: Nombre del bloque
---

# Título de la sección

::aside::

<Placeholder label="imagen" />
```

### `default` y `col-1`: título y contenido

Cabecera con número de sección + título (`#`), y contenido debajo. `col-1` es igual que `default`.

El título y el contenido se centran en vertical en todos los layouts de contenido (`default`, `col-1`, `cols-2`, `cols-3` e `image-right`). La plantilla los coloca arriba, pero con poco texto dejaba demasiado hueco debajo.

Un `###` justo antes del `#` se convierte en antetítulo en mayúsculas (como "CASO PRÁCTICO" en la plantilla). Un `###` en el cuerpo es un subtítulo en azul Drupal.

```md
### Caso 1

# Título del caso

Texto de cuerpo.
```

### `cols-2`: dos columnas

Diapositiva "Antes y después" de la plantilla. Cada columna empieza con un `###`, con icono opcional.

```md
---
layout: cols-2
---

# Título

::col-1::

### <DcIcon name="code" bg="sky" /> Antes

- Punto

::col-2::

### Después

- Punto
```

### `cols-3`: tres tarjetas de color

Diapositiva "Tres tarjetas de color": azul cielo, violeta atardecer y violeta amanecer, en ese orden. Mismas ranuras que `cols-2` más `::col-3::`.

### `image-right`: texto e imagen

Texto a la izquierda e imagen con esquinas redondeadas a la derecha, en `::aside::`.

Con `class: dc-compact` en la cabecera de la diapositiva, `image-right` reduce el texto a 16 pt, aprieta el espaciado y da más ancho a la columna de texto. Sirve cuando hay dos listas con subtítulo, como en "Deuda técnica y deuda editorial".

Con `class: dc-wide-aside`, la columna de la imagen pasa a ser más ancha que la de texto. Sirve para capturas con texto pequeño cuando el texto de la diapositiva es corto.

Con `class: dc-aside-gap`, la imagen baja y reduce su altura para no quedar pegada al logo. Sirve para capturas altas o anchas. Se combina con las otras variantes: `class: dc-wide-aside dc-aside-gap`.

### `image-left`: imagen y texto

Igual que `image-right`, con la imagen a la izquierda. Sirve para alternar el lado en diapositivas consecutivas con la misma estructura.

### `statement`: frase destacada

Tarjeta violeta atardecer con la frase en `#` y un texto opcional debajo. Con `big: true`, el `#` se muestra como cifra grande en azul Drupal (para "7 de cada 10" o "Más del 99 %").

### `quote`: cita

Fondo navy con comillas en cian. `#` es la cita; el párrafo de debajo, el contexto.

### `end`: cierre

Fondo cielo con el logo arriba (diapositiva "¿Qué te ha parecido?"). Admite `eyebrow:` para el antetítulo.

### `big`: palabra grande

Una palabra a tamaño display: "Gracias" (`variant: sky`, con Torres Blancas) o "¿Preguntas?" (`variant: navy`).

## Componentes

| Componente | Uso |
|---|---|
| `<DcLogo />` | Logo. `white` para fondos oscuros; `width` para el tamaño |
| `<DcFooter />` | Pie con el hashtag. Ya incluido en los layouts |
| `<DcIcon name="search" bg="sky" />` | Icono en círculo. `bg`: `white`, `sky`, `dusk` o `dawn`. Nombres: los archivos de `public/img/icons/` |
| `<Placeholder label="..." />` | Hueco de imagen pendiente, con el icono de imagen de la plantilla |

## Clases utilitarias

| Clase | Uso |
|---|---|
| `.highlight` | Resaltado en violeta amanecer dentro de un párrafo |
| `.eyebrow` | Antetítulo en mayúsculas, 12 pt, azul Drupal |
| `p.source` | Fuente de una cifra, 12 pt, azul Drupal (`<p class="source">Entity Mesh, …</p>`) |
| `.pill` | Píldora ("FRONTEND", "KEYNOTE" en la plantilla) |
| `img.screenshot` | Captura a todo el ancho bajo el texto, con esquinas redondeadas y sombra |
| `.lead` | Párrafo destacado a 32 pt |
| `.stats` + `.stat` | Fila de cifras en tarjetas blancas |
| `.bars` + `.bar` | Barras horizontales de porcentaje |
| `.pyramid` | Pirámide de tres niveles |

## Barra de progreso

`slide-bottom.vue` dibuja una barra de 6 px en cian en el borde inferior de cada diapositiva, salvo en la portada. Avanza de la diapositiva 2 a la última. Es un `slide-bottom` y no un `global-bottom` porque solo los primeros se incluyen en la exportación a PDF.

## Numeración de secciones

El número de la cabecera y de la portadilla se calcula contando las diapositivas con `layout: section` hasta la actual (`composables/useSectionNumber.js`). Las diapositivas anteriores a la primera sección no muestran número. Para forzar uno, añade `number: 05` en la cabecera de la diapositiva.

## Diapositivas de la plantilla sin layout propio

Agenda, proceso en cuatro pasos, tres imágenes con pie, texto y galería, cuatro ideas clave, icono-título-texto, tres mensajes y tres listas. Se pueden montar con `default` y HTML, o añadir un layout cuando haga falta.

## Desarrollo y exportación

```bash
# Servidor de desarrollo: http://localhost:3030
SLIDE=content/2026-drupal-camp-deuda-editorial-seo/presentation/slides.md docker compose up

# PDF (la ruta de Chromium evita el desajuste de versión de Playwright en el volumen node_modules)
docker compose run --rm slidev npx slidev export content/2026-drupal-camp-deuda-editorial-seo/presentation/slides.md --format pdf --timeout 120000 --executable-path /root/.cache/ms-playwright/chromium_headless_shell-1254/chrome-headless-shell-linux64/chrome-headless-shell --output content/2026-drupal-camp-deuda-editorial-seo/presentation/slides-export.pdf
```

Los layouts nuevos solo se cargan al arrancar el servidor de desarrollo: después de añadir uno, reinícialo.
