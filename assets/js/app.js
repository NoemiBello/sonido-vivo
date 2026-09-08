// CATÁLOGO DE PRODUCTOS
// SONIDO VIVO


// 1. MOSTRAR DATOS EN CONSOLA


function mostrarResumenProductos() {

    console.log("Catálogo Sonido Vivo");


    for (const producto of productos) {

        console.log(
            `${producto.codigo} - ${producto.nombre}`
        );

        console.log(
            `Marca: ${producto.marca}`
        );

        console.log(
            `Modelo: ${producto.modelo}`
        );

        console.log(
            `Stock: ${producto.stock}`
        );

        console.log(
            `Precio: $${producto.precio}`
        );

    }

}


mostrarResumenProductos();

// La lógica dinámica del catálogo
// se implementará en el siguiente avance.