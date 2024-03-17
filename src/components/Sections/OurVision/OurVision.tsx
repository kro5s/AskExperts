import React from 'react';
import styles from './OurVision.module.css'
import classNames from "classnames";
import StatisticsList from "../../StatisticsList/StatisticsList.tsx";
import HighlightedTag from "../../UI/HighlitedTag/HighlightedTag.tsx";
import Title from "../../UI/Title/Title.tsx";
import {HighlightedTagsType} from "../../../types/types.ts";

const OurVision = () => {
    return (
        <section className={styles.wrapper}>
            <div className={classNames(styles.container, "container")}>
                <div className={styles.main}>
                    <HighlightedTag type={HighlightedTagsType.Green}>OUR VISION</HighlightedTag>
                    <Title className={styles.title}>Turn your ideas into reality.</Title>
                    <p className={styles.text}>Capitalize on low hanging fruit to identify a ballpark value added
                        activity beta test. Override the digital divide with additional from DevOps.</p>
                    <SingleVision>Bring to the table win-win survival strategies to ensure proactive domination. At the
                        end of the day.</SingleVision>
                    <SingleVision>Capitalize on low hanging fruit to identify a ballpark value added activity to beta
                        test override the digital.</SingleVision>
                </div>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src="/images/ourvision.png" alt="Our vision"/>
                </div>
            </div>
            <StatisticsList/>
        </section>
    );
};

const SingleVision: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <div className={styles.vision}>
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.355 9.18506L9.33628 14.927L6.33203 12.056" stroke="#4EAF4E" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M10.8433 21.4893C16.2795 21.4893 20.6865 17.0823 20.6865 11.646C20.6865 6.20971 16.2795 1.80273 10.8433 1.80273C5.40698 1.80273 1 6.20971 1 11.646C1 17.0823 5.40698 21.4893 10.8433 21.4893Z"
                    stroke="#4EAF4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>{children}</p>
        </div>
    );
}

export default OurVision;