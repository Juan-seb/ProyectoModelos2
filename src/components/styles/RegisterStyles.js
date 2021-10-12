import styled from "styled-components";

const StylesRegister = styled.section`
    width: 80%;
    margin: auto;
    margin-top: 1rem;

    @media (min-width: 645px) {
        width: 65%;
    }

    @media (min-width: 768px) {
        width: 50%;
    }

`;

const StylesForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;

`;

const StylesInput = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: 0.8rem;
    
    & label{
        margin-bottom: .2rem;
        display: block;
        font-size: 0.875rem;
    }

    & input{
        width: 100%;
    }

    @media (min-width:769px){
        & label{
            font-size: 1rem;
        }
        & input{
            width: 100%;
            font-size: 1.125rem !important;
        }
    }


`;

const StylesPass = styled.div`
    width: 100%;
    padding: 0;    
    border: thin solid rgb(80,25,80);
    border-radius: 10px;
    margin-bottom: .5rem;
    display: flex;

    &>input[name="usr_v_pass"]{
        width: 88%;
        border: none;
        padding: .7rem .7rem;
        margin: 0;

        &:-webkit-autofill{
            background-color: black;
        }
    }

    &>.see-pass{
        width: 12%;
        height: inherit;
        background-image: url("https://static.thenounproject.com/png/506282-200.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        margin-right: .5rem;    
    }

`;

const StylesDateCity = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`;

const StylesButtonSubmit = styled.button`
    
    width: 50%;
    margin: 1rem auto;
    height: 30px;
    background-color: white;
    border: thin solid rgb(80,25,80);
    border-radius: 5px;
    cursor: pointer;
    transition: background-color .5s;
    transition: color .5s;
        
    &:hover{
        background-color: rgb(190,85,190);
        color: white;
    }

`;

const SelectContainer = styled.div`
    width: 100%;
    

    & label{
        margin-bottom: .2rem;
        display: block;
        font-size: 0.875rem;
    }

    & select{
        border-radius: 10px !important;
        width: 100%;
        padding: .7rem .4rem;
        margin: 0 auto;
        margin-bottom: 1rem;
        border-radius: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 14px;
    }
`;

const StylesSuccessMessage = styled.h3`
    width: 100%;

    background-color: rgb(137, 255, 77);
    font-size: 1.125;
    text-align: center;
    padding: 1rem;
`;

export { 
    StylesRegister, 
    StylesForm, 
    StylesInput, 
    StylesPass, 
    StylesDateCity, 
    StylesButtonSubmit,
    SelectContainer,
    StylesSuccessMessage
}