const partidosGanados = document.getElementById("partidosGanados");
const puntosPorVictoria = document.getElementById("puntosPorVictoria");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", function() {
    if (partidosGanados.value.trim() === "" || puntosPorVictoria.value.trim() === "") {
        resultado.textContent = "Completa ambos campos";
        return;
    }

    const cantidad = Number(partidosGanados.value);
    const puntosNumber = Number(puntosPorVictoria.value);

    if (!Number.isFinite(cantidad) || !Number.isFinite(puntosNumber)) {
        resultado.textContent = "Ingrese valores válidos";
        return;
    }

    const total = cantidad * puntosNumber;
    resultado.textContent = "Total de puntos acumulados: " + total + " pts";
});