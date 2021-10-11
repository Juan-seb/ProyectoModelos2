import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";
import styled from "styled-components";
import Loader from "../Loader";
import CardMovie from "../CardMovie";

const StylesReleased = styled.section`
    width: 100%;
    margin: 2rem auto;

    @media (min-width:769px){
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

`;

const Estrenos = ({ history }) => {
    let { city } = useParams();

    /*Use the hook useRequest for the request to releaseds */
    const { released, loader, error } = useRequest(city, "estrenos");

    return (
        <StylesReleased>
            {loader && <Loader />}
            {released ? released.data.map((el, index) => (
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
        </StylesReleased>
    )
}

export default Estrenos
