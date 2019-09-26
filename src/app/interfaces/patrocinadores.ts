export interface InterfacePatrocinadores {
    error: boolean;
    resultados: IPatrocinador[];
  }
  
  export interface IPatrocinador {
    id: string;
    patrocinador: string;
    pagina: string;
    descripcion: string;
    logo: string;
  }