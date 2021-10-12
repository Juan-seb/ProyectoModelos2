import { useRef, useState, useEffect } from "react";
import styled from "styled-components"
import MovieReserve from "./componentsMovie/MovieReserve";

const MovieInfoReserve = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;

    @media (min-width:769px){
        flex-direction: row;
    }

`;

const MovieMoreInfo = styled.div`
    width: 86.6%;
    height: fit-content;
    margin: .5rem auto;
    display: none;

    @media (min-width:769px){
        display: block;
        padding: 0;
        padding-left: 1rem;
        width: 50%;
    }
`;

const Icon = styled.span`
    margin-left: 1rem;
    width: .8rem;
    height: .8rem;    

    &>.close{
        transform: rotate(0deg);
        transition: transform .5s;
    }

    &>.open{
        transform: rotate(180deg);
        transition: transform .5s;
    }
`;

const BtnOpen = styled.button`
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

    & a{
        text-decoration: none;
        color: black;
    }

    @media (min-width:769px){
        display: none;
    }

`;

const Reservartion = ({id, data, history }) => {

    const [isOpen, setIsOpen] = useState(false);
    const refInfo = useRef(null);
    const refBtn = useRef(null);

    const hiddenMenu = () => {
        setIsOpen(isOpen ? false : true);
    }

    useEffect(() => {

        if (isOpen) {
            refInfo.current.classList.add("is-open-sinopsis");
            refBtn.current.querySelector("svg").classList.add("open");
        } else {
            refInfo.current.classList.remove("is-open-sinopsis");
            refBtn.current.querySelector("svg").classList.remove("open");
        }
    }, [isOpen]);

    return (
        <MovieInfoReserve>
            <BtnOpen ref={refBtn} onClick={hiddenMenu} /*HTML element */>
                Sinopsis
                <Icon /*HTML element */>
                    <svg viewBox="0 0 448 512" className="close">
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                </Icon>
            </BtnOpen>
            <MovieMoreInfo ref={refInfo} /*HTML element */>
                Hola amigos como estan
            </MovieMoreInfo>
            <MovieReserve id={id} history={history} />
        </MovieInfoReserve>
    )
}

/* <ReserveDate /> Este es el carrusel que va en los mas vistos*/
export default Reservartion;
