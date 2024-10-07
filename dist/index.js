"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recorrerEstudiantes_1 = require("./recorrerEstudiantes");
const operaciones_1 = require("./operaciones");
//Definir objetos(literal) estudiantes
const estudiante1 = {
    nom: "Laura",
    apellido: "Romero",
    edad: 19,
    tipoIdent: "CC",
    numIdent: 104123162,
};
const estudiante2 = {
    nom: "Caro",
    apellido: "Bautista",
    edad: 18,
    tipoIdent: "CC",
    numIdent: 1014198765,
};
const estudiante3 = {
    nom: "Diana",
    apellido: "Garzon",
    tipoIdent: "CC",
    numIdent: 1015826245,
};
//ARREGLOS
const listaEstudiantes = [estudiante1, estudiante2, estudiante3];
(0, recorrerEstudiantes_1.recorrerEstudiantes)(listaEstudiantes);
//OPERACIONES CON ARREGLOS:
console.log("-----------------");
(0, operaciones_1.insertarEstudiante)(estudiante1, listaEstudiantes);
console.log(listaEstudiantes);
console.log("-----------------");
//actualizarEstudiante(3, listaEstudiantes, "Laura", " ");
//console.log(listaEstudiantes);
(0, operaciones_1.eleminarEstudiante)(1, listaEstudiantes);
console.log(listaEstudiantes);
