import React from 'react';
import styles from './AboutTopic.module.css'
import PageTopic from "../../../PageTopic/PageTopic.tsx";

const AboutTopic = () => {
    return (
        <PageTopic className={styles.wrapper} tag="Services">Creative Services For Boost<br/> Your Business
            Growth</PageTopic>
    );
};

export default AboutTopic;