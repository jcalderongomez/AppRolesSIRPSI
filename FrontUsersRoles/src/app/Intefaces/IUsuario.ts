export interface IUsuario {
    isSuccess:      boolean;
    result:         Usuario[];
    displayMessage: string;
    errorMessage:   null;
}

export interface Usuario{
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