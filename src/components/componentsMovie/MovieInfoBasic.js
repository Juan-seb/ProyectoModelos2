import styled from "styled-components"

const MovieContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin: 0;

    @media (min-width: 768px){
        background-image: url("${props => props.imgBanner}");
        background-repeat: no-repeat;
        background-size: cover;
        height: fit-content;
        padding: 1.85rem 3vw;
        margin-bottom: 2rem;
    }

`;

const MovieImage = styled.div`
    width: 100%;
    height: fit-content;
    margin: 0;

    &>img{
        width:100%;
        max-width:100%;
        height: auto;
        display: block;
        object-fit: cover;

        @media (min-width: 401px){
            height: 400px;
        }
    
    }
    
    @media (min-width: 769px){
        display: none;
    }


`;

const MovieInfo = styled.div`
    width: 86.6%;
    display: flex;
    height: auto;
    margin: .5rem auto;

    @media (min-width: 768px){
        width: 100%;
        color: white;
        margin: 0;
        height: 281px;
    }
`;

const StylesImage = styled.div`
    max-width:30%;

    &>img{
        width:100%;
        max-width:100%;
        height: auto;
        display: block;
        border-radius: 5px;
        object-fit: cover;

        @media (min-width: 768px){
            max-width:200px;
            transform: scale(1.2);
            
        }
    }

    @media (min-width: 768px){
        width: 250px;
        height: 30vh;
    }
    

`;

const StylesContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    
    @media (min-width: 769px){
        margin-top: 9rem;
        width: 80%;
    }

`;

const TextMovie = styled.p`
    font-size: 0.875rem;
    margin: 0;
    margin-top: .3rem;

    @media (min-width:769px){
        margin-top: 0;
        font-size: 1.1rem;
    }
`;

const TitleMovie = styled.p`
    margin: 0;
    margin-bottom: .5rem;
    font-size: 1.2rem;

    @media (min-width:769px){
        font-size: 1.75rem;
    }
`;


const MovieInfoBasic = ({ data }) => {

    let allGenres = "";

    data.generos && data.generos.forEach(el => {
        allGenres += `${el.gen_v_nombre},`
    });


    return (
        <MovieContainer imgBanner={`http://127.0.0.1:5000/static/peliculas/${data.pel_v_ruta_banner}`}>
            <MovieImage>
                <img src={`http://127.0.0.1:5000/static/peliculas/${data.pel_v_ruta_banner}`} alt={data.pel_v_titulo} />
            </MovieImage>
            <MovieInfo>
                <StylesImage>
                    <img src={`http://127.0.0.1:5000/static/peliculas/${data.pel_v_ruta_poster}`} alt={data.pel_v_titulo} />
                </StylesImage>
                <StylesContent>
                    <TitleMovie>
                        <b>{data.pel_v_titulo}</b>
                    </TitleMovie>
                    <TextMovie>Fecha estreno: {data.pel_d_estreno}</TextMovie>
                    <TextMovie>Generos: {allGenres.slice(0, -1) + "."}</TextMovie>
                    <TextMovie>Duracion: {data.pel_i_duracion}</TextMovie>
                    <TextMovie>Recomendado para mayores de {data.pel_i_edad_minima} años</TextMovie>
                </StylesContent>
            </MovieInfo>
        </MovieContainer>
    )
}

export default MovieInfoBasic
