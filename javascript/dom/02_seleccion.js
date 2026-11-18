const energia = document.getElementById("energia");
const dimension = document.getElementById("dimension");
const portal = document.getElementById("portal");

energia.textContent = "Energia de Morty: 100";
dimension.textContent = "Dimension: C-137";
portal.textContent = "Portal: Activado";

const personaje = document.querySelector(".personaje");
personaje.textContent = "Personaje: Morty";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Preparando nave";

const universo = document.querySelector("#universo");
universo.textContent = "Preparando universo ";

const estadoMorty = document
          .querySelector("#morty. estado");
estadoMorty.textContent = "Preparando para viajar ";

const planetas = document
            .querySelectorAll(".planeta");
console.log(planetas);
console.log(planetas.length);
console.log(planetas[0].textContent);
console.log(planetas[1].textContent);
console.log(planetas[2].textContent);
console.log(planetas[3].textContent);
console.log(planetas[4].textContent);
console.log(planetas[5].textContent);

console.log("Con forEach");
planetas.forEach(function(planeta)  {
    console.log(planeta.textContent);
});
console.log("Con for of");
for (let planeta of planetas) {
    console.log(planeta.textContent);
}