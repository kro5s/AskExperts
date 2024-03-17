import React, {useEffect, useState} from 'react';
import styles from './Blog.module.css'
import Button from "../../UI/Button/Button.tsx";
import {ButtonsType, HighlightedTagsType, Post} from "../../../types/types.ts";
import HighlightedTag from "../../UI/HighlitedTag/HighlightedTag.tsx";
import Title from "../../UI/Title/Title.tsx";
import Loader from "../../UI/Loader/Loader.tsx";
import NewsPost from "../../NewsPost/NewsPost.tsx";
import {fetchPosts} from "../../../api/fetchPosts.ts";
import SectionDescription from "../../SectionDescription/SectionDescription.tsx";

const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchPosts(setPosts, setIsLoading, 2)
    }, []);

    return (
        <section className={styles.wrapper}>
            <div className="container">
                <SectionDescription
                    HighlightedTag={<HighlightedTag className={styles.tag}
                                                    type={HighlightedTagsType.Green}>Blog</HighlightedTag>}
                    Title={<Title>Take a look at our latest<br/> articles & resources</Title>}
                    Button={<Button src="/blog" type={ButtonsType.Yellow}>More News</Button>}
                ></SectionDescription>
                <div className={styles.main}>
                    {
                        isLoading ? <Loader></Loader> :
                            posts.map(post => (
                                <NewsPost key={post.id} post={post}></NewsPost>
                            ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;