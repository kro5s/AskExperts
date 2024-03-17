import React from 'react';
import styles from './OurHistory.module.css'
import HighlightedTag from "../../UI/HighlitedTag/HighlightedTag.tsx";
import Title from "../../UI/Title/Title.tsx";
import {HighlightedTagsType} from "../../../types/types.ts";
import VideoPlayer from "../../VideoPlayer/VideoPlayer.tsx";

const OurHistory = () => {
    return (
        <section className={styles.wrapper}>
            <div className="container">
                <HighlightedTag type={HighlightedTagsType.Green}>Our History</HighlightedTag>
                <Title className={styles.title}>Better Website Means A<br/> User Experience</Title>
                <p>Ippsum is the result of synergy between our teams and our customers. Our company culture is
                    focused<br/> on excellent productivity, customer satisfaction, respect for team and individual
                    achievements.</p>
                <VideoPlayer className={styles.video}
                             src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                             poster="/images/videoPoster.png"/>
            </div>
        </section>
    );
};

export default OurHistory;