const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Aviso desde el Centro de Estadísticas de Fútbol";
saludo.innerHTML = `<h1>Hola con innerHTML</h1>`;

const ficha = document.getElementById("ficha");
ficha.innerHTML = `
    <h1>Jugador: Moisés Caicedo</h1>
    <p>Competición: LigaPro Serie A</p>
    <p>Posición: Mediocampista</p>
    <p>Estado: Titular (Analista: Mateo Mancheno)</p>
`;

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");

registrar.addEventListener("click", function() {
    console.log("Ejecutando click", nombre.value);
    saludar.textContent = "Hola " + nombre.value;
});