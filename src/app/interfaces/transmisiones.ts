export interface ITransmisiones {
  error: boolean;
  transmision: Transmision[];
  url: string;
}

export interface Transmision {
  id: string;
  titulo: string;
  codigo_video: string;
  activo: string;
  online: string;
  fecha: string;
}