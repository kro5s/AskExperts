import React from 'react';
import styles from './ContactTopic.module.css';
import PageTopic from "../../../PageTopic/PageTopic.tsx";

const ContactTopic = () => {
    return (
        <PageTopic className={styles.wrapper} tag="Contact us">Feel Free To Reach Us</PageTopic>
    );
};

export default ContactTopic;