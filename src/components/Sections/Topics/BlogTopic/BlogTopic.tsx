import React from 'react';
import styles from './BlogTopic.module.css'
import PageTopic from "../../../PageTopic/PageTopic.tsx";

const BlogTopic = () => {
    return (
        <PageTopic className={styles.wrapper} tag="Blog">Latest Blogs & News</PageTopic>
    );
};

export default BlogTopic;