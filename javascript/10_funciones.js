// --- 1. Definición de funciones ---

function recargarPistola(energiaActual, recarga) {
    let energiaTotal = energiaActual + recarga;
    if (energiaTotal > 100) {
        energiaTotal = 100;
    }
    console.log("Pistola de portales recargada. Nivel de energía:", energiaTotal);
    return energiaTotal;
}

function calcularDescuento(precio, descuento) {
    let precioFinal = precio - (precio * (descuento / 100));
    return precioFinal;
}


// ejercicio 2 ---

console.log("--- PRUEBA DE RECARGA DE PISTOLA ---");
let energiaPistola = 50;
energiaPistola = recargarPistola(energiaPistola, 30); 
energiaPistola = recargarPistola(energiaPistola, 80); 

console.log("\n--- PRUEBA DE DESCUENTOS INTERDIMENSIONALES ---");
let precioOriginal = 100;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
console.log("Precio original:", precioOriginal, "| Precio con descuento:", precioConDescuento);


let cristalesMisiones = [4, 7, 2, 9, 5];

function calcularTotalCristales(cristales) {
    let total = 0;
    for (let i = 0; i < cristales.length; i++) {
        total = total + cristales[i]; 
    }
    return total;
}

let totalCristalesRecolectados = calcularTotalCristales(cristalesMisiones);

console.log("Cristales por misión: ", cristalesMisiones);
console.log("Total de cristales recolectados: ", totalCristalesRecolectados);


//ejercicio 3//
let cristalesMisionesExitosas = [40,65,80,30,50,55,95];
function contarMisionesExitosas(cristales) {
    let contadorExitosas = 0;
    for (let i = 0; i < cristales.length; i++) {
        if (cristales[i] > 50) {
            contadorExitosas++;
        }
    }
    return contadorExitosas;
}
let totalExitosas = contarMisionesExitosas(cristalesMisionesExitosas);

console.log("Cristales por misión:", cristalesMisionesExitosas);
console.log("Cantidad de misiones exitosas (> 50):", totalExitosas);


