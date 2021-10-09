import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";
import styled from "styled-components";
import Loader from "../Loader";
import CardMovie from "../CardMovie";

const StylesCartelera = styled.section`
    width: 100%;
    margin: 2rem auto;

`;

const Cartelera = () => {
    
    let { city } = useParams();

    const {inTheaters, loader, error} = useRequest(city, "cartelera");

    return (
        <StylesCartelera>
            {loader && <Loader />}
            {inTheaters ? inTheaters.data.map((el, index) => (
                <CardMovie key={index}
                    id = {el.pel_i_id}
                    title={el.pel_v_titulo}
                    img={el.pel_v_ruta_imagen}
                    duration={el.pel_i_duracion}
                    premiere={el.pel_d_estreno}
                    miniumAge={el.pel_i_edad_minima}
                    genres={el.fk_gen_id}
                />
            ))
                : error ? (<p style={{
                    textAlign: "center"
                }}>{error}</p>)
                    :
                    (<p style={{
                        textAlign: "center"
                    }}>Cargando</p>)}
        </StylesCartelera>
    )
}

export default Cartelera