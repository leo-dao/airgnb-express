import React from "react";
import Button from "../Button";
import { MessageOutlined } from "@ant-design/icons";

interface ChatProps {
    text?: string,
    onClick: () => void,
    width?: string,
}

const ChatButton = (props: ChatProps) => {
    return (
        <Button
            secondary
            onClick={props.onClick}
            component={
                <MessageOutlined style={{ fontSize: "1.7em" }} />
            }
        />
    )
}

export default ChatButton;