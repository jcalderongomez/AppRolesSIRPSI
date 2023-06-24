export interface IUsuarioRol {
    isSuccess:      boolean;
    result:         UsuarioRol[];
    displayMessage: string;
    errorMessage:   null;
}

export interface UsuarioRol {
    usuarioRolId: number;
    usuarioId:    number;
    usuario:      Usuario;
    rolId:        number;
    rol:          Rol;
}

export interface Rol {
    rolId:              number;
    nombre:             string;
    descripcion:        string;
    fechaRegistro:      Date;
    fechaActualizacion: Date;
}

export interface Usuario {
    usuarioId:          number;
    nombre:             string;
    cedula:             string;
    email:              string;
    userName:           string;
    passwordHash:       string;
    passwordSalt:       string;
    fechaRegistro:      Date;
    fechaActualizacion: Date;
    estado:             boolean;
}
