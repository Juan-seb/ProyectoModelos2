import styled from "styled-components";

const HeaderStyles = styled.header`
        width: 100%;
        padding: 0 6.7%;
        height: 60px;
        position: sticky;
        top: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 20;
        background-color: rgba(0,0,0,.85);
        @media (min-width: 768px){
            display: none;
        }

        & .title{
            font-size: 20px;
            margin: 0;
            text-align: center;
            color: white;
            cursor: pointer;
        }

        &>.button-container{

            cursor: pointer;
            height: 1.875rem;
            width: 1.875rem;
            position: absolute;
            z-index: 25;
            left: 7%;

            & span{
                background-color: #fff;
                display: block;
                height: 2px;
                width: 100%;
                position: absolute;
            }

            & span:nth-child(1){
                top: 5px;
            }

            & span:nth-child(2){
                top: calc(50% - 1px);
            }

            & span:nth-child(3){
                bottom: 5px;
            }
        }
    `;

export {HeaderStyles}