export interface IMesa {
  error: boolean;
  mesa: Mesa[];
}

export interface Mesa {
  id: string;
  nombre: string;
  puesto: string;
  img_ext: string;
  activo: string;
  ruta_img: string;
}