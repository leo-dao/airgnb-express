import React from "react";
import styled from "styled-components";
import Button from "../../Atoms/Button";

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
    width: 100vw;
    background-image: url('https://static.bhphotovideo.com/explora/sites/default/files/21199.jpg');
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


// Insurance for your gear

// Check out other listings to get inspired


const LeaserInfo = () => {

    return (
        <Container>
            <CTAContainer>
                <TextContainer>
                    <h1>Lease your gear safely and easily today</h1>
                    <h2> Leave it in the care of local musicians
                        for a day, a week, a month, and make some extra cash</h2>

                </TextContainer>
                <Button
                    text="Join now"
                    onClick={() => { window.location.href = "/login"; }}
                />
                <Button
                    text="Create a listing"
                    onClick={() => { window.location.href = "/postAd"; }}
                    secondary
                />
            </CTAContainer>
            <div>
                <h1>How leasing works</h1>
                <div>
                    <h2>1. List the gear you want to rent out and set your rental price/availability</h2>
                    <h2>2. Wait for requests from other musicians</h2>
                    <h2>3. Accept a request and enjoy your extra cash!</h2>
                    <h2>4. Receive the gear back and leave a review on the renter for future leasers</h2>

                </div>
                <div style={{ marginTop: "100px" }}>
                    <h2>Going out on the road and leaving a guitar behind? </h2>
                    <h2>Have a synth you rarely use anymore but don't want to sell?</h2>
                    <h2>Upgrading your studio and have an extra pair of monitors? </h2>
                    <h1> Why not create a listing on AirGnB and start earning money</h1>
                </div>
            </div>
        </Container>
    );
};

export default LeaserInfo;