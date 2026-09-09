# Sonido Vivo

Proyecto académico desarrollado para **DSY1104 - Desarrollo FullStack II**.

## Descripción

**Sonido Vivo** es una tienda de instrumentos musicales, equipos de sonido y accesorios ubicada en Viña del Mar, Región de Valparaíso. El proyecto busca construir progresivamente una solución web que facilite la consulta del catálogo, la gestión de pedidos y stock, y la atención de clientes remotos.

Esta versión corresponde a la **Evaluación Parcial 1 (EA1)** y representa la base frontend del proyecto utilizando HTML, CSS y JavaScript.

## Alcance actual - EA1

En esta etapa se implementa un prototipo frontend con:

- Navegación multipágina.
- Página de Inicio.
- Catálogo representativo de productos.
- Páginas de detalle de productos.
- Página de Servicios para reparación de instrumentos de cuerda.
- Formulario con validaciones personalizadas mediante JavaScript.
- Mensajes de error contextualizados durante la interacción del usuario.
- Contenido multimedia mediante video local.
- Menú hamburguesa para navegación móvil.
- Diseño responsive para móvil, tablet y escritorio.
- Carrusel de productos destacados.
- Carrito de compras de demostración.
- Persistencia local del carrito mediante `localStorage`.

> El carrito y el formulario corresponden a una demostración frontend. En esta etapa no existe comunicación con backend, procesamiento real de pagos ni persistencia en una base de datos.

## Tecnologías utilizadas en EA1

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Visual Studio Code
- Live Server

## Tecnologías requeridas para etapas posteriores

Según el caso académico, el proyecto completo deberá evolucionar hacia:

- React para el frontend SPA.
- Spring Boot con Java para el backend.
- API REST con intercambio de datos JSON.
- Autenticación y control de acceso por roles.
- Base de datos relacional, preferentemente MySQL.
- Leaflet o Google Maps.
- Docker.
- AWS.

## Diseño responsive

La interfaz se prueba considerando los tamaños indicados para el proyecto:

- **Móvil:** desde 360 px.
- **Tablet:** desde 768 px.
- **Escritorio:** desde 1280 px.

En móvil, la navegación principal utiliza un menú tipo hamburguesa.

## Estructura del proyecto

```text
sonido-vivo/
|
|-- assets/
|   |-- css/
|   |   `-- estilos.css
|   |
|   |-- img/
|   |
|   |-- media/
|   |   `-- VideoGuitarra.mp4
|   |
|   `-- js/
|       |-- app.js
|       |-- carrito.js
|       |-- carrusel.js
|       |-- menu.js
|       |-- productos.js
|       `-- validaciones.js
|
|-- index.html
|-- catalogo.html
|-- servicios.html
|-- producto1.html
|-- producto2.html
|-- producto3.html
|-- carrito.html
`-- README.md
```

## Responsabilidad de los archivos JavaScript

### `menu.js`

Controla la apertura y cierre del menú hamburguesa y actualiza el estado de accesibilidad de la navegación.

### `validaciones.js`

Controla el formulario de Servicios:

- Selección de controles mediante DOM.
- Validaciones de nombre, correo, teléfono, instrumento y descripción.
- Validación del checkbox de confirmación.
- Mensajes de error personalizados.
- Eventos `blur`, `input`, `change` y `submit`.
- Uso de `preventDefault()` para validar antes de procesar el formulario.

### `productos.js`

Centraliza los datos de los productos utilizados por la lógica JavaScript del prototipo.

### `carrito.js`

Gestiona el carrito de demostración y su persistencia local mediante `localStorage`.

### `carrusel.js`

Controla la interacción del carrusel utilizado en Inicio.

### `app.js`

Archivo destinado a comportamiento general y lógica asociada a productos según la evolución del proyecto.

## Ejecución local

1. Clonar el repositorio:

```bash
git clone https://github.com/NoemiBello/sonido-vivo.git
```

2. Abrir la carpeta del proyecto en Visual Studio Code.

3. Abrir `index.html` con **Live Server**.

También puede abrirse directamente `index.html` en el navegador, aunque Live Server facilita las pruebas durante el desarrollo.

## Trabajo colaborativo

El equipo utiliza Git y GitHub para mantener evidencia individual de los avances.

Integrantes y responsabilidades principales:

- **Noemí:** Inicio, estructura compartida y detalles de productos.
- **Jeanpiere:** Catálogo, identidad visual y diseño responsive.
- **Manuel:** Servicios, formulario, validaciones JavaScript y organización de scripts.

Flujo utilizado:

```text
Actualizar proyecto
→ trabajar en rama individual
→ realizar cambios pequeños
→ revisar con git status / git diff
→ commit descriptivo
→ push
→ Pull Request
→ revisión e integración a main
```

Ramas de trabajo utilizadas durante EA1:

- `noe-bello`
- `jequito`
- `ramazzotti`

## Requisitos del caso que aborda el prototipo

Esta primera versión aporta una base para algunos problemas definidos en el caso:

- Consulta de productos sin depender exclusivamente de WhatsApp o Instagram.
- Navegación hacia detalles de productos.
- Representación inicial de un carrito de compras.
- Interfaz adaptable a diferentes dispositivos.
- Solicitud frontend de revisión para el servicio de reparación de instrumentos de cuerda.

El catálogo final del caso considera aproximadamente **340 referencias**. La EA1 utiliza una muestra representativa mientras se construyen las bases del sistema.

## Alcance futuro

En evaluaciones posteriores el proyecto deberá evolucionar para cubrir, entre otros:

- Catálogo completo con disponibilidad actualizada.
- Autenticación.
- Roles Administrador, Vendedor/Empleado y Cliente.
- Pedidos formales.
- Despacho o retiro en tienda.
- Seguimiento de pedidos.
- Actualización de stock.
- Historial de compras.
- Gestión de usuarios.
- Reportes de ventas.
- Integración de mapa.
- Backend y base de datos.
- Despliegue cloud.

## Fuentes de recursos

Productos utilizados como referencia durante el prototipo:

- https://promusic.cl/products/sgr-by-schecter-c-1-gloss-black-guitarra-electrica-6-cuerdas
- https://promusic.cl/products/shure-sm58-microfono-dinamico-vocal
- https://www.planetmusic.cl/producto/behringer-ha-20r/

También se utiliza el catálogo entregado por la asignatura como fuente de referencia del inventario general del caso.

### Video

El proyecto utiliza el archivo local:

```text
assets/media/VideoGuitarra.mp4
```

Si el recurso proviene de una fuente externa, el equipo debe agregar la fuente original antes de la entrega final.

## Documentación

La entrega de EA1 incluye además:

- Enlace público del repositorio GitHub.
- Proyecto frontend comprimido.
- Documento **ERS - Especificación de Requisitos del Software, versión 1**.

## Estado

**EA1 - Prototipo frontend.**
