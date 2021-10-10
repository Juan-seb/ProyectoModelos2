import React from 'react'
import './styles/Loader.css';
/*Componente que se encargara de renderizar el loader cuando se tengan distintas peticiones */
const Loader = () => {
    return (
        <div style = {{
            width: "89px",
            margin: "auto",
        }} className="Loader">   
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader
