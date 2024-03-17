import React from 'react';
import styles from './CaseTopic.module.css'
import PageTopic from "../../../PageTopic/PageTopic.tsx";

const CaseTopic = () => {
    return (
        <PageTopic className={styles.wrapper} tag="Case Studies single">Taxes & Efficiency</PageTopic>
    );
};

export default CaseTopic;