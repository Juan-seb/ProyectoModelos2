import styled from "styled-components"

const BtnUsuarioStyles = styled.div`
        border-radius: 100%;
        width: 2.2rem;
        height: 2.2rem;
        position: absolute;
        background-color: red;
        right: 7%;
        z-index: 25;

        @media (min-width:1024px){
            right: 3%;
            top: 22%;
        }

    `;

const BtnUsuario = ({ handleChange }) => {

    return (
        <BtnUsuarioStyles onClick={handleChange} />
    )
}

export default BtnUsuario
