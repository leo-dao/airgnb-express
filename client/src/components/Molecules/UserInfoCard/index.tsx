import React from "react";
import User from "../UserInfo/interfaces";
import AvatarLink from "../../Atoms/AvatarLink";
import UserInfo from "../UserInfo";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

interface UserInfoProps {
    user: User;
    fontSize?: number;
    avatarSize?: number;
    type?: string;
}

const UserInfoCard = (props: UserInfoProps) => {

    const avatarSize = props.avatarSize ? props.avatarSize : 50;

    return (
        <Container>
            <TopContainer>
                <AvatarLink
                    user={props.user}
                    size={avatarSize}
                />
                <UserInfo
                    type={"card"}
                    user={props.user}
                />
            </TopContainer>
        </Container >
    )
}

export default UserInfoCard;