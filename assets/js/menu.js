// MENÚ DE NAVEGACIÓN

const botonMenu =
    document.querySelector("#boton-menu");

const navegacionPrincipal =
    document.querySelector("#navegacion-principal");


if (botonMenu && navegacionPrincipal) {

    botonMenu.addEventListener(
        "click",
        function () {

            const menuAbierto =
                botonMenu.getAttribute("aria-expanded") === "true";


            botonMenu.setAttribute(
                "aria-expanded",
                String(!menuAbierto)
            );


            navegacionPrincipal.classList.toggle(
                "menu-abierto"
            );


            if (menuAbierto) {

                botonMenu.setAttribute(
                    "aria-label",
                    "Abrir menú de navegación"
                );

            } else {

                botonMenu.setAttribute(
                    "aria-label",
                    "Cerrar menú de navegación"
                );

            }

        }
    );

}