import React from 'react';
import styles from './ReadyToTalk.module.css'
import classNames from "classnames";
import HighlightedTag from "../../UI/HighlitedTag/HighlightedTag.tsx";
import Title from "../../UI/Title/Title.tsx";
import Button from "../../UI/Button/Button.tsx";

const ReadyToTalk = () => {
    return (
        <section className={classNames("container", styles.wrapper)}>
            <div className={styles.container}>
                <HighlightedTag className={styles.tag}>Contact</HighlightedTag>
                <Title className={styles.title}>Ready To Talk?</Title>
                <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies
                    lacus sed turpis. Pellentesque pellentesque habitant morbi tristique.</p>
                <form className={styles.message}>
                    <input className={styles.input} type="text" placeholder="your mail address"/>
                    <Button src='#' className={styles.button}>
                        <button type="submit">Send Message</button>
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default ReadyToTalk;