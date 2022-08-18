import React from 'react';
import styled from 'styled-components';

const Text = styled.p.attrs((props: Props) => props)`
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: red;
    display: ${props => props.on ? 'initial' : 'none'};
`;

interface Props {
    msg: String,
    on: Boolean
}

const ErrorMessage = (props: Props) => {

    return (
        <Text on={props.on} >
            {props.msg}
        </Text>
    )
}

export default ErrorMessage;