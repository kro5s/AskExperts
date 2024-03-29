import React from 'react';
import styles from './Welcome.module.css'
import Title from "../../UI/Title/Title.tsx";
import {TitlesLevels} from "../../../types/types.ts";
import Button from "../../UI/Button/Button.tsx";
import classNames from "classnames";

const Welcome = () => {
    return (
        <section className={styles.wrapper}>
            <div className={classNames("container", styles.container)}>
                <div className={styles.box}>
                    <Title className={styles.title} level={TitlesLevels.h1}>Your small business growth advisors</Title>
                    <p className={styles.text}>Get help from Alex Moore, a professional business coach with advanced
                        experience on growth and business scaling.</p>
                    <div className={styles.buttons}>
                        <Button src="/services">Our Services</Button>
                        <a href="#" className={styles.bookMeeting}>
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="21.7676" cy="21.7686" r="21.7676" fill="#4EAF4E"/>
                                <path d="M18.9082 21.9082H24.4252" stroke="#0D0D0D" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M18.9082 24.6665H24.4252" stroke="#0D0D0D" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path
                                    d="M15.4601 14.3223H27.8733C28.0562 14.3223 28.2316 14.3949 28.3609 14.5243C28.4903 14.6536 28.5629 14.829 28.5629 15.0119V28.1147C28.5629 28.6634 28.345 29.1896 27.957 29.5776C27.569 29.9656 27.0428 30.1835 26.4941 30.1835H16.8394C16.2907 30.1835 15.7645 29.9656 15.3765 29.5776C14.9885 29.1896 14.7705 28.6634 14.7705 28.1147V15.0119C14.7705 14.829 14.8432 14.6536 14.9725 14.5243C15.1018 14.3949 15.2772 14.3223 15.4601 14.3223V14.3223Z"
                                    stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17.5283 12.9434V15.7018" stroke="#0D0D0D" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M21.666 12.9434V15.7018" stroke="#0D0D0D" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M25.8037 12.9434V15.7018" stroke="#0D0D0D" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                            Book a Meeting
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;