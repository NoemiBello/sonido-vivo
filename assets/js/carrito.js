// =========================================================
// PRODUCTOS DISPONIBLES
// Arreglo de objetos con los productos que se pueden
// agregar al carrito.
// =========================================================


// =========================================================
// RECUPERAR CARRITO GUARDADO
// localStorage guarda los datos como texto.
// JSON.parse transforma ese texto nuevamente en un arreglo.
// =========================================================

const carritoGuardado = localStorage.getItem("carrito");

let carrito = [];

if (carritoGuardado !== null) {
    carrito = JSON.parse(carritoGuardado);
}

// =========================================================
// REFERENCIAS AL DOM
// Se buscan los elementos HTML que serán utilizados
// por el carrito.
// =========================================================

const botonesAgregar = document.querySelectorAll(".boton-agregar");
const listaCarrito = document.querySelector("#lista-carrito");
const cantidadCarrito = document.querySelector("#cantidad-carrito");
const accionesCarrito = document.querySelector("#acciones-carrito");
const botonVaciar = document.querySelector("#vaciar-carrito");
const subtotalCarrito = document.querySelector("#subtotal-carrito");
const totalPaginaCarrito = document.querySelector("#total-pagina-carrito");
const totalCarritoPanel = document.querySelector("#total-carrito-panel");

// =========================================================
// MOSTRAR CARRITO
// Actualiza visualmente los productos, cantidades y totales.
// =========================================================

function mostrarCarrito() {

    // Actualizar contador del icono del carrito.
    if (cantidadCarrito !== null) {

        let cantidadTotal = 0;

        for (const producto of carrito) {
            cantidadTotal += producto.cantidad;
        }

        cantidadCarrito.textContent = cantidadTotal;
    }


    // Si esta página no tiene una lista de carrito,
    // la función termina aquí.
    if (listaCarrito === null) {
        return;
    }


    // Limpiar el contenido anterior.
    listaCarrito.replaceChildren();


    // Carrito vacío.
    if (carrito.length === 0) {

        if (accionesCarrito !== null) {
            accionesCarrito.style.display = "none";
        }

        const mensajeVacio = document.createElement("p");

        mensajeVacio.classList.add("mensaje-carrito-vacio");

        mensajeVacio.textContent = "Tu carrito está vacío.";

        listaCarrito.appendChild(mensajeVacio);


        if (subtotalCarrito !== null) {
            subtotalCarrito.textContent = "$0";
        }

        if (totalPaginaCarrito !== null) {
            totalPaginaCarrito.textContent = "$0";
        }

        if (totalCarritoPanel !== null) {
            totalCarritoPanel.textContent = "Total: $0";
        }

        return;
    }


    // Si existen productos, mostrar acciones.
    if (accionesCarrito !== null) {
        accionesCarrito.style.display = "flex";
    }


    let total = 0;


    // Crear una tarjeta por cada producto.
    for (const producto of carrito) {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("tarjeta-carrito");


        const informacionProducto = document.createElement("div");

        informacionProducto.classList.add("informacion-producto-carrito");


        const imagen = document.createElement("img");

        imagen.classList.add("imagen-carrito");

        imagen.src = producto.imagen;

        imagen.alt = producto.nombre;


        const nombre = document.createElement("p");

        nombre.textContent = producto.nombre;

        const detalleCompra = document.createElement("p");

        detalleCompra.textContent =
            producto.cantidad + " ×  $" +
            producto.precio.toLocaleString("es-CL");


        // Calcular total.
        total += producto.precio * producto.cantidad;

        informacionProducto.appendChild(imagen);
        informacionProducto.appendChild(nombre);
        informacionProducto.appendChild(detalleCompra);

        tarjeta.appendChild(informacionProducto);

        listaCarrito.appendChild(tarjeta);
    }


    // Totales de carrito.html.
    if (subtotalCarrito !== null) {
        subtotalCarrito.textContent =
            "$" + total.toLocaleString("es-CL");
    }

    if (totalPaginaCarrito !== null) {
        totalPaginaCarrito.textContent =
            "$" + total.toLocaleString("es-CL");
    }


    // Total del panel lateral.
    if (totalCarritoPanel !== null) {
        totalCarritoPanel.textContent =
            "Total: $" + total.toLocaleString("es-CL");
    }
}

// =========================================================
// EVENTO: AGREGAR PRODUCTOS
// Escucha el click de todos los botones "Agregar al carrito".
// =========================================================

botonesAgregar.forEach(function (boton) {

    boton.addEventListener("click", function () {
        // data-id viene desde el botón HTML.
        const idProducto = Number(boton.dataset.id);
        let productoSeleccionado = null;
        // Buscar el producto correspondiente al ID.
        for (const producto of productos) {
            if (producto.id === idProducto) {
                productoSeleccionado = producto;

            }
        }


        if (productoSeleccionado !== null) {

            let productoEnCarrito = null;


            // Revisar si el producto ya estaba agregado.
            for (const producto of carrito) {

                if (producto.id === productoSeleccionado.id) {
                    productoEnCarrito = producto;
                }

            }


            // Si ya existe aumenta su cantidad.
            // Si no existe, se agrega al arreglo.
            if (productoEnCarrito !== null) {
                
                productoEnCarrito.cantidad++;

            } else {

                carrito.push({
                    id: productoSeleccionado.id,
                    nombre: productoSeleccionado.nombre,
                    precio: productoSeleccionado.precio,
                    imagen: productoSeleccionado.imagen,
                    cantidad: 1
                });

            }


            // Guardar carrito en localStorage.
            // JSON.stringify convierte el arreglo a texto.
            localStorage.setItem(
                "carrito",
                JSON.stringify(carrito)
            );
            // Actualizar lo que ve el usuario.
            mostrarCarrito();

            // Seguimiento del carrito desde la consola.
            console.log(carrito);

        }

    });

});


// =========================================================
// EVENTO: VACIAR CARRITO
// =========================================================

if (botonVaciar !== null) {

    botonVaciar.addEventListener("click", function () {

        carrito = [];

        localStorage.removeItem("carrito");

        mostrarCarrito();

    });

}


// =========================================================
// PANEL LATERAL DEL CARRITO
// =========================================================

const botonAbrirCarrito =
    document.querySelector("#abrir-carrito");

const botonCerrarCarrito =
    document.querySelector("#cerrar-carrito");

const panelCarrito =
    document.querySelector("#panel-carrito");


// Abrir panel lateral.
function abrirPanelCarrito() {

    if (panelCarrito !== null) {
        panelCarrito.classList.add("abierto");
    }

}


// Cerrar panel lateral.
function cerrarPanelCarrito() {

    if (panelCarrito !== null) {
        panelCarrito.classList.remove("abierto");
    }

}


// Evento para abrir el carrito.
if (botonAbrirCarrito !== null) {

    botonAbrirCarrito.addEventListener(
        "click",
        abrirPanelCarrito
    );

}


// Evento para cerrar el carrito.
if (botonCerrarCarrito !== null) {

    botonCerrarCarrito.addEventListener(
        "click",
        cerrarPanelCarrito
    );

}


// =========================================================
// EJECUCIÓN INICIAL
// Muestra el carrito al cargar la página.
// =========================================================

mostrarCarrito();