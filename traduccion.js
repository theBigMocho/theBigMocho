const aire = [
    "atmosfera",
    "dispersa",
    "propaga",
    "emana",
    "azufre",
    "atmosfera",
    "calentamiento",
    "corriente",
    "efecto",
    "eter",
    "gases",
    "oxigeno",
    "soplo",
    "viento",
    "riesgo",
    "fosil",
    "dioxido de carbono",
    "da(o",
    "contaminantes",
    "brisa",
    "ambiente",
    "aireo"
];
const fer = [
    "alveolos",
    "exhala",
    "aire",
    "dispersa",
    "propaga",
    "emana",
    "ingresa",
    "inhala",
    "bronquios",
    "bronquiolos",
    "alveolos",
    "inspira",
    "espira",
    "contrae",
    "jadea",
    "aliento",
    "resopla",
    "residuos",
    "pudre",
    "obstruye",
    "inflama",
    "halito",
    "fluvial",
    "drena",
    "descompone",
    "aspira",
    "asma",
    "hidrata",
    "deshidrata",
    "oxigeno",
    "dioxido de carbono"
];
const papa = [
    "subterranea",
    "transpira",
    "respira",
    "enraiza",
    "subterranea",
    "hidrata",
    "deshidrata",
    "exhala",
    "inhala",
    "tierra",
    "arida",
    "degrada",
    "extingue",
    "erosiona",
    "agota",
    "altera",
    "absorbe",
    "expulsa",
    "fertil",
    "energiza",
    "nutre",
    "reserva",
    "germina",
    "incrementa",
    "relaja",
    "dispersa",
    "propaga",
    "emana",
    "cicatriza",
    "vegeta"
];

let ContadorLectura = 0; // se incrementa con cada despliegue completo de oración

let ContadorAire = 0;
let MedidaAire = 0;
let BaseAire = 0;
let DeltaAire = 30;
function rangoMedicionAire(medida) {
    if (ContadorLectura == 0) {
        MedidaAire = medida;
    };
    if (ContadorLectura == 20) {
        let rango = medida - MedidaAire;
        DeltaAire = Math.abs(rango);
        DeltaAire = DeltaAire / 30;
        if (rango > 0) {
            BaseAire = MedidaAire + 12 * DeltaAire;
        } else {
            BaseAire = medida + 12 * DeltaAire;
        };
    };

    if (BaseAire + 0 * DeltaAire < medida && medida <= BaseAire + 1 * DeltaAire) { return 1; };
    if (BaseAire + 1 * DeltaAire < medida && medida <= BaseAire + 2 * DeltaAire) { return 2; };
    if (BaseAire + 2 * DeltaAire < medida && medida <= BaseAire + 3 * DeltaAire) { return 3; };
    if (BaseAire + 3 * DeltaAire < medida && medida <= BaseAire + 4 * DeltaAire) { return 4; };
    if (BaseAire + 4 * DeltaAire < medida && medida <= BaseAire + 5 * DeltaAire) { return 5; };
    if (BaseAire + 5 * DeltaAire < medida && medida <= BaseAire + 6 * DeltaAire) { return 6; };
    if (BaseAire + 6 * DeltaAire < medida && medida <= BaseAire + 7 * DeltaAire) { return 7; };
    if (BaseAire + 7 * DeltaAire < medida && medida <= BaseAire + 8 * DeltaAire) { return 8; };
    if (BaseAire + 8 * DeltaAire < medida && medida <= BaseAire + 9 * DeltaAire) { return 9; };
    if (BaseAire + 9 * DeltaAire < medida && medida <= BaseAire + 10 * DeltaAire) { return 10; };
    if (BaseAire + 10 * DeltaAire < medida && medida <= BaseAire + 11 * DeltaAire) { return 11; };
    if (BaseAire + 11 * DeltaAire < medida && medida <= BaseAire + 12 * DeltaAire) { return 12; };
    if (BaseAire + 12 * DeltaAire < medida && medida <= BaseAire + 13 * DeltaAire) { return 13; };
    if (BaseAire + 13 * DeltaAire < medida && medida <= BaseAire + 14 * DeltaAire) { return 14; };
    if (BaseAire + 14 * DeltaAire < medida && medida <= BaseAire + 15 * DeltaAire) { return 15; };
    if (BaseAire + 15 * DeltaAire < medida && medida <= BaseAire + 16 * DeltaAire) { return 16; };
    if (BaseAire + 16 * DeltaAire < medida && medida <= BaseAire + 17 * DeltaAire) { return 17; };
    if (BaseAire + 17 * DeltaAire < medida && medida <= BaseAire + 18 * DeltaAire) { return 18; };
    if (BaseAire + 18 * DeltaAire < medida && medida <= BaseAire + 19 * DeltaAire) { return 19; };
    if (BaseAire + 19 * DeltaAire < medida && medida <= BaseAire + 20 * DeltaAire) { return 20; };
    if (BaseAire + 20 * DeltaAire < medida && medida <= BaseAire + 21 * DeltaAire) { return 21; };

    return 21;

}


let ContadorFer = 0;
let MedidaFer = 0;
let BaseFer = 0;
let DeltaFer = 30;

function rangoMedicionFer(medida) {

    if (ContadorLectura == 0) {
        MedidaFer = medida;
    };
    if (ContadorLectura == 20) {
        let rango = medida - MedidaFer;
        DeltaFer = Math.abs(rango);
        DeltaFer = DeltaFer / 30;
        if (rango > 0) {
            BaseFer = MedidaFer + 12 * DeltaFer;
        } else {
            BaseFer = medida + 12 * DeltaFer;
        };
    };

    if (BaseFer + 0 * DeltaFer < medida && medida <= BaseFer + 1 * DeltaFer) { return 1; };
    if (BaseFer + 1 * DeltaFer < medida && medida <= BaseFer + 2 * DeltaFer) { return 2; };
    if (BaseFer + 2 * DeltaFer < medida && medida <= BaseFer + 3 * DeltaFer) { return 3; };
    if (BaseFer + 3 * DeltaFer < medida && medida <= BaseFer + 4 * DeltaFer) { return 4; };
    if (BaseFer + 4 * DeltaFer < medida && medida <= BaseFer + 5 * DeltaFer) { return 5; };
    if (BaseFer + 5 * DeltaFer < medida && medida <= BaseFer + 6 * DeltaFer) { return 6; };
    if (BaseFer + 6 * DeltaFer < medida && medida <= BaseFer + 7 * DeltaFer) { return 7; };
    if (BaseFer + 7 * DeltaFer < medida && medida <= BaseFer + 8 * DeltaFer) { return 8; };
    if (BaseFer + 8 * DeltaFer < medida && medida <= BaseFer + 9 * DeltaFer) { return 9; };
    if (BaseFer + 9 * DeltaFer < medida && medida <= BaseFer + 10 * DeltaFer) { return 10; };
    if (BaseFer + 10 * DeltaFer < medida && medida <= BaseFer + 11 * DeltaFer) { return 11; };
    if (BaseFer + 11 * DeltaFer < medida && medida <= BaseFer + 12 * DeltaFer) { return 12; };
    if (BaseFer + 12 * DeltaFer < medida && medida <= BaseFer + 13 * DeltaFer) { return 13; };
    if (BaseFer + 13 * DeltaFer < medida && medida <= BaseFer + 14 * DeltaFer) { return 14; };
    if (BaseFer + 14 * DeltaFer < medida && medida <= BaseFer + 15 * DeltaFer) { return 15; };
    if (BaseFer + 15 * DeltaFer < medida && medida <= BaseFer + 16 * DeltaFer) { return 16; };
    if (BaseFer + 16 * DeltaFer < medida && medida <= BaseFer + 17 * DeltaFer) { return 17; };
    if (BaseFer + 17 * DeltaFer < medida && medida <= BaseFer + 18 * DeltaFer) { return 18; };
    if (BaseFer + 18 * DeltaFer < medida && medida <= BaseFer + 19 * DeltaFer) { return 19; };
    if (BaseFer + 19 * DeltaFer < medida && medida <= BaseFer + 20 * DeltaFer) { return 20; };
    if (BaseFer + 20 * DeltaFer < medida && medida <= BaseFer + 21 * DeltaFer) { return 21; };
    if (BaseFer + 21 * DeltaFer < medida && medida <= BaseFer + 22 * DeltaFer) { return 22; };
    if (BaseFer + 22 * DeltaFer < medida && medida <= BaseFer + 23 * DeltaFer) { return 23; };
    if (BaseFer + 23 * DeltaFer < medida && medida <= BaseFer + 24 * DeltaFer) { return 24; };
    if (BaseFer + 24 * DeltaFer < medida && medida <= BaseFer + 25 * DeltaFer) { return 25; };
    if (BaseFer + 25 * DeltaFer < medida && medida <= BaseFer + 26 * DeltaFer) { return 26; };
    if (BaseFer + 26 * DeltaFer < medida && medida <= BaseFer + 27 * DeltaFer) { return 27; };
    if (BaseFer + 27 * DeltaFer < medida && medida <= BaseFer + 28 * DeltaFer) { return 28; };
    if (BaseFer + 28 * DeltaFer < medida && medida <= BaseFer + 29 * DeltaFer) { return 29; };
    if (BaseFer + 29 * DeltaFer < medida && medida <= BaseFer + 30 * DeltaFer) { return 30; };


    return 30;


}

let ContadorPapa = 0;
let MedidaPapa = 0;
let BasePapa = 0;
let DeltaPapa = 30;

function rangoMedicionPapa(medida) {
    if (ContadorLectura == 0) {
        MedidaPapa = medida;
    };
    if (ContadorLectura == 20) {
        let rango = medida - MedidaPapa;
        DeltaPapa = Math.abs(rango);
        DeltaPapa = DeltaPapa / 29;
        if (rango > 0) {
            BasePapa = MedidaPapa + 12 * DeltaPapa;
        } else {
            BasePapa = medida + 12 * DeltaPapa;
        };
    };


    if (BasePapa + 0 * DeltaPapa < medida && medida <= BasePapa + 1 * DeltaPapa) { return 1; };
    if (BasePapa + 1 * DeltaPapa < medida && medida <= BasePapa + 2 * DeltaPapa) { return 2; };
    if (BasePapa + 2 * DeltaPapa < medida && medida <= BasePapa + 3 * DeltaPapa) { return 3; };
    if (BasePapa + 3 * DeltaPapa < medida && medida <= BasePapa + 4 * DeltaPapa) { return 4; };
    if (BasePapa + 4 * DeltaPapa < medida && medida <= BasePapa + 5 * DeltaPapa) { return 5; };
    if (BasePapa + 5 * DeltaPapa < medida && medida <= BasePapa + 6 * DeltaPapa) { return 6; };
    if (BasePapa + 6 * DeltaPapa < medida && medida <= BasePapa + 7 * DeltaPapa) { return 7; };
    if (BasePapa + 7 * DeltaPapa < medida && medida <= BasePapa + 8 * DeltaPapa) { return 8; };
    if (BasePapa + 8 * DeltaPapa < medida && medida <= BasePapa + 9 * DeltaPapa) { return 9; };
    if (BasePapa + 9 * DeltaPapa < medida && medida <= BasePapa + 10 * DeltaPapa) { return 10; };
    if (BasePapa + 10 * DeltaPapa < medida && medida <= BasePapa + 11 * DeltaPapa) { return 11; };
    if (BasePapa + 11 * DeltaPapa < medida && medida <= BasePapa + 12 * DeltaPapa) { return 12; };
    if (BasePapa + 12 * DeltaPapa < medida && medida <= BasePapa + 13 * DeltaPapa) { return 13; };
    if (BasePapa + 13 * DeltaPapa < medida && medida <= BasePapa + 14 * DeltaPapa) { return 14; };
    if (BasePapa + 14 * DeltaPapa < medida && medida <= BasePapa + 15 * DeltaPapa) { return 15; };
    if (BasePapa + 15 * DeltaPapa < medida && medida <= BasePapa + 16 * DeltaPapa) { return 16; };
    if (BasePapa + 16 * DeltaPapa < medida && medida <= BasePapa + 17 * DeltaPapa) { return 17; };
    if (BasePapa + 17 * DeltaPapa < medida && medida <= BasePapa + 18 * DeltaPapa) { return 18; };
    if (BasePapa + 18 * DeltaPapa < medida && medida <= BasePapa + 19 * DeltaPapa) { return 19; };
    if (BasePapa + 19 * DeltaPapa < medida && medida <= BasePapa + 20 * DeltaPapa) { return 20; };
    if (BasePapa + 20 * DeltaPapa < medida && medida <= BasePapa + 21 * DeltaPapa) { return 21; };
    if (BasePapa + 21 * DeltaPapa < medida && medida <= BasePapa + 22 * DeltaPapa) { return 22; };
    if (BasePapa + 22 * DeltaPapa < medida && medida <= BasePapa + 23 * DeltaPapa) { return 23; };
    if (BasePapa + 23 * DeltaPapa < medida && medida <= BasePapa + 24 * DeltaPapa) { return 24; };
    if (BasePapa + 24 * DeltaPapa < medida && medida <= BasePapa + 25 * DeltaPapa) { return 25; };
    if (BasePapa + 25 * DeltaPapa < medida && medida <= BasePapa + 26 * DeltaPapa) { return 26; };
    if (BasePapa + 26 * DeltaPapa < medida && medida <= BasePapa + 27 * DeltaPapa) { return 27; };
    if (BasePapa + 27 * DeltaPapa < medida && medida <= BasePapa + 28 * DeltaPapa) { return 28; };
    if (BasePapa + 28 * DeltaPapa < medida && medida <= BasePapa + 29 * DeltaPapa) { return 29; };

    return 29;

}  