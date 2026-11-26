const posesion = document.getElementById("posesion");
const torneo = document.getElementById("torneo");
const marcador = document.getElementById("marcador");

posesion.textContent = "Posesión: 64%";
torneo.textContent = "Torneo: LigaPro Serie A";
marcador.textContent = "Marcador en vivo: activado";

// Selección a través del nombre de la clase
const jugadorDestacado = document.querySelector(".jugador");
jugadorDestacado.textContent = "Moisés Caicedo (Mediocampista - Mateo Mancheno)";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Preparando Alineación Titular";

const competicion = document.querySelector("#competicion");
competicion.textContent = "Preparando Reporte de Jornada";

const estadoJugador = document.querySelector("#analisis-equipo .estado");
estadoJugador.textContent = "Listo para Saltar a la Cancha";

const estadios = document.querySelectorAll(".estadios");
console.log(estadios);
console.log(estadios.length);

console.log(estadios[0].textContent);
console.log(estadios[1].textContent);
console.log(estadios[2].textContent);
console.log(estadios[3].textContent);

for (let i = 0; i < estadios.length; i++) {
    console.log(estadios[i].textContent);
}

console.log("Con forEach");
estadios.forEach(function(estadio) {
    console.log(estadio.textContent);
});

console.log("Con for of");
for (let estadio of estadios) {
    console.log(estadio.textContent);
}