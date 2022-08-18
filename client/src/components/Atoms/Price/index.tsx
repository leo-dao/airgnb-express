import React from "react";
import styled from "styled-components";

const StyledPrice = styled.div`
    color: white;
    background-color: #506bcd;
    border-radius: 5px;
    width: 35%;
    text-align: center;
    padding: 5px;
    font-size: ${(props: PriceProps) => props.type === "card" ? "13px" : "17px"};
`;

interface PriceProps {
    price?: number;
    width?: number;
    type?: string;
}

const Price = (props: PriceProps) => {
    return (
        <StyledPrice type={props.type}>
            <b>{props.price}$</b> / day
        </StyledPrice>
    )
}
export default Price;