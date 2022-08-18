import React, { useState } from "react";
import type { AdCardProps } from "../AdCard/index";
import AdPhotoBg from "../../Molecules/AdPhotoBg";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const MainPhotoStyled = styled.img`
    max-width: 800px;
    max-height: 500px;
    object-fit: cover;
    border-radius: 10px;
`;

const SubImagesStyled = styled.div`
    display: flex;
    width: 800px;
    height: 120px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 5%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 1px 0px black;
`;

const SubImageStyled = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 10px;
    margin: 5px;
    cursor: pointer;
`;

const AdPhotos = (props: AdCardProps) => {

    const [image, setImage] = useState(props.images[0].img);  // first image is the default
    let index = props.images.findIndex(img => img.img === image);

    const goLeft = () => {
        index--;
        index = index < 0 ? props.images.length - 1 : index;
        setImage(props.images[index].img);
    }

    const goRight = () => {
        index++
        index = index > props.images.length - 1 ? 0 : index;
        setImage(props.images[index].img);
    }

    return (
        <Container>
            <AdPhotoBg left={goLeft} right={goRight} image=
                {<MainPhotoStyled src={image} />} />
            <SubImagesStyled>
                {props.images.map(image => {
                    return <SubImageStyled src={image.img}
                        onClick={() => { setImage(image.img); }} />
                })}
            </SubImagesStyled>
        </Container>
    )
}
export default AdPhotos;