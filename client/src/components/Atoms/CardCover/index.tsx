import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 45%;
`
const StyledCardCover = styled.img`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
    width: 100%;
    height: 100%;
`;
interface Props {
    image: string
}

const CardCover = (props: Props) => {

    return (
        <Container>
            <StyledCardCover src={props.image} />
        </Container>
    )
}

export default CardCover;