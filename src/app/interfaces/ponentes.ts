interface InterfacePonentes {
  error: boolean;
  profesores: IPonente[];
}

interface IPonente {
  id: string;
  nombre: string;
  curriculum: string;
  email: string;
  emailpublico: string;
  institucion: string;
  puesto: string;
  pais: string;
  pais_id: string;
  estrellas: number;
  votantes: number;
  calificacion: Calificacion;
  foto: string;
  bandera: string;
}

interface Calificacion {
  total?: any;
  votantes: string;
}