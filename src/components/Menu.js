import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom"
import { useLocation} from "react-router-dom"
import styled from "styled-components"

const MenuContainer = styled.div`
    width: 100%;
    height: 100vh;
    top: 0;
    position: fixed;
    background-color: rgba(0,0,0,.95);
    z-index: 40;
    transition: transform .5s;
    transform: translateX(-100%); 
    padding: 1rem 1rem;

`;

const MenuStyles = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    &>.menu-header{
        height: 7%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
        
        &>.closeMenu{
            position: absolute;
            width: 2rem;
            height: 2rem;
            background-color: transparent;
            border: transparent;
            border-radius: 50%;
            font-size: 1.4rem;
            text-align: center;
            color: white;
            top: 25px;
            right: 7%;
            outline: none;
        }
    
    }
`;

const LinkStyles = styled.p`
    width: 100%;
    height: 30px;
    cursor: pointer;
    color: white;
    background-color: rgb(80,25,80);
    margin: 0;
    margin-bottom: 1rem;
    padding: 0.3rem 1rem;

    & a{
        width: 100%;
        color: white;
        text-decoration: none;
    }

`;

const Menu = ({ isOpen, setIsOpen }) => {

    const containerMenu = useRef(null);
    let { pathname } = useLocation();

    let idCity = pathname.split("/") ;

    const setHiddenMenu = () => {
        setIsOpen(false)
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    useEffect(() => {

        if (isOpen) {
            containerMenu.current.classList.add("is-open");
            document.body.classList.add("overflow");
        } else {
            containerMenu.current.classList.remove("is-open");
            document.body.classList.remove("overflow");
        }
    }, [isOpen]);

    return (

        <MenuContainer ref={containerMenu}>
            <MenuStyles className="menu">
                <div className="menu-header">
                    <div className="logo">

                    </div>
                    <button className="closeMenu" onClick={setHiddenMenu}>X</button>
                </div>
                <div className="menu-navs">
                    <LinkStyles>
                        <NavLink to={`/${idCity[1]}/cartelera`} onClick={closeMenu}>Cartelera</NavLink>
                    </LinkStyles>
                    <LinkStyles>
                        <NavLink to={`/${idCity[1]}/estrenos`} onClick={closeMenu}>Estrenos</NavLink>
                    </LinkStyles>
                    <LinkStyles>
                        <NavLink to={`/${idCity[1]}/otros`} onClick={closeMenu}>Otros</NavLink>
                    </LinkStyles>
                    
                </div>
            </MenuStyles>
        </MenuContainer>

    )
}

export default Menu
