import { useRef, useState, useEffect } from "react";
import styled from "styled-components"
import { BtnGoTo } from "./styles/HomeStyles";

const MovieInfoReserve = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
`;

const MovieMoreInfo = styled.div`
    width: 86.6%;
    height: fit-content;
    margin: .5rem auto;
    display: none;
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

const MovieReserve = styled.div`
    width: 86.6%;
    margin: 0 auto;
`;

const Reservartion = ({data}) => {
    console.log(data)
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
            <BtnGoTo ref={refBtn} onClick={hiddenMenu} /*HTML element */>
                Sinopsis 
                <Icon /*HTML element */>
                    <svg viewBox="0 0 448 512" className="close">
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                </Icon>
            </BtnGoTo>
            <MovieMoreInfo ref={refInfo} /*HTML element */>
                Hola amigos como estan
            </MovieMoreInfo>
            <MovieReserve>
                
            </MovieReserve>
        </MovieInfoReserve>
    )
}

export default Reservartion
