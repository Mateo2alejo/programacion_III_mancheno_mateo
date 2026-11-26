let golesPorTiempo = [30, 50, 70, 40];
let posicion = 2;
let nuevoValor = 100;

if (posicion >= 0 && posicion < golesPorTiempo.length) {
    golesPorTiempo[posicion] = nuevoValor;
} else {
    console.log("Posición no válida");
}

for (let i = 0; i < golesPorTiempo.length; i++) {
    console.log("Posición", i);
    console.log("Métrica:", golesPorTiempo[i]);
}

console.log(golesPorTiempo);

let jugadores = [
    { id: 1, nombre: "Moisés Caicedo", rendimiento: 99, dorsal: 23 },
    { id: 2, nombre: "Piero Hincapié", rendimiento: 99, dorsal: 3 },
    { id: 3, nombre: "Enner Valencia", rendimiento: 99, dorsal: 13 }
];

for (let jugador of jugadores) {
    console.log("ID:", jugador.id);
    console.log("Nombre:", jugador.nombre);
    console.log("Rendimiento:", jugador["rendimiento"]);
    console.log("Dorsal:", jugador["dorsal"]);
}

console.log("Análisis de partidos por jugador - Estadísticas de Fútbol (Mateo Mancheno):");
let partidos = [
    {
        jugador: "Moisés Caicedo",
        pasesClave: [30, 50, 60]
    },
    {
        jugador: "Piero Hincapié",
        pasesClave: [20, 30, 30]
    },
    {
        jugador: "Kendry Páez",
        pasesClave: [90, 80, 70]
    }
];

for (let partido of partidos) {
    let totalPases = 0;
    console.log("Jugador:", partido.jugador);
    for (let pase of partido.pasesClave) {
        console.log("Pases clave registrados:", pase);
        totalPases += pase;
    }
    console.log("Total de pases clave por", partido.jugador, "son:", totalPases);
}

let metricasOriginales = [30, 50, 70, 40];
let metricasDobles = metricasOriginales.map(elemento => {
    return elemento * 2;
});

console.log("Métricas duplicadas:", metricasDobles);

let validos = metricasOriginales.filter(metrica => metrica >= 50);
console.log("Métricas válidas (>= 50):", validos);

let resultado = metricasOriginales.reduce((acumulador, elemento) => {
    return acumulador + elemento;
}, 0);
console.log("Suma total con reduce:", resultado);