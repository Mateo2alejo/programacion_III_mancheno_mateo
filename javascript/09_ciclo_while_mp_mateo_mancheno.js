console.log("Ciclo For - Estadísticas de Fútbol (Mateo Mancheno)");

for (let i = 1; i <= 5; i++) {
    console.log("Iteración número:", i);
}

console.log("Fin del ciclo For");

console.log("Cuenta regresiva inicio del partido con mensaje final");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("¡Pitazo inicial del partido!");
    } else {
        console.log("Faltan " + i + " segundos para el inicio del encuentro");
    }
}

console.log("Nivel de resistencia física");
let resistencia = 50;
for (let i = 0; i <= 100; i += 10) {
    if (resistencia + i > 100) {
        console.log("Nivel de resistencia registrado: " + (resistencia + i) + "%");
    }
}

let pasesPorMinuto = 10;
let totalPases = 0;
for (let minuto = 1; minuto <= 5; minuto++) {
    totalPases += pasesPorMinuto;
    console.log("Minuto " + minuto);
    console.log("totalPases: " + totalPases + " pases completados");
}
console.log("Total de pases: " + totalPases + " pases");

console.log("Promedio de goles en entrenamientos");
let totalGoles = 0;
let jornadas = 7;
for (let jornada = 1; jornada <= jornadas; jornada++) {
    let goles = jornada * 5 + 5;
    totalGoles += goles;
    console.log("Jornada " + jornada + ": " + goles + " remates registrados");
}

console.log("Total de remates registrados: " + totalGoles);
console.log("Promedio de remates por jornada: " + (totalGoles / jornadas).toFixed(2));

console.log("Jornadas de alta exigencia");
let regulares = 0;
let exigentes = 0;
for (let fecha = 1; fecha <= 10; fecha++) {
    if (fecha % 2 === 0) {
        console.log("Fecha " + fecha + " es de alta exigencia");
        exigentes++;
    } else {
        console.log("Fecha " + fecha + " es de exigencia regular");
        regulares++;
    }
}
console.log("Total de fechas regulares: " + regulares);
console.log("Total de fechas de alta exigencia: " + exigentes);

console.log("Goles anotados por jornada");
let golesPorJornada = [35, 60, 45, 80, 20, 90, 55];
let totalRemates = 0;
let jornadasExitosas = 0;
for (let i = 0; i < golesPorJornada.length; i++) {
    totalRemates += golesPorJornada[i];
    console.log("Jornada " + (i + 1) + ": " + golesPorJornada[i] + " pases clave");
    if (golesPorJornada[i] >= 50) {
        jornadasExitosas++;
    }
}
console.log("Total de pases clave: " + totalRemates);
console.log("Número de jornadas exitosas: " + jornadasExitosas);

console.log("Recorrer jugadores con for...of");
const jugadores = ["Moisés Caicedo", "Piero Hincapié", "Enner Valencia", "Kendry Páez", "Gonzalo Plata"];
for (let jugador of jugadores) {
    console.log("Jugador: " + jugador);
}

let equipo = {
    nombre: "Selección de Ecuador",
    posesion: 64,
    tirosArco: 14,
    titulares: ["Moisés Caicedo", "Piero Hincapié", "Enner Valencia"]
};
console.log("Recorrer propiedades de un objeto con for...in");
for (let propiedad in equipo) {
    console.log(propiedad + ": " + equipo[propiedad]);
    if (propiedad === "titulares") {
        console.log("Jugadores titulares:");
        for (let titular of equipo[propiedad]) {
            console.log("- " + titular);
        }
    }
}
for (let jugadorTitular of equipo.titulares) {
    console.log("Titular: " + jugadorTitular);
}

let partidos = [
    { nombre: "Partido 1 - LigaPro", pasesCompletados: 90, meta: 100, jugador: "Moisés Caicedo" },
    { nombre: "Partido 2 - Libertadores", pasesCompletados: 80, meta: 100, jugador: "Piero Hincapié" },
    { nombre: "Partido 3 - Eliminatorias", pasesCompletados: 95, meta: 100, jugador: "Enner Valencia" }
];

let partidosExitosos = 0;
for (let partido of partidos) {
    let porcentaje = (partido.pasesCompletados / partido.meta) * 100;
    console.log(partido.nombre + " analizado con " + partido.jugador + " con un " + porcentaje.toFixed(2) + "%");
    if (porcentaje >= 90) {
        partidosExitosos++;
    } else {
        console.log(partido.nombre + " no alcanzó el umbral del 90% de efectividad.");
    }
}
console.log("Número de partidos exitosos: " + partidosExitosos);