import styled from "styled-components"

const SearchBarStyles = styled.div`
    width: 80%;
    height: 2.2rem;
    margin: .7rem auto;
    border-radius: 5px;
    border: thin solid rgb(80,25,80);
    padding: .3rem .4rem;
    display: flex;

    &>.logo{
        width: 10%;
        display: flex;
        justify-content: flex-end;
        margin-right: 5px;
    }
`;

const InputSearch = styled.input`
    border: none;
    font-size: 1rem;
    width: 90%;
    height: 100%;

    &:focus{
        outline: none;
    }
`;



const SearchBar = () => {
    return (
        <SearchBarStyles>
            <InputSearch type="text" placeholder="Busqueda" />
            <div className="logo">🔎</div>
        </SearchBarStyles>
    )
}

export default SearchBar;
