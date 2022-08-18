import React from "react";
import useFindUser from "../../../hooks/useFindUser";
import styled from "styled-components";
import logout from "../../../assets/logout.png";
import Button from "../../Atoms/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AxiosResponse } from "axios";
import UserInfo from "../../Molecules/UserInfo";

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  background-color: white; 
`;

const Logout = styled.div`
    display: flex;
    :hover {
        transform: scale(1.03);
    }
`;

const StyledLogo = styled.img`
    max-width: 30px;
`;

const UserAccount = () => {

    const navigate = useNavigate();
    let user: any = useFindUser();

    const logOut = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    }

    const deleteAccount = () => {

        axios.post('/deleteUser', user).then((res: AxiosResponse<any, any>) => {
            logOut();

        }).catch((err: any) => {
            console.log(err)
        });
    };

    return (
        <Container>

            <Logout onClick={logOut}>
                <p>Logout</p>
                <StyledLogo src={logout} />
            </Logout>
            <Button
                text="Delete account"
                onClick={deleteAccount}
            />
        </Container>
        // add link to public profile (userProfile)
    )

};

export default UserAccount;