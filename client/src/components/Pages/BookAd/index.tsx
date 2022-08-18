import React from "react";
import styled from "styled-components";
import Button from "../../Atoms/Button";
import useFindUser from "../../../hooks/useFindUser";
import Error from "../../Molecules/Error";
import axios from "axios";
import { useParams } from "react-router-dom";
import { LineOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Ad } from "../../../utils/interfaces";

const Container = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
`

const Divider = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 15%;
    margin-right: 15%;
`

const AdInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`

const Image = styled.img`
    max-width: 400px;
    max-height: 250px;
    object-fit: cover;
    border-radius: 10px;
`

const Price = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`

const Dates = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`

const DateStyled = styled.div`
    border: 1px solid black;
    padding: 5px;
    text-align: center;
    border-radius: 3px;
    width: 95px;
`

const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

interface State {
    totalPrice: number;
    numDays: number;
}

const BookAd = () => {

    let user = useFindUser();
    let params = useParams();

    let _id = params._id;

    const [ad, setAd] = React.useState<Ad>();

    useEffect(() => {
        axios.post('/getAd', {
            id: _id
        }).then(res => {
            setAd(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
        , [_id]);

    let startDate = params.startDate!;
    let endDate = params.endDate!;

    const location = useLocation();
    const state = location.state as State;
    const { totalPrice } = state;
    const { numDays } = state;

    if (!user) {
        return <Error msg='You must be logged in to book an ad' />
    }

    const bookAd = () => {
        axios.delete('/bookAd',
            { data: { adId: _id } })
    }


    return (
        <Container>
            <h1>Overview:</h1>
            <Divider>
                <AdInfo>
                    <h2>{ad?.title}</h2>
                    <Image src={ad?.images[0].img} />
                </AdInfo>
                <Price>
                    <Dates>
                        <DateStyled>{startDate}</DateStyled>
                        <LineOutlined style={{ fontSize: "25px" }} />
                        <DateStyled>{endDate}</DateStyled>
                    </Dates>
                    <h3>{numDays} days * {ad?.price}$ = {totalPrice}$</h3>
                </Price>
            </Divider>
            <ButtonContainer>
                <Button
                    text="Pay"
                    onClick={bookAd}
                />
            </ButtonContainer>
        </Container>
    )
};

export default BookAd;