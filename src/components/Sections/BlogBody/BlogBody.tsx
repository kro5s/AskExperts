import React, {useEffect, useState} from 'react';
import styles from './BlogBody.module.css'
import SectionDescription from "../../SectionDescription/SectionDescription.tsx";
import HighlightedTag from "../../UI/HighlitedTag/HighlightedTag.tsx";
import Title from "../../UI/Title/Title.tsx";
import Button from "../../UI/Button/Button.tsx";
import {ButtonsType, HighlightedTagsType, Post} from "../../../types/types.ts";
import {fetchPosts} from "../../../api/fetchPosts.ts";
import Loader from "../../UI/Loader/Loader.tsx";
import NewsPost from "../../NewsPost/NewsPost.tsx";

const BlogBody = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchPosts(setPosts, setIsLoading, 6)
    }, []);

    return (
        <section className={styles.wrapper}>
            <div className="container">
                <SectionDescription
                    className={styles.desc}
                    HighlightedTag={<HighlightedTag type={HighlightedTagsType.Green}>Blog</HighlightedTag>}
                    Title={<Title className={styles.title}>Take a look at our latest<br/> articles & resources</Title>}
                    Button={<Button src="#" type={ButtonsType.Yellow}>More News</Button>}
                />
                <div className={styles.grid}>
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

export default BlogBody;