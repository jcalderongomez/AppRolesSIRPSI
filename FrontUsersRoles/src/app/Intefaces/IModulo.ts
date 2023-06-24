export interface IModulo {
    isSuccess:      boolean;
    result:         Modulo[];
    displayMessage: string;
    errorMessage:   null;
}

export interface Modulo{
    moduloId:           number;
    nombre:             string;
    descripcion:        string;
    fechaRegistro:      Date;
    fechaActualizacion: Date;
}
