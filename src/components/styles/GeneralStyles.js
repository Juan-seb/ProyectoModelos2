import styled from "styled-components";

const Title = styled.p`
    font-size: 1.25rem;
    margin: .2rem auto;
    text-align: center;
`;

const Text = styled.p`
    width: 86.6%;
    font-size: 1.125rem;
    margin: 0 auto;
    margin-top: 1rem;

    @media (min-width:769px){
        width: 90%;
        font-size: 1.4rem;
        margin-bottom: .5rem;
    }

    @media (min-width:1366px){
        width: 1230px;
    }
`;

const TextTwo = styled.p`
    font-size: 0.875rem;
    margin: 0;
    margin-top: .3rem;

    @media (min-width:769px){
        margin-top: 0;
        font-size: 1rem;
    }
`;


const Subtitle = styled.p`
    font-size: 0.75rem;
    margin: .2rem auto;
    text-align: center;
`;

const SubtitleButton = styled.p`
    font-size: 0.875rem;
    margin: .2rem auto;
    text-align: center;
    cursor: pointer;
`;

const To = styled.p`
    width: 100%;
    text-align: center;
    padding: .7rem 0;
    margin: 0;
    margin-top: 1rem;
    background-color: rgb(80,25,80);
    color: white;
    cursor: pointer;
`;

const Input = styled.input`
    margin-bottom: .49rem;
    margin-top: .3rem;
    border: thin solid rgb(80,25,80);
    border-radius: 10px;

    &[type="text"],
    &[type="password"],
    &[type="date"]{
        padding: .7rem .7rem;
        font-size: 0.875rem;
        font-family: 'Segoe UI';
    }

    &:focus{
        outline: none;
    }
`;

const StylesTags = styled.div`
    padding: .1rem .5rem;
    margin-right: .5rem;
    margin-top: .7rem;
    background-color: #cabec0;
    border-radius: 5px;
`;

export { Title, Text, TextTwo, Subtitle, To, Input, SubtitleButton, StylesTags }


