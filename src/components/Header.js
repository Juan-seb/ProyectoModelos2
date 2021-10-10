import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { HeaderStyles } from "./styles/HeaderStyles";
import BtnUsuario from "./BtnUsuario";
import LoginUsuario from "./LoginUsuario";

const Header = ({ setIsOpen }) => {

    let history = useHistory();
    let { pathname } = useLocation();

    const [menuUser, setMenuUser] = useState(false)

    const handleChange = () => {
        setMenuUser(menuUser ? false : true)
    }

    const toHome = () => {
        history.push({ pathname: `/${pathname.split("/")[1]}` })
    }

    const addClass = () => {
        setIsOpen(true);
    }

    return (
        <HeaderStyles>
            <div className="button-container" onClick={addClass}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </div>
            <p className="title" onClick={toHome}>Cinema UD</p>
            <BtnUsuario handleChange={handleChange} />
            <LoginUsuario menuUser={menuUser} handleChange={handleChange} />
        </HeaderStyles>
    )
}

export default Header
