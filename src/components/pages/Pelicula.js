import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { helpHttp } from "../../helpers/helpHTTP"
import Loader from "../Loader";
import MovieInfoBasic from "../componentsMovie/MovieInfoBasic";
import Reservartion from "../Reservartion";

const Content = styled.section`
    width: 100%;
    height: fit-content;
`;

const Pelicula = ({history}) => {

    let { city, id } = useParams();
    const [dataMovie, setDataMovie] = useState(null);
    const [loader, setLoader] = useState(true);

    useEffect(() => {

        const request = helpHttp();

        const getMovie = async () => {
            console.log(city);
            //let url = `http://localhost:4000/peliculas/${id}`
            let url = `http://localhost:5000/pelicula/pelicula_id/${id}`

            request.get(url)
                .then(res => {
                    if (!res.err) {
                        setLoader(false);
                        setDataMovie(res);
                    }else{
                        history.push({pathname: `/${city}/error`});

                    }   
                })


        }
        getMovie();
    }, [city, id, history])

    return (
        <Content>
            {loader && <Loader />}
            {dataMovie && <MovieInfoBasic data = {dataMovie.data}/>}
            {dataMovie && <Reservartion id={id} data = {dataMovie.data} history = {history} />}
            
        </Content>
    )
}

export default Pelicula
