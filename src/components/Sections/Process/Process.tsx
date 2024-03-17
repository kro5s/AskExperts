import React from 'react';
import styles from './Process.module.css'
import classNames from "classnames";
import HighlightedTag from "../../UI/HighlitedTag/HighlightedTag.tsx";
import {HighlightedTagsType, StepColors} from "../../../types/types.ts";
import Title from "../../UI/Title/Title.tsx";
import ProcessStep from "../../ProcessStep/ProcessStep.tsx";
import ExperienceFeature from "../../ExperienceFeature/ExperienceFeature.tsx";

const Process = () => {
    return (
        <section className={styles.wrapper}>
            <div className={classNames(styles.container, "container")}>
                <div className={styles.left}>
                    <HighlightedTag type={HighlightedTagsType.Green}>Process</HighlightedTag>
                    <Title className={styles.leftTitle}>There have some easy steps to join with us!</Title>
                    <p className={styles.leftText}>Leverage agile frameworks to provide a robust synopsis for high level
                        overviews. Iterative approaches to corporate strategy foster collaborative thinking to further
                        the overall value proposition.</p>
                    <div className={styles.steps}>
                        <ProcessStep number="1" title="Setup Account" type={StepColors.Yellow}>We understand the
                            importance of approaching each work integrally.</ProcessStep>
                        <ProcessStep number="2" title="Consult with us" type={StepColors.Green}>Increase social reach
                            and productivity with our App Directory, a collection.</ProcessStep>
                        <ProcessStep number="3" title="Payment & Boost">We encourage every team member to be a whole
                            person. We have a flexible.</ProcessStep>
                    </div>
                </div>
                <div className={styles.right}>
                    <HighlightedTag>Growing with our clients</HighlightedTag>
                    <Title className={styles.rightTitle}>30 Years of Experience</Title>
                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override
                        the digital divide with additional from DevOps.<br/><br/>Leverage agile frameworks to provide a
                        robust synopsis for high level overviews. Iterative approaches to corporate strategy foster
                        collaborative thinking to further the overall value proposition.</p>
                    <div className={styles.rightGrid}>
                        <ExperienceFeature svg={<svg width="54" height="53" viewBox="0 0 54 53" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                            <circle cx="27.2805" cy="26.3889" r="26.3889" fill="#181818"/>
                            <path
                                d="M26.8286 26.9961L18.7968 20.9722C18.6662 20.8731 18.5603 20.7453 18.487 20.5987C18.4137 20.4521 18.375 20.2906 18.374 20.1267V15.371C18.374 15.0907 18.4854 14.8219 18.6836 14.6237C18.8818 14.4256 19.1506 14.3142 19.4308 14.3142H34.2264C34.5067 14.3142 34.7755 14.4256 34.9737 14.6237C35.1719 14.8219 35.2832 15.0907 35.2832 15.371V20.0739C35.2822 20.2378 35.2436 20.3993 35.1703 20.5458C35.097 20.6924 34.991 20.8202 34.8605 20.9194L26.8286 26.9961Z"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M26.8286 26.9961L18.7968 33.02C18.6662 33.1191 18.5603 33.2469 18.487 33.3935C18.4137 33.5401 18.375 33.7016 18.374 33.8655V38.6212C18.374 38.9015 18.4854 39.1703 18.6836 39.3685C18.8818 39.5666 19.1506 39.678 19.4308 39.678H34.2264C34.5067 39.678 34.7755 39.5666 34.9737 39.3685C35.1719 39.1703 35.2832 38.9015 35.2832 38.6212V33.9183C35.2822 33.7544 35.2436 33.5929 35.1703 33.4464C35.097 33.2998 34.991 33.172 34.8605 33.0728L26.8286 26.9961Z"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        } title={"Consistency"}>
                            Podcasting operational change management workflow.
                        </ExperienceFeature>
                        <ExperienceFeature svg={<svg width="54" height="53" viewBox="0 0 54 53" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                            <circle cx="27.1429" cy="26.3889" r="26.3889" fill="#181818"/>
                            <path d="M38.9388 35.6105H13.0137" stroke="white" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M22.3467 35.6105V20.0554H29.6057" stroke="white" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M36.8645 13.8334H29.6055V35.6105H36.8645V13.8334Z" stroke="white" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15.0879 35.6105V26.2775H22.3469" stroke="white" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        } title={"Improvement"}>
                            Podcasting operational change management workflow.
                        </ExperienceFeature>
                        <ExperienceFeature svg={<svg width="54" height="54" viewBox="0 0 54 54" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                            <circle cx="27.2805" cy="26.9949" r="26.3889" fill="#181818"/>
                            <path
                                d="M27.2518 39.4471C34.1326 39.4471 39.7106 33.8691 39.7106 26.9883C39.7106 20.1074 34.1326 14.5294 27.2518 14.5294C20.371 14.5294 14.793 20.1074 14.793 26.9883C14.793 33.8691 20.371 39.4471 27.2518 39.4471Z"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M17.0771 34.1781L18.5956 33.2566C18.7462 33.1637 18.8705 33.0339 18.9568 32.8794C19.0431 32.725 19.0885 32.5511 19.0887 32.3741L19.1147 27.6891C19.1168 27.4948 19.1754 27.3054 19.2834 27.144L21.853 23.1079C21.9301 22.9886 22.0306 22.8862 22.1484 22.8069C22.2662 22.7275 22.3988 22.6729 22.5383 22.6462C22.6777 22.6195 22.8212 22.6213 22.9599 22.6516C23.0987 22.6819 23.2298 22.74 23.3455 22.8223L25.8892 24.6652C26.1086 24.8182 26.3758 24.8873 26.6419 24.8599L30.73 24.3018C30.978 24.2677 31.2045 24.1428 31.3659 23.9514L34.247 20.6291C34.4178 20.4265 34.5059 20.167 34.4936 19.9023L34.3508 16.7487"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M34.9213 36.8126L33.5197 35.4109C33.39 35.2814 33.2291 35.1875 33.0525 35.1384L30.2622 34.4116C30.0171 34.3446 29.8052 34.19 29.6665 33.9771C29.5277 33.7642 29.4719 33.5079 29.5095 33.2566L29.808 31.1542C29.8376 30.9773 29.9114 30.8109 30.0226 30.6702C30.1338 30.5295 30.2787 30.4192 30.4439 30.3495L34.3892 28.7013C34.5724 28.6249 34.7737 28.6026 34.9693 28.6371C35.1648 28.6716 35.3463 28.7615 35.4923 28.896L38.7238 31.855"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        } title={"Branching"}>
                            Podcasting operational change management workflow.
                        </ExperienceFeature>
                        <ExperienceFeature svg={<svg width="54" height="54" viewBox="0 0 54 54" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                            <circle cx="27.1429" cy="26.9949" r="26.3889" fill="#181818"/>
                            <path d="M36.3813 34.838H17.1729V18.8309" stroke="white" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M36.3813 23.6331L29.9785 29.2355L23.5757 24.4334L17.1729 30.0359" stroke="white"
                                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        } title={"Company Growth"}>
                            Podcasting operational change management workflow.
                        </ExperienceFeature>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;