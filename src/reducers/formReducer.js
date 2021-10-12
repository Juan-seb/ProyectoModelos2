import { TYPES } from "../actions/formActions";

export const formInitialState = {
    initialValueRegister: {
        cli_i_cedula: "",
        cli_v_nombre: "",
        usr_v_correo: "",
        usr_v_pass: "",
        confirm_pass: "",
        cli_d_fecha_nacimiento: "",
        cli_fk_ciu_i: "",
    },
    initialError: {
        error_nombre: null,
        error_cedula: null,
        error_correo: null,
        error_pass: null,
        error_confirm: null,
        error_fecha: null,
    }
}

export function formReducer(state, action) {

    const event = action.payload;

    const returnObj = (errorProperty) => {
        return {
            initialValueRegister: {
                ...state.initialValueRegister,
                [event.target.name]: event.target.value
            },
            initialError: {
                ...state.initialError,
                [errorProperty]: ""
            }
        }
    }

    const returnError = (errorProperty) => {

        let msgError = "";


        if (errorProperty === "error_nombre") {
            msgError = "Campo vacio ó contiene numeros."
        }

        if (errorProperty === "error_cedula") {
            msgError = "Cedula invalida ó campo vacio."
        }

        if (errorProperty === "error_correo") {
            msgError = "Correo invalido ó campo vacio."
        }

        if (errorProperty === "error_pass") {
            msgError = `La contraseña debe contener:\nAl menos un digito (numero).\nEntre 8 y 16 caracteres.\nAl menos una minuscula.\nAl menos una mayuscula.`
        }

        if (errorProperty === "error_confirm") {
            msgError = "Las contraseñas no coinciden"
        }

        if (errorProperty === "error_fecha") {
            msgError = "La fecha no es valida"
        }

        if (errorProperty === "error_ciudad") {
            msgError = "La ciudad no es valida ó campo vacio"
        }


        return {
            initialValueRegister: {
                ...state.initialValueRegister,
                [event.target.name]: event.target.value
            },
            initialError: {
                ...state.initialError,
                [errorProperty]: msgError
            }
        }
    }

    switch (action.type) {
        case TYPES.VALIDATE_NAME: {
            /*Regular expresion for the names */
            let regexName = /^[a-z ,.'-]+$/i;
            const event = action.payload;

            /*Use .exec to validate the name input*/
            return regexName.exec(event.target.value) ? returnObj("error_nombre") : returnError("error_nombre")
        }
        case TYPES.VALIDATE_CEDULA: {
            /*Regular expresion for the colombian identity number */
            let regexCedula = /^((\d{8})|(\d{10})|(\d{11})|(\d{6}-\d{5}))+$/i
            const event = action.payload;

            /*Use .exec to validate the cedula input */
            return regexCedula.exec(event.target.value) ? returnObj("error_cedula") : returnError("error_cedula")
        }
        case TYPES.VALIDATE_CORREO: {
            /*Regular expresion for validate the email */
            let regexEmail = /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
            const event = action.payload;

            /*Use .exec to validate the email input */
            return regexEmail.exec(event.target.value) ? returnObj("error_correo") : returnError("error_correo")
        }
        case TYPES.VALIDATE_PASS: {
            /*Regular expresion to validate the password */
            let regexPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
            const event = action.payload;

            /** */
            return regexPass.exec(event.target.value) ? returnObj("error_pass") : returnError("error_pass");
        }
        case TYPES.CONFIRM_PASS: {

            /*Confirm the password */
            let password = state.initialValueRegister.usr_v_pass;
            const event = action.payload;

            return event.target.value === password ? returnObj("error_confirm") : returnError("error_confirm");
        }
        case TYPES.VALIDATE_FECHA: {

            const event = action.payload;
            let actualDate = new Date();
            let date = new Date(event.target.value);
            let miniumDays = 365 * 18;

            let differenceBetweenDate = Math.abs(actualDate - date);
            let days = differenceBetweenDate / (1000 * 3600 * 24);

            return days >= miniumDays ? returnObj("error_fecha") : returnError("error_fecha")
        }
        case TYPES.VALIDATE_CIUDAD: {
            const event = action.payload;

            return {
                ...state,
                initialValueRegister: {
                    ...state.initialValueRegister,
                    [event.target.name]: event.target.value
                }
            }
        }
        default:
            break;
    }
}