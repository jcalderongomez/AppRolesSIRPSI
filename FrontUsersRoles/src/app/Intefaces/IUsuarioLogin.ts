export interface IUsuarioLogin {
    isSuccess:      boolean;
    result:         UsuarioLogin[];
    displayMessage: string;
    errorMessage:   null;
}

export interface UsuarioLogin {
    cedula:             string;
    userName:           string;
    password:       string;
}
