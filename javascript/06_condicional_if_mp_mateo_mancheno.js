import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const prompt = require("prompt-sync")({ sigint: true });

console.log("Condicional If - Estadísticas de Fútbol (Mateo Mancheno)");
let posesion = 50;
console.log("Condicional Simple If");
if (posesion > 0) {
    console.log("Hay posesión registrada para analizar el partido.");
}

console.log("Condicional If-Else Dos Caminos");
let tirosArco = 4;
if (tirosArco > 0) {
    console.log("El equipo generó remates hacia el arco rival.");
} else {
    console.log("El equipo no registró remates hacia el arco rival.");
}

console.log("Condicional If-Else If Múltiples Caminos");
let torneo = prompt("Analista, ¿qué torneo estás evaluando (LigaPro / Libertadores)? ");
if (torneo === "LigaPro") {
    console.log("Estás revisando métricas de la LigaPro Serie A.");
} else if (torneo === "Libertadores") {
    console.log("Estás revisando métricas de la Copa Libertadores.");
} else {
    console.log("Estás revisando otro torneo o competición.");
}

console.log("Condicional If Anidado");
let posesion2 = 50;
let pasesCompletados2 = 400;

if (posesion2 > 0) {
    if (pasesCompletados2 > 0) {
        console.log("Tienes posesión y pases completados para evaluar.");
    } else {
        console.log("Tienes posesión, pero faltan datos de pases.");
    }
}

console.log("Condicional If con Operadores Lógicos");
let posesion3 = 50;
let pasesCompletados3 = 400;

if (posesion3 > 0 && pasesCompletados3 > 0) {
    console.log("Datos completos de posesión y pases disponibles.");
} else {
    console.log("Faltan datos de posesión o pases para el análisis.");
}

console.log("Control de habilitación de jugadores");
let minutosJugados = 400;
let estadoFisico = 50;
let caicedoHabilitado = "no";
let hincapieHabilitado = "no";
let lesionPlantilla = "no";

if (minutosJugados >= 50 &&
    estadoFisico >= 50 &&
    (caicedoHabilitado === "si" ||
        hincapieHabilitado === "si" &&
        lesionPlantilla === "no")) {
    console.log("Plantilla lista para disputar el encuentro.");
} else {
    if (minutosJugados < 50) {
        console.log("No se cumple el mínimo de minutos registrados.");
    }
    if (estadoFisico < 50) {
        console.log("El índice físico está por debajo del umbral.");
    }
    if (caicedoHabilitado === "no") {
        console.log("Moisés Caicedo no figura como habilitado.");
    }
    if (hincapieHabilitado === "no") {
        console.log("Piero Hincapié no figura como habilitado.");
    }
    if (lesionPlantilla === "si") {
        console.log("Existe una lesión activa en la plantilla.");
    }
    if (caicedoHabilitado === "no" && hincapieHabilitado === "no") {
        console.log("Ni Moisés Caicedo ni Piero Hincapié figuran habilitados.");
    }
}

console.log("Evaluación de rendimiento del equipo");
let pasesObjetivos = 200;
let pasesRealizados = 150;
let precisionInicial = 100;
let margenError = 25;
let jugadorLesionado = "si";
let sancionActiva = "no";
let bonificacionRendimiento = 0;

let porcentajeCumplimiento = (pasesRealizados / pasesObjetivos) * 100;
let precisionNeta = precisionInicial - margenError;

console.log("RESULTADOS DEL RENDIMIENTO");
if (porcentajeCumplimiento >= 90) {
    console.log("Rendimiento Óptimo en el Partido");
} else if (porcentajeCumplimiento >= 70 && porcentajeCumplimiento < 90) {
    console.log("Rendimiento Aceptable");
} else if (porcentajeCumplimiento >= 50 && porcentajeCumplimiento < 70) {
    console.log("Rendimiento Regular, se requiere ajustar la táctica");
} else {
    console.log("Rendimiento Bajo, revisar planteamiento");
}

console.log("Evaluación de bonificación por desempeño");
if (porcentajeCumplimiento >= 90 && precisionNeta >= 80) {
    bonificacionRendimiento = 1000;
    console.log("Bonificación otorgada por desempeño excelente.");
} else {
    console.log("No se otorga bonificación por desempeño.");
}

console.log("Estado de disponibilidad para la próxima fecha");
if (jugadorLesionado === "no" && sancionActiva === "no") {
    console.log("Sin bajas ni sanciones para la siguiente jornada.");
} else if (jugadorLesionado === "si" && sancionActiva === "no") {
    console.log("Precaución: hay un jugador lesionado.");
} else if (jugadorLesionado === "no" && sancionActiva === "si") {
    console.log("Precaución: hay una sanción activa.");
} else {
    console.log("Precaución: hay un jugador lesionado y una sanción activa.");
}

console.log("Resumen estadístico");
console.log("Pases Objetivos:", pasesObjetivos);
console.log("Pases Realizados:", pasesRealizados);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Precisión Inicial:", precisionInicial);
console.log("Margen de Error:", margenError);
console.log("Precisión Neta:", precisionNeta);
console.log("Jugador Lesionado:", jugadorLesionado);
console.log("Sanción Activa:", sancionActiva);
console.log("Bonificación Otorgada:", bonificacionRendimiento);