interface InterfaceActividades {
    error: boolean;
    mensaje: string;
    diaactual: string;
    dias: IDia[];
  }
  
  interface IDia {
    clave_dia: string;
    dia: string;
    actividades: IActividad[];
  }
  
  interface IActividad {
    id: string;
    clave: string;
    actividad: string;
    color: string;
    categoria: string;
    descripcion: string;
    temario: string;
    salon: string;
    profesor: string;
    piso: string;
    horario: string;
    profesores: IProfesor[];
    salones: ISalon[];
  }
  
  interface IProfesor {
    coordinador_id: string;
    profesor_id: string;
    nombre: string;
  }

  interface ISalon {
    salon_id: string;
    salon: string;
  }