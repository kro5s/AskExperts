import React from 'react';
import styles from './MoreCaseStudies.module.css'
import Title from "../../UI/Title/Title.tsx";
import Button from "../../UI/Button/Button.tsx";
import {cases} from "../../../types/types.ts";
import GalleryCard from "../../GalleryCard/GalleryCard.tsx";

const MoreCaseStudies = () => {
    return (
        <section className={styles.wrapper}>
            <div className="container">
                <Title>More case studies</Title>
                <div className={styles.main}>
                    {
                        cases.filter(item => item.alt === "Taxes & Efficiency").map((item, i) => {
                            if (i < 3) return (
                                <GalleryCard key={item.id} id={item.id} imgSrc={item.imgSrc} alt={item.alt}
                                             tag={item.tag} link={item.link}/>
                            );
                        })
                    }
                </div>
                <Button className={styles.button} src="/caseStudies">Browse all case studies</Button>
            </div>
        </section>
    );
};

export default MoreCaseStudies;