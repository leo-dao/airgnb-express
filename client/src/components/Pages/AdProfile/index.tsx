import React, { useState } from "react";
import { useParams } from "react-router-dom";
import type { AdCardProps } from "../../Organisms/AdCard/index";
import Error from "../../Molecules/Error/index";
import AdPhotos from "../../Organisms/AdPhotos";
import UserInfo from "../../Molecules/UserInfoCard/index";
import Availability from "../../Molecules/Availability";
import Description from "../../Molecules/Description";
import Button from "../../Atoms/Button";
import useFindUser from "../../../hooks/useFindUser";
import useFindImages from "../../../hooks/useFindImages";
import axios from "axios";
import { Ad } from "../../../utils/interfaces";
import styled from "styled-components";

const CenterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    font-size: 35px;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const InfoContainer = styled.div`
    display: flex;  
    flex-direction: column;
    margin-left: 30px;
    border: 0.5px solid black;
    border-radius: 10px;
    background-color: white;
    padding: 20px;
    width: 400px;
`

const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const TotalPrice = styled.b`
    font-size: 20px;
`

const AdInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 30px;
    border-top: 0.5px solid black;
    height: 100%;
`

const StyledHeader = styled.h1`
    font-size: 28px;
    margin-top: 10px;
    margin-bottom: 20px;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;   
    align-items: center;
    width: 100%;
    gap: 15px;
`

const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`

const AdProfile = () => {

    let user: any = useFindUser();

    let params = useParams();

    const [ads, setAds] = React.useState<Ad[]>([]);

    React.useEffect(() => {
        axios.get('/getAds')
            .then(function (res) {
                setAds(res.data);
            })
    }, [])

    const currentAd = (ads.filter(ad => ad._id === params._id))[0];

    const [startDate, setStartDate] = useState(new Date());

    const [endDate, setEndDate] = useState(new Date());

    if (!currentAd) {
        return <Error msg="Sorry, this ad does not exist" />
    }

    var numDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
    var totalPrice = currentAd.price * numDays;
    var price = "TOTAL: " + totalPrice.toString() + " $";

    var booking = "/booking/" + currentAd._id + "+" + startDate.toISOString().slice(0, 10) + "+" + endDate.toISOString().slice(0, 10);
    var signIn = '/sign-in';

    var url = user ? booking : signIn;

    return (
        <CenterContainer>
            <Title>{currentAd.title}</Title>
            <Container>
                <AdPhotos
                    _id={currentAd._id}
                    user={currentAd.user}
                    images={currentAd.images}
                    title={currentAd.title}
                    description={currentAd.description}
                    price={currentAd.price}
                />
                <InfoContainer>
                    <PriceContainer>
                        <TotalPrice>{price}</TotalPrice>
                        <Availability
                            startDate={startDate}
                            endDate={endDate}
                            setStartDate={setStartDate}
                            setEndDate={setEndDate}
                        />
                        <Button
                            disabled={endDate.getTime() === startDate.getTime()}
                            text="Continue"
                            goTo={url}
                            state={{
                                totalPrice: totalPrice,
                                numDays: numDays,
                            }}
                        />
                    </PriceContainer>
                    <AdInfoContainer>
                        <StyledHeader>Information: </StyledHeader>
                        <Info>
                            <Description description={currentAd.description} />
                            <UserContainer>
                                <UserInfo
                                    user={currentAd.user}
                                    fontSize={18}
                                    avatarSize={60}
                                />
                            </UserContainer>
                        </Info>
                    </AdInfoContainer>
                </InfoContainer>
            </Container>
        </CenterContainer >
    )
};

export default AdProfile;

// check which div can be removed

// top box: price total, start date, end date, then add rent (continue) button + add to favorites button
// bottom box: Info: Price/day, Description, Smaller user contact