import React from "react";
import AdCard from "../../Organisms/AdCard";
import { Ad, AdImage, User } from "../../../utils/interfaces";
import AdPostForm from "../../Organisms/AdPostForm";
import Error from "../../Molecules/Error";
import useFindUser from "../../../hooks/useFindUser";
import { useNavigate } from 'react-router-dom';
import grey from "../../../assets/grey.jpeg";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 80px;

    @media (max-width: 800px) {

    }
`
const CardStyled = styled.div`
display: none;
`

const PostAd = () => {

    const navigate = useNavigate();

    // Getting the user object and stringifying it 
    // to send it as formData to server
    const user: User = useFindUser()!;
    let userStr: string = JSON.stringify(user);

    const initialState = {
        title: '',
        category: '',
        description: '',
        price: '0',
        user: '',
    }

    const [formData, updateFormData] = React.useState<any>(initialState);
    const [files, updateFiles] = React.useState<File[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({
            ...formData,
            [e.target.placeholder.toLowerCase()]: e.target.value
        })
    }

    const handleCategory = (e: any) => {
        updateFormData({
            ...formData,
            category: e.key
        })
    }

    const handleFiles = (e: any) => {
        updateFiles(e.target.files);

        // Appending user info as JSON here
        // since leads to undefined outside of a function (?)
        updateFormData({
            ...formData,
            user: userStr
        })
    }

    var fileNames: string[] = Array.from(files).map((file: File) => file.name);

    const createAd = (e: any) => {

        e.preventDefault();

        const data = new FormData();

        for (const [key, value] of Object.entries(formData)) {
            // "Overriding" ts who sees value as unknown (?)
            if (typeof value === 'string') {
                data.append(key, value);
            }
        }

        Array.from(files).forEach(file => {
            data.append('images', file, file.name);
        });

        axios({
            method: 'post',
            url: '/postAd',
            data: data,
            headers: { "Content-Type": "multipart/form-data" }
        }).then(function (res) {
        })
            .catch(function (res) {
                console.log(res);
            });
        navigate('/');
    }

    const displayImage = [{
        _id: 'dummy',
        img: grey,
    }];

    if (!user) {
        return <Error msg='Sign in to post an ad' />
    }

    return (
        <Container>
            <AdPostForm
                setTitle={handleChange}
                titleDisabled={formData.title.length < 3}
                setDescription={handleChange}
                descriptionDisabled={formData.description.length < 10}
                setPrice={handleChange}
                priceDisabled={parseInt(formData.price) < 10}
                setCategory={handleCategory}
                setImages={handleFiles}
                fileNames={fileNames}
                imagesDisabled={files === undefined}
                category={formData.category}
                createAd={createAd}
            />
            <CardStyled>
                <AdCard
                    disabled={true}
                    title={formData.title}
                    description={formData.description}
                    price={parseInt(formData.price)}
                    _id={'dummy'}
                    user={user}
                    images={displayImage}
                />
            </CardStyled>
        </Container>
    )
}

export default PostAd;