import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { LoginForm, LoginStyles, Session, Triangle } from "./styles/LoginCss";
import { Title, Subtitle, To, Input } from "./styles/GeneralStyles";
import { helpHttp } from "../helpers/helpHTTP";
import Loader from "./Loader";

const initialValue = {
    usr_v_correo: "",
    usr_v_pass: ""
}

const LoginUsuario = ({ menuUser, handleChange }) => {

    const [dataUser, setDataUser] = useState(initialValue)
    const [error, setError] = useState(null);
    const [login, setLogin] = useState(true)
    const [loader, setLoader] = useState(null);
    const [data, setData] = useState(null);
    const request = helpHttp();

    let history = useHistory();
    let { pathname } = useLocation();
    let url = `http://localhost:4000/usuarios/1`

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!dataUser.usr_v_correo || !dataUser.usr_v_pass) {
            alert("Datos incompletos, llenalos correctamente");
            return;
        }

        const getData = async () => {
            setLoader(true);
            setLogin(false)
            request.get(url)
                .then(res => {
                    if (!res.err) {
                        let data = JSON.stringify(res);
                        window.localStorage.setItem("data", data);
                        handleChange();
                        setError(false);
                    } else {
                        setError(res);
                    }
                })

        }

        getData();

    }

    const handleChangeForm = (e) => {
        setDataUser({
            ...dataUser,
            [e.target.name]: e.target.value
        })
    }

    const toRegister = () => {
        handleChange();
        history.push({ pathname: `${pathname.split('/')[1]}/register` });
    }

    const closeSession = () => {
        window.localStorage.removeItem("data")
        setLogin(true);
        setData(null)
        setError(null)
    }

    const stopAction = (e) => e.stopPropagation();

    useEffect(() => {

        if (!error) {
            let data = window.localStorage.getItem("data");

            if (data) {
                setLoader(false);
                setData(JSON.parse(data));
                handleChange();
            }
        }

    }, [error])

    useEffect(() => {
        if (window.localStorage.getItem("data")) {
            console.log("Entra")
            setLogin(false)
            
        }
    }, [])

    return (
        <LoginStyles onClick={handleChange} menuUser={menuUser}>
            {loader && <Loader />}
            {login &&
                <LoginForm onClick={stopAction}>
                    <Triangle style={{
                        top: "-6%"
                    }}>

                    </Triangle>
                    <div className="text">
                        <Title>Iniciar sesion</Title>
                        <Subtitle>Entra con tu correo registrado</Subtitle>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="usr_v_correo">Correo:</label>
                        <Input
                            type="text"
                            name="usr_v_correo"
                            value={dataUser.usr_v_correo}
                            onChange={handleChangeForm}
                            placeholder="Ingrese su correo"
                        />
                        <label htmlFor="usr_v_pass">Ingrese su contraseña:</label>
                        <Input
                            type="password"
                            name="usr_v_pass"
                            value={dataUser.usr_v_pass}
                            onChange={handleChangeForm}
                            placeholder="Ingrese su contraseña"
                        />
                        <button>Ingresar</button>
                    </form>
                    <To onClick={toRegister}>O registrate presionando aqui</To>
                </LoginForm>
            }
            {data &&
                <Session onClick={stopAction}>
                    <Triangle></Triangle>
                    <Title>Usuario: {data.nombre}</Title>
                    <Subtitle onClick={closeSession}>Cerrar sesion</Subtitle>
                </Session>
            }
        </LoginStyles>
    )
}

export default LoginUsuario