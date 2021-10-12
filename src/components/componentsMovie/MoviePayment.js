import { useState, useRef } from "react";
import { Input } from "../styles/GeneralStyles";
import styled from "styled-components";

const StylesPayment = styled.div`
    width: 86.6%;
    margin: 0 auto;
    margin-top: 1rem;

    & .select{
        background-color: rgb(80,25,80);
        color: white;
    }
`;

const StylesOptionsPayment = styled.div`
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    & input[type="text"]{
        width: 35px;
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
    height: 2.5rem;
    background-color: transparent;
    border: thin solid rgb(80,25,80);
    border-radius: 4px;
    margin: 0 1rem;
    padding: 0 .5rem;
    transition: background-color .5s;
    transition: color .5s;
    cursor: pointer;
    font-family: "Segoe UI";

    &:hover{
        background-color: rgb(190,85,190);
        color: white;
    }

`;

const BtnOptions = styled.button`
    width: 80px;
    height: 30px;
    background-color: transparent;
    border: thin solid rgb(80,25,80);
    border-radius: 4px;
    margin: 0 1rem;
    padding: 0 .5rem;
    transition: background-color .5s;
    transition: color .5s;
    font-family: 'Segoe UI';
    cursor: pointer;

    &:hover{
        background-color: rgb(190,85,190);
        color: white;
    }
`;

const MoviePayment = ({ setPhase, setDataToReserve, dataToReserve }) => {

    const [normalChairs, setNormalChairs] = useState(0);
    const [preferentialChairs, setPreferentialChairs] = useState(0);
    const [stateBtns, setStateBtns] = useState({});
    const [messageError, setMesageError] = useState(null);
    const btnAddNormal = useRef(null);
    const btnAddPreferential = useRef(null);


    const addNormalChairs = () => {

        if (!btnAddPreferential.current.getAttribute("disabled")) {
            btnAddPreferential.current.setAttribute("disabled", true);
        }

        if (!(normalChairs === 3)) {
            setNormalChairs(normalChairs + 1);
        }
    }

    const substractNormalChairs = () => {

        if (normalChairs === 1) {
            btnAddPreferential.current.removeAttribute("disabled");
        }

        if (!(normalChairs === 0)) {
            setNormalChairs(normalChairs - 1);
        }

    }

    const addPreferentialChairs = () => {

        if (!btnAddNormal.current.getAttribute("disabled")) {
            btnAddNormal.current.setAttribute("disabled", true);
        }

        if (!(preferentialChairs === 3)) {
            setPreferentialChairs(preferentialChairs + 1);
        }
    }

    const substractPreferentialChairs = () => {

        if (preferentialChairs === 1) {
            btnAddNormal.current.removeAttribute("disabled");
        }

        if (!(preferentialChairs === 0)) {
            setPreferentialChairs(preferentialChairs - 1);
        }
    }

    const paymentMethod = (e) => {

        setStateBtns({
            [e.target.name] : true
        }) 

        setDataToReserve({
            ...dataToReserve,
            tipoPago: e.target.value
        })
    }

    const continueProccess = () => {

        if ((normalChairs === 0) && (preferentialChairs === 0)) {
            return;
        }

        setDataToReserve({
            ...dataToReserve,
            num_sillas_general: normalChairs,
            num_sillas_preferencial: preferentialChairs
        })
        
        setPhase(2)

    }

    const backProccess = () => {
        setPhase(0);
    }

    return (
        <StylesPayment /*HTML tag */>
            <h3 style={{
                margin: "0 auto",
                textAlign: "center",
                marginBottom: "1rem"
            }}>Selecciona el numero de boletas</h3>
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
                <BtnAddSubstract
                    onClick={addNormalChairs}
                    ref={btnAddNormal}
                    /*HTML tag*/>+</BtnAddSubstract>
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
                    <BtnAddSubstract
                        onClick={addPreferentialChairs}
                        ref={btnAddPreferential}
                    >+</BtnAddSubstract>
                </StylesOptionsPayment>
            </StylesOptionsPayment>
            <h3 style={{
                margin: "0 auto",
                textAlign: "center",
                marginBottom: "1rem",
                marginTop: "1rem"
            }}>Selecciona tu medio de pago:</h3>
            <StylesOptionsPayment>
                <BtnPaymentMethod 
                    onClick={paymentMethod} 
                    value="PSE"
                    name="btn_pse"  
                    className={stateBtns.btn_pse ? "select":""}  
                >PSE</BtnPaymentMethod>
                <BtnPaymentMethod 
                    onClick={paymentMethod}
                    value="MasterCard"
                    name="btn_master"
                    className={stateBtns.btn_master ? "select":""}  
                >MasterCard</BtnPaymentMethod>
                <BtnPaymentMethod 
                    onClick={paymentMethod}
                    value="Debito"
                    name="btn_debito"   
                    className={stateBtns.btn_debito ? "select":""}  
                >Debito</BtnPaymentMethod>
            </StylesOptionsPayment>
            <StylesOptionsPayment style={{
                marginTop: "1.5rem"
            }}>
                <BtnOptions onClick={backProccess}>
                    Volver
                </BtnOptions>
                <BtnOptions onClick={continueProccess}>
                    Continuar
                </BtnOptions>
            </StylesOptionsPayment>
            {
                messageError &&
                <p>
                    Porfavor selecciona la cantidad de boletas y el metodo de pago
                </p>
            }
        </StylesPayment>
    )
}

export default MoviePayment
