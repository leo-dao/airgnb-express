import React from "react";
import { Avatar } from "antd";
import { User } from "../../../utils/interfaces";
import { Link } from "react-router-dom";

interface Props {
    user: User;
    size?: number;
}

const AvatarLink = (props: Props) => {

    const size = props.size ? props.size : 50;

    return (
        <Link to={`/profile/${props.user._id}`}>
            <Avatar size={size} src={props.user.avatar} />
        </Link>
    )
}

export default AvatarLink;