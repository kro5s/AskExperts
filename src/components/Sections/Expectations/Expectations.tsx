import React from 'react';
import styles from './Expectations.module.css'
import classNames from "classnames";
import HighlightedTag from "../../UI/HighlitedTag/HighlightedTag.tsx";
import Title from "../../UI/Title/Title.tsx";
import Partners from "../Partners/Partners.tsx";

const Expectations = () => {
    return (
        <>
            <section className={styles.wrapper}>
                <div className={classNames("container", styles.container)}>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src="/images/expectations.png" alt="What to expect"/>
                    </div>
                    <div className={styles.main}>
                        <HighlightedTag>WE'LL WORK WITH YOU</HighlightedTag>
                        <Title className={styles.title}>What To Expect</Title>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <ul className={styles.expectations}>
                            <li>
                                <Expectation>Bring to the table win-win survival strategies to ensure proactive
                                    domination. At the end of the day.</Expectation>
                            </li>
                            <li>
                                <Expectation>Capitalize on low hanging fruit to identify a ballpark value added activity
                                    to beta test override the digital.</Expectation>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <Partners padding="5em 1em"/>
        </>
    );
};

const Expectation: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <div className={styles.expectation}>
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.355 9.18506L9.33628 14.927L6.33203 12.056" stroke="#4EAF4E" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M10.8433 21.4893C16.2795 21.4893 20.6865 17.0823 20.6865 11.646C20.6865 6.20971 16.2795 1.80273 10.8433 1.80273C5.40698 1.80273 1 6.20971 1 11.646C1 17.0823 5.40698 21.4893 10.8433 21.4893Z"
                    stroke="#4EAF4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>{children}</p>
        </div>
    );
}

export default Expectations;