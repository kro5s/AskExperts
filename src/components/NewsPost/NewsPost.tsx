import React from 'react';
import styles from './NewsPost.module.css'
import Title from "../UI/Title/Title.tsx";
import {Post, TitlesLevels} from "../../types/types.ts";
import Button from "../UI/Button/Button.tsx";
import {Link} from "react-router-dom";

const NewsPost: React.FC<{ post: Post }> = ({post}) => {
    return (
        <Link to="/blog/1">
            <article className={styles.container}>
                <div>
                    <img className={styles.image} src={`/posts/${post.id}.png`} alt={post.title}/>
                    <Title className={styles.title} level={TitlesLevels.h3}>{post.title}</Title>
                    <p className={styles.text}>{post.body}</p>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.meta}>
                        <img className={styles.authorImage} src={`/authors/${post.author.id}.png`}
                             alt={post.author.name}/>
                        <span>{post.author.name}</span>
                        <span className={styles.metaDivider}>|</span>
                        <span>September 1, 2022</span>
                    </div>
                    <Button className={styles.button} src="#">Read More</Button>
                </div>
            </article>
        </Link>
    );
};

export default NewsPost;