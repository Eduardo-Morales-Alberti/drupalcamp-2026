---
theme: none
colorSchema: light
title: SEO técnico en Drupal a escala
titleTemplate: '%s · DrupalCamp Spain 2026'
canvasWidth: 1280
aspectRatio: 16/9
fonts:
  sans: Inter
  weights: '400,700'
  provider: google
transition: none
layout: cover
date: Madrid · 19-21 noviembre 2026
subtitle: Deuda técnica y editorial
speaker: Eduardo Morales · Desarrollador Backend
profile: drupal.org/u/eduardo-morales-alberti
---

# SEO técnico en Drupal a escala

<!--
Introducción: diapositivas 1 a 10, unos 8 minutos.
-->

---
layout: statement
---

# Un editor despublica un nodo

Se despublica un artículo o un producto que parecía irrelevante o descatalogado. Una landing lo sigue enlazando, y quien llega desde ella encuentra un acceso denegado.

<span class="highlight"><b>Drupal no dice en qué páginas estaba enlazado antes de despublicarlo.</b></span>

<!--
Situación cotidiana que cualquier responsable de un sitio grande reconoce.
En Drupal core, un nodo despublicado devuelve 403 al usuario anónimo.
Search Console acaba listando la URL despublicada (403 o 404) cuando Googlebot la vuelve a rastrear, días o semanas después. No dice qué páginas la enlazan; la inspección de URL da como mucho una página de referencia de muestra.
-->

---
layout: statement
big: true
---

# 1 de cada 20

<span class="highlight">1 de cada 20</span> páginas lleva al menos un enlace a contenido con acceso denegado (403).

De más de 600.000 enlaces internos revisados, unos 1.500 acaban en 403.

<p class="source">Entity Mesh, más de 10.000 páginas analizadas</p>

<!--
Sitio real, anonimizado. Dato exacto: algo más del 4 % de las páginas (cada traducción cuenta como una página). Causas: contenido despublicado o restringido, y enlaces a un idioma que ese contenido no tiene. Despublicar no actualiza los enlaces: deuda editorial.
-->

---

# Un sitio Drupal grande

<div class="stats">
  <div class="stat"><b>+1.000</b><span>contenidos</span></div>
  <div class="stat"><b>+10.000</b><span>traducciones</span></div>
  <div class="stat"><b>+10</b><span>idiomas</span></div>
  <div class="stat"><b>+10</b><span>años</span></div>
  <div class="stat"><b>+100</b><span>editores</span></div>
</div>

<!--
Unas 50 personas editaron en el último año, con cerca de 15.000 revisiones. Una docena de tipos de contenido.
-->

---
layout: statement
big: true
---

# Más del 99 %

de las traducciones tiene al menos un problema de SEO técnico.

<!--
Medido con Content First Audit sobre más de 10.000 traducciones. Pausa.
-->

---

# Los tres problemas más extendidos

<div class="bars">
  <div class="bar">
    <div class="bar-value">97 %</div>
    <div class="bar-track"><div class="bar-fill" style="width: 97%"></div><span class="bar-label">Imágenes con alt vacío no marcadas como decorativas</span></div>
  </div>
  <div class="bar">
    <div class="bar-value">90 %</div>
    <div class="bar-track"><div class="bar-fill" style="width: 90%"></div><span class="bar-label">Jerarquía de encabezados incorrecta</span></div>
  </div>
  <div class="bar">
    <div class="bar-value">24 %</div>
    <div class="bar-track"><div class="bar-fill" style="width: 24%"></div><span class="bar-label dark" style="left: calc(24% + 18px)">Title demasiado largo</span></div>
  </div>
  <div class="bar">
    <div class="bar-value">23 %</div>
    <div class="bar-track"><div class="bar-fill" style="width: 23%"></div><span class="bar-label dark" style="left: calc(23% + 18px)">Description demasiado larga</span></div>
  </div>
</div>

<!--
Porcentaje de traducciones afectadas.
-->

---

# El enlazado interno también se degrada

- **7,5 %** de las páginas: con al menos un enlace a 404 o 403.
- **22 %** de las páginas: enlaces a URLs que redirigen.
- Enlaces con protocolo http, URLs mal formadas.
- Páginas sin enlaces salientes.

<!--
Medido con Entity Mesh sobre más de 10.000 páginas.
-->

---
layout: quote
---

# Errores pequeños multiplicados por la escala

Casi nada de esto se ve navegando el sitio.

Multiplicado por miles de contenidos, decenas de idiomas, cambios de alias, migraciones de contenidos, cambios en decisiones técnicas y decenas de editores durante años, se convierte en deuda.

<!--
Cierra la parte de datos. Siguen la presentación del ponente y las tres áreas de SEO; después, la metáfora.
-->

---
layout: speaker
---

# Eduardo Morales

## Desarrollador Backend · <img class="brand" src="/img/metadrop-logo-white.svg" alt="Metadrop">

- Más de 9 años trabajando con Drupal desde la versión 7.
- Arquitectura técnica de sitios grandes y multiidioma para organizaciones globales.
- Migraciones masivas de contenido y optimización de rendimiento.
- Más de 270 contribuciones a la comunidad Drupal.

::aside::

<img src="/img/speaker.jpeg" alt="Eduardo Morales">

<!--
No nombrar clientes; evita que se asocie el sitio anonimizado.
-->

---
layout: cols-3
---

# Tres áreas de SEO

::col-1::

### <DcIcon name="pencil-ruler" /> On-page

¿El contenido encaja con lo que busca el usuario?

::col-2::

### <DcIcon name="handshake" /> Off-page

¿Otros sitios me referencian?

::col-3::

### <DcIcon name="code" /> Técnico

¿Puede el buscador rastrear e interpretar mi página?

<!--
El técnico se ocupa de la infraestructura, es el que mejor se mide y es la primera barrera: si el buscador no accede, no muestra la página.
Queda fuera: keywords, redacción, link building, publicidad de pago, analítica.
-->

---
layout: section
variant: card
---

# Un sitio grande, radar y caja negra

::aside::

<img src="/img/avion-beluga.jpg" alt="Avión Beluga con el logo de Drupal">

---
layout: cols-2
---

# El radar: crawlers y buscadores

::col-1::

### <DcIcon name="search" bg="sky" /> Crawlers de SEO

Screaming Frog, Oncrawl, Sitebulb.

Detectan códigos de estado, redirecciones, enlaces rotos, metatags, canonical, hreflang, datos estructurados.

::col-2::

### <DcIcon name="gauge" bg="sky" /> Buscadores

Search Console, PageSpeed Insights, Lighthouse, Bing Webmaster Tools.

Datos proporcionados por el propio buscador.

<!--
Coste: Screaming Frog gratis hasta 500 URLs; Ahrefs Free con 5.000 créditos al mes; planes de pago con auditoría por encima de 100 euros al mes.
-->

---

# Lo que el radar no ve

- Lo que no rastrea no existe: contenido despublicado o ignorado en robots.txt, o con metatag noindex.
- Detecta páginas duplicadas, pero no dice por qué.
- Límite de peticiones.
- Limitado a las reglas definidas en el CDN.

<!--
Ejemplo del origen: un patrón de Metatag que no coge bien el campo o un canonical mal definido.
-->

---
layout: image-right
class: dc-wide-aside dc-aside-gap
---

# La caja negra: herramientas y reportes dentro de Drupal

Registran qué provocó el fallo, sin depender de un rastreo externo:

- El nodo y el tipo de contenido afectados.
- El campo que contiene el error.
- Cada traducción por separado.
- La plantilla o el patrón que lo genera.
- El contenido despublicado que el radar no rastrea.

::aside::

<img src="/img/status-report.png" alt="Informe de estado de Drupal con los avisos de Content First Audit y Entity Mesh">
<p class="caption">Informe de estado de Drupal</p>

<!--
Sin caja negra, el problema se repite. El par radar y caja negra se usa en el resto de la charla.
Las dos son necesarias: solo el radar ve el rendimiento (Core Web Vitals), el móvil y el contenido generado con JavaScript, porque las herramientas internas no usan navegador.
-->

---
layout: section
variant: card
block: Cada problema tiene un origen
---

# El origen decide la corrección

::aside::

<img src="/img/motor.jpg" alt="Motor de avión abierto para revisión, con el logo de Drupal en el fuselaje">

---
layout: image-right
class: dc-compact
---

# Deuda técnica y deuda editorial

### <DcIcon name="code" bg="sky" /> Técnica

- Plantillas que omiten o duplican el H1 o rompen la jerarquía.
- Tipos de contenido sin validaciones.
- Paragraphs libres con encabezados fijos.
- Patrones de Metatag que generan titles o descriptions vacíos o largos.

### <DcIcon name="pencil-ruler" bg="sky" /> Editorial

- Enlaces a contenido despublicado.
- Redirecciones sin actualizar.
- Encabezados mal definidos.
- Imágenes sin alt.

::aside::

<img src="/img/hierarchy-issues.png" alt="Árbol de encabezados de Content First Audit con un H4 ausente entre un H3 y dos H5">
<p class="caption">Árbol de encabezados · Content First Audit</p>

---
layout: statement
---

# Corregir una vez o corregir mil veces

- Un problema técnico se corrige una vez en el código o la configuración y arregla miles de páginas.
- Un problema editorial se corrige contenido a contenido o con mejores validaciones.

---
layout: image-right
---

### Caso 1 · Técnico

# Un token global deja sin miniatura al contenido

La configuración global de Metatag define la imagen con un token fijo:

<code>[node:main_image:image_style_og:url]</code>

- Si la imagen está en un paragraph o en un campo con otro nombre, el token queda vacío y el contenido se comparte sin miniatura.
- Con tokens `[current-page:*]` el riesgo es mayor: necesitan la página en el contexto. Desde Drush u otro servicio puede no existir, y el valor no se calcula.

::aside::

<img src="/img/image-metatag.png" alt="Campo Image de la configuración de Metatag con un token de imagen">
<p class="caption">Token de imagen Open Graph · Metatag</p>

<!--
Deuda técnica: el patrón global da por hecho que todos los tipos de contenido guardan la imagen en el mismo campo.
-->

---
layout: image-left
---

### Caso 2 · Técnico y editorial

# Metatag sin objetivo

- Se asigna la metatag description al body recortado para que no quede vacía.
- El editor rellena la metatag de title y description correctamente pero olvida las de Open Graph.

Las metatags deben reforzar el contenido y las palabras clave, y respetar un límite de caracteres.

::aside::

<img src="/img/image-summary.png" alt="Campos Title y Description de Metatag, con la description tomada del resumen del nodo">
<p class="caption">Campos title y description · Metatag</p>

<!--
Deuda técnica nacida de no entender el propósito de una metatag.
-->

---
layout: default
---

### Caso 3 · Técnico

# JSON-LD sin `itok`

El módulo Redirect 404 detecta que hay muchas peticiones a estilos de imagen que fallan.

La imagen que pertenece a Schema.org no tiene `itok`.

<img class="screenshot" src="/img/json-ld.png" alt="JSON-LD de un artículo con la URL de la imagen sin el parámetro itok">
<p class="caption">JSON-LD de artículo con imagen sin itok · Schema.org Metatag</p>

---

### Caso 4 · Técnico

# Varios H1 compiten por la misma página

El eslogan del sitio y el paragraph hero carrusel se muestran como H1, cada slide con un H1 diferente.


<!--
Pasa cuando no está claro qué debe tener más peso en la página: se le da a todo.
Ojo: Google dice que varios H1 no penalizan por sí solos. El problema es la señal diluida: no queda claro cuál es el tema principal, y la jerarquía deja de servir a los lectores de pantalla.
-->

---

### Caso 5 · Técnico

# Una migración, nuevos alias

- Los alias cambian en el nuevo sitio.
- Las imágenes se vuelven a subir, se eliminan o cambian de ruta o de formato.
- El contenido en crudo no se procesa para extraer las referencias internas.
- Las páginas externas siguen enlazando a las URLs antiguas, y los buscadores las mantienen indexadas.

En una migración masiva existe el riesgo de perder miles de referencias entre páginas.

<!--
Lo mismo pasa al cambiar un alias, si las URLs antiguas no se mantienen con redirecciones.
-->

---
layout: section
variant: card
---

# Editores sin manual de vuelo

::aside::

<img src="/img/cabina.jpg" alt="Cabina de un avión de pasajeros en vuelo, con los mandos y las pantallas encendidas sobre las nubes">

---
layout: cols-2
---

# Atajos que agravan el problema

::col-1::

### Encabezados por tamaño

Encabezados elegidos por su tamaño visual, sin respetar el orden de jerarquía.

<img class="screenshot" src="/img/encabezados-atajos.png" alt="Desplegable de encabezados del editor, de Heading 2 a Heading 6, con tamaños distintos">
<p class="caption">Encabezados en CKEditor 5</p>

::col-2::

### Párrafos vacíos como espacio

Etiquetas `<p>` vacías para separar bloques o hacer saltos de línea.

<img class="screenshot" src="/img/empty-blocks.png" alt="Content First Audit marca un párrafo vacío entre dos bloques de contenido">
<p class="caption">Párrafo vacío · Content First Audit</p>

<!--
Sin manual ni conocimiento del sitio, los editores buscan atajos para conseguir un efecto visual.
"Tocan todos los botones de la cabina para llegar a su objetivo sin comprender las consecuencias"
-->

---
layout: col-1
---

# Reducir el error humano


### Validaciones y restricciones

- Alt obligatorio y/o check que marque la imagen como decorativa.
- Campos específicos con restricciones para metatags, especialmente para el title y la description.
- Niveles de encabezado permitidos en el editor.
- Verificación de referencias para evitar pérdidas en contenido enlazado.
- Permitir cambiar estilos de encabezados sin afectar al nivel en el marcado.
- Limitar las opciones de los editores de texto libre.


<!--
Las validaciones no bastan solas. Remitir a los casos 1 y 2.
-->

---
layout: col-1
---

# Manual de vuelo

### Formación y ayuda durante la edición

- Formación o introducción a las herramientas del sitio.
- Textos de ayuda en cada campo.
- Tooltips en las opciones del editor.
- Previsualización del contenido.

Saber para qué sirve cada campo evita errores en el contenido.

<!--
Las validaciones bloquean el error; el manual evita que se llegue a cometer.
Cierra la metáfora del bloque: los editores pilotan sin manual de vuelo.
-->

---
layout: section
variant: card
block: La caja negra dentro de Drupal
---

# Muchos módulos configuran, algunos diagnostican, unos pocos corrigen

::aside::

<div class="pyramid">
  <div class="p1">Corregir</div>
  <div class="p2">Diagnosticar</div>
  <div class="p3">Configurar</div>
</div>

<!--
El hueco del ecosistema. Presentar los módulos como herramientas de la comunidad.
-->

---
layout: image-right
class: dc-aside-gap
---

# Entity Mesh: el mapa de enlaces del sitio

- Qué páginas enlazan a cada contenido.
- Enlaces rotos (404) y contenido sin acceso (403).
- Enlaces a URLs que redirigen.
- Enlaces con protocolo http y URLs mal formadas.
- Páginas sin enlaces salientes.

::aside::

<img src="/img/entity-mesh-overview.png" alt="Resumen del informe de Entity Mesh con valores anonimizados">
<p class="caption">Resumen de Entity Mesh</p>

<!--
Qué páginas enlazan a cada contenido: la respuesta a la diapositiva 2.
También detecta enlaces tel: no válidos e iframes.
-->

---
layout: image-right
class: dc-aside-gap
---

# Content First Audit: del aviso al nodo

- H1 ausente o múltiple, jerarquía, elementos vacíos, metatags ausentes o largas, imágenes sin alt.
- Del resumen a la lista filtrada y a la auditoría del nodo, con el fragmento de HTML que provoca el error.
- Analiza cada traducción por separado.

::aside::

<img src="/img/content-first-audit-overview.png" alt="Resumen del informe de Content First Audit con valores anonimizados">
<p class="caption">Resumen de Content First Audit</p>

---
layout: default
---

# Redirect Audit

Detecta cadenas y bucles de redirecciones. Corrige las cadenas automáticamente y deja los bucles para revisión manual.

<img class="screenshot" style="max-height: 340px" src="/img/redirect-audit.png" alt="Informe de Redirect Audit con una cadena de tres redirecciones">
<p class="caption">Cadena de redirecciones · Redirect Audit</p>


---
layout: cols-3
---

# De la base a la corrección

::col-1::

### <DcIcon name="layers" /> Base

SEO Checklist, Metatag, Pathauto, Redirect, Simple XML Sitemap, RobotsTxt.

::col-2::

### <DcIcon name="search" /> Diagnóstico

Entity Mesh, Content First Audit, Redirect Audit, Redirect 404.

::col-3::

### <DcIcon name="wrench" /> Corrección

Filter Empty Tags, Image Alt Fallback, Redirect, Redirect Audit.

<!--
SEO Checklist sirve como punto de partida, pero no analiza el contenido.
robots.txt no impide la indexación: para eso hace falta noindex.
-->

---
layout: end
---

# Cada herramienta cubre una capa

- Sin radar volamos a ciegas.
- Sin caja negra repetimos los mismos errores.
- Sin manual no entendemos el cuadro de mandos.
- Sin un destino volamos en círculo.

<!--
A escala, saber si el origen es técnico o editorial decide si se corrige una plantilla o miles de contenidos.
-->

---
layout: big
---

# Gracias

Eduardo Morales · <img class="brand" src="/img/metadrop-logo.svg" alt="Metadrop">

[drupal.org/u/eduardo-morales-alberti](https://drupal.org/u/eduardo-morales-alberti)

---
layout: big
variant: navy
---

# ¿Preguntas?
