export interface IPermiso {
    isSuccess:      boolean;
    result:         Permiso[];
    displayMessage: string;
    errorMessage:   null;
}

export interface Permiso {
    permisoId:          number;
    ver:                boolean;
    editar:             boolean;
    consultar:          boolean;
    eliminar:           boolean;
    estado:             boolean;
    fechaRegistro:      Date;
    fechaActualizacion: Date;
    rolId:              number;
    rol:                null;
    moduloId:           number;
    modulo:             null;
}
