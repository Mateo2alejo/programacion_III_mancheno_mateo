const personaje = document.getElementById("personaje");
const cambiar = document.getElementById("cambiar");
const verDimension = document.getElementById("verDimension");
const dimension = document.getElementById("dimension");

cambiar.addEventListener("click", function() {
    if (personaje.getAttribute("src") === "rick.jpeg") {
        personaje.setAttribute("src", "morty.jpeg");
        personaje.setAttribute("title", "Morty");
        personaje.dataset.dimension = "C-137";
        dimension.textContent = personaje.dataset.dimension;
    } else {
        personaje.setAttribute("src", "rick.jpeg");
        personaje.setAttribute("title", "Rick");
        personaje.dataset.dimension = "C-137";
        dimension.textContent = personaje.dataset.dimension;
    }
});

verDimension.addEventListener("click", function() {
    dimension.textContent = personaje.dataset.dimension;
});