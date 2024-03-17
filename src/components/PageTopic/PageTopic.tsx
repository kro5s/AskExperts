import React from 'react';
import styles from './PageTopic.module.css'
import HighlightedTag from "../UI/HighlitedTag/HighlightedTag.tsx";
import Title from "../UI/Title/Title.tsx";
import {TitlesLevels} from "../../types/types.ts";

interface TopicProps {
    className?: string;
    tag: string;
    children: React.ReactNode;
}

const PageTopic: React.FC<TopicProps> = ({className, tag, children}) => {
    return (
        <section className={className}>
            <div className="container">
                <div className={styles.box}>
                    <HighlightedTag className={styles.tag}>{tag}</HighlightedTag>
                    <Title level={TitlesLevels.h1}>{children}</Title>
                </div>
            </div>
        </section>
    );
};

export default PageTopic;