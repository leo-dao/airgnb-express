import React from "react";
import styled from 'styled-components';
import guitar from '../../../assets/guitar.mp4';
import drums from '../../../assets/drums.mp4'

const Video = styled.video`
    max-width: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7);
    margin-bottom: 10%;

    // keep??
    border-bottom-left-radius: 20% 25px;
    border-bottom-right-radius: 20% 25px;
    
    height: 90vh;

    @media only screen and (max-width: 600px) {
        // fits both zoomed in desktop and mobile
        height: 600px;
    }
`

const VideoBg = () => {


    return (
        <Video autoPlay loop muted>
            <source src={drums} type='video/mp4' />
            Your browser does not support the video tag

        </Video>
    )
}

export default VideoBg;