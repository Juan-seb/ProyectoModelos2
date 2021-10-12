import styled from "styled-components"

const LoginStyles = styled.section`
        z-index: 20;
        display: ${(props) => props.menuUser ? "flex" : "none"};
        width: 100vw;
        height: 100vh;
        top: 0;
        position: fixed;
        background-color: rgba(0,0,0,.65);
        @media (min-width: 769px) {
            left:0;
        }

        @media (min-width: 1024px) {
            left: 0;
        }

        &>.loader{
            border-color: white;
        }
    `;

const LoginForm = styled.div`
        z-index: 25;
        width: 86%;
        height: fit-content;
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: white;
        margin: 4.5rem auto;
        padding: 0;
        border-radius: 4px;

        &>.triangle{
            position: absolute;
            right: 0;
            top: -6%;
            width: 0;
            height: 0;
            border-bottom: 24px solid rgb(80,25,80);
            border-left: 17px solid transparent;
            border-right: 17px solid transparent;

        }

        & .text{
            width: 100%;
            margin: 0;
            margin-bottom: .5rem;
            padding: 1rem 0;
            color: white;
            background-color: rgb(80,25,80);
            border: none;
        }

        &>form{
            display: flex;
            flex-direction: column;
            width: 90%;
            margin: 0 auto;
        }

        & button{
            width: 50%;
            margin: .5rem auto;
            height: 30px;
            background-color: white;
            border: thin solid rgb(80,25,80);
            border-radius: 5px;
            cursor: pointer;
            transition: background-color .5s;
            transition: color .5s;
        }

        & button:hover{
            background-color: rgb(190,85,190);
            color: white;
        }

        
        

        @media (min-width:769px){
            width: 400px;
            margin: 4.5rem 0;
            margin-right: 7.85vw;
            margin-left: auto;
        }

        @media (min-width:1024px){
            width: 400px;
            margin: 4.5rem 0;
            margin-right: 3vw;
            margin-left: auto;
        }
    `;

const Session = styled.div`
    position: relative;
    z-index: 25;
    width: 55%;
    height: fit-content;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: rgb(80,25,80);
    margin: 4.5rem auto;
    margin-right: 7.2%;
    padding: 0;
    border-radius: 4px;
    color: white;
`;

const Triangle = styled.div`
    position: absolute;
    right: 0;
    top: -38%;
    width: 0;
    height: 0;
    border-bottom: 24px solid rgb(80,25,80);
    border-left: 17px solid transparent;
    border-right: 17px solid transparent;
`;

export { LoginStyles, LoginForm, Session, Triangle }