import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import User from "../../Molecules/UserInfo/interfaces";
import UserInfo from "../../Molecules/UserInfo"
import Error from "../../Molecules/Error/index";
import AdCardList from "../../Organisms/AdCardList/index";
import { Ad } from "../../../utils/interfaces";
import styled from "styled-components";
import useFindUser from "../../../hooks/useFindUser";
import axios from "axios";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    border-radius: 10px;
    box-shadow: 0px 0px 1px black;
    background-color: white;
`


const userProfileById = (userId: string) => {
    return axios.get('/getUsers').then((res) => {
        // @ts-ignore
        return res.data.filter(user => user._id === userId)[0]
    })
}

const UserProfile = () => {

    let params = useParams();

    const [currentUser, setUser] = React.useState<any>();

    useEffect(() => {
        if (!params.userId) {
            setUser(undefined);
            return
        }
        userProfileById(params.userId)
            .then((u) => setUser(u))
            .catch((err) => { console.log(err); setUser(undefined) })
    }, [params.userId]);

    const [ads, setAds] = React.useState<Ad[]>([]);
    React.useEffect(() => {
        axios.get('/getAds')
            .then(function (res) {
                setAds(res.data);
            })
    }, [])

    if (!currentUser) {
        return <Error msg="Sorry, this user does not exist" />
    }


    const userAds = ads.filter(ad => ad.user._id === currentUser._id);
    const numAds = userAds.length;
    const ad = numAds === 1 ? "ad" : "ads";

    return (
        <Container>
            <InfoContainer>
                <UserInfo
                    user={currentUser}
                />
            </InfoContainer>
            <h1> {numAds} available {ad}</h1>
            {/* <AdCardList
                inputType="user"
                data={userAds} /> */}
        </Container >

    )
}

export default UserProfile;