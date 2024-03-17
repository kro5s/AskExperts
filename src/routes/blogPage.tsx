import React from 'react';
import Layout from "../components/Layout/Layout.tsx";
import BlogTopic from "../components/Sections/Topics/BlogTopic/BlogTopic.tsx";
import BlogBody from "../components/Sections/BlogBody/BlogBody.tsx";
import ReadyToTalk from "../components/Sections/ReadyToTalk/ReadyToTalk.tsx";

const BlogPage = () => {
    return (
        <Layout>
            <BlogTopic/>
            <BlogBody/>
            <ReadyToTalk/>
        </Layout>
    );
};

export default BlogPage;