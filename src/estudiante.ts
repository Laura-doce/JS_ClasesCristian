export type Estudiante = {
  nom: string;
  apellido: string;
  edad?: number | string; // | Tipo union, se pueden definir varios tipos de datos, el simbolo ? comvierte a el atributo como opcional.
  tipoIdent: string;
  numIdent: number;
};
