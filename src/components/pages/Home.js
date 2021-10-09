import { CityProvider } from "../../context/CityContext"
import HomeProvider from "./HomeProvider"

const Home = ({history}) => {
    return (
        <CityProvider>
            <HomeProvider history={history}/>
        </CityProvider>
    )
}

export default Home
