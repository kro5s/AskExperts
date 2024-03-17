import React from 'react';
import styles from './StudiesTopic.module.css'
import PageTopic from "../../../PageTopic/PageTopic.tsx";

const StudiesTopic = () => {
    return (
        <PageTopic className={styles.wrapper} tag="Case Studies">Case Studies</PageTopic>
    );
};

export default StudiesTopic;