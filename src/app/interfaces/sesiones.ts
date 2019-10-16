export interface ISesiones {
  error: boolean;
  sesiones: Sesion[];
}

export interface Sesion {
  id: string;
  titulo: string;
  sede: string;
  tema: string;
  ico_ext: string;
  fecha: string;
  url: string;
  activo: string;
  ruta_ico: string;
}