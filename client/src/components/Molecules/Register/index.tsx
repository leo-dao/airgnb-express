import React, { useEffect } from "react";
import Input from "../../Atoms/Input";
import Password from '../../Atoms/Password';
import Button from "../../Atoms/Button";
import styled from "styled-components";
import Login from "../../Atoms/Login";
import ErrorMessage from "../../Atoms/ErrorMessage";
import FileSubmit from "../FileSubmit"
import { AxiosResponse } from "axios";
import Location from "../../Atoms/Location";
import { EyeOutlined } from "@ant-design/icons";
import SortCategories from "../SortCategories";
import LongInput from '../../Atoms/LongInput';
import { useNavigate } from "react-router-dom";
const axios = require('axios').default;

interface RegisterProps {
    reg2?: boolean;
    reg3?: boolean;
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 50px;
    max-width: 500px;
    background-color: black;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: black;

`
const ExtraLocationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;  
    padding: 10px;
    margin: 10px;
`

const Guideline = styled.h2`
    color: white;
    `;

const Reg1 = styled.div`
    width: 100%;
`

const Reg2 = styled.div.attrs((props: RegisterProps) => props)`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 100%;
    margin-bottom: -30px;
    display: ${props => props.reg2 ? 'flex' : 'none'};
`;

const ContainerLocation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
 
    border-bottom: 1px solid grey;
    &:hover{
        transition: all 0.3s ease-in-out;
        border-color: #1eb5f0;
    }

    .ant-select-selection-placeholder {
        color: white;
    }
`

const Register = (props: RegisterProps) => {


    const navigate = useNavigate();

    // LOCATION DATA
    const [locationData, setLocationData] = React.useState<any[]>([]);
    React.useEffect(() => {
        axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
            .then((res: { data: React.SetStateAction<any[]>; }) => {
                setLocationData(res.data);
            })
    }, []);

    const locationSelect = (value: string) => {
        updateFormData({
            ...formData,
            location: value
        })
    }

    const [file, setFile] = React.useState<File>();

    const onSetFile = (e: any) => {
        setFile(e.target.files[0]);
        updateFormData({
            ...formData,
            avatar: e.target.files[0],
        })
    }

    const [category, setCategory] = React.useState<string>('');

    const onCategory = (e: any) => {
        setCategory(e.key);
    }

    const initialState = {
        name: '',
        email: '',
        location: '',
        password: '',
        avatar: null,
        confirmpassword: '',
    }
    // DO NORMAL HANDLE CHANGE AND THEN CHECK IF THEIR EQUAL

    const [formData, updateFormData] = React.useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value, e.target.name);
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const noError = {
        msg: '',
        display: false,
    }

    const [error, updateError] = React.useState(noError);

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
    }

    useEffect(() => {
        passwordMatch();
    }, [formData])

    const passwordMatch = () => {

        console.log(formData.password, formData.confirmpassword);
        if (formData.confirmpassword !== formData.password) {
            updateError(
                {
                    msg: "Passwords don't match",
                    display: true
                })
        }
        else {
            updateError(noError)
        }
    };

    const createAccount = (e: React.FormEvent<HTMLFormElement>) => {

        let formMissing = false;

        Object.entries(formData).forEach(element => {
            if (element[1] === '' || element[1] === null) {
                formMissing = true;
                updateError({
                    msg: `Missing ${element[0]}`,
                    display: true
                })
            }
        })

        if (!formMissing) {
            e.preventDefault();

            axios.post('/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res: AxiosResponse<any, any>) => {
                localStorage.setItem('authToken', JSON.stringify(res.data));
                navigate('/');

            }).catch((err: any) => {
                updateError(
                    { msg: err.response.data.error, display: true }
                )
            });
        }

        e.preventDefault();
    }

    const locations = locationData.map(item => {
        return {
            value: item.name + ", " + item.country,     // No subcountry for now
        }
    });

    const register = (
        <Form
            onSubmit={createAccount}
            encType="multipart/form-data"
        >
            <Container>
                <Reg1>
                    <Guideline>1. Enter your information</Guideline>
                    <Input placeholder={"Email"} type="email" name='email' onChange={handleChange} required />
                    <Input placeholder={"Name"} type={"text"} name='name' onChange={handleChange} required />
                    <Password placeholder={"Password"} name='password' onChange={handlePassword} />
                    <Password placeholder={"Confirm password"} name='confirmpassword' onChange={handlePassword} />
                    <ExtraLocationContainer>
                        <ContainerLocation>
                            <Location
                                onSelect={locationSelect}
                                data={locations}
                                register
                            />
                        </ContainerLocation>
                        <EyeOutlined style={{ visibility: 'hidden' }} />
                    </ExtraLocationContainer>
                </Reg1>
            </Container>
            <Reg2
                reg2={
                    formData.name !== '' &&
                    formData.email !== '' &&
                    !error.display
                }
            >
                <Guideline>2. Upload your profile picture</Guideline>
                <FileSubmit
                    onChange={onSetFile}
                    fileNames={file?.name ? [file?.name] : []}
                />
                <input type="text"
                    placeholder="Enter a description about yourself" />
            </Reg2>

            <SortCategories
                onClick={onCategory}
                category={category}
            />
            <ErrorMessage msg={error.msg} on={error.display} />



            <Button
                text="Create profile"
                type='submit'
            />
        </Form>
    )

    return (
        <Login form={register} />
    );
};

export default Register;