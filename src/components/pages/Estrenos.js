import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";
import styled from "styled-components";
import Loader from "../Loader";
import CardMovie from "../CardMovie";

const StylesReleased = styled.section`
    width: 100%;
    margin: 2rem auto;

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
                    textAlign: "center"
                }}>{error}</p>)
                    :
                    (<p style={{
                        textAlign: "center"
                    }}>Cargando</p>)}
        </StylesReleased>
    )
}

export default Estrenos
