document.addEventListener("DOMContentLoaded", function () {

    const sesionActiva = localStorage.getItem("sesionActiva");
    const tipoUsuario = localStorage.getItem("tipoUsuario");

    if (
        sesionActiva !== "true" ||
        tipoUsuario !== "vendedor"
    ) {
        window.location.href = "login.html";
        return;
    }

    let productosGuardados = localStorage.getItem("productosVendedor");

    if (productosGuardados) {
        productosGuardados = JSON.parse(productosGuardados);
    } else {
        productosGuardados = [...productos];

        localStorage.setItem(
            "productosVendedor",
            JSON.stringify(productosGuardados)
        );
    }

    const correoVendedor = document.getElementById("correoVendedor");

    if (correoVendedor) {
        correoVendedor.textContent =
            localStorage.getItem("correoUsuario") || "";
    }

    const correoFooter = document.getElementById("correoFooter");

    if (correoFooter) {
        correoFooter.textContent =
            localStorage.getItem("correoUsuario") || "";
    }

    mostrarProductos();

    const formularioProducto =
        document.getElementById("formProducto");

    if (formularioProducto) {
        formularioProducto.addEventListener(
            "submit",
            agregarProducto
        );
    }

    const formularioEditar =
        document.getElementById("formEditarProducto");

    if (formularioEditar) {
        cargarProductoEditar();

        formularioEditar.addEventListener(
            "submit",
            guardarEdicion
        );
    }
});


function obtenerProductos() {

    const productosGuardados =
        localStorage.getItem("productosVendedor");

    if (productosGuardados) {
        return JSON.parse(productosGuardados);
    }

    const productosIniciales = [...productos];

    localStorage.setItem(
        "productosVendedor",
        JSON.stringify(productosIniciales)
    );

    return productosIniciales;
}


function guardarProductos(lista) {

    localStorage.setItem(
        "productosVendedor",
        JSON.stringify(lista)
    );
}
function mostrarProductos() {

    const listaProductos =
        document.getElementById("listaProductos");

    if (!listaProductos) {
        return;
    }

    const lista = obtenerProductos();

    listaProductos.innerHTML = "";

    lista.forEach(function (producto, indice) {

        const fila = document.createElement("tr");

        const stock = Number(producto.stock);
        const stockCritico = Number(producto.stockCritico || 2);

        let estado = "Disponible";

        if (stock === 0) {
            estado = "Sin stock";
        } else if (stock <= stockCritico) {
            estado = "Stock crítico";
        }

        fila.innerHTML = `
            <td class="producto-nombre">
                <strong>${producto.nombre}</strong>
                <small>${producto.codigo}</small>
            </td>

            <td>
                <span class="etiqueta-dato">Precio</span>
                <span class="valor-dato">
                    $${Number(producto.precio).toLocaleString("es-CL")}
                </span>
            </td>

            <td>
                <span class="etiqueta-dato">Stock</span>
                <span class="valor-dato">
                    ${stock}
                </span>
            </td>

            <td>
                <span class="etiqueta-dato">Estado</span>
                <span class="valor-dato">
                    ${estado}
                </span>
            </td>

            <td class="acciones-producto">

                <button
                    type="button"
                    onclick="editarProducto(${indice})">
                    Editar
                </button>

                <button
                    type="button"
                    onclick="eliminarProducto(${indice})">
                    Eliminar
                </button>

            </td>
        `;

        listaProductos.appendChild(fila);
    });

    actualizarResumen(lista);
}

function actualizarResumen(lista) {

    const totalProductos =
        document.getElementById("totalProductos");

    const stockTotal =
        document.getElementById("stockTotal");

    const stockCritico =
        document.getElementById("stockCritico");

    let cantidadStock = 0;
    let cantidadCriticos = 0;

    lista.forEach(function (producto) {

        cantidadStock += Number(producto.stock);

        if (
            Number(producto.stock) <=
            Number(producto.stockCritico || 0)
        ) {
            cantidadCriticos++;
        }
    });

    if (totalProductos) {
        totalProductos.textContent = lista.length;
    }

    if (stockTotal) {
        stockTotal.textContent = cantidadStock;
    }

    if (stockCritico) {
        stockCritico.textContent = cantidadCriticos;
    }
}


function agregarProducto(event) {

    event.preventDefault();

    const codigo =
        document.getElementById("codigo").value.trim();

    const nombre =
        document.getElementById("nombre").value.trim();

    const descripcion =
        document.getElementById("descripcion").value.trim();

    const precio =
        Number(document.getElementById("precio").value);

    const stock =
        Number(document.getElementById("stock").value);

    const stockCritico =
        Number(document.getElementById("stockCritico").value);

    const categoria =
        document.getElementById("categoria").value;

    const imagen =
        document.getElementById("imagen").value.trim();

    const lista = obtenerProductos();

    const codigoExiste = lista.some(function (producto) {

        return producto.codigo.toLowerCase() ===
            codigo.toLowerCase();

    });

    if (codigoExiste) {

        document.getElementById("mensajeProducto").textContent =
            "Ya existe un producto con ese código.";

        return;
    }

    const nuevoProducto = {

        id: Date.now(),

        codigo: codigo,

        categoria: categoria,

        nombre: nombre,

        marca: "",

        modelo: "",

        imagen: imagen,

        stock: stock,

        precio: precio,

        descripcion: descripcion,

        stockCritico: stockCritico
    };

    lista.push(nuevoProducto);

    guardarProductos(lista);

    document.getElementById("mensajeProducto").textContent =
        "Producto agregado correctamente.";

    event.target.reset();
}


function editarProducto(indice) {

    localStorage.setItem(
        "productoEditar",
        indice
    );

    window.location.href =
        "editar-producto.html";
}


function cargarProductoEditar() {

    const indice =
        localStorage.getItem("productoEditar");

    if (indice === null) {
        window.location.href = "vendedor.html";
        return;
    }

    const lista = obtenerProductos();

    const producto = lista[Number(indice)];

    if (!producto) {
        window.location.href = "vendedor.html";
        return;
    }

    document.getElementById("codigo").value =
        producto.codigo;

    document.getElementById("nombre").value =
        producto.nombre;

    document.getElementById("descripcion").value =
        producto.descripcion || "";

    document.getElementById("precio").value =
        producto.precio;

    document.getElementById("stock").value =
        producto.stock;

    document.getElementById("stockCritico").value =
        producto.stockCritico || 0;

    document.getElementById("categoria").value =
        producto.categoria;

    document.getElementById("imagen").value =
        producto.imagen || "";
}


function guardarEdicion(event) {

    event.preventDefault();

    const indice =
        localStorage.getItem("productoEditar");

    const lista = obtenerProductos();

    if (indice === null || !lista[Number(indice)]) {
        return;
    }

    const producto =
        lista[Number(indice)];

    producto.codigo =
        document.getElementById("codigo").value.trim();

    producto.nombre =
        document.getElementById("nombre").value.trim();

    producto.descripcion =
        document.getElementById("descripcion").value.trim();

    producto.precio =
        Number(document.getElementById("precio").value);

    producto.stock =
        Number(document.getElementById("stock").value);

    producto.stockCritico =
        Number(document.getElementById("stockCritico").value);

    producto.categoria =
        document.getElementById("categoria").value;

    producto.imagen =
        document.getElementById("imagen").value.trim();

    guardarProductos(lista);

    localStorage.removeItem("productoEditar");

    document.getElementById("mensajeEditar").textContent =
        "Producto actualizado correctamente.";

    setTimeout(function () {

        window.location.href =
            "vendedor.html";

    }, 800);
}


function eliminarProducto(indice) {

    const lista = obtenerProductos();

    const producto = lista[indice];

    if (!producto) {
        return;
    }

    const confirmar = confirm(
        "¿Está seguro de eliminar " +
        producto.nombre +
        "?"
    );

    if (!confirmar) {
        return;
    }

    lista.splice(indice, 1);

    guardarProductos(lista);

    mostrarProductos();
}


function cerrarSesion() {

    localStorage.removeItem("sesionActiva");
    localStorage.removeItem("correoUsuario");
    localStorage.removeItem("tipoUsuario");
    localStorage.removeItem("productoEditar");

    window.location.href = "login.html";
}