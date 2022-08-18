import React from "react";
import { Menu } from 'antd';
import styled from "styled-components";
import categories from "../../../utils/categories";

interface Props {
    onClick: (e: any) => void;
}

const StyledMenu = styled(Menu)`

    transition: all 0.3s ease-in-out;
    .ant-menu-item {
        &:hover {
            background-color: #f5f5f5;
            color: black;
        }
    }
    `;

const Categories = (props: Props) => {

    return (
        <StyledMenu onClick={props.onClick}
            style={{
                border: "none",
                boxShadow: "0px 0px 10px #8D8D8D",
                borderRadius: "10px",
                width: "100%",
                fontSize: "18px",
                backgroundColor: "#FAFAFA",
            }}>
            {categories.map((category) => {
                return (
                    <Menu.Item key={category.name}>
                        {category.name}
                    </Menu.Item>
                )
            }
            )}
        </StyledMenu>
    )
};

export default Categories;