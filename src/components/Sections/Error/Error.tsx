import React from 'react';
import styles from './Error.module.css'
import {useRouteError} from "react-router-dom";
import Button from "../../UI/Button/Button.tsx";
import {ButtonsType} from "../../../types/types.ts";

const Error = () => {
    const error = useRouteError();

    return (
        <section className={styles.wrapper}>
            <div className={styles.errorContainer}>
                <div className={styles.errorBody}>
                    <h3 className={styles.type}>{error.status}</h3>
                    <h2 className={styles.title}>{error.statusText}</h2>
                    <p className={styles.text}>This page doesn't exist or was removed! We suggest you back to home</p>
                    <Button src="/" type={ButtonsType.Yellow}>Back to home</Button>
                </div>
                <div className={styles.rectDec}></div>
                <div className={styles.dotsDec}></div>
            </div>
        </section>
    );
};

export default Error;