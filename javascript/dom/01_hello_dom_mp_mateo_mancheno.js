console.log(document);
const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "Centro de Monitoreo - Estadísticas de Fútbol (Mateo Mancheno)";

const estado = document.getElementById("estado");
const botonTransmision = document.getElementById("botonTransmision");
botonTransmision.addEventListener("click", function() {
    console.log("Ejecutando click en transmisión");
    estado.textContent = "¡Transmisión Activada!";
    console.log("Texto cambiado en el elemento estado");
    alert("Proceso de activación de estadísticas terminado");
});

const mensaje = document.getElementById("mensaje");
const botonMensaje = document.getElementById("botonMensaje");
botonMensaje.addEventListener("click", function() {
    mensaje.textContent = "Analista listo para el partido!";
});

let goles = 0;
const contador = document.getElementById("contador");
const nuevoGol = document.getElementById("nuevoGol");
nuevoGol.addEventListener("click", function() {
    goles += 1;
    contador.textContent = goles;
});