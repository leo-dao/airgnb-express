import React from "react";
import styled from 'styled-components';

const StyledArrow = styled.div`
    font-size: 30px;
    color: white;
    border-radius: 40px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: grey;
    opacity: 0.5;
    z-index: 1;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: black;
        opacity: 0.8;
    }
`;

interface ArrowProps {
    direction: () => void;
    image: React.ReactNode;
}

const Arrow = (props: ArrowProps) => {
    return (
        <StyledArrow onClick={props.direction}>
            {props.image}
        </StyledArrow>
    )
}

export default Arrow;