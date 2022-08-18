import React from "react";
import styled from 'styled-components';

const StyledInput = styled.textarea`
    display: flex;
    align-items: center;
    background: none;
    width: 100%;
    height: 3em;
    border: none;
    outline: none;
    font-size: 14px;
    border-bottom: 1px solid grey;
    color: white;
    ::placeholder {
            color: white;
            position: relative;
            left: 10px;
        }

    &:hover{
        transition: all 0.3s ease-in-out;
        border-color: #1eb5f0;
    }
    &:focus {
        ::placeholder {
            transition: all 0.3s ease-in-out;
            color: #ccc;
            transform: translateY(-1.5em);
            font-size: 0.8em;
        }
    }
`

const LongInput = () => {
    return (
        <StyledInput>
            Hello there
        </StyledInput>
    )
};

export default LongInput;