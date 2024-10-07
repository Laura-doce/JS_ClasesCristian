import { Estudiante } from "./estudiante";

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
export const recorrerEstudiantes = (arregloEstudiantes: Estudiante[]) => {
  arregloEstudiantes.forEach(function (elemento) {
    console.log(elemento);
    console.log("-------------------");
  });
};
