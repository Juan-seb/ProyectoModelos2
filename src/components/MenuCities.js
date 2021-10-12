import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import CityContext from "../context/CityContext";
import { StyledChooseCities, StyledChooseContainer } from "./styles/CityStyles";

const MenuCities = () => {

    /* document.body.classList.add("overflow"); */

    //Cities that I get of the request in City Context
    const { allCities, display, setDisplay } = useContext(CityContext);
    const [selectCity, setSelectCity] = useState(1);

    let history = useHistory();
    // Use state to avoid the render of the component choose city.
    const changeDisplay = () => {
        setDisplay(display ? 0 : 1);
        /* document.body.classList.remove("overflow") */
        history.push({
            pathname: `/${selectCity}`,
        })
    }

    const changeCity = (e) => setSelectCity(e.target.value);

    return (
        <StyledChooseCities display={display}>
            {
                allCities ? (
                    <StyledChooseContainer>
                        <p className="title">Selecciona tu ciudad:</p>
                        <select name="select" className="city_select" onChange={changeCity}>
                            <option value="1">Escoge una ciudad</option>
                            {allCities.map((el, index) => (
                                <option value={el.ciu_i_id} key={index}>{el.ciu_v_nombre}</option>
                            ))}
                        </select>
                        <button onClick={changeDisplay}>Continuar</button>
                    </StyledChooseContainer>
                ) : (
                    <StyledChooseContainer>
                        <p className="title">Cargando ciudades</p>
                        <button onClick={changeDisplay}>Seleccionar mas tarde</button>
                    </StyledChooseContainer>
                )
            }
        </StyledChooseCities>
    )
}

export default MenuCities
