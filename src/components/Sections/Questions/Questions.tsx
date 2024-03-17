import React, {useState} from 'react';
import styles from './Questions.module.css'
import classNames from "classnames";
import HighlightedTag from "../../UI/HighlitedTag/HighlightedTag.tsx";
import Title from "../../UI/Title/Title.tsx";
import {HighlightedTagsType, TitlesLevels} from "../../../types/types.ts";

const Questions = () => {
    return (
        <section className={classNames(styles.wrapper, "container")}>
            <HighlightedTag type={HighlightedTagsType.Green}>FAQ</HighlightedTag>
            <Title className={styles.title}>Customer Questions</Title>
            <ul className={styles.questions}>
                <li>
                    <Question title="What will happen when I’ve sent my application?">
                        Ippsum is the result of synergy between our teams and our customers. Our company culture is
                        focused on excellent productivity, customer satisfaction, respect for team and individual
                        achievements.
                    </Question>
                </li>
                <li>
                    <Question title="Can I get a free trial before I purchase?">
                        Ippsum is the result of synergy between our teams and our customers. Our company culture is
                        focused on excellent productivity, customer satisfaction, respect for team and individual
                        achievements.
                    </Question>
                </li>
                <li>
                    <Question title="What should I include in my personal statement?">
                        Ippsum is the result of synergy between our teams and our customers. Our company culture is
                        focused on excellent productivity, customer satisfaction, respect for team and individual
                        achievements.
                    </Question>
                </li>
                <li>
                    <Question title="Will membership plans be charged automatically?">
                        Ippsum is the result of synergy between our teams and our customers. Our company culture is
                        focused on excellent productivity, customer satisfaction, respect for team and individual
                        achievements.
                    </Question>
                </li>
                <li>
                    <Question title="What will happen when I’ve sent my application?">
                        Ippsum is the result of synergy between our teams and our customers. Our company culture is
                        focused on excellent productivity, customer satisfaction, respect for team and individual
                        achievements.
                    </Question>
                </li>
                <li>
                    <Question title="Can I get a free trial before I purchase?">
                        Ippsum is the result of synergy between our teams and our customers. Our company culture is
                        focused on excellent productivity, customer satisfaction, respect for team and individual
                        achievements.
                    </Question>
                </li>
            </ul>
        </section>
    );
};

const Question: React.FC<{ title: string; children: React.ReactNode }> = ({title, children}) => {
    const [opened, setOpened] = useState<boolean>(false);

    const handleQuestionClick = () => {
        setOpened(!opened)
    }

    return (
        <div className={styles.question} onClick={handleQuestionClick}>
            <div className={styles.questionTop}>
                <Title level={TitlesLevels.h3} className={styles.questionTitle}>{title}</Title>
                {
                    opened ?
                        <svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.1116 1.2207C12.4016 1.2207 1.92969 1.2207 1.92969 1.2207" stroke="#181818"
                                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        :
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5685 1.63086V18.8127M19.1594 10.2218H1.97754" stroke="#181818" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                }
            </div>
            {
                opened &&
                <p className={styles.questionText}>
                    {children}
                </p>
            }
        </div>
    );
}

export default Questions;