document.addEventListener("DOMContentLoaded", function () {

    const formularioLogin = document.getElementById("formulario-login");

    if (!formularioLogin) {
        return;
    }

    formularioLogin.addEventListener("submit", function (event) {

        event.preventDefault();

        const correo = document.getElementById("correo").value.trim();
        const password = document.getElementById("password").value;
        const tipoUsuario = document.getElementById("tipoUsuario").value;

        const errorCorreo = document.getElementById("error-correo");
        const errorPassword = document.getElementById("error-password");
        const errorTipo = document.getElementById("error-tipo");
        const mensajeLogin = document.getElementById("mensaje-login");

        // Limpiar mensajes
        if (errorCorreo) {
            errorCorreo.textContent = "";
        }

        if (errorPassword) {
            errorPassword.textContent = "";
        }

        if (errorTipo) {
            errorTipo.textContent = "";
        }

        if (mensajeLogin) {
            mensajeLogin.textContent = "";
        }

        let valido = true;

        // Validar correo
        const correoValido =
            /^[^\s@]+@(duocuc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;

        if (!correoValido.test(correo)) {

            if (errorCorreo) {
                errorCorreo.textContent =
                    "Ingrese un correo @duocuc.cl, @profesor.duoc.cl o @gmail.com";
            }

            valido = false;
        }

        // Validar contraseña
        if (password.length < 4 || password.length > 10) {

            if (errorPassword) {
                errorPassword.textContent =
                    "La contraseña debe tener entre 4 y 10 caracteres.";
            }

            valido = false;
        }

        // Validar tipo de usuario
        if (tipoUsuario === "") {

            if (errorTipo) {
                errorTipo.textContent =
                    "Seleccione cómo desea ingresar.";
            }

            valido = false;
        }

        // Detener si hay errores
        if (!valido) {
            return;
        }

        // Guardar sesión
        localStorage.setItem("sesionActiva", "true");
        localStorage.setItem("correoUsuario", correo);
        localStorage.setItem("tipoUsuario", tipoUsuario);

        // Mostrar mensaje
        if (mensajeLogin) {
            mensajeLogin.textContent =
                "Inicio de sesión correcto.";
        }

        // Ingresar como vendedor
        if (tipoUsuario === "vendedor") {

            window.location.href = "vendedor.html";

            return;
        }

        // Ingresar como usuario
        if (tipoUsuario === "usuario") {

            window.location.href = "catalogo.html";

            return;
        }

    });

});