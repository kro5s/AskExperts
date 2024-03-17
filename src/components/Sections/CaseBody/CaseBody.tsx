import React from 'react';
import styles from './CaseBody.module.css'
import Button from "../../UI/Button/Button.tsx";
import {ButtonsType, TitlesLevels} from "../../../types/types.ts";
import Title from "../../UI/Title/Title.tsx";
import Newsletter from "../../Newsletter/Newsletter.tsx";

const CaseBody = () => {
    return (
        <section className={styles.wrapper}>
            <div className="container">
                <img className={styles.image} src="/images/casebody.png" alt="Taxes & Efficiency"/>
                <div className={styles.desc}>
                    <ul className={styles.info}>
                        <li className={styles.infoItem}>
                            <p className={styles.infoName}>Case Name</p>
                            <Title className={styles.infoTitle} level={TitlesLevels.h3}>Taxes & Efficiency</Title>
                        </li>
                        <li className={styles.infoItem}>
                            <p className={styles.infoName}>Category</p>
                            <Title className={styles.infoTitle} level={TitlesLevels.h3}>Business</Title>
                        </li>
                        <li className={styles.infoItem}>
                            <p className={styles.infoName}>Date</p>
                            <Title className={styles.infoTitle} level={TitlesLevels.h3}>27th September 2022</Title>
                        </li>
                    </ul>
                    <Button className={styles.button} src="#" type={ButtonsType.Yellow}>Live Preview</Button>
                </div>
                <div className={styles.innerContainer}>
                    <Title className={styles.title}>Project Overview</Title>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident.</p>
                    <ul className={styles.list}>
                        <li>It brings the right people together with all the right information and tools to get work
                            done
                        </li>
                        <li>We provide operational efficiency, data security, and flexible scale</li>
                        <li>Your best work, together in one package that works seamlessly from your computer</li>
                        <li>Delivers the tools you need to save time Improve field performance always</li>
                    </ul>

                    <Title className={styles.title2} level={TitlesLevels.h3}>Storyboard</Title>
                    <p>Completely synergize resource taxing relationships via premier niche markets. Professionally
                        cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling
                        customer service for state of the art customer service. Objectively innovate empowered
                        manufactured products whereas parallel platforms. Holistically predominate extensible testing
                        procedures for reliable supply chains.<br/><br/>
                        Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly
                        visualize quality intellectual capital without superior collaboration and idea-sharing.
                        Holistically pontificate installed base portals after maintainable products completely pursue
                        scalable customer service.
                    </p>

                    <div className={styles.imageContainer}><img src="/images/caseimage.png" alt="Storyboard"/></div>

                    <Title className={styles.title2} level={TitlesLevels.h3}>Project result</Title>
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                        approaches to corporate strategy foster collaborative thinking to further the overall value
                        proposition. Organically grow the holistic world view of disruptive innovation via workplace
                        diversity and empowerment.<br/><br/>
                        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the
                        day, going forward, a new normal that has evolved from generation X is on the runway heading
                        towards a streamlined cloud solution. User generated content in real-time will have multiple
                        touchpoints for offshoring.
                    </p>
                </div>
            </div>
            <Newsletter/>
        </section>
    );
};

export default CaseBody;