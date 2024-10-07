import { Estudiante } from "./estudiante";

//Instrucciones:
//Agregar (Create) el estudiante al arreglo de estudiantes, metodo Array en JS permite inertar 1 elemento al arreglo
export const insertarEstudiante = function (
  estudiante: Estudiante,
  arregloEstudiantes: Estudiante[]
) {
  arregloEstudiantes.push(estudiante);
};

//Instrucciones:
//Actualizar (Update) el estudiante que se encuentre ubicado en el indice (posicion) inidicado en el parametro
export const actualizarEstudiante = function (
  indice: number,
  listaEstudiantes: Estudiante[],
  nom: string,
  apellido: string,
  edad: number
) {};

//Instrucciones:
//Eliminar (Delete) un elemento del arreglo de estudiantes que este en el indice indicado
export const eleminarEstudiante = function (
  indice: number,
  listaEstudiantes: Estudiante[]
) {
  delete listaEstudiantes[indice];
};
