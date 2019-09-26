export interface InterfaceCarteles {
  error: boolean;
  resultados: ICartel[];
}

export interface ICartel {
  id: string;
  clave: string;
  titulo: string;
  coautores: string;
  autores: string;
  especialidad: string;
  color: string;
  url: string;
}