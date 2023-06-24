export interface IEmpleado {
    isSuccess:      boolean;
    result:         Empleado[];
    displayMessage: string;
    errorMessage:   null;
}

export interface Empleado{
    empleadoId:    number;
    usuarioId:     number;
    usuario:       Usuario;
    centroApoyoId: number;
    centroApoyo:   CentroApoyo;
}

export interface CentroApoyo {
    centroApoyoId:      number;
    nombre:             string;
    fechaRegistro:      Date;
    fechaActualizacion: Date;
    empresaId:          number;
    empresa:            null;
}

export interface Usuario {
    usuarioId:          number;
    nombre:             string;
    cedula:             string;
    email:              string;
    userName:           string;
    password:           string;
    fechaRegistro:      Date;
    fechaActualizacion: Date;
    estado:             boolean;
}
