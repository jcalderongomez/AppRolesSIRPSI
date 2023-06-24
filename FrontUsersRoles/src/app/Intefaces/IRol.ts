export interface IRol {
    isSuccess:      boolean;
    result:         Rol[];
    displayMessage: string;
    errorMessage:   null;
}

export interface Rol {
    rolId:              number;
    nombre:             string;
    descripcion:        string;
    fechaRegistro:      Date;
    fechaActualizacion: Date;
}
