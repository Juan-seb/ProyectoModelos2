import { useReducer, useRef } from "react";
import { formInitialState, formReducer } from "../../reducers/formReducer";
import { Title, Input } from "../styles/GeneralStyles";
import { TYPES } from "../../actions/formActions";
import { helpHttp } from "../../helpers/helpHTTP"
import { StylesRegister, StylesForm, StylesInput, StylesPass, StylesDateCity, StylesButtonSubmit } from "../styles/RegisterStyles"
import ErrorRegister from "../ErrorRegister";

const Register = () => {

    const [state, dispatch] = useReducer(formReducer, formInitialState)
    const { initialValueRegister, initialError } = state;
    const pass = useRef(null);
    const request = helpHttp();

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        const data = Object.assign({}, initialValueRegister);





    }

    const changeAttributte = () => {
        if (pass.current.getAttribute("type") === "password") {
            pass.current.setAttribute("type", "text");
        } else {
            pass.current.setAttribute("type", "password");
        }
    }

    const handleChangeName = (e) => {
        dispatch({ type: TYPES.VALIDATE_NAME, payload: e })
    }

    const handleChangeCedula = (e) => {
        dispatch({ type: TYPES.VALIDATE_CEDULA, payload: e })
    }

    const handleChangeEmail = (e) => {
        dispatch({ type: TYPES.VALIDATE_CORREO, payload: e })
    }

    const handleChangePass = (e) => {
        dispatch({ type: TYPES.VALIDATE_PASS, payload: e })
    }

    const handleConfirmPass = (e) => {
        dispatch({ type: TYPES.CONFIRM_PASS, payload: e })
    }

    const handleData = (e) => {
        dispatch({ type: TYPES.VALIDATE_FECHA, payload: e })
    }

    const handleCity = (e) => {
        dispatch({ type: TYPES.VALIDATE_CIUDAD, payload: e })
    }

    return (
        <StylesRegister>
            <StylesForm onSubmit={handleSubmitRegister}>
                <Title><b>Ingresa tus datos para registrarte</b></Title>
                <StylesInput>
                    <label htmlFor="cli_v_nombre">Nombres y apellidos:</label>
                    <Input
                        type="text"
                        name="cli_v_nombre"
                        onChange={handleChangeName}
                        value={initialValueRegister.cli_v_nombre}
                        placeholder="Ingrese su nombre"
                    />
                </StylesInput>
                {initialError.error_nombre === "" ?
                    <ErrorRegister bgColor="green" message="Correcto" /> :
                    ""
                }
                {initialError.error_nombre ?
                    <ErrorRegister bgColor="red" message={initialError.error_nombre} /> :
                    ""
                }
                <StylesInput>
                    <label htmlFor="cli_i_cedula">Cedula:</label>
                    <Input
                        type="text"
                        name="cli_i_cedula"
                        onChange={handleChangeCedula}
                        value={initialValueRegister.cli_i_cedula}
                        placeholder="Ingrese su cedula"
                    />
                </StylesInput>
                {initialError.error_cedula === "" ?
                    <ErrorRegister bgColor="green" message="Correcto" /> :
                    ""
                }
                {initialError.error_cedula ?
                    <ErrorRegister bgColor="red" message={initialError.error_cedula} /> :
                    ""
                }
                <StylesInput>
                    <label htmlFor="usr_v_correo">Correo:</label>
                    <Input
                        type="text"
                        name="usr_v_correo"
                        onChange={handleChangeEmail}
                        value={initialValueRegister.correo}
                        placeholder="Ingrese su correo"
                    />
                </StylesInput>
                {initialError.error_correo === "" ?
                    <ErrorRegister bgColor="green" message="Correcto" /> :
                    ""
                }
                {initialError.error_correo ?
                    <ErrorRegister bgColor="red" message={initialError.error_correo} /> :
                    ""
                }
                <StylesInput>
                    <label htmlFor="usr_v_pass">Contraseña:</label>
                    <StylesPass>
                        <Input
                            ref={pass}
                            type="password"
                            name="usr_v_pass"
                            onChange={handleChangePass}
                            value={initialValueRegister.usr_v_pass}
                            placeholder="Contraseña"
                        />
                        <div className="see-pass" onClick={changeAttributte}></div>
                    </StylesPass>
                </StylesInput>
                {initialError.error_pass === "" ?
                    <ErrorRegister bgColor="green" message="Correcto" /> :
                    ""
                }
                {initialError.error_pass ?
                    <ErrorRegister bgColor="red" message={initialError.error_pass} /> :
                    ""
                }
                <StylesInput>
                    <label htmlFor="confirm_pass">Confirmar contraseña:</label>
                    <Input
                        type="password"
                        name="confirm_pass"
                        onChange={handleConfirmPass}
                        value={initialValueRegister.confirm_pass}
                        placeholder="Confirme su contraseña"
                    />
                </StylesInput>
                {initialError.error_confirm === "" ?
                    <ErrorRegister bgColor="green" message="Correcto" /> :
                    ""
                }
                {initialError.error_confirm ?
                    <ErrorRegister bgColor="red" message={initialError.error_confirm} /> :
                    ""
                }
                <StylesDateCity>
                    <StylesInput>
                        <label htmlFor="cli_d_fecha_nacimiento">Fecha de nacimiento:</label>
                        <Input
                            type="date"
                            name="cli_d_fecha_nacimiento"
                            onChange={handleData}
                            value={initialValueRegister.cli_d_fecha_nacimiento}
                            max={new Date() - new Date("2003")}
                        />
                    </StylesInput>
                    {initialError.error_fecha === "" ?
                        <ErrorRegister bgColor="green" message="Correcto" /> :
                        ""
                    }
                    {initialError.error_fecha ?
                        <ErrorRegister bgColor="red" message={initialError.error_fecha} /> :
                        ""
                    }
                    <StylesInput>
                        <label htmlFor="ciu_v_nombre">Ciudad:</label>
                        <Input
                            type="text"
                            name="ciu_v_nombre"
                            onChange={handleCity}
                            value={initialValueRegister.ciu_v_nombre}
                            placeholder="Ciudad de residencia"
                        />
                    </StylesInput>
                    {initialError.error_ciudad === "" ?
                        <ErrorRegister bgColor="green" message="Correcto" /> :
                        ""
                    }
                    {initialError.error_ciudad ?
                        <ErrorRegister bgColor="red" message={initialError.error_ciudad} /> :
                        ""
                    }
                </StylesDateCity>
                <StylesButtonSubmit>Enviar</StylesButtonSubmit>
            </StylesForm>
        </StylesRegister>
    )
}

export default Register;