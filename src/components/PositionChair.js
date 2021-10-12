import { useEffect, useState } from "react";
import styled, { css } from "styled-components"

const StylesPositionChair = styled.div`
    width: 45px;
    height: 45px;
    margin: .3rem;
    border-radius: 5px;
    border: thin solid gray;

    ${props => props.state === 1 && css`
        border: thin solid green;
        background-color: rgb(150, 255, 122);
        cursor: pointer;
    `}

    ${props => props.state === 2 && css`
        border: thin solid orange;
        background-color: rgb(255, 152, 49);
        cursor: pointer;
    `}

    ${props => props.state === 3 && css`
        border: thin solid blue;
        background-color: rgb(109, 171, 255);
        cursor: pointer;
    `}

    ${props => props.state === 4 && css`
        visibility: hidden;
    `}

    ${props => props.state === 5 && css`
        border: thin solid red;
        background-color: rgb(255, 109, 109);
        cursor: default;
    `}

    ${props => props.state === 6 && css`
        border: thin solid grey;
        background-color: rgb(146, 146, 146);
        color: white;
        cursor: default;
        cursor: pointer;
    `}

    ${props => props.state === undefined && css`
        border: none;
        cursor: default;
    `}

`;

const PositionChair = ({ numNormal, numPref, setNumSillasNormal, setNumSillasPref, createChairs, deleteChairs, y, x, state }) => {

    const [content, setContent] = useState(null);
    const [stateChair, setStateChair] = useState(state);

    useEffect(() => {
        setContent(String.fromCharCode(64 + y));
    }, [y])

    const setChair = () => {
        if ((stateChair !== 4) && (stateChair !== 5)) {
            if (stateChair === 1) {
                if (numNormal > 0) {
                    setNumSillasNormal(numNormal - 1);
                    createChairs(x,y);
                    setStateChair(6);
                }
            }
            if (stateChair === 2) {
                if (numPref > 0) {
                    setNumSillasPref(numPref - 1);
                    createChairs(x,y);
                    setStateChair(6);
                }
            }
        }
        if (stateChair === 6) {
            if (state === 1) {
                setNumSillasNormal(numNormal + 1);
                deleteChairs(x,y);
                setStateChair(1);
            }
            if (state === 2) {
                setNumSillasPref(numPref + 1);
                deleteChairs(x,y);
                setStateChair(2);
            }
        }
    }

    return (
        <StylesPositionChair state={stateChair} onClick={setChair}>
            <p style={{
                margin: "0",
                height: "100%",
                textAlign: "center",
                padding: ".6rem 0"
            }}>
                {content + `${x || ""}`}
            </p>
        </StylesPositionChair>
    )
}

export default PositionChair
