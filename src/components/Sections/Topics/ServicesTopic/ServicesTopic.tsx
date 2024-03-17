import React from 'react';
import styles from './ServicesTopic.module.css'
import PageTopic from "../../../PageTopic/PageTopic.tsx";

const ServicesTopic = () => {
    return (
        <PageTopic className={styles.wrapper} tag="Services">Creative Services For Boost<br/> Your Business
            Growth</PageTopic>
    );
};

export default ServicesTopic;