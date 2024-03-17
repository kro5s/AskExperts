import React, {useState} from 'react';
import styles from './StudiesGallery.module.css'
import GalleryGrid from "../../GalleryGrid/GalleryGrid.tsx";
import classNames from "classnames";
import {Case, cases} from "../../../types/types.ts";

const filters: string[] = ["All", "Taxes & Efficiency", "Investment banking", "Financial Plan", "Audit & Evaluation"]

const StudiesGallery = () => {
    const [index, setIndex] = useState<number>(0);
    const [casesList, setCasesList] = useState<Case[]>(cases);

    const handleFilterClick = (filter: string, newIndex: number) => {
        return () => {
            setIndex(newIndex);

            if (filter === "All") setCasesList(cases);
            else setCasesList(cases.filter(item => item.alt === filter));
        }
    }

    return (
        <section className={styles.wrapper}>
            <div className="container">
                <ul className={styles.filters}>
                    {
                        filters.map((item, i) => (
                            <li
                                key={i}
                                className={i === index ? classNames(styles.filter, styles.active) : styles.filter}
                                onClick={handleFilterClick(item, i)}
                            >
                                {item}
                            </li>
                        ))
                    }
                </ul>
                <GalleryGrid className={styles.grid} cases={casesList}/>
            </div>
        </section>
    );
};

export default StudiesGallery;