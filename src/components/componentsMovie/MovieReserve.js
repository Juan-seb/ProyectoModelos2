import { useState } from "react";
import styled from "styled-components";
import MovieDate from "./MovieDate";
import MoviePayment from "./MoviePayment";
import MovieChairs from "./MovieChairs";

const valuesToReserve = {

    fun_i_id: "",
    tipoPago: "",
    num_sillas_general: null,
    num_sillas_preferencial: null,
    res_t_sillas: [],
}

const MovieReserveStyles = styled.div`
    width: 100%;
    margin: 0 auto;
`;

const MovieReserve = ({ id, history }) => {

    const [phase, setPhase] = useState(0);
    const [dataToReserve, setDataToReserve] = useState(valuesToReserve);

    return (
        <MovieReserveStyles>
            {phase === 0 &&
                <MovieDate
                    id={id}
                    history={history}
                    setPhase={setPhase}
                    setDataToReserve={setDataToReserve}
                    dataToReserve={dataToReserve}
                />
            }
            {phase === 1 &&
                <MoviePayment
                    history={history}
                    setPhase={setPhase}
                    setDataToReserve={setDataToReserve}
                    dataToReserve={dataToReserve}
                />
            }
            {phase === 2 &&
                <MovieChairs
                    history={history}
                    setPhase={setPhase}
                    setDataToReserve={setDataToReserve}
                    dataToReserve={dataToReserve}
                />

            }
        </MovieReserveStyles>
    )
}

export default MovieReserve
