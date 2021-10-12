import { useEffect, useState } from "react";
import styled from "styled-components";
import { helpHttp } from "../../helpers/helpHTTP";
import Loader from "../Loader";
import PositionChair from "../PositionChair";

const StylesMovieChairs = styled.div`
    
    padding: .8rem 0;
`;

const SelectChairs = styled.div`
    width: 90vw;
    border: thin solid grey;
    height: ${props => props.height || 500}px;
    overflow: scroll;
    margin: 0 auto;
    padding: .5rem;

    ::-webkit-scrollbar {
        width: 4px;
        height: 6px;
        
    }

    ::-webkit-scrollbar-thumb {
        background: rgb(57, 57, 57);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background: #e1e1e1;
        border-radius: 4px;
    }

    @media (min-width:769px){
        width: 63vw;
    }
    /* width: 35px;
    height: 35px; */

    @media (min-width:1366px){
        width: 900px;
    }
`;

const StylesLoader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StylesCinema = styled.div`
    width: ${props => props.width}px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: .5rem;
`;

const TextScreen = styled.div`

    width: 100%;
    height: fit-content;
    font-size: 1.2rem;
    color: white;
    text-align: center;
    background-color: rgb(66, 66, 66);
    padding: 1rem 0;
    margin-bottom: 1.5rem;
`;

const StylesBtns = styled.div`

    width: 100%px;
    display: flex;
    margin-top: 2rem;
    justify-content: center;
`;

const BtnsReserve = styled.button`
    width: 100px;
    height: 45px;
    background-color: transparent;
    border: thin solid rgb(80,25,80);
    border-radius: 4px;
    margin: 0 1rem;
    padding: 0 .5rem;
    transition: background-color .5s;
    transition: color .5s;
    font-family: 'Segoe UI';
    cursor: pointer;
    font-size: 1rem;

    &:hover{
        background-color: rgb(190,85,190);
        color: white;
    }
`;

const TitleSelect = styled.p`
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-family: 'Segoe UI';
    font-size: 1.2rem;
`;

const MovieChairs = ({ history, setPhase, setDataToReserve, dataToReserve }) => {

    const [loader, setLoader] = useState(true);
    const [chairs, setChairs] = useState(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [numSillasNormal, setNumSillasNormal] = useState(dataToReserve.num_sillas_general);
    const [numSillasPref, setNumSillasPref] = useState(dataToReserve.num_sillas_preferencial);
    const [textReserve, setTextReserve] = useState(false)

    useEffect(() => {
        const request = helpHttp();
        let url = `http://localhost:5000//funcion/salaFuncion/${dataToReserve.fun_i_id}`

        const getFunctions = async () => {

            request.get(url)
                .then(res => {
                    if (!res.err) {
                        console.log(res);
                        setChairs(res);
                        setLoader(false);
                        setWidth((res.data.sillas[0].length * 48) + 180);
                        setHeight((res.data.sillas.length * 48) + 175);
                    }
                })

        }

        getFunctions();

    }, [])

    const createChairs = (x, y) => {

        const copyOfChairs = dataToReserve.res_t_sillas;
        copyOfChairs.push({ x: x, y: y });

        setDataToReserve({
            ...dataToReserve,
            res_t_sillas: copyOfChairs
        })

    }

    const deleteChairs = (x, y) => {

        const copyOfChairs = dataToReserve.res_t_sillas;
        const newChairs = copyOfChairs.filter(el => {
            if ((el.x !== x)) {
                if ((el.y !== y)) {
                    return true;
                }
            }

            if (el.x !== x) {
                return true;
            }

            if ((el.y !== y)) {
                return true;
            }

            return false;
        });

        setDataToReserve({
            ...dataToReserve,
            res_t_sillas: newChairs
        })

    }

    const backSection = () => {
        setPhase(1);
    }

    const makeReserve = () => {

        const request = helpHttp();
        let url = "http://localhost:5000/reserva/crear"

        if (dataToReserve.num_sillas_general > 0) {
            if (!(dataToReserve.res_t_sillas.length === dataToReserve.num_sillas_general)) {
                console.log("RETURN")
                return;
            }
        }

        if (dataToReserve.num_sillas_preferencial > 0) {
            if (!(dataToReserve.res_t_sillas.length === dataToReserve.num_sillas_preferencial)) {
                console.log("RETURN")
                return;
            }
        }

        let data = {
            res_t_sillas: JSON.stringify(dataToReserve.res_t_sillas),
            res_fk_fun_i: dataToReserve.fun_i_id,
            token: JSON.parse(window.localStorage.getItem("data")).data["auth-token"]
        }
        console.log(data)

        const reserve = async () => {
            request.post(url, {
                headers: {
                    "Content-Type": "application/json"
                },
                cache: 'no-cache',
                body: data
            }).then(res => {
                if (!res.err) {
                    setTextReserve(true);
                }
            })
        }

        reserve();

    }

    return (
        <StylesMovieChairs /*HTML tag */>
            {!textReserve ?
                <>
                    <TitleSelect>
                        Escoge tus asientos
                    </TitleSelect>
                    <SelectChairs height={height} /*HTML tag */>
                        {
                            loader &&
                            <StylesLoader>
                                <Loader />
                            </StylesLoader>
                        }
                        <StylesCinema width={width}>
                            <TextScreen>
                                Pantalla
                            </TextScreen>
                            {
                                chairs &&
                                chairs.data.sillas.map((el, index) => (
                                    <>
                                        <PositionChair key={index} y={index + 1} position={false} />
                                        <>
                                            {
                                                el.map((element, i) => (
                                                    <PositionChair
                                                        key={i + index}
                                                        numNormal={numSillasNormal}
                                                        numPref={numSillasPref}
                                                        setNumSillasNormal={setNumSillasNormal}
                                                        setNumSillasPref={setNumSillasPref}
                                                        createChairs={createChairs}
                                                        deleteChairs={deleteChairs}
                                                        row={false}
                                                        y={index + 1}
                                                        x={i + 1}
                                                        state={element}

                                                    />
                                                ))
                                            }
                                        </>

                                    </>
                                ))
                            }
                        </StylesCinema>

                    </SelectChairs>
                    <p style = {{
                        marginLeft :"1rem"
                    }}>
                        <h3>Convenciones</h3>
                        Verde – General <br/>
                        Naranja - Preferencial <br/>
                        Azul – Discapacitados <br/>
                        Roja – No disponible <br/>
                        Gris – Seleccionado <br/>
                    </p>
                    {
                        numSillasNormal !== 0 ?
                            <p style = {{
                                marginLeft :"1rem"
                            }}>
                                Aun puedes seleccionar {numSillasNormal} sillas generales
                            </p> : ""
                    }
                    {
                        numSillasPref !==0 &&
                        <p style = {{
                            marginLeft :"1rem"
                        }}>
                            Aun puedes seleccionar {numSillasPref} sillas generales
                        </p>
                    }
                    <StylesBtns>
                        <BtnsReserve onClick={backSection}>
                            Volver
                        </BtnsReserve>
                        <BtnsReserve onClick={makeReserve}>
                            Hacer Reserva
                        </BtnsReserve>
                    </StylesBtns>
                </> :
                <TitleSelect>
                    Reserva generada exitosamente.
                </TitleSelect>
            }
        </StylesMovieChairs>
    )
}

export default MovieChairs;
