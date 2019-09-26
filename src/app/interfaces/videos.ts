export interface InterfaceVideos {
    error: boolean;
    resultados: IVideo[];
  }
  
  export interface IVideo {
    id: string;
    clave: string;
    titulo: string;
    coautores: string;
    autores: string;
    especialidad: string;
    color: string;
    url: string;
  }