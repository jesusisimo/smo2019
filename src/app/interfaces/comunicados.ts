export interface InterfaceComunicados {
  error: boolean;
  comunicados: IComunicado[];
}

export interface IComunicado {
  id: string;
  titulo: string;
  url: string;
  icono_ext: string;
  ruta_icono: string;
  activo: string;
}