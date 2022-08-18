import React from "react";
import styled from "styled-components";
import Button from "../../Atoms/Button";

const Container = styled.div.attrs((props: DescriptionProps) => (props))`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    text-align: left;
    overflow: hidden;
    `

const StyledTitle = styled.b`
    font-size: 17px;
`

interface DescriptionProps {
    description: string;
    showMore?: boolean;
}

const Description = (props: DescriptionProps) => {

    const defaultHeight = "100%"
    const defaultMaxHeight = "180px"

    const [showMore, setShowMore] = React.useState(false);
    const [height, setHeight] = React.useState(defaultHeight);
    const [maxHeight, setMaxHeight] = React.useState(defaultMaxHeight);

    const handleShowMore = () => {
        setShowMore(!showMore);
        setHeight(showMore ? defaultHeight : "90%");
        setMaxHeight(showMore ? defaultMaxHeight : "100%");
    }

    const description = props.description.split("\n").map((item, index) => {
        return <span key={index}>{item}<br /></span>
    })

    const numLines = props.description.split("\n").length;

    // check for long sentences without newline characters 
    // count them as more than one line 

    return (
        <div>
            <Container showMore={props.showMore} style={{
                height: height,
                maxHeight: maxHeight,
            }}>
                <StyledTitle>Description</StyledTitle>
                {description}
            </Container>
            {numLines > 4 &&
                <Button
                    tertiary
                    onClick={handleShowMore}
                    text={showMore ? "Less" : "More"} />
            }

        </div>
    )
};

export default Description;