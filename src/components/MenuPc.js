import { useRef, useState } from "react";
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import BtnUsuario from "./BtnUsuario";
import LoginUsuario from "./LoginUsuario";

const MenuContainer = styled.div`
    width: 100%;
    height: fit-content;
    top: 0;
    position: sticky;
    background-color: rgba(0,0,0,.95);
    z-index: 40;
    padding: 1rem 3rem;
    display: none;

    @media (min-width: 1024px){
        display: flex;
        align-items: center;
    }

`;

const MenuStyles = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    &>.menu-header{
        width: 100px;
        height: 7%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
        
    
    }

    &>.menu-navs{
        display: flex;
        width: 640px;
        margin-left: auto;
        margin-right: 20px;
    }
`;

const LinkStyles = styled.p`
    width: 95px;
    height: 30px;
    cursor: pointer;
    color: white;
    background-color: rgb(80,25,80);
    border-radius: 25px;
    margin: auto .5rem;
    padding: 0.3rem 1rem;
    display: flex;
    justify-content: center;

    & a{
        width: 100%;
        color: white;
        text-decoration: none;
        text-align: center;
    }

`;

const SearchBarStyles = styled.div`
    width: 250px;
    height: 2.2rem;
    margin: 0 1rem;
    border-radius: 25px;
    border: thin solid rgb(80,25,80);
    padding: .3rem .5rem;
    display: flex;
    background-color: rgb(80,25,80);

    &>.logo{
        width: 10%;
        display: flex;
        justify-content: flex-end;
    }

    
    
`;

const InputSearch = styled.input`
    border: none;
    font-size: 1rem;
    width: 90%;
    height: 100%;
    background-color: rgb(80,25,80);
    color: white;
    &:focus{
        outline: none;
    }
`;

const MenuPc = () => {

    const [menuUser, setMenuUser] = useState(false)

    const handleChange = () => {
        setMenuUser(menuUser ? false : true)
    }

    const containerMenu = useRef(null);
    let { pathname } = useLocation();

    let idCity = pathname.split("/");



    return (

        <MenuContainer ref={containerMenu}>
            <MenuStyles className="menu">
                <div className="menu-header">
                    <div className="logo">

                    </div>
                </div>
                <div className="menu-navs">
                    <LinkStyles>
                        <NavLink to={`/${idCity[1]}/cartelera`} >Cartelera</NavLink>
                    </LinkStyles>
                    <LinkStyles>
                        <NavLink to={`/${idCity[1]}/estrenos`} >Estrenos</NavLink>
                    </LinkStyles>
                    <LinkStyles>
                        <NavLink to={`/${idCity[1]}/otros`} >Otros</NavLink>
                    </LinkStyles>
                    <SearchBarStyles className="search_bar">
                        <InputSearch type="text" placeholder="Busqueda" />
                        <div className="logo">🔎</div>
                    </SearchBarStyles>
                    <BtnUsuario handleChange={handleChange} />
                    <LoginUsuario menuUser={menuUser} handleChange={handleChange} />
                </div>
            </MenuStyles>
        </MenuContainer>

    )
}

export default MenuPc