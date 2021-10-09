import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHTTP.js";

const CityContext = createContext();

const CityProvider = ({ children }) => {

    const [allCities, setAllCities] = useState(null)
    const [display, setDisplay] = useState(1)

    useEffect(() => {
        const request = helpHttp();
        const getCities = () => {
            request.get("http://localhost:4000/ciudades")
                .then(res => {
                    if (!res.err){
                        setAllCities(res);
                    } else {
                        setAllCities(false)
                    }
                })
        }

        getCities();
    }, [])

    const data = { allCities, display, setDisplay }


    return (
        <CityContext.Provider value={data} >{children}</CityContext.Provider>
    )
}

export { CityProvider }
export default CityContext;