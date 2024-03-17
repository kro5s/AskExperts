import React from 'react';
import styles from './TeamTopic.module.css'
import PageTopic from "../../../PageTopic/PageTopic.tsx";

const TeamTopic = () => {
    return (
        <PageTopic className={styles.wrapper} tag="Team">The Consultors</PageTopic>
    );
};

export default TeamTopic;