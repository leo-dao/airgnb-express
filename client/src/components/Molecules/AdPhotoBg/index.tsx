import React from "react";
import Arrow from "../../Atoms/Arrow";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import styled from 'styled-components';

const Container = styled.div`
    width: 800px;
    height: 500px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 1px black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    object-fit: cover;
`;

const PhotoContainer = styled.div`
    background-color: transparent;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

interface Props {
    left: () => void;
    right: () => void;
    image: React.ReactNode;
}

const AdPhotoBg = (props: Props) => {

    return (
        <Container>
            <Arrow
                direction={props.left}
                image={<ArrowLeftOutlined />}
            />
            <PhotoContainer>
                {props.image}
            </PhotoContainer>
            <Arrow
                direction={props.right}
                image={<ArrowRightOutlined />}
            />
        </Container>
    )
}

export default AdPhotoBg