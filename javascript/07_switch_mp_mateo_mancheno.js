console.log("Switch - Estadísticas de Fútbol (Mateo Mancheno)");

let torneo = 1;

switch (torneo) {
    case 1:
        console.log("Estás analizando la LigaPro Serie A.");
        break;
    case 2:
        console.log("Estás analizando la Copa Libertadores.");
        break;
    case 3:
        console.log("Estás analizando las Eliminatorias Sudamericanas.");
        break;
    default:
        console.log("Estás analizando otra competición o torneo.");
}