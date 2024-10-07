"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recorrerEstudiantes = void 0;
//export function recorrerEstudiantes(arregloEstudiantes: Estudiante[]) {
//  arregloEstudiantes.forEach(function (elemento) {
//    console.log(elemento);
//    console.log("-------------------");
//  });
//}
//FUNCION EXPRESION:
//export const recorrerEstudiantes = function (arregloEstudiantes: Estudiante[]) {
//  arregloEstudiantes.forEach(function (elemento) {
//    console.log(elemento);
//    console.log("-------------------");
//  });
//};
//FUNCION FLECHA:
const recorrerEstudiantes = (arregloEstudiantes) => {
    arregloEstudiantes.forEach(function (elemento) {
        console.log(elemento);
        console.log("-------------------");
    });
};
exports.recorrerEstudiantes = recorrerEstudiantes;
