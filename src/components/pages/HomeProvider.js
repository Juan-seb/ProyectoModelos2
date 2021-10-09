import { useContext, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest"
import { SubtitleButton, Text } from "../styles/GeneralStyles";
import { StylesSection, MostViewed, BtnGoTo } from "../styles/HomeStyles"
import CityContext from "../../context/CityContext";
import CardMovie from "../CardMovie"
import SearcBar from "../SearchBar"
import MenuCities from "../MenuCities";
import Loader from "../Loader";
import "../styles/Loader.css";

const HomeProvider = ({history}) => {

    /*Obtain the actual city in the url, if dont have url the select of cities is render automatically */
    let { city } = useParams();
    let { pathname } = useLocation();

    /*Hook useRequest*/
    const { inTheaters, released, mostWatch, loader, error } = useRequest(city, "all");
    
    const { allCities, display, setDisplay } = useContext(CityContext)
    const changeDisplay = () => setDisplay(display ? 0 : 1);

    let chosenCity;

    /*Use this conditional for the text of the location and no generate errors*/
    if (city === undefined) {
        chosenCity = null
    } else {
        chosenCity = allCities && allCities.filter(el => parseInt(city) === el.ciu_i_id)
    }

    /*This useEffect is to avoid the render of select city */
    useEffect(() => {
        if (!city) {
            setDisplay(display ? 0 : 1);
        }
    }, []);

    return (
        <section>
            <SubtitleButton onClick={changeDisplay}>Estas ubicado en: <b>{chosenCity ? chosenCity[0].ciu_v_nombre : "Cargando ubicacion"}</b></SubtitleButton>
            <MenuCities />
            <SearcBar />
            {/*Mas vistos */}
            <MostViewed>
                {true && <Loader />}
                {

                }
            </MostViewed>
            <Text><b>Cartelera:</b></Text>
            <StylesSection>
                {loader && <Loader />}
                {inTheaters ? inTheaters.data.map((el, index) => (
                    index < 4 &&
                    <CardMovie key={index} el = {el} history={history}/>
                ))
                    : error ? (<p style={{
                        textAlign: "center"
                    }}>{error}</p>)
                        :
                        (<p style={{
                            textAlign: "center"
                        }}>Cargando</p>)}
                {
                    <div style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <BtnGoTo>
                            <Link to={`/${pathname.split("/")[1]}/cartelera`}>Ver todas</Link>
                        </BtnGoTo>
                    </div>
                }
            </StylesSection>
            <Text><b>Estrenos:</b></Text>
            <StylesSection>
                {loader && <Loader />}
                {released ? released.data.map((el, index) => (
                    index < 4 &&
                    <CardMovie key={index} el = {el} history={history}/>  
                ))
                    : <p style={{
                        textAlign: "center"
                    }}>Cargando</p>}
                {
                    <div style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <BtnGoTo>
                            <Link to={`/${pathname.split("/")[1]}/estrenos`}>Ver todas</Link>
                        </BtnGoTo>
                    </div>
                }
            </StylesSection>
        </section>
    )
}

export default HomeProvider
