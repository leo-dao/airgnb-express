import React from "react";
import { Result } from 'antd';
import Button from "../../Atoms/Button";

interface Props {
    msg: string;
}

const Error = (props: Props) => {

    const defaultMsg = "Sorry, this page does not exist";

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Result
                status="404"
                title="404"
                subTitle={props.msg || defaultMsg} />
            <div >
                <Button
                    onClick={() => window.location.href = '/'}
                    text="Back Home"
                />
            </div>
        </div>
    )
}

export default Error;