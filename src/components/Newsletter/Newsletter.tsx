import React from 'react';
import styles from './Newsletter.module.css'
import Title from "../UI/Title/Title.tsx";
import {ButtonsType, TitlesLevels} from "../../types/types.ts";
import Button from "../UI/Button/Button.tsx";

const Newsletter = () => {
    return (
        <div className="container">
            <div className={styles.subscribe}>
                <div className={styles.subscribeInfo}>
                    <Title className={styles.subscribeTitle} level={TitlesLevels.h3}>Subscribe Our
                        Newsletter</Title>
                    <p className={styles.subscribeText}>Build stronger Customer Relationships
                        with <span>Consultalk</span></p>
                </div>
                <form className={styles.message}>
                    <input className={styles.input} type="text" placeholder="your mail address"/>
                    <Button src='#' className={styles.button} type={ButtonsType.Yellow}>
                        <button type="submit">Subscribe</button>
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;