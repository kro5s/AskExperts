import React from 'react';
import styles from './PostTopic.module.css'
import PageTopic from "../../../PageTopic/PageTopic.tsx";

const PostTopic = () => {
    return (
        <PageTopic className={styles.wrapper} tag="September 1, 2022">Essential Guidelines To Grow<br/> Your Corporate
            Business With Us</PageTopic>
    );
};

export default PostTopic;