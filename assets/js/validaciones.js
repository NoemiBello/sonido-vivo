
// FORMULARIO SERVICIO TÉCNICO

// 1. SELECCIÓN DE ELEMENTOS


const formularioServicio =
    document.querySelector("#formulario-servicio");

const nombre =
    document.querySelector("#nombre");

const correo =
    document.querySelector("#correo");

const telefono =
    document.querySelector("#telefono");

const instrumento =
    document.querySelector("#instrumento");

const descripcion =
    document.querySelector("#descripcion");

const aceptaCondiciones =
    document.querySelector("#acepta-condiciones");

const mensajeFormulario =
    document.querySelector("#mensaje-formulario");



// 2. MENSAJES DE ERROR


function mostrarError(control, idError, mensaje) {

    const salida =
        document.querySelector(`#${idError}`);

    salida.textContent = mensaje;

    control.classList.add(
        "campo-invalido"
    );

    control.setAttribute(
        "aria-invalid",
        "true"
    );
}


function limpiarError(control, idError) {

    const salida =
        document.querySelector(`#${idError}`);

    salida.textContent = "";

    control.classList.remove(
        "campo-invalido"
    );

    control.removeAttribute(
        "aria-invalid"
    );
}



// 3. VALIDACIONES


function validarNombre(valor) {

    limpiarError(
        nombre,
        "error-nombre"
    );


    if (valor === "") {

        mostrarError(
            nombre,
            "error-nombre",
            "El nombre es obligatorio"
        );

        return false;
    }


    if (valor.length < 3) {

        mostrarError(
            nombre,
            "error-nombre",
            "El nombre debe tener al menos 3 caracteres"
        );

        return false;
    }


    if (valor.length > 50) {

        mostrarError(
            nombre,
            "error-nombre",
            "El nombre no puede superar los 50 caracteres"
        );

        return false;
    }


    return true;
}


function validarCorreo(valor) {

    limpiarError(
        correo,
        "error-correo"
    );


    if (valor === "") {

        mostrarError(
            correo,
            "error-correo",
            "El correo es obligatorio"
        );

        return false;
    }


    const formatoCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!formatoCorreo.test(valor)) {

        mostrarError(
            correo,
            "error-correo",
            "Ingresa un correo electrónico válido"
        );

        return false;
    }


    return true;
}


function validarTelefono(valor) {

    limpiarError(
        telefono,
        "error-telefono"
    );


    if (valor === "") {

        mostrarError(
            telefono,
            "error-telefono",
            "El teléfono es obligatorio"
        );

        return false;
    }


    const formatoTelefono =
        /^[0-9]{9}$/;


    if (!formatoTelefono.test(valor)) {

        mostrarError(
            telefono,
            "error-telefono",
            "Ingresa un teléfono de 9 dígitos"
        );

        return false;
    }


    return true;
}


function validarInstrumento(valor) {

    limpiarError(
        instrumento,
        "error-instrumento"
    );


    if (valor === "") {

        mostrarError(
            instrumento,
            "error-instrumento",
            "Selecciona un instrumento"
        );

        return false;
    }


    return true;
}


function validarDescripcion(valor) {

    limpiarError(
        descripcion,
        "error-descripcion"
    );


    if (valor === "") {

        mostrarError(
            descripcion,
            "error-descripcion",
            "Describe el problema del instrumento"
        );

        return false;
    }


    if (valor.length < 20) {

        mostrarError(
            descripcion,
            "error-descripcion",
            "La descripción debe tener al menos 20 caracteres"
        );

        return false;
    }


    if (valor.length > 500) {

        mostrarError(
            descripcion,
            "error-descripcion",
            "La descripción no puede superar los 500 caracteres"
        );

        return false;
    }


    return true;
}


function validarCondiciones() {

    limpiarError(
        aceptaCondiciones,
        "error-condiciones"
    );


    if (!aceptaCondiciones.checked) {

        mostrarError(
            aceptaCondiciones,
            "error-condiciones",
            "Debes confirmar que utilizarás datos ficticios"
        );

        return false;
    }


    return true;
}


// 4. VALIDACIÓN DURANTE LA INTERACCIÓN

// Nombre

nombre.addEventListener(
    "blur",
    function () {

        const valorNombre =
            nombre.value.trim();

        validarNombre(valorNombre);

    }
);


nombre.addEventListener(
    "input",
    function () {

        limpiarError(
            nombre,
            "error-nombre"
        );

        mensajeFormulario.textContent = "";

    }
);


// Correo

correo.addEventListener(
    "blur",
    function () {

        const valorCorreo =
            correo.value.trim().toLowerCase();

        validarCorreo(valorCorreo);

    }
);


correo.addEventListener(
    "input",
    function () {

        limpiarError(
            correo,
            "error-correo"
        );

        mensajeFormulario.textContent = "";

    }
);


// Teléfono

telefono.addEventListener(
    "blur",
    function () {

        const valorTelefono =
            telefono.value.trim();

        validarTelefono(valorTelefono);

    }
);


telefono.addEventListener(
    "input",
    function () {

        limpiarError(
            telefono,
            "error-telefono"
        );

        mensajeFormulario.textContent = "";

    }
);


// Instrumento

instrumento.addEventListener(
    "change",
    function () {

        validarInstrumento(
            instrumento.value
        );

        mensajeFormulario.textContent = "";

    }
);


// Descripción

descripcion.addEventListener(
    "blur",
    function () {

        const valorDescripcion =
            descripcion.value.trim();

        validarDescripcion(
            valorDescripcion
        );

    }
);


descripcion.addEventListener(
    "input",
    function () {

        limpiarError(
            descripcion,
            "error-descripcion"
        );

        mensajeFormulario.textContent = "";

    }
);


// Checkbox

aceptaCondiciones.addEventListener(
    "change",
    function () {

        validarCondiciones();

        mensajeFormulario.textContent = "";

    }
);


// 5. PROCESAR FORMULARIO


function procesarSolicitud(evento) {

    evento.preventDefault();


    const valorNombre =
        nombre.value.trim();

    const valorCorreo =
        correo.value.trim().toLowerCase();

    const valorTelefono =
        telefono.value.trim();

    const valorInstrumento =
        instrumento.value;

    const valorDescripcion =
        descripcion.value.trim();


    const nombreValido =
        validarNombre(valorNombre);

    const correoValido =
        validarCorreo(valorCorreo);

    const telefonoValido =
        validarTelefono(valorTelefono);

    const instrumentoValido =
        validarInstrumento(valorInstrumento);

    const descripcionValida =
        validarDescripcion(valorDescripcion);

    const condicionesValidas =
        validarCondiciones();


    const formularioValido =
        nombreValido &&
        correoValido &&
        telefonoValido &&
        instrumentoValido &&
        descripcionValida &&
        condicionesValidas;


    if (!formularioValido) {

        mensajeFormulario.textContent =
            "Revisa los campos marcados antes de continuar.";

        return;
    }


    mensajeFormulario.textContent =
        "Solicitud validada correctamente. Esta demostración no envía ni almacena información.";


    formularioServicio.reset();
}


// 6. EVENTO SUBMIT


if (formularioServicio) {

    formularioServicio.addEventListener(
        "submit",
        procesarSolicitud
    );

}

