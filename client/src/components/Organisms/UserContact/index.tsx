import React from "react";
import Button from "../../Atoms/Button";
import ChatButton from "../../Atoms/ChatButton";
import styled from "styled-components";
import { Row } from "antd";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 3%;
    width: 80%;
    `;


const UserContact = () => {

    const contactUser = () => {
        console.log("Contact user");
    }

    return (
        <Container>
            <Button
                text="Rent"
                onClick={() => window.location.href = '/rent'}
            />
            <ChatButton
                onClick={contactUser} />
        </Container>
    )
}

export default UserContact;