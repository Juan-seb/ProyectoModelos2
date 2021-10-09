import styled from "styled-components";

const StylesSection = styled.section `
    width: 100%;
    margin: auto;
    margin-bottom: 2.2rem;
`;

const MostViewed = styled.section`
    
    display: none;

    @media (max-width: 400px) {
            
    }
`;

const BtnGoTo = styled.button`
    width: 130px;
    margin: .5rem auto;
    margin-top: 1rem;
    height: 30px;
    background-color: white;
    border: thin solid rgb(80,25,80);
    border-radius: 15px;
    cursor: pointer;
    transition: background-color .5s;
    transition: color .5s;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content:center;
    align-items: center;

    &:hover{
        background-color: rgb(190,85,190);
        color: white;
    }

    &>a{
        text-decoration: none;
    }

`;

export {StylesSection, MostViewed, BtnGoTo}