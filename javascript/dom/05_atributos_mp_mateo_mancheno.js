const jugador = document.getElementById("jugador");
const cambiar = document.getElementById("cambiar");
const verEstadistica = document.getElementById("verEstadistica");
const estadistica = document.getElementById("estadistica");

cambiar.addEventListener("click", function() {
    if (jugador.getAttribute("title") == "Jugador Titular") {
        jugador.setAttribute("src", "jugador_suplente.jpeg");
        jugador.setAttribute("title", "Jugador Suplente");
        jugador.dataset.estadistica = "Goles: 6 | Asistencias: 9";
    } else {
        jugador.setAttribute("src", "jugador_titular.jpeg");
        jugador.setAttribute("title", "Jugador Titular");
        jugador.dataset.estadistica = "Goles: 12 | Pases: 88%";
    }
});

verEstadistica.addEventListener("click", function() {
    estadistica.textContent = jugador.dataset.estadistica;
});

const transmision = document.getElementById("transmision");
const activarTransmision = document.getElementById("activarTransmision");

activarTransmision.addEventListener("click", function() {
    if (transmision.textContent == "Transmisión Inactiva") {
        transmision.style.backgroundColor = "green";
        transmision.style.color = "white";
        transmision.textContent = "Transmisión activada";
    } else {
        transmision.style.backgroundColor = "red";
        transmision.style.color = "white";
        transmision.textContent = "Transmisión Inactiva";
    }
});