import React from 'react';
import styles from "./ContactInfo.module.css";
import HighlightedTag from "../../UI/HighlitedTag/HighlightedTag.tsx";
import Title from "../../UI/Title/Title.tsx";

const ContactInfo = () => {
    return (
        <div className={styles.container}>
            <HighlightedTag>Process</HighlightedTag>
            <Title className={styles.title}>Contact Us. It’s Easy.</Title>
            <p className={styles.text}>Leverage agile frameworks to provide a robust synopsis for high level overviews.
                Iterative approaches to corporate strategy foster collaborative.</p>
            <ul className={styles.list}>
                <ContactInfoItem
                    svg={<svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26.1658" cy="26.1658" r="26.1658" fill="#FFECBB"/>
                        <path
                            d="M22.6124 25.1889C23.6502 27.332 25.3831 29.0605 27.5288 30.0928C27.6871 30.1677 27.8621 30.2001 28.0368 30.1869C28.2114 30.1736 28.3795 30.1151 28.5247 30.0171L31.6762 27.9119C31.8155 27.8174 31.9764 27.7598 32.1439 27.7444C32.3114 27.729 32.4802 27.7562 32.6343 27.8236L38.534 30.3575C38.7356 30.4414 38.9041 30.5893 39.0134 30.7783C39.1228 30.9674 39.1669 31.1872 39.1391 31.4038C38.9521 32.8633 38.2397 34.2046 37.1353 35.1768C36.0308 36.149 34.61 36.6855 33.1386 36.6858C28.5916 36.6858 24.2308 34.8795 21.0156 31.6643C17.8004 28.4491 15.9941 24.0884 15.9941 19.5414C15.9945 18.07 16.5309 16.6491 17.5031 15.5447C18.4753 14.4402 19.8167 13.7278 21.2761 13.5408C21.4928 13.513 21.7125 13.5572 21.9016 13.6665C22.0906 13.7758 22.2385 13.9443 22.3224 14.1459L24.8563 20.0582C24.9222 20.2099 24.9497 20.3755 24.9366 20.5404C24.9234 20.7053 24.8698 20.8644 24.7807 21.0037L22.6754 24.2057C22.5817 24.3505 22.5267 24.5169 22.5156 24.6891C22.5046 24.8612 22.5379 25.0333 22.6124 25.1889V25.1889Z"
                            stroke="#DEAA27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>}
                    title="Call Today"
                >
                    +1 800 100 900
                </ContactInfoItem>
                <ContactInfoItem
                    svg={<svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26.1658" cy="26.4976" r="26.1658" fill="#A4EDA4"/>
                        <path
                            d="M26.0522 37.9312C32.1756 37.9312 37.1396 32.9672 37.1396 26.8438C37.1396 20.7203 32.1756 15.7563 26.0522 15.7563C19.9288 15.7563 14.9648 20.7203 14.9648 26.8438C14.9648 32.9672 19.9288 37.9312 26.0522 37.9312Z"
                            stroke="#4EAF4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M26.0527 20.376V26.8436H32.5204" stroke="#4EAF4E" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>}
                    title="Monday To Friday"
                >
                    9AM - 5PM
                </ContactInfoItem>
                <ContactInfoItem
                    svg={<svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26.1658" cy="26.6861" r="26.1658" fill="#EAEAEA"/>
                        <path
                            d="M25.7503 27.6521C27.7892 27.6521 29.4421 25.9992 29.4421 23.9603C29.4421 21.9214 27.7892 20.2686 25.7503 20.2686C23.7114 20.2686 22.0586 21.9214 22.0586 23.9603C22.0586 25.9992 23.7114 27.6521 25.7503 27.6521Z"
                            stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M34.9783 23.9603C34.9783 32.2668 25.7489 38.7274 25.7489 38.7274C25.7489 38.7274 16.5195 32.2668 16.5195 23.9603C16.5195 21.5126 17.4919 19.165 19.2228 17.4342C20.9536 15.7033 23.3011 14.731 25.7489 14.731C28.1967 14.731 30.5442 15.7033 32.2751 17.4342C34.0059 19.165 34.9783 21.5126 34.9783 23.9603V23.9603Z"
                            stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>}
                    title="USA Office"
                >
                    195 Devonshire St Boston, MA 02110
                </ContactInfoItem>
            </ul>
        </div>
    );
};

const ContactInfoItem: React.FC<{ children: React.ReactNode, title: string; svg: React.ReactNode }> = ({
                                                                                                           children,
                                                                                                           title,
                                                                                                           svg
                                                                                                       }) => {
    return (
        <li className={styles.itemContainer}>
            {svg}
            <div>
                <div>{title}</div>
                <div className={styles.itemBody}>{children}</div>
            </div>
        </li>
    );
}

export default ContactInfo;