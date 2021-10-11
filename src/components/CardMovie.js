import styled from "styled-components"
import { TextTwo as Text, Text as Title, Subtitle, StylesTags } from "./styles/GeneralStyles";

const CardStylesContainer = styled.div`
    width: 86.6%;
    height: fit-content;
    margin-top: 1.5rem;
    box-shadow: 8px 8px 5px -6px rgba(199,199,199,1);
    cursor: pointer;

    @media (min-width:769px){
        width: 24%;

    }
`;

const CardStyles = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: .5rem;
    border: thin solid rgb(80,25,80);
    border-radius: 5px;

    @media (min-width:768px){
        flex-direction: column;
    }
    
`;

const StylesImage = styled.div`
    width: 30%;
    max-width:30%;
    height: 100%;

    &>img{
        width:100%;
        max-width:100%;
        height: auto;
        display: block;
        border-radius: 5px;
    }

    @media (min-width:768px){
        &>img{
            margin-bottom: .5rem;
        
        }
    }

`;

const StylesContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1rem;

    &>.content-tags{
        display: flex;
        
    }

    @media (min-width:768px){
        padding-left: 0;
    }

`;

const CardMovie = ({ el,history }) => {

    let allGenres = ""

    el.generos && el.generos.forEach(el => {
        allGenres += `${el.gen_v_nombre},`
    });

    const goToMovie = () => {
        console.log(window.location.hash.split("/"));
        /*Use this option to go to the desired route */
        history.push({pathname: `${history.location.pathname}/pelicula/${el.pel_i_id}`})
    }

    return (
        <CardStylesContainer onClick={goToMovie}>
            <CardStyles>
                <StylesImage>
                    <img src={`http://127.0.0.1:5000/static/peliculas/${el.pel_v_ruta_poster}`} alt={el.pel_v_titulo} />
                </StylesImage>
                <StylesContent>
                    <Title style={{
                        margin: "0",
                        marginBottom: ".5rem",
                        fontSize: "1.125rem"
                    }}>
                        <b>{el.pel_v_titulo}</b>
                    </Title>
                    <Text>Fecha estreno: {el.pel_d_estreno}</Text>
                    <Text>Generos: {allGenres.slice(0, -1) + "."}</Text>
                      <div className="content-tags">
                        <StylesTags>
                            <Subtitle>{el.pel_i_duracion}</Subtitle>
                        </StylesTags>
                        <StylesTags>
                            <Subtitle>Edad minima: {el.pel_i_edad_minima}</Subtitle>
                        </StylesTags>
                    </div>
                </StylesContent>
            </CardStyles>
        </CardStylesContainer>
    )
}

export default CardMovie
