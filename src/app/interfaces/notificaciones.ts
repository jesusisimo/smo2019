  export interface INotificaciones {
    error: boolean;
    novistos: number;
    notificaciones: INotificacion[];
  }
  
  export interface INotificacion {
    id: string;
    titulo: string;
    time: string;
    mensaje: string;
    visto: number;
  }