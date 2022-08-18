import React from 'react';
import { Link } from "react-router-dom";
import UserProps from "../../Molecules/UserInfo/interfaces";
import UserInfo from '../../Molecules/UserInfoCard';
import CardCover from '../../Atoms/CardCover';
import Price from '../../Atoms/Price';
import styled from 'styled-components';
import { User, Ad, AdImage } from '../../../utils/interfaces';

const CardWrapper = styled.div`
    background-color: white;
    border-radius: 10px;
    height: 380px;
    width: 240px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: auto;
`;

const CardTitle = styled.div`
    color: #333;
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    height: 70px;
`;

const UserInfoWrapper = styled.div`
    margin-top: 5%;
`;

export interface ImageProps {
    img: string,
    _id: string,
}

export interface AdCardProps {
    _id: string;
    images: AdImage[];
    title: string;
    description: string;
    user: User;
    price: number;
    disabled?: boolean;
};

const AdCard = (props: AdCardProps) => {

    const titleLen = props.title.length;
    const title = titleLen > 30 ? props.title.substring(0, 30) + '...' : props.title;

    const Card = (
        <CardWrapper>
            <CardCover image={props.images[0].img} />
            <CardTitle>
                {title}
            </CardTitle>
            <Price price={props.price} type={"card"} />
            <UserInfoWrapper>
                <UserInfo
                    user={props.user}
                    type={"card"}
                />
            </UserInfoWrapper>
        </CardWrapper >
    );

    if (props.disabled) {
        return (
            <div>
                {Card}
            </div>
        );
    }
    return (
        <Link to={`/listings/${props._id}`} target="_blank">
            {Card}
        </Link >
    )
};

export default AdCard;