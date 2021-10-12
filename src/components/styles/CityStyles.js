import styled, { css } from "styled-components";

const StyledChooseCities = styled.div`
    width: 100%;
    height: 100vh;
    top: 0;
    background-color: rgba(0,0,0,.65);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 30;
    overflow: hidden;
    position: fixed;
    overflow: hidden;
    ${props => props.display && css`
        display: none;
    `}

`;

const StyledChooseContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 86.6%;

    @media (min-width:769px){
        width: 300px;
    }

    &>.title{
        font-size: 1.2rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        width: 100%;
        margin: 0;
        margin-bottom: 1rem;
        padding: .8rem;
        text-align: center;
        background-color: rgb(80,25,80);
        color: white;
    }

    &>.city_select{
        width: 85%;
        padding: .7rem .4rem;
        margin: 0 auto;
        margin-bottom: 1rem;
        border-radius: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16px;
    }


    &>.city_select:focus{
        outline: none;
    }

    &>button{
        width: 60%;
        height: 30px;
        font-size: 1.1rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0 auto;
        margin-bottom: 1rem;
        padding-bottom: .5rem;
        background-color: transparent;
        border: thin solid rgb(80,25,80);
        border-radius: 5px;
        cursor: pointer;
        transition: background-color .5s;
        transition: color .5s;
    }

    &>button:hover{
        background-color: rgb(190,85,190);
        color: white;
    }



`;

export { StyledChooseCities, StyledChooseContainer };