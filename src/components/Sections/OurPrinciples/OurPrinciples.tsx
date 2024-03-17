import React from 'react';
import styles from './OurPrinciples.module.css'
import SectionDescription from "../../SectionDescription/SectionDescription.tsx";
import HighlightedTag from "../../UI/HighlitedTag/HighlightedTag.tsx";
import Title from "../../UI/Title/Title.tsx";
import Button from "../../UI/Button/Button.tsx";
import ExperienceFeature from "../../ExperienceFeature/ExperienceFeature.tsx";

const OurPrinciples = () => {
    return (
        <section className={styles.wrapper}>
            <div className="container">
                <SectionDescription
                    className={styles.desc}
                    HighlightedTag={<HighlightedTag>Growing with our Clients</HighlightedTag>}
                    Title={<Title className={styles.title}>Our core values & principles</Title>}
                    Button={<Button src="#">Get in touch</Button>}
                    Text={<p>Capitalize on low hanging fruit to identify a ballpark value added activity beta test.<br/>Override
                        the digital divide with additional from DevOps.</p>}
                />
                <ul className={styles.principles}>
                    <li>
                        <ExperienceFeature svg={<svg width="54" height="53" viewBox="0 0 54 53" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26.8889" cy="26.3889" r="26.3889" fill="#181818"/>
                            <path d="M15.5518 32.0488L26.7056 38.5552L37.8595 32.0488" stroke="white" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15.5518 26.4717L26.7056 32.9781L37.8595 26.4717" stroke="white" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15.5518 20.8948L26.7056 27.4013L37.8595 20.8948L26.7056 14.3884L15.5518 20.8948Z"
                                  stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        } title="Creative Ideas" src="#">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec
                            aliquam.
                        </ExperienceFeature>
                    </li>
                    <li>
                        <ExperienceFeature svg={<svg width="54" height="53" viewBox="0 0 54 53" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26.8889" cy="26.3889" r="26.3889" fill="#181818"/>
                            <path d="M38.6849 35.6106H12.7598" stroke="white" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M22.0928 35.6105V20.0554H29.3518" stroke="white" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M36.6106 13.8335H29.3516V35.6106H36.6106V13.8335Z" stroke="white" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.834 35.6104V26.2773H22.093" stroke="white" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        } title="Creative Ideas" src="#">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </ExperienceFeature>
                    </li>
                    <li>
                        <ExperienceFeature svg={<svg width="54" height="53" viewBox="0 0 54 53" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26.8889" cy="26.3889" r="26.3889" fill="#181818"/>
                            <path
                                d="M26.8602 38.841C33.741 38.841 39.319 33.263 39.319 26.3822C39.319 19.5014 33.741 13.9233 26.8602 13.9233C19.9794 13.9233 14.4014 19.5014 14.4014 26.3822C14.4014 33.263 19.9794 38.841 26.8602 38.841Z"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M16.6855 33.572L18.204 32.6505C18.3546 32.5577 18.4789 32.4278 18.5652 32.2734C18.6515 32.1189 18.6969 31.945 18.6971 31.768L18.7231 27.083C18.7252 26.8888 18.7838 26.6994 18.8918 26.5379L21.4614 22.5018C21.5385 22.3825 21.639 22.2801 21.7568 22.2008C21.8746 22.1214 22.0072 22.0668 22.1467 22.0401C22.2861 22.0134 22.4296 22.0153 22.5683 22.0455C22.7071 22.0758 22.8382 22.1339 22.9539 22.2163L25.4976 24.0591C25.717 24.2121 25.9842 24.2812 26.2503 24.2538L30.3384 23.6958C30.5864 23.6616 30.8129 23.5368 30.9743 23.3453L33.8554 20.023C34.0262 19.8205 34.1143 19.5609 34.102 19.2962L33.9592 16.1426"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M34.5297 36.2066L33.1281 34.805C32.9984 34.6754 32.8375 34.5815 32.6609 34.5324L29.8706 33.8057C29.6255 33.7386 29.4136 33.584 29.2749 33.3711C29.1361 33.1583 29.0803 32.9019 29.1179 32.6506L29.4164 30.5482C29.446 30.3714 29.5198 30.2049 29.631 30.0642C29.7422 29.9236 29.8871 29.8133 30.0523 29.7436L33.9976 28.0954C34.1808 28.019 34.3821 27.9967 34.5777 28.0312C34.7732 28.0657 34.9547 28.1555 35.1007 28.29L38.3322 31.249"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        } title="Creative Ideas" src="#">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec
                            aliquam.
                        </ExperienceFeature>
                    </li>
                    <li>
                        <ExperienceFeature svg={<svg width="54" height="53" viewBox="0 0 54 53" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26.8889" cy="26.3889" r="26.3889" fill="#181818"/>
                            <path
                                d="M27.6141 32.0885C30.9924 32.0885 33.7311 29.3498 33.7311 25.9715C33.7311 22.5932 30.9924 19.8545 27.6141 19.8545C24.2357 19.8545 21.4971 22.5932 21.4971 25.9715C21.4971 29.3498 24.2357 32.0885 27.6141 32.0885Z"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M36.218 20.0055C36.5257 20.4402 36.7951 20.9002 37.0232 21.3803L40.3332 23.1967C40.7465 25.0237 40.7509 26.9178 40.346 28.7466L37.0232 30.563C36.7951 31.0431 36.5257 31.5031 36.218 31.9378L36.2819 35.6841C34.8791 36.9457 33.2188 37.8962 31.4127 38.4716L28.1538 36.5418C27.6177 36.5796 27.0796 36.5796 26.5435 36.5418L23.2973 38.459C21.4855 37.8941 19.8197 36.9472 18.4153 35.6841L18.4792 31.9505C18.1741 31.5097 17.9049 31.0457 17.6741 30.563L14.364 28.7466C13.9507 26.9196 13.9464 25.0256 14.3513 23.1967L17.6741 21.3803C17.9022 20.9002 18.1716 20.4402 18.4792 20.0055L18.4153 16.2593C19.8181 14.9976 21.4784 14.0471 23.2846 13.4717L26.5435 15.4015C27.0796 15.3637 27.6177 15.3637 28.1538 15.4015L31.3999 13.4843C33.2118 14.0492 34.8775 14.9961 36.2819 16.2593L36.218 20.0055Z"
                                stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        } title="Creative Ideas" src="#">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </ExperienceFeature>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default OurPrinciples;