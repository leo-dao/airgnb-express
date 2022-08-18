import React from "react";
import Input from 'antd/lib/input';
import Button from "../../Atoms/Button";
import AdPostBox from "../AdPostBox";
import SortCategories from "../../Molecules/SortCategories";
import styled from "styled-components";
import FileSubmit from "../../Molecules/FileSubmit";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    gap: 20px;
`

const StyledInput = styled(Input)`
    height: 100%;
    width: 100%;
    font-size: 16px;
`

interface PostAdProps {
    setTitle: (e: any) => void;
    titleDisabled: boolean;
    setCategory: (e: any) => void;
    setDescription: (e: any) => void;
    descriptionDisabled: boolean;
    setPrice: (e: any) => void;
    priceDisabled: boolean;
    setImages: (e: any) => void;
    imagesDisabled: boolean;
    createAd: (e: any) => void;
    category: string;
    fileNames: string[];
}

const AdPostForm = (props: PostAdProps) => {

    const [status, setEnable] = React.useState<boolean[]>([true, true, true, true]);

    const [index, setIndex] = React.useState<number>(0);

    const cont = () => {
        setEnable(prev => {
            var newStatus = [...prev];
            newStatus[index] = false;
            setIndex(index + 1);
            return newStatus;
        });
    }

    return (
        <Form
            onSubmit={props.createAd}
            encType='multipart/form-data'
            id='form'
        >
            <AdPostBox title="What's the title of your listing?"
                continue={cont}
                buttonDisabled={props.titleDisabled}
                selection={
                    <StyledInput
                        placeholder={"Title"}
                        type={"text"}
                        required
                        onKeyUp={props.setTitle} />
                } />
            <AdPostBox title="Which category best describes your ad?"
                continue={cont}
                disabled={status[0]}
                buttonDisabled={props.category === ""}
                selection={
                    <SortCategories
                        onClick={props.setCategory}
                        category={props.category}
                        disabled={status[0]}
                    />
                } />
            <AdPostBox title="How would you describe your ad?"
                continue={cont}
                disabled={status[1]}
                buttonDisabled={props.descriptionDisabled}
                selection={
                    <Input.TextArea
                        placeholder="Description"
                        showCount={true}
                        maxLength={100}
                        size={"large"}
                        disabled={status[1]}
                        onKeyUp={props.setDescription} />
                } />
            <AdPostBox title="What's the price of your ad?"
                continue={cont}
                disabled={status[2]}
                buttonDisabled={props.priceDisabled}
                selection={
                    <StyledInput
                        placeholder={"Price"}
                        type={"number"}
                        required
                        disabled={status[2]}
                        onKeyUp={props.setPrice} />
                } />
            <AdPostBox title="Add images to your ad"
                subtitle="You can add up to 6 images, the first will be the cover!"
                continue={cont}
                disabled={status[3]}
                buttonDisabled={props.imagesDisabled}
                noButton={true}
                selection={
                    <FileSubmit
                        disabled={status[3]}
                        onChange={props.setImages}
                        fileNames={props.fileNames}
                    />
                } />
            <Button
                type='submit'
                text='Post Ad'
                disabled={props.imagesDisabled}
            />
        </Form >
    )
}

export default AdPostForm;
