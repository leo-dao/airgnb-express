import React from "react";
import AdCardList from "../../Organisms/AdCardList";
import { Ad } from "../../../utils/interfaces";
import Search from "../../Organisms/Search";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    `;

const SearchContainer = styled.div`
    width: 100%;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 0px 1px 6px -2px black;
`;


const Listings = () => {

    return (
        <Container>
            <SearchContainer>
                <Search />
            </SearchContainer>
            <AdCardList
                inputType="search"
            />
        </Container>
    )
}

export default Listings;