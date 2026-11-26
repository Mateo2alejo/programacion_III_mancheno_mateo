let jugadores = ["Moisés Caicedo", "Piero Hincapié", "Enner Valencia", "Kendry Páez", "Gonzalo Plata", "Hernán Galíndez"];

console.log("Elemento 0:", jugadores[0]);
console.log("Elemento 2:", jugadores[2]);
console.log("Elemento 5:", jugadores[5]);
console.log("Elemento 4:", jugadores[4]);
console.log("Tamaño del arreglo:", jugadores.length);
console.log("Jugadores:", jugadores);

console.log("Incluir elementos a un arreglo con push:");
jugadores.push("Pervis Estupiñán");
console.log("Jugadores:", jugadores);

console.log("Incluir elementos al inicio con unshift:");
jugadores.unshift("Ángelo Preciado");
console.log("Jugadores:", jugadores);

console.log("Modificar elementos de un arreglo:");
jugadores[0] = "Moisés Caicedo (Capitán)";
console.log("Jugadores:", jugadores);

console.log("Eliminar elementos del arreglo:");
jugadores.pop();
console.log("Jugadores tras pop:", jugadores);

jugadores.shift();
console.log("Jugadores tras shift:", jugadores);

jugadores.splice(1, 1);
console.log("Jugadores tras splice(1, 1):", jugadores);