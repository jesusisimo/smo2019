export interface ICasos {
  error: boolean;
  casos: Caso[];
}

export interface Caso {
  id: string;
  titulo: string;
  descripcion: string;
  arch_ext: string;
  autor: string;
  fecha: string;
  activo: string;
  ruta_arch: string;
}