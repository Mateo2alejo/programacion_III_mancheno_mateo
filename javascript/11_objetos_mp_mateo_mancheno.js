let jugadorPrincipal = "Moisés Caicedo";
let partidosJugados = 70;
let sede = "Estadio Rodrigo Paz Delgado - Quito";
let resistencia = 100;
let lesionado = false;

let jugador = {
    nombre: "Moisés Caicedo",
    partidosJugados: 70,
    sede: "Estadio Rodrigo Paz Delgado - Quito",
    resistencia: 100,
    lesionado: false
};

console.log("Información del jugador - Estadísticas de Fútbol (Mateo Mancheno):");
console.log("Nombre:", jugador.nombre);
console.log("Partidos jugados:", jugador.partidosJugados);
console.log("Sede:", jugador.sede);
console.log("Resistencia:", jugador.resistencia);
console.log("Lesionado:", jugador.lesionado);

// --- Ejercicio 3 ---
let golesPorJugador = [12, 5, 20, 8, 15];

function calcularTotalGoles(goles) {
    let totalGoles = 0;

    for (let i = 0; i < goles.length; i++) {
        totalGoles += goles[i];
    }

    return totalGoles;
}

let totalGolesPlantilla = calcularTotalGoles(golesPorJugador);

console.log("Goles por jugador:", golesPorJugador);
console.log("Total de goles en la plantilla:", totalGolesPlantilla);