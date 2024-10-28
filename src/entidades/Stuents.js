"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(id, nom, cel, edad) {
        (this.numero_id = id),
            (this.nombre = nom),
            (this.celular = cel),
            (this.edad = edad);
    }
}
exports.Student = Student;
