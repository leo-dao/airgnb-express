import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    `;

const Box = styled.div`
    text-align: center;
    background-image: linear-gradient(to right, #005c97, #363795);
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    width: 350px;
    height: 200px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.5);
    display: flex;  
    flex-direction: column;
    gap: 10px;
    max-width: 70%;
    `;

const Title = styled.a`
    font-weight: bold;
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1rem;
    transition: 0.3s;
    &:hover {
        color: #f3f3f3;
        transform: scale(1.02);
    }
`;

const StyledText = styled.p`
    font-size: 20px;
    text-align: center;
    color: white;
    `;


const Pitch = () => {

    return (
        <Container>
            <Box>
                <Title href="/leaser-info">
                    Become a leaser
                </Title>
                <StyledText>
                    Start leasing your gear on your
                    own terms and earn money.
                </StyledText>
            </Box>
            <Box>
                <Title href="/renter-info">
                    Start renting
                </Title>
                <StyledText>
                    Find the gear you need for your next project
                    from local musicians.
                </StyledText>
            </Box>
        </Container>
    );
};

export default Pitch;