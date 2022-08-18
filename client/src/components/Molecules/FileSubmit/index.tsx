import React from "react";
import styled from "styled-components";

const FileInputWrapper = styled.div.attrs((props: FileInputProps) => (props))`
    width: 250px;
    text-align: center;
`

const HideInput = styled.input`
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`

const StyledLabel = styled.label.attrs((props: FileInputProps) => (props))`
    font-size: 18px;
    border: 1px solid grey;
    color: white;
    padding: 10px;
    cursor: ${(props) => props.disabled ? "not-allowed" : "pointer"};
    transition: "all 0.2s ease-in-out";
    &:hover {
        border-color: ${(props) => props.disabled ? "none" : "#1eb5f0"};
}
`

const FileList = styled.div.attrs((props: FileInputProps) => (props))`
    font-size: 12px;
    font-style: italic;
    margin-top: 20px;
    color: white;
    `

interface FileInputProps {
    disabled?: boolean;
    fileNames: String[];
    onChange: (e: any) => void;
}

const FileInput = (props: FileInputProps) => {

    var numImages = props.fileNames.length;

    var file = numImages === 1 ? " file " : " files ";

    var fileNames = props.fileNames.join(", ");

    return (
        <FileInputWrapper disabled={props.disabled}>
            <HideInput
                type="file"
                id="file"
                accept="image/*"
                disabled={props.disabled}
                multiple
                onChange={props.onChange}
            />
            <StyledLabel htmlFor="file" disabled={props.disabled}>
                {numImages ? numImages + file + "selected" : "Upload Image"}
            </StyledLabel>
            <FileList>
                {fileNames}
            </FileList>
        </FileInputWrapper >
    )
}

export default FileInput;
