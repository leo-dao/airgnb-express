import React from "react";
import { Select } from 'antd';
import styled from 'styled-components';

interface Props {
    data: any[];
    onSelect: (value: string) => void;
    register?: boolean;
}

const Location = (props: Props) => {

    return (
        <Select
            style={{
                width: "100%",
                fontSize: props.register ? '14px' : '18px',
                color: props.register ? 'white' : 'black',
                textAlign: props.register ? 'left' : 'center',
            }}
            showSearch
            bordered={false}
            options={props.data}
            allowClear={true}
            clearIcon
            suffixIcon
            removeIcon
            placeholder="Select your city"
            filterOption={(inputValue, option) =>
                option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
            dropdownStyle={{
                border: "none",
                boxShadow: "0px 0px 10px #8D8D8D",
                borderRadius: "10px",
            }}
            onSelect={props.onSelect}
        />

    )
}

export default Location;