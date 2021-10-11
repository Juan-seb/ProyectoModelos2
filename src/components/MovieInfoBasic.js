import { Text as Title, TextTwo as Text } from "./styles/GeneralStyles"
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
        height: 47vh;
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
        width: 60%;
        color: white;
    }
`;

const StylesImage = styled.div`
    max-width:30%;
    height: 100%;

    &>img{
        width:100%;
        max-width:100%;
        height: auto;
        display: block;
        border-radius: 5px;
        object-fit: cover;
    }

    @media (min-width: 768px){
        max-width:40%;
        height: 100%;
    }
    

`;

const StylesContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    
    @media (min-width: 768px){
        margin-top: 10rem;

    }

`;


const MovieInfoBasic = ({ data }) => {

    let allGenres = "";

    data.generos && data.generos.forEach(el => {
        allGenres += `${el.gen_v_nombre},`
    });


    return (
        <MovieContainer imgBanner={data.pel_v_ruta_banner}>
            <MovieImage>
                <img src={data.pel_v_ruta_banner} alt={data.pel_v_titulo} />
            </MovieImage>
            <MovieInfo>
                <StylesImage>
                    <img src={data.pel_v_ruta_imagen} alt={data.pel_v_titulo} />
                </StylesImage>
                <StylesContent>
                    <Title style={{
                        margin: "0",
                        marginBottom: ".5rem",
                        fontSize: "1.2rem"
                    }}>
                        <b>{data.pel_v_titulo}</b>
                    </Title>
                    <Text>Fecha estreno: {data.pel_d_estreno}</Text>
                    <Text>Generos: {allGenres.slice(0, -1) + "."}</Text>
                    <Text>Duracion: {data.pel_i_duracion}</Text>
                    <Text>Recomendado para mayores de {data.pel_i_edad_minima} años</Text>
                </StylesContent>
            </MovieInfo>
        </MovieContainer>
    )
}

export default MovieInfoBasic
