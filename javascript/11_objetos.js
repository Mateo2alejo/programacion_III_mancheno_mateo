let nombnre = "Rick Sanchez";
let edad = 70;
let planeta ="Tierra C-137";
let energia = 100;
let averiada = false;


let nave = {
    nombre: "Nave de Rick",
    edad: 70,
    planeta: "Tierra C-137",
    energia: 100,
    averiada: false
};
console.log("información de la nave de Rick:");
console.log("Nombre:", nave.nombre);
console.log("Edad:", nave.edad);
console.log("Planeta:", nave.planeta);
console.log("Energía:", nave.energia);
console.log("Averiada:", nave.averiada);


//ejeercicio 3//
let unidadesProductos = [12, 5, 20, 8, 15];

function calcularTotalUnidades(unidades) {
    let totalUnidades = 0;
    
    for (let i = 0; i < unidades.length; i++) {
        totalUnidades += unidades[i]; 
    }
    
    return totalUnidades;
}

let stockTotal = calcularTotalUnidades(unidadesProductos);

console.log("Unidades por producto:", unidadesProductos);
console.log("Total de unidades en el laboratorio:", stockTotal);