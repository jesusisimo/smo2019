interface InterfaceBuscador {
  tipos: ITipo[];
  tipo_actual:string;
}

interface ITipo {
  tipo: string;
  nombre: string;
  resultados: IResultado[][];
}

interface IResultado {
  id: string;
  principal: string;
  secundario: string;
  clase:string;
  extra:string;
}