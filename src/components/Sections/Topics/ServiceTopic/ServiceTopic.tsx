import React from 'react';
import styles from './ServiceTopic.module.css'
import PageTopic from "../../../PageTopic/PageTopic.tsx";

const ServiceTopic = () => {
    return (
        <PageTopic className={styles.wrapper} tag="MediaBox single">Services Details</PageTopic>
    );
};

export default ServiceTopic;