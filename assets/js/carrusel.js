const diapositivas = document.querySelectorAll(".diapositiva");
const indicadores = document.querySelectorAll(".indicador");

let diapositivaActual = 0;


// Mostrar una diapositiva.
function mostrarDiapositiva(indice) {

    diapositivas.forEach(function (diapositiva) {
        diapositiva.classList.remove("activa");
    });

    indicadores.forEach(function (indicador) {
        indicador.classList.remove("activo");
    });

    diapositivas[indice].classList.add("activa");
    indicadores[indice].classList.add("activo");

    diapositivaActual = indice;
}


// Cambio manual con los puntos.
indicadores.forEach(function (indicador) {

    indicador.addEventListener("click", function () {

        const indice = Number(indicador.dataset.indice);

        mostrarDiapositiva(indice);
    });

});


// Cambio automático.
function cambiarDiapositiva() {

    let siguiente = diapositivaActual + 1;

    if (siguiente >= diapositivas.length) {
        siguiente = 0;
    }

    mostrarDiapositiva(siguiente);
}


// Cambiar cada 5 segundos.
setInterval(cambiarDiapositiva, 5000);