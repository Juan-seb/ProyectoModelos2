import styled from "styled-components";

const StylesDate = styled.div`
    width: 100%;
    z-index:0;
`;

const StylesCalendar = styled.div`
    width: 275px;
    margin: 1rem auto 1rem;
    display: flex;

    &>.inputDate{
        width: 200px;
        margin: auto;
        padding: .5rem .5rem;
    }

`;

const StylesBtnCalendar = styled.button`
    width: 3.5rem;
    height: 3.5rem;
    background-color: lightgray;
    background-image: url("https://images.vexels.com/media/users/3/205950/isolated/preview/6fbc93ab8efc8497ef9ad1f7c815dd33-icono-de-trazo-de-calendario.png");
    background-size: cover;
    border: thin solid rgb(80,25,80);
    border-radius: 5px;
    outline: none;
    opacity: .60;
    transition: opacity .5s;
    margin: 0 auto;

    &:hover{
        opacity: 1;
    }
    
`;

const StylesTheater = styled.div`
    box-shadow: 0 5px 5px rgb(0 0 0 / 10%);
    border-bottom: 1px solid rgba(100,100,100);
    width: 100%;
    height: 45px;
    display: flex;
    background-color: rgb(221, 221, 221);
    cursor: pointer;
    transition: background-color .5s;

    &:hover{
        background-color: rgb(196, 196, 196);
    }

`;

const TitleTheaters = styled.p`
    font-size: 1.15rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: .2rem auto .2rem 1.8rem;
    width: 90%;
    padding-top: .3rem;
`;

const Icon = styled.span`
    margin-left: 1rem;
    width: 1.2rem;
    height: 1.2rem;    
    margin: .8rem 1.8rem .5rem 1rem;
    &>.close{
        transform: rotate(0deg);
        transition: transform .5s;
    }

    &>.open{
        transform: rotate(180deg);
        transition: transform .5s;
    }
`;

const ContainerHours = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    justify-content: space-around;
    border-top: thin solid grey;
    padding: 1rem 0;
    margin: 0 auto;
`;

const Hours = styled.div`
    width: 100px;
    height: fit-content;
    border-radius: 15px;
    border: thin solid rgb(80,25,80);
    color: rgb(80,25,80);
    text-align: center;
    padding: .25rem 0;
    cursor: pointer;
    transition: background-color .5s;
    transition: color .5s;

    &:hover{
        background-color: rgb(190,85,190);
        color: white;
    }
`;

export {StylesDate, 
        StylesCalendar, 
        StylesBtnCalendar, 
        StylesTheater, 
        TitleTheaters, 
        Icon, 
        ContainerHours, 
        Hours
}