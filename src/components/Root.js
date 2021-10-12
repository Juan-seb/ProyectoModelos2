import {
    HashRouter,
    Switch,
    Route
} from "react-router-dom";
import { useState } from "react";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Cartelera from "./pages/Cartelera";
import Estrenos from "./pages/Estrenos";
import Pelicula from "./pages/Pelicula";
import Header from "./Header";
import Menu from "./Menu";
import MenuPc from "./MenuPc";
import { CityProvider } from "../context/CityContext";

const Root = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <HashRouter>
            <MenuPc />
            <Header setIsOpen={setIsOpen} />
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/:city" component={Home} />
                <Route exact path="/:city/register">
                    <CityProvider>
                        <Register/>
                    </CityProvider>
                </Route>
                <Route exact path="/:city/cartelera" component={Cartelera} />
                <Route exact path="/:city/estrenos" component={Estrenos} />
                <Route exact path="/:city/pelicula/:id" component={Pelicula} />
                <Route exact path="*" >
                    Error
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default Root
