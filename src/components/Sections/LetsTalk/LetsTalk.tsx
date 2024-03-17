import React from 'react';
import styles from './LetsTalk.module.css';
import classNames from "classnames";
import HighlightedTag from "../../UI/HighlitedTag/HighlightedTag.tsx";
import Title from "../../UI/Title/Title.tsx";
import {HighlightedTagsType} from "../../../types/types.ts";

const LetsTalk = () => {
    return (
        <div className={classNames("container", styles.container)}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src="/images/contactimage.png" alt="Get In Touch With Us"/>
            </div>
            <div className={styles.main}>
                <HighlightedTag type={HighlightedTagsType.Green}>Let’s talk</HighlightedTag>
                <Title className={styles.title}>Get In Touch With Us</Title>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore.</p>
                <ul className={styles.list}>
                    <Contact
                        svg={
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="25" fill="#181818"/>
                                <path
                                    d="M21.1453 25.062C21.9521 26.7281 23.2993 28.0718 24.9674 28.8743C25.0905 28.9326 25.2266 28.9578 25.3624 28.9475C25.4981 28.9372 25.6288 28.8917 25.7417 28.8155L28.1918 27.1789C28.3001 27.1054 28.4251 27.0606 28.5554 27.0486C28.6856 27.0367 28.8168 27.0578 28.9366 27.1103L33.5233 29.0802C33.68 29.1454 33.811 29.2604 33.896 29.4074C33.981 29.5543 34.0153 29.7252 33.9937 29.8936C33.8483 31.0282 33.2945 32.071 32.4358 32.8269C31.5772 33.5827 30.4726 33.9997 29.3287 34C25.7937 34 22.4035 32.5957 19.9039 30.0961C17.4043 27.5965 16 24.2063 16 20.6713C16.0003 19.5274 16.4173 18.4228 17.1731 17.5642C17.929 16.7055 18.9718 16.1517 20.1064 16.0063C20.2748 15.9847 20.4457 16.019 20.5926 16.104C20.7396 16.189 20.8546 16.32 20.9198 16.4767L22.8897 21.0732C22.941 21.1911 22.9624 21.3198 22.9521 21.448C22.9419 21.5762 22.9003 21.6999 22.8309 21.8082L21.1943 24.2975C21.1214 24.4101 21.0786 24.5395 21.07 24.6733C21.0615 24.8072 21.0874 24.941 21.1453 25.062V25.062Z"
                                    stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        }
                        title="Have Any Question?"
                        text="Free +01 238 543 987"
                    />
                    <Contact
                        svg={
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="25" fill="#181818"/>
                                <path
                                    d="M16 18H34V31.2222C34 31.4285 33.921 31.6263 33.7803 31.7722C33.6397 31.9181 33.4489 32 33.25 32H16.75C16.5511 32 16.3603 31.9181 16.2197 31.7722C16.079 31.6263 16 31.4285 16 31.2222V18Z"
                                    stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M34 18L25 26L16 18" stroke="white" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg>
                        }
                        title="Write Email"
                        text="Info@consultalk.com"
                    />
                    <Contact
                        svg={
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="25" fill="#181818"/>
                                <path
                                    d="M24.9988 26.2C26.7661 26.2 28.1988 24.7674 28.1988 23C28.1988 21.2327 26.7661 19.8 24.9988 19.8C23.2315 19.8 21.7988 21.2327 21.7988 23C21.7988 24.7674 23.2315 26.2 24.9988 26.2Z"
                                    stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M33 23C33 30.2 25 35.8 25 35.8C25 35.8 17 30.2 17 23C17 20.8783 17.8429 18.8434 19.3431 17.3431C20.8434 15.8429 22.8783 15 25 15C27.1217 15 29.1566 15.8429 30.6569 17.3431C32.1571 18.8434 33 20.8783 33 23V23Z"
                                    stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        }
                        title="Visit Anytime"
                        text="King Street, Prior Lake, New York."
                    />
                </ul>
            </div>
        </div>
    );
};

const Contact: React.FC<{ svg: React.ReactNode; title: string; text: string }> = ({svg, title, text}) => {
    return (
        <li className={styles.contact}>
            {svg}
            <div>
                <p className={styles.contactTitle}>{title}</p>
                <p className={styles.contactText}>{text}</p>
            </div>
        </li>
    );
}

export default LetsTalk;