import React from 'react';
import styles from './GalleryGrid.module.css'
import GalleryCard from "../GalleryCard/GalleryCard.tsx";
import classNames from "classnames";
import {Case} from "../../types/types.ts";

const GalleryGrid: React.FC<{ className?: string, cases: Case[] }> = ({className, cases}) => {
    return (
        <div className={classNames(styles.grid, className)}>
            {
                cases.map(item => (
                    <GalleryCard key={item.id} id={item.id} imgSrc={item.imgSrc} alt={item.alt} link={item.link}
                                 tag={item.tag}/>
                ))
            }
        </div>
    );
};

export default GalleryGrid;