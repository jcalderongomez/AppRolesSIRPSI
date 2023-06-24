export interface IPsicologo {
    isSuccess:      boolean;
    result:         Psicologo[];
    displayMessage: string;
    errorMessage:   null;
}

export interface Psicologo {
    psicologoId:          number;
    matriculaProfesional: string;
    especializacion:      string;
    usuarioId:            number;
    usuario:              Usuario;
    centroApoyoId:        number;
    centroApoyo:          CentroApoyo;
    fechaRegistro:        Date;
    fechaActualizacion:   Date;
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