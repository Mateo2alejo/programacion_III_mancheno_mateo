const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Mensaje desde otro Universo";
saludo.innerHtml = "<h1>Hello con innerHtml</h1>";

const ficha = document.getElementById("ficha");
saludo.innerHtml = `
  <h1>Rick Sanchez</h2>
  <p>Dimensión: C-137</p>
  <p>Especie: Humano</p>
  <p>Dimensión: Vivo</p>
`;