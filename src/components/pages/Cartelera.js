import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";
import styled from "styled-components";
import Loader from "../Loader";
import CardMovie from "../CardMovie";

const StylesCartelera = styled.section`
    width: 100%;
    margin: 2rem auto;

`;

const Cartelera = ({ history }) => {

    let { city } = useParams();

    const { inTheaters, loader, error } = useRequest(city, "cartelera");

    return (
        <StylesCartelera>
            {loader && <Loader />}
            {inTheaters ? inTheaters.data.map((el, index) => (
                <CardMovie key={index} el={el} history={history} />

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