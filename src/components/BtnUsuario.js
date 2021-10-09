import styled from "styled-components"

const BtnUsuarioStyles = styled.div`
        border-radius: 100%;
        width: 2.2rem;
        height: 2.2rem;
        position: absolute;
        background-color: red;
        right: 7%;
        top: 5;
        z-index: 25;
    `;

const BtnUsuario = ({handleChange}) => {

    return (
        <BtnUsuarioStyles onClick={handleChange} />
    )
}

export default BtnUsuario
