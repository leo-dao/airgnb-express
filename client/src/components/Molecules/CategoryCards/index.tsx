import React from "react";
import categories from "../../../utils/categories";
import styled from "styled-components";
import grey from "../../../assets/grey.jpeg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 80%;

    @media (max-width: 768px) {
        width: 100%;
    }
    `;

const StyledTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    `;

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    `;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 180px;
    margin-bottom: 1rem;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: translateY(-1px);
        filter: brightness(0.9);
    }

    @media (max-width: 768px) {
        width: 150px;
        height: 150px;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 130px;

    @media (max-width: 768px) {
        height: 100px;
    }
`;

const StyledImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 20px ;
    `;

const StyledName = styled.h1`
    font-size: 1.5rem;
    color: #333;
    `;

const CategoryCards = () => {

    // ignoring the 'other' category
    const allCategories = categories.slice(0, categories.length - 1);

    return (
        <Container>
            <StyledTitle>Browse through popular categories</StyledTitle>
            <CardsContainer>
                {allCategories.map((category) => {
                    return (
                        <Card
                            onClick={() => {
                                window.location.href = `/listings?category=${category.name}`;
                            }}>
                            <ImageContainer>
                                <StyledImage
                                    src={category.img}
                                    alt={category.name}
                                />
                            </ImageContainer>
                            <StyledName>{category.name}</StyledName>
                        </Card>
                    )
                })}
            </CardsContainer>
        </Container>
    );
};

export default CategoryCards;