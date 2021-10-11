import { helpHttp } from "../../helpers/helpHTTP";
import { useEffect, useState } from "react";
import { Input } from "../styles/GeneralStyles"
import { Text } from "../styles/GeneralStyles"
import { ContainerHours, 
    Hours, 
    Icon, 
    StylesBtnCalendar, 
    StylesCalendar, 
    StylesDate, 
    StylesTheater, 
    TitleTheaters 
} from "../styles/MovieDateStyles";
import Collapse from "@kunukn/react-collapse"
import Calendar from "react-calendar";
import LoginUsuario from "../LoginUsuario"
import 'react-calendar/dist/Calendar.css';
import Loader from "../Loader";

const MovieDate = ({ history, setPhase, useDataToReserve }) => {
    const [date, setDate] = useState(new Date());
    const [data, setData] = useState(null);
    const [objCollapse, setObjCollapse] = useState(null);
    const [dateInput, setDateInput] = useState("")
    const [isOpen, setIsOpen] = useState(false);
    const [loader, setLoader] = useState(true);
    const [openLogin, setOpenLogin] = useState(false);

    useEffect(() => {

        let day = date.getDate();
        let month = date.getMonth();
        let url = `http://localhost:4000/funciones/${day}-${month}`

        const months = {
            Enero: 0,
            Febrero: 1,
            Marzo: 2,
            Abril: 3,
            Mayo: 4,
            Junio: 5,
            Julio: 6,
            Agosto: 7,
            Septiembre: 8,
            Octubre: 9,
            Noviembre: 10,
            Diciembre: 11
        }

        const request = helpHttp();

        const getFunction = async () => {
            setLoader(true);
            setData(null);
            request.get(url)
                .then(res => {

                    const salas = {}

                    if (!res.err) {

                        console.log(res);
                        res.salas.forEach(el => {
                            console.log(el);
                            salas[el.cin_v_nombre.replace(/ /g, "-")] = false;
                        });
                        setObjCollapse(salas);
                        setData(res);
                        setLoader(false);
                    }
                })
        }

        getFunction();

        for (const key in months) {
            if (months[key] === month) {
                setDateInput(`Funciones: ${day} de ${key}`);
                console.log(key);
            }
        }

        setIsOpen(false);

    }, [date]);

    /* useEffect(() => {
        if(window.localStorage.getItem("data")){
            setPhase(1);
        }
    }, [openLogin]) */

    const visibilityCalendar = () => {
        setIsOpen(isOpen ? false : true);
    }

    const openCollapse = (e) => {

        let state = objCollapse[e.target.getAttribute('data-theater')];

        setObjCollapse({
            ...objCollapse,
            [e.target.getAttribute('data-theater')]: state ? false : true
        })

    }

    const convertTime = (time) => {

        const splitTime = time.split(':');

        let hours = splitTime[0];
        let minutos = splitTime[1];
        let AmPm = ""
        let hours12;

        if (hours > 12) {
            AmPm = "p.m"
            hours12 = `${parseInt(hours) - 12}`;
        } else {
            AmPm = "a.m"
            hours12 = hours;
        }

        return `${hours12}:${minutos} ${AmPm}`;
    }

    const setInfo = (e) => {

        if (window.localStorage.getItem("data")) {
            setPhase(1);
        } else {
            setOpenLogin(true);
        }

    }

    const handleChange = () => {
        setOpenLogin(openLogin ? false : true)
    }

    /*All of the green tags are HTML tags except for Calendar and Collapse */
    return (
        <StylesDate>
            <LoginUsuario menuUser={openLogin} handleChange={handleChange} />
            <StylesCalendar>
                <StylesBtnCalendar onClick={visibilityCalendar} />
                <Input
                    className="inputDate"
                    value={dateInput}
                    type="text"
                    disabled
                />
            </StylesCalendar>
            <Collapse isOpen={isOpen} style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem"
            }}>
                <Calendar
                    onChange={setDate}
                    value={date}
                />
            </Collapse>
            {loader && <Loader />}
            {data &&
                data.salas.map((el, index) => (
                    <div key={index}>

                        <StylesTheater onClick={openCollapse} data-theater={el.cin_v_nombre.replace(/ /g, "-")}>
                            <TitleTheaters onClick={openCollapse} data-theater={el.cin_v_nombre.replace(/ /g, "-")}>
                                <b style={{ width: "100%" }} onClick={openCollapse} data-theater={el.cin_v_nombre.replace(/ /g, "-")}>
                                    {el.cin_v_nombre}
                                </b>
                            </TitleTheaters>
                            <Icon  /*HTML element */>
                                <svg onClick={openCollapse} data-theater={el.cin_v_nombre.replace(/ /g, "-")} viewBox="0 0 448 512" className="close">
                                    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                </svg>
                            </Icon>
                        </StylesTheater>
                        <Collapse isOpen={objCollapse[el.cin_v_nombre.replace(/ /g, "-")]}>
                            <Text style={{
                                marginBottom: ".3rem",
                                width: "90%"
                            }}>
                                Funciones:
                            </Text>
                            <ContainerHours>
                                {
                                    el.horarios.map((element, i) => (
                                        <Hours key={i} data-id={el.sal_i_id} onClick={setInfo}>{convertTime(element.hora)}</Hours>
                                    ))
                                }
                            </ContainerHours>
                        </Collapse>
                    </div>
                ))
            }

        </StylesDate>
    )
}

export default MovieDate;