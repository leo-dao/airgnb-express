import React from "react";
import { MenuFoldOutlined } from "@ant-design/icons";
import DropdownMenu from "../DropdownMenu";
import Categories from "./Categories";
import FilterInput from "../../Atoms/FilterInput";
import styled from "styled-components";


export const StyledCategory = styled.div.attrs((props: SortCategoriesProps) => props)`
    color: ${props => props.category === "" ? "grey" : "black"};
`;

export const MenuFoldOutlinedStyled = styled.div`
    font-size: 20px;
    color: black;
`;

interface SortCategoriesProps {
    onClick: (value: string) => void;
    disabled?: boolean;
    category: string;
}

const SortCategories = (props: SortCategoriesProps) => {

    const sortButton = (
        <FilterInput
            disabled={props.disabled}
            content={
                <StyledCategory category={props.category}>
                    {props.category === "" ? "Select category" : props.category}
                </StyledCategory>
            }
            logo={
                <MenuFoldOutlinedStyled >
                    <MenuFoldOutlined />
                </MenuFoldOutlinedStyled>
            }
        />
    );

    return (
        <DropdownMenu
            disabled={props.disabled}
            button={sortButton}
            menu={<Categories onClick={props.onClick} />}
        />
    );

}
export default SortCategories;