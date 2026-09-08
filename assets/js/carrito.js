//const carrito = [];

const carritoGuardado = localStorage.getItem("carrito");

let carrito = [];

if (carritoGuardado !== null) {
    carrito = JSON.parse(carritoGuardado);
}


const botonesAgregar = document.querySelectorAll(".boton-agregar");
const listaCarrito = document.querySelector("#lista-carrito");

const botonVaciar = document.querySelector("#vaciar-carrito");
if (botonVaciar !== null) {
    botonVaciar.addEventListener("click", function () {
        localStorage.removeItem("carrito");
        carrito = [];
        listaCarrito.replaceChildren();

        const mensajeVacio = document.createElement("p");
        mensajeVacio.textContent = "Tu carrito está vacío.";
        listaCarrito.appendChild(mensajeVacio);

    });
}

if (listaCarrito !== null) {

    if (carrito.length === 0) {

        const mensajeVacio = document.createElement("p");
        mensajeVacio.textContent = "Tu carrito está vacío.";
        listaCarrito.appendChild(mensajeVacio);

    } else {

        let total = 0;

        for (const producto of carrito) {
            const tarjeta = document.createElement("article");
            tarjeta.classList.add("tarjeta-carrito");

            const imagen = document.createElement("img");
            imagen.classList.add("imagen-carrito");

            const parrafo = document.createElement("p");
            const precio = document.createElement("p");

            imagen.src = producto.imagen;
            imagen.alt = producto.nombre;

            parrafo.textContent = producto.nombre;
            precio.textContent = "$" + producto.precio.toLocaleString("es-CL");
            total += producto.precio;

            tarjeta.appendChild(imagen);
            tarjeta.appendChild(parrafo);
            tarjeta.appendChild(precio);

            listaCarrito.appendChild(tarjeta);
        }
        const parrafoTotal = document.createElement("p");
        parrafoTotal.classList.add("total-carrito");
        parrafoTotal.textContent = "Total: $" + total.toLocaleString("es-CL");
        listaCarrito.appendChild(parrafoTotal);

    }
}

botonesAgregar.forEach(function (boton) {

    boton.addEventListener("click", function () {
        const idProducto = Number(boton.dataset.id);
        let productoSeleccionado = null;
        for (const producto of productos) {

            if (producto.id === idProducto) {
                productoSeleccionado = producto;

            }
        }
        if (productoSeleccionado !== null) {
            carrito.push(productoSeleccionado);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            console.log(carrito);
        }
    });

});