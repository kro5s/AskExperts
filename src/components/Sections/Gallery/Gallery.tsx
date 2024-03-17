import React from 'react';
import styles from './Gallery.module.css';
import Button from "../../UI/Button/Button.tsx";
import {ButtonsType, cases, HighlightedTagsType} from "../../../types/types.ts";
import HighlightedTag from "../../UI/HighlitedTag/HighlightedTag.tsx";
import Title from "../../UI/Title/Title.tsx";
import StatisticsList from "../../StatisticsList/StatisticsList.tsx";
import SectionDescription from "../../SectionDescription/SectionDescription.tsx";
import GalleryGrid from "../../GalleryGrid/GalleryGrid.tsx";

const Gallery = () => {
    return (
        <section className={styles.wrapper}>
            <div className="container">
                <SectionDescription
                    HighlightedTag={<HighlightedTag type={HighlightedTagsType.Green}>Process</HighlightedTag>}
                    Title={<Title className={styles.title}>Our client, global analytical techno<br/> company, wanted to
                        build market.</Title>}
                    Button={<Button src="/caseStudies" type={ButtonsType.Yellow} className={styles.button}>More
                        Gallery</Button>}
                ></SectionDescription>
                <div className={styles.main}>
                    <GalleryGrid cases={cases}/>
                    <StatisticsList/>
                </div>
            </div>
        </section>
    );
};

export default Gallery;