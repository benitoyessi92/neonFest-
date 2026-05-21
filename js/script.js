// MENÚ RESPONSIVO
function toggleMenu() {
    document.getElementById("menu").classList.toggle("activo");
}

// PROMOCIÓN
function mostrarPromo() {
    alert("¡Promoción especial! Compra 2 boletos y recibe descuento.");
}

// SELECCIONAR BOLETO
function seleccionarBoleto(tipo) {
    document.getElementById("boletoSeleccionado").innerHTML =
        "Has seleccionado el boleto: " + tipo;
}

// FORMULARIO
function enviarFormulario(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;

    document.getElementById("respuesta").innerHTML =
        "Gracias por registrarte, " + nombre + "!";
}
