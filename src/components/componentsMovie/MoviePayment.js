import { useState } from "react";
import { Input, Text } from "../styles/GeneralStyles";
import styled from "styled-components";

const StylesPayment = styled.div`
    width: 86.6%;
    margin: 0 auto;
    margin-top: 1rem;
`;

const StylesOptionsPayment = styled.div`
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    & input[type="text"]{
        width: 40px;
    }

`;

const BtnAddSubstract = styled.button`
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    border: thin solid rgb(80,25,80);
    border-radius: 50px;
    margin: 0 1rem;

`;

const BtnPaymentMethod = styled.button`
    width: fit-content;
    height: 2rem;
    background-color: transparent;
    border: thin solid rgb(80,25,80);
    border-radius: 4px;
    margin: 0 1rem;
`;

const MoviePayment = ({ setPhase, setDataToReserve }) => {

    const [normalChairs, setNormalChairs] = useState(0);
    const [preferentialChairs, setPreferentialChairs] = useState(0);

    const addNormalChairs = () => {
        if (!(normalChairs === 3)) {
            setNormalChairs(normalChairs + 1);
        }
    }

    const substractNormalChairs = () => {
        if (!(normalChairs === 0)) {
            setNormalChairs(normalChairs - 1);
        }
    }

    const addPreferentialChairs = () => {
        if (!(preferentialChairs === 3)) {
            setPreferentialChairs(preferentialChairs + 1);
        }
    }

    const substractPreferentialChairs = () => {
        if (!(preferentialChairs === 0)) {
            setPreferentialChairs(preferentialChairs - 1);
        }
    }

    return (
        <StylesPayment /*HTML tag */>
            <StylesOptionsPayment /*HTML tag */>
                <BtnPaymentMethod>PSE</BtnPaymentMethod>
                <BtnPaymentMethod>MASTERCARD</BtnPaymentMethod>
                <BtnPaymentMethod>DEBITO</BtnPaymentMethod>
            </StylesOptionsPayment>
            <StylesOptionsPayment /*HTML tag */>
                <p>
                    General:
                </p>
                <BtnAddSubstract onClick={substractNormalChairs} /*HTML tag */>-</BtnAddSubstract>
                <Input /*HTML tag */
                    type="text"
                    value={normalChairs}
                    disabled
                />
                <BtnAddSubstract onClick={addNormalChairs} /*HTML tag*/>+</BtnAddSubstract>
            </StylesOptionsPayment>
            <StylesOptionsPayment /*HTML tag */>
                <p>
                    Preferencial:
                </p>
                <StylesOptionsPayment /*HTML tag */>
                    <BtnAddSubstract onClick={substractPreferentialChairs} /*HTML tag */>-</BtnAddSubstract>
                    <Input /*HTML tag */
                        type="text"
                        value={preferentialChairs}
                        disabled
                    />
                    <BtnAddSubstract onClick={addPreferentialChairs}>+</BtnAddSubstract>
                </StylesOptionsPayment>
            </StylesOptionsPayment>
        </StylesPayment>
    )
}

export default MoviePayment
