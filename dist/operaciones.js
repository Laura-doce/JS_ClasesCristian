"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eleminarEstudiante = exports.actualizarEstudiante = exports.insertarEstudiante = void 0;
//Instrucciones:
//Agregar (Create) el estudiante al arreglo de estudiantes, metodo Array en JS permite inertar 1 elemento al arreglo
const insertarEstudiante = function (estudiante, arregloEstudiantes) {
    arregloEstudiantes.push(estudiante);
};
exports.insertarEstudiante = insertarEstudiante;
//Instrucciones:
//Actualizar (Update) el estudiante que se encuentre ubicado en el indice (posicion) inidicado en el parametro
const actualizarEstudiante = function (indice, listaEstudiantes, nom, apellido, edad) { };
exports.actualizarEstudiante = actualizarEstudiante;
//Instrucciones:
//Eliminar (Delete) un elemento del arreglo de estudiantes que este en el indice indicado
const eleminarEstudiante = function (indice, listaEstudiantes) {
    delete listaEstudiantes[indice];
};
exports.eleminarEstudiante = eleminarEstudiante;
