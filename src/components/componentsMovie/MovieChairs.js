import { useEffect, useState } from "react";
import styled from "styled-components";
import { helpHttp } from "../../helpers/helpHTTP";
import Loader from "../Loader";
import PositionChair from "../PositionChair";

const StylesMovieChairs = styled.div`
    
    padding: .8rem 0;
`;

const SelectChairs = styled.div`
    width: 90vw;
    border: thin solid grey;
    height: 500px;
    overflow: scroll;
    margin: 0 auto;
    padding: .5rem;

    ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
        
    }

    ::-webkit-scrollbar-thumb {
        background: rgb(57, 57, 57);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background: #e1e1e1;
        border-radius: 4px;
    }

    @media (min-width:769px){
        width: 63vw;
    }
    /* width: 35px;
    height: 35px; */
`;

const StylesLoader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StylesCinema = styled.div`
    width: ${props => props.width}px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: .5rem;
`;

const TextScreen = styled.div`

    width: 100%;
    height: fit-content;
    font-size: 1.2rem;
    color: white;
    text-align: center;
    background-color: rgb(66, 66, 66);
    padding: 1rem 0;
    margin-bottom: 1.5rem;
`;

const MovieChairs = ({ history, setPhase, setDataToReserve }) => {

    const [loader, setLoader] = useState(true);
    const [chairs, setChairs] = useState(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const request = helpHttp();
        let url = "http://localhost:4000/sal_t_sillas"

        const getFunctions = async () => {

            request.get(url)
                .then(res => {
                    if (!res.err) {
                        console.log(res);
                        setChairs(res);
                        setLoader(false);
                        setWidth((res[0].length * 48) + 158)
                    }
                })

        }

        getFunctions();

    }, [])

    return (
        <StylesMovieChairs /*HTML tag */>

            <SelectChairs /*HTML tag */>
                {
                    loader &&
                    <StylesLoader>
                        <Loader />
                    </StylesLoader>
                }
                <StylesCinema width={width}>
                    <TextScreen>
                        Pantalla
                    </TextScreen>
                    {
                        chairs &&
                        chairs.map((el, index) => (
                            <>
                                <PositionChair row={index} position={false} />
                                <>
                                    {
                                        el.map((element, i) => (
                                            <PositionChair row={false} position={i} />
                                        ))
                                    }
                                </>

                            </>
                        ))
                    }
                </StylesCinema>

            </SelectChairs>
        </StylesMovieChairs>
    )
}

export default MovieChairs;
