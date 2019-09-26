interface InterfaceCongresistas {
  error: boolean;
  resultados: ICongresista[];
}

interface ICongresista {
  id: string;
  nombre: string;
  apellidos: string;
  usuario: string;
  password: string;
  email: string;
  telefono: string;
  institucion: string;
  avatar: string;
  email_c: string;
  institucion_c: string;
  telefono_c: string;
}