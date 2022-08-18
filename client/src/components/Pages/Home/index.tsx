import React from "react";
import Search from "../../Organisms/Search";
import styled from "styled-components";
import VideoBg from "../../Organisms/VideoBg";
import CategoryCards from "../../Molecules/CategoryCards";
import Pitch from "../../Molecules/Pitch";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    `;

const Main = styled.div`
    position: absolute;
    margin-top: 100px;
    top:0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1; 
    display: flex;
    flex-direction: column;
    text-align: center;

    @media (max-width: 768px) {
        margin-top: 60px;
        margin-bottom: 160px;
    }
`

const Title = styled.h1`
    font-weight: bold;
    font-size: 2.5rem;
    color: white;
    margin-bottom: 0.7rem;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
    ;
`

const Subtitle = styled.h2`
    font-size: 1.8rem;
    padding: 10px;
    color: #f9f9f9;
    margin-bottom: 5rem;

    @media (max-width: 900px) { 
        font-size: 1rem;
        margin-bottom: 5px;
    }
`

const Home = () => {

    return (
        <Container>
            <VideoBg />
            <Main>
                <Title>Lend or borrow musical instruments</Title>
                <Subtitle>Connect with local musicians</Subtitle>
                <Search />
            </Main>
            <CategoryCards />
            <Pitch />
        </Container >
    )
};

export default Home;