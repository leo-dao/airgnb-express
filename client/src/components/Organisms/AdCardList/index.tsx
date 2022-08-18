import React from "react";
import AdCard from "../AdCard";
import { Ad } from "../../../utils/interfaces";
import type { AdCardProps } from "../AdCard/index";
import { List } from 'antd';
import styled from "styled-components";
import axios from "axios";

const SearchResultStyled = styled.h1`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`

const StyledList = styled(List)`
    width: 100%;
    .ant-list-item {
        transition: all 0.3s ease-in-out;
        :hover {
            transform: translateY(-5px);
        }
    }
`

interface Props {
    inputType: string,
}

const AdCardList = (props: Props) => {

    const [allAds, setAllAds] = React.useState<Ad[]>([]);
    React.useEffect(() => {
        axios.get('/getAds')
            .then(function (res) {
                setAllAds(res.data);
            })
    }, []);


    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    // TODO: Use regex to search for the search term
    // Filter by price?

    const ads: Ad[] = [];

    allAds.forEach((ad) => {

        // if there is a category in the url, filter by category
        if (params.category) {
            if (ad.category === params.category) {
                ads.push(ad);
            }
        }

        if (params.search) {
            if (ad.title.toLowerCase().includes(params.search.toLowerCase())) {
                ads.push(ad);
            }
        }
        if (params.location) {
            console.log(ad);
            if (ad.user.location?.toLowerCase() === (params.location.toLowerCase())) {
                ads.push(ad);
            }
        }

    })

    const result = ads.length === 1 ? " result" : " results";

    if (props.inputType === "user") {
        //setAllAds(adData);       
        // If the adCards is used in a user profile, don't use params
    }

    return (
        <Container>
            <SearchResultStyled>{ads.length} {result}</SearchResultStyled>
            <StyledList
                grid={{
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 4,
                    xl: 5,
                    xxl: 6,
                }}
                dataSource={ads}
                renderItem={((item: any) =>
                    <List.Item >
                        <AdCard
                            _id={item._id}
                            images={item.images}
                            title={item.title}
                            description={item.description}
                            user={item.user}
                            price={item.price}
                        />
                    </List.Item>)}
            />
        </Container>
    )
}

export default AdCardList;