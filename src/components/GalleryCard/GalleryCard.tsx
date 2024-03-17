import React from 'react';
import styles from './GalleryCard.module.css'
import {Case} from "../../types/types.ts";
import {Link} from "react-router-dom";

const GalleryCard: React.FC<Case> = ({imgSrc, alt, link, tag}) => {
    return (
        <Link to={link}>
            <div className={styles.imageContainer}>
                <img src={imgSrc} alt={alt} className={styles.image}/>
                <svg className={styles.plus} width="55" height="55" viewBox="0 0 55 55" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle cx="27.9364" cy="27.3741" r="27.0604" fill="url(#paint0_linear_5_10148)"/>
                    <path
                        d="M26.0051 37.1707V30.1217H18.8501V26.0937H26.0051V19.0447H30.2451V26.0937H37.4001V30.1217H30.2451V37.1707H26.0051Z"
                        fill="#181818"/>
                    <defs>
                        <linearGradient id="paint0_linear_5_10148" x1="5.74606" y1="-9.09715" x2="47.1008" y2="74.9464"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFE9B1"/>
                            <stop offset="1" stopColor="#DDA003"/>
                        </linearGradient>
                    </defs>
                </svg>

                <div className={styles.desc}>
                    <h3 className={styles.title}>{alt}</h3>
                    <p className={styles.tag}>{tag}</p>
                </div>
            </div>
        </Link>
    );
};

export default GalleryCard;