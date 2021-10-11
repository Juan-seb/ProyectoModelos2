import { useState } from "react";
import styled from "styled-components";
import MovieDate from "./MovieDate";
import MoviePayment from "./MoviePayment";
import MovieChairs from "./MovieChairs";

const valuesToReserve = {

    sal_i_id: "",
    tipoPago: "",
    num_sillas_general:null,
    num_sillas_preferencial: null,
    sillas_general: [],
    sillas_preferencial: [],
    
}

const MovieReserveStyles = styled.div`
    width: 100%;
    margin: 0 auto;
`;

const MovieReserve = ({ history }) => {

    const [phase, setPhase] = useState(0);
    const [dataToReserve, setDataToReserve] = useState(valuesToReserve);

    return (
        <MovieReserveStyles>
            {phase === 0 && <MovieDate history={history} setPhase={setPhase} setDataToReserve={setDataToReserve}/>}
            {phase === 1 && <MoviePayment history={history} setPhase={setPhase} setDataToReserve={setDataToReserve}/>}
            {phase === 2 && <MovieChairs history={history} setPhase={setPhase} setDataToReserve={setDataToReserve}/>}
        </MovieReserveStyles>
    )
}

export default MovieReserve
