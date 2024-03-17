import React from 'react';
import Layout from "../components/Layout/Layout.tsx";
import PostTopic from "../components/Sections/Topics/PostTopic/PostTopic.tsx";
import PostBody from "../components/Sections/PostBody/PostBody.tsx";

const PostPage = () => {
    return (
        <Layout>
            <PostTopic/>
            <PostBody/>
        </Layout>
    );
};

export default PostPage;