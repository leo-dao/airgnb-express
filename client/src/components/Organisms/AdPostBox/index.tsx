import React from "react";
import Button from "../../Atoms/Button";
import styled from "styled-components";

const Container = styled.div.attrs((props: PostAdProps) => (props))`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.1);
    align-items: center;
    width: 100%;
    opacity: ${(props) => props.disabled ? 0.2 : 1};
    cursor: ${(props) => props.disabled ? "not-allowed" : "auto"};
    transition: opacity 0.8s ease-in-out;
`

const TitleStyled = styled.div`
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
`

const SelectionStyled = styled.div`
    margin-top: 10px;
`

const SubtitleStyled = styled.div`
    text-align: center;
    margin-top: -5px;
    margin-bottom: 15px;
    font-size: 14px;
`

const ButtonContainer = styled.div.attrs((props: PostAdProps) => (props))`
    display: flex; 
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-top: 3%;
    margin-bottom: 2%;
`

interface PostAdProps {
    continue?: () => void;
    noButton?: boolean;
    next?: string;
    prev?: string;
    back?: () => void;
    disabled?: boolean,
    buttonDisabled?: boolean,
    title: string;
    subtitle?: string;
    selection: React.ReactNode;
}

const AdPostBox = (props: PostAdProps) => {

    var subtitle = props.subtitle ? <SubtitleStyled>{props.subtitle}</SubtitleStyled> : null;

    const button =
        props.noButton ? null :
            (
                <ButtonContainer>
                    <Button
                        text="Continue"
                        disabled={props.buttonDisabled}
                        onClick={props.continue}
                        secondary
                        type="button"
                    />
                </ButtonContainer>
            );

    return (
        <Container disabled={props.disabled}>
            <TitleStyled>
                {props.title}
            </TitleStyled>
            {subtitle}
            <SelectionStyled>
                {props.selection}
            </SelectionStyled>
            {button}
        </Container>
    )
}

export default AdPostBox