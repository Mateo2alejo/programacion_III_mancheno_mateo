let jugadores = [
    {
        id: 1,
        nombre: "Moisés Caicedo",
        torneo: "LigaPro Serie A",
        estado: "Titular"
    },
    {
        id: 2,
        nombre: "Piero Hincapié",
        torneo: "Copa Libertadores",
        estado: "Titular"
    },
    {
        id: 3,
        nombre: "Enner Valencia",
        torneo: "Eliminatorias Sudamericanas",
        estado: "Suplente"
    }
];

const tituloFormulario = document.getElementById("tituloFormulario");
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const torneo = document.getElementById("torneo");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");

const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");

let idEditando = null;
let siguienteId = 4;

function mostrarJugadores() {
    contenedor.replaceChildren();
    if (cantidad) {
        cantidad.textContent = `Cantidad: ${jugadores.length}`;
    }

    jugadores.forEach(function (jugador) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        const titulo = document.createElement("h3");
        titulo.textContent = jugador.nombre;

        const parrafoTorneo = document.createElement("p");
        parrafoTorneo.textContent = "Torneo: " + jugador.torneo;

        const parrafoEstado = document.createElement("p");
        parrafoEstado.textContent = "Estado: " + jugador.estado;

        const acciones = document.createElement("div");
        acciones.classList.add("acciones");

        const botonEditar = document.createElement("button");
        botonEditar.type = "button";
        botonEditar.textContent = "Editar";
        botonEditar.classList.add("editar");
        botonEditar.addEventListener("click", function () {
            editarJugador(jugador.id);
        });

        const botonEliminar = document.createElement("button");
        botonEliminar.type = "button";
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");
        botonEliminar.addEventListener("click", function () {
            const confirmarEliminar = confirm(`¿Eliminar a ${jugador.nombre}?`);
            if (!confirmarEliminar) return;

            jugadores = jugadores.filter(function (j) {
                return j.id !== jugador.id;
            });

            if (idEditando === jugador.id) {
                limpiarFormulario();
            }

            mostrarJugadores();
        });

        acciones.append(botonEditar, botonEliminar);
        tarjeta.append(titulo, parrafoTorneo, parrafoEstado, acciones);
        contenedor.appendChild(tarjeta);
    });
}

function editarJugador(id) {
    const jugador = jugadores.find(function (j) {
        return j.id === id;
    });
    if (!jugador) return;

    nombre.value = jugador.nombre;
    torneo.value = jugador.torneo;
    estado.value = jugador.estado;
    idEditando = id;

    tituloFormulario.textContent = "Editando Jugador";
    guardar.textContent = "Guardar cambios";
    cancelar.hidden = false;
    nombre.focus();
}

function limpiarFormulario() {
    formulario.reset();
    idEditando = null;
    tituloFormulario.textContent = "Registro de Jugador";
    guardar.textContent = "Agregar";
    cancelar.hidden = true;
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombreJugador = nombre.value.trim();
    const torneoJugador = torneo.value;
    const estadoJugador = estado.value;

    if (nombreJugador === "") return;

    if (idEditando === null) {
        const nuevoJugador = {
            id: siguienteId,
            nombre: nombreJugador,
            torneo: torneoJugador,
            estado: estadoJugador
        };
        siguienteId++;
        jugadores.push(nuevoJugador);
    } else {
        const jugador = jugadores.find(function (j) {
            return j.id === idEditando;
        });
        if (jugador) {
            jugador.nombre = nombreJugador;
            jugador.torneo = torneoJugador;
            jugador.estado = estadoJugador;
        }
    }

    limpiarFormulario();
    mostrarJugadores();
});

cancelar.addEventListener("click", function () {
    limpiarFormulario();
});

mostrarJugadores();