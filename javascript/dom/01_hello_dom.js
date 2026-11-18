console.log(document);
const titulo = document.getElementById('energi');
console.log(titulo);
titulo.textContent = "Laboratorio Interdimensional";

const estado = document.getElementById('estado');
const boton = document.getElementById('botonPortal');

boton.addEventListener('click', function () {
    console.log("Ejecutando click");
    estado.textContent = "Portal Activado";
    console.log(estado.textContent);
    console.log("Texto Cambiado en el elmento estado");
    alert("Proceso de Activacion del Portal Terminado");
});



console.log(document);
const titulos = document.getElementById('titulos');
console.log(titulos);
titulos.textContent = "Laboratorio Interdimensional";

const estados = document.getElementById('estados');
const botons = document.getElementById('botonListo');

botons.addEventListener('click', function () {
    console.log("Ejecutando aventura");
    estados.textContent = "Morty Listo para la Aventura";
    console.log(estados.textContent);
    console.log("Texto Cambiado en el elmento estado");
    alert("Proceso de Morty Listo para la Aventura Terminado");
});



let viajes = 0;
const contador = document.getElementById('contador');
const nuevoViaje = document.getElementById('nuevoViaje');
nuevoViaje.addEventListener('click', function () {
    viajes +=1;
    contador.textContent = viajes
});