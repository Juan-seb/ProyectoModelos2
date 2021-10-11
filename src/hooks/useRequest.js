import { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHTTP";

export const useRequest = (city, type) => {

    const [inTheaters, setInTheaters] = useState(null);
    const [released, setReleased] = useState(null);
    const [mostWatch, setMostWatch] = useState(null);
    const [loader, setLoader] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        const request = helpHttp();
        setInTheaters(null);
        setReleased(null);
        setMostWatch(null);
        setLoader(null);
        setError(null);

        //pelicula_id

        let theaters = `http://localhost:4000/cartelera/${city}`
        //let theaters = `http://127.0.0.1:5000/pelicula/cartelera/${city}`

        let premiere = `http://localhost:4000/estrenos/${city}`
        //let premiere = `http://127.0.0.1:5000/pelicula/proximos_estrenos`

        let see = `http://localhost:4000/vistos/${city}`
        //let see = `http://127.0.0.1:5000/pelicula/mas_vistos/${city}`

        const getAllMovies = async () => {

            setLoader(true)

            const [cartelera, estreno, vistas] = await Promise.all([
                request.get(theaters),
                request.get(premiere),
                request.get(see)
            ]);

            setInTheaters(cartelera);
            setReleased(estreno);
            setMostWatch(vistas);
            setLoader(false);
        };
        /*Cartelera */
        const getInTheaters = async () => {
            setLoader(true);

            request.get(theaters)
                .then(res => {
                    if (!res.err) {
                        setInTheaters(res);
                        setError(null);
                        setLoader(false);
                    } else {
                        setError(res);
                        setLoader(false);
                    }
                })
        }

        /*Estrenos */
        const getInRelease = async () => {
            setLoader(true);

            request.get(premiere)
                .then(res => {

                    if (!res.err) {
                        setReleased(res);
                        setError(null);
                        setLoader(false);
                    } else {
                        setError(res);
                        setLoader(false);
                    }
                })
        }

        const getMostWatch = async () => {

        }


        if (city && type === "all") {
            getAllMovies();
        }

        if (city && type === "cartelera") {
            getInTheaters();
        }

        if (city && type === "estrenos") {
            console.log("Estrenos")
            getInRelease();
        }

        if (city && type === "vistos") {
            getMostWatch();
        }

    }, [city, type])

    return { inTheaters, released, mostWatch, loader, error };

}

