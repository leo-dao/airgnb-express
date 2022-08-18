import React from "react";
import styled from "styled-components";
import Button from "../../Atoms/Button";
import CategoryCards from "../../Molecules/CategoryCards";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CTAContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 100%;
    background-image: url('https://cdn.schoolofrock.com/img/hero-large/guitar-lessons1527266771.jpg');
    background-size: cover;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    & > * {
        color: white;
    }
    `;

const Explanation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const RenterInfo = () => {
    return (
        <Container>
            <CTAContainer>
                <TextContainer>
                    <h1>Start renting now</h1>
                </TextContainer>
                <Button
                    text="Join now and start renting today"
                    onClick={() => { window.location.href = "/login"; }}
                />
            </CTAContainer>
            <div>
                <h1>How renting works</h1>
                <div>
                    <h2>1. Find the piece of equipment you want to rent out in your area</h2>
                    <h2>2. Send a request to the owner with your desired rental period</h2>
                    <h2>3. Once your request is accepted, pickup the gear and enjoy!</h2>
                    <h2>4. Return the item and leave a review for future renters</h2>
                </div>
                <h1>Why you should rent</h1>
                <div>
                    <h2>1. Try it before you buy it</h2>
                    <h2>2. It's cheaper, more convenient, and better for the environment</h2>
                    <h2>3. Support local musicians</h2>
                    <h2>4. So rent that one pedal or snare you've been eyeing for a while</h2>
                </div>
            </div>
            <CategoryCards />
            {/* featured ads */}
        </Container>
    );
};

export default RenterInfo;