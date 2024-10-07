import { Estudiante } from "./estudiante";
import { recorrerEstudiantes } from "./recorrerEstudiantes";
import {
  insertarEstudiante,
  actualizarEstudiante,
  eleminarEstudiante,
} from "./operaciones";

//Definir objetos(literal) estudiantes

const estudiante1: Estudiante = {
  nom: "Laura",
  apellido: "Romero",
  edad: 19,
  tipoIdent: "CC",
  numIdent: 104123162,
};

const estudiante2: Estudiante = {
  nom: "Caro",
  apellido: "Bautista",
  edad: 18,
  tipoIdent: "CC",
  numIdent: 1014198765,
};

const estudiante3: Estudiante = {
  nom: "Diana",
  apellido: "Garzon",
  tipoIdent: "CC",
  numIdent: 1015826245,
};

//ARREGLOS
const listaEstudiantes: Estudiante[] = [estudiante1, estudiante2, estudiante3];

recorrerEstudiantes(listaEstudiantes);

//OPERACIONES CON ARREGLOS:
console.log("-----------------");

insertarEstudiante(estudiante1, listaEstudiantes);
console.log(listaEstudiantes);

console.log("-----------------");

//actualizarEstudiante(3, listaEstudiantes, "Laura", " ");
//console.log(listaEstudiantes);

eleminarEstudiante(1, listaEstudiantes);
console.log(listaEstudiantes);
