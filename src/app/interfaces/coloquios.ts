export interface IColoquios {
  error: boolean;
  coloquios: Coloquio[];
}

export interface Coloquio {
  id: string;
  titulo: string;
  url: string;
  icono_ext: string;
  img_ext: string;
  activo: string;
  ruta_ico: string;
  ruta_img: string;
  fecha: string;
}