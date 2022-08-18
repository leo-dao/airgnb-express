import React from "react";
import Button from "../Button";
import useFindUser from "../../../hooks/useFindUser";
import { UserOutlined } from "@ant-design/icons";

interface Props {
    header?: boolean,
}

const UserButton = (props: Props) => {

    let user: any = useFindUser();
    var account = user ? `/account` : "/sign-in";

    return (
        <Button
            component={<UserOutlined style={{ fontSize: "1.7em" }} />}
            onClick={() => window.location.href = account}
            header={props.header}
        />
    )
}

export default UserButton;