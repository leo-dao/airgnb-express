import React from "react";
import styled from "styled-components";
import { EyeOutlined } from '@ant-design/icons';


const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 10px;
    margin: 10px;
`

const StyledInput = styled.input`
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

interface InputProps {
    type?: string,
    placeholder?: string,
    required?: boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    min?: number;
    isPassword?: boolean;
    name?: string;
}

const Input = (props: InputProps) => {

    const input = (
        <StyledInput
            type={props.type}
            placeholder={props.placeholder}
            required={props.required}
            onChange={props.onChange}
            minLength={props.min}
            name={props.name}
        />
    )

    if (props.isPassword) {
        return input;
    }

    return (
        <Container>
            {input}
            {/* Hidden to have the input and password input be the same length */}
            <EyeOutlined style={{ visibility: 'hidden' }} />
        </Container>
    )
}

export default Input;