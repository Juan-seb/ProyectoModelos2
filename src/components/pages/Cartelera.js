import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";
import styled from "styled-components";
import Loader from "../Loader";
import CardMovie from "../CardMovie";

const StylesCartelera = styled.section`
    width: 100%;
    margin: 2rem auto;

    @media (min-width:769px){
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

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
                    display: "flex",
                    width: "100%",
                    justifyContent: "center"
                }}>{error}</p>)
                    :
                    (<p style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center"
                    }}>Cargando</p>)}
        </StylesCartelera>
    )
}

export default Cartelera