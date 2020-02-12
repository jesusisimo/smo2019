export interface IComentarios {
  error: boolean;
  comentarios: Comentario[];
}

export interface Comentario {
  nombre: string;
  comentario: string;
  caso_id: string;
  fecha: string;
}