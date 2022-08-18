import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


const useGetUsers = () => {

    const [users, setUsers] = React.useState<any>();

    useEffect(() => {
        axios.get('/getUsers').then((res) => {

            // server sends correct users
            // the useEffect is never run (console.log() prints nothing)

            setUsers(res.data);
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    return users;
}






export default useGetUsers;