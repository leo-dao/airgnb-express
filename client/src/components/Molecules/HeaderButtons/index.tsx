import React from "react";
import Button from "../../Atoms/Button";
import UserButton from "../../Atoms/UserButton";
import useFindUser from "../../../hooks/useFindUser";
import styled from "styled-components";

const StyledHeaderButtons = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 600px) {
        display: none;
    }
`;

const Space = styled.div`
    margin-left: 10px;
`;

const HeaderButtons = () => {

    let user: any = useFindUser();
    var post = user ? "/post-ad" : "/sign-in";

    return (
        <StyledHeaderButtons>
            <Button
                text="Post ad"
                onClick={() => window.location.href = post}
                header
            />
            <Space />
            <Space />
            <UserButton
                header
            />
        </StyledHeaderButtons>
    )
}

export default HeaderButtons;