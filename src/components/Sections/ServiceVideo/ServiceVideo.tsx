import React from 'react';
import styles from './ServiceVideo.module.css'
import HighlightedTag from "../../UI/HighlitedTag/HighlightedTag.tsx";
import Title from "../../UI/Title/Title.tsx";
import VideoPlayer from "../../VideoPlayer/VideoPlayer.tsx";
import {HighlightedTagsType} from "../../../types/types.ts";

const ServiceVideo = () => {
    return (
        <section className={styles.wrapper}>
            <HighlightedTag type={HighlightedTagsType.Green}>Our History</HighlightedTag>
            <Title className={styles.title}>Strategy for Every Stage in<br/> the Client's Journey</Title>
            <VideoPlayer className={styles.video}
                         src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                         poster="/images/servicevideoposter.png"/>
        </section>
    );
};

export default ServiceVideo;