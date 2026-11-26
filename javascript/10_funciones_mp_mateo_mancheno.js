// --- 1. Definición de funciones - Estadísticas de Fútbol (Mateo Mancheno) ---

function recargarResistencia(energiaActual, recarga) {
    let energiaTotal = energiaActual + recarga;
    if (energiaTotal > 100) {
        energiaTotal = 100;
    }
    console.log("Resistencia del jugador actualizada. Nivel físico:", energiaTotal);
    return energiaTotal;
}

function calcularDescuentoEntrada(precio, descuento) {
    let precioFinal = precio - (precio * (descuento / 100));
    return precioFinal;
}

// --- Ejercicio 2 ---

console.log("--- PRUEBA DE RECARGA DE RESISTENCIA ---");
let resistenciaJugador = 50;
resistenciaJugador = recargarResistencia(resistenciaJugador, 30);
resistenciaJugador = recargarResistencia(resistenciaJugador, 80);

console.log("\n--- PRUEBA DE DESCUENTOS EN ENTRADAS ---");
let precioOriginal = 100;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuentoEntrada(precioOriginal, porcentajeDescuento);
console.log("Precio original:", precioOriginal, "| Precio con descuento:", precioConDescuento);

let golesPorPartido = [4, 7, 2, 9, 5];

function calcularTotalGoles(goles) {
    let total = 0;
    for (let i = 0; i < goles.length; i++) {
        total = total + goles[i];
    }
    return total;
}

let totalGolesAnotados = calcularTotalGoles(golesPorPartido);

console.log("Goles por partido: ", golesPorPartido);
console.log("Total de goles anotados: ", totalGolesAnotados);

// --- Ejercicio 3 ---

let pasesCompletadosPartidos = [40, 65, 80, 30, 50, 55, 95];

function contarPartidosExitosos(pases) {
    let contadorExitosos = 0;
    for (let i = 0; i < pases.length; i++) {
        if (pases[i] > 50) {
            contadorExitosos++;
        }
    }
    return contadorExitosos;
}

let totalPartidosExitosos = contarPartidosExitosos(pasesCompletadosPartidos);

console.log("Pases clave por partido:", pasesCompletadosPartidos);
console.log("Cantidad de partidos exitosos (> 50):", totalPartidosExitosos);