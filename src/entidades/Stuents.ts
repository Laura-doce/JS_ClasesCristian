export class Student {
  numero_id: number;
  nombre: string;
  celular: number;
  edad: number;

  constructor(id: number, nom: string, cel: number, edad: number) {
    (this.numero_id = id),
      (this.nombre = nom),
      (this.celular = cel),
      (this.edad = edad);
  }
}
