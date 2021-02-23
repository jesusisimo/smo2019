export interface InterfaceWebinar {
  error: boolean;
  webinars: IWebinar[];
}

export interface IWebinar {
  id: string;
  titulo: string;
  fecha: string;
  url: string;
  imagen_ext: string;
  ruta_imagen: string;
  icono_ext: string;
  ruta_icono: string;
  activo: string;
}