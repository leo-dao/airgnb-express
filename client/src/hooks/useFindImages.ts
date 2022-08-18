import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


const useFindImages = (type: string, id: string) => {

    const [images, setImages] = React.useState<any>();

    useEffect(() => {
        axios.get('/getImages', {
            params: {
                type: type,
                id: id,
            }
        }).then((res) => {
            setImages(res.data);
        })
    }, [])

    return images;
}






export default useFindImages;