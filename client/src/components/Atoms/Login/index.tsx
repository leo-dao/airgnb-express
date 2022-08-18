import React from "react";
import styled from "styled-components";

const Container = styled.div`
    top: 100px; 

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 10%;
    margin-bottom: 10%;

    @media (max-width: 600px) {

    }
    `

interface LoginProps {
    form: React.ReactNode;
}

const Login = (props: LoginProps) => {

    return (
        <Container>
            {props.form}
        </Container>
    )
}

export default Login;