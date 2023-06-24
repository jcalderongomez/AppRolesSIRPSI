export interface ICentroApoyo {
    isSuccess:      boolean;
    result:         CentroApoyo[];
    displayMessage: string;
    errorMessage:   null;
}

export interface CentroApoyo {
    centroApoyoId:      number;
    nombre:             string;
    fechaRegistro:      Date;
    fechaActualizacion: Date;
    empresaId:          number;
    empresa:            Empresa;
}

export interface Empresa {
    empresaId:          number;
    nombre:             string;
    nit:                string;
    estado:             boolean;
    fechaRegistro:      Date;
    fechaActualizacion: Date;
    ministerioId:       number;
    ministerio:         null;
    fechaFundacion:     Date;
}
