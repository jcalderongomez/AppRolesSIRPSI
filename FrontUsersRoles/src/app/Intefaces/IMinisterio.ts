export interface IMinisterio {
    isSuccess:      boolean;
    result:         Ministerio[];
    displayMessage: string;
    errorMessage:   null;
}

export interface Ministerio {
    ministerioId:       number;
    nombre:             string; 
    nit:                string; 
    fechaRegistro:      Date;
    fechaActualizacion: Date;
}
