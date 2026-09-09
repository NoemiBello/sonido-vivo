const productos = [

    {
        id: 1,
        codigo: "GE001",
        categoria: "Guitarras Eléctricas",
        nombre: "Guitarra Eléctrica Stratocaster",
        marca: "Squier",
        modelo: "Affinity Strat",
        imagen: "assets/img/guitarra-schecter.jpg",
        stock: 5,
        precio: 249990,
        descripcion:
            "Cuerpo de álamo, mástil de arce, pastillas SSS."
    },

    {
        id: 2,
        codigo: "MI001",
        categoria: "Micrófonos",
        nombre: "Micrófono Dinámico Cardioide",
        marca: "Shure",
        modelo: "SM58",
        imagen: "assets/img/microfono.jpg",
        stock: 8,
        precio: 149990,
        descripcion:
            "Estándar industria para voz en vivo."
    },

    {
        id: 3,
        codigo: "AM001",
        categoria: "Amplificadores",
        nombre: "Amplificador Guitarra 15W",
        marca: "Fender",
        modelo: "Frontman 15G",
        imagen: "assets/img/amplificador-behringe.jpg",
        stock: 5,
        precio: 99990,
        descripcion:
            "15W, distorsión incorporada, entrada auxiliar."
    },
];


const stockProducto = document.getElementById("stock-producto");
const contenidoPrincipal = document.getElementById("contenido-principal");

if (stockProducto && contenidoPrincipal) {

    const idProducto = Number(contenidoPrincipal.dataset.productoId);

    const producto = productos.find(p => p.id === idProducto);

    if (producto) {
        stockProducto.textContent = `Stock: ${producto.stock} unidades`;
    }
}