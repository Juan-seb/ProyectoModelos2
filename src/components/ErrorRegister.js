import styled from "styled-components"

const SpanError = styled.span`
    margin-top: -.49rem;
    font-size: 0.875rem;
    background-color: ${props => props.bgColor};
    color: white;
    display: block;
    border-radius: 6px;
    
    &>pre{
        margin: 0;
        padding: 0.5rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`;

const ErrorRegister = ({ bgColor, message }) => {
    return (
        <SpanError bgColor={bgColor}>
            <pre>
                {message}
            </pre>
        </SpanError>
    )
}

export default ErrorRegister
