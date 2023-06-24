export interface IEmpresa {
    isSuccess:      boolean;
    result:         Empresa[];
    displayMessage: string;
    errorMessage:   null;
}

export interface Empresa {
    empresaId:          number;
    nombre:             string;
    nit:                string;
    estado:             boolean;
    fechaRegistro:      Date;
    fechaActualizacion: Date;
    ministerioId:       number;
    ministerio:         Ministerio;
    fechaFundacion:     Date;
}

export interface Ministerio {
    ministerioId:       number;
    nombre:             string;
    nit:                string;
    fechaRegistro:      Date;
    fechaActualizacion: Date;
}
