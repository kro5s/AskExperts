import React from 'react';
import styles from './ExperienceFeature.module.css'
import classNames from "classnames";
import {Link} from "react-router-dom";

interface Props {
    svg: React.ReactNode;
    title: string;
    children: React.ReactNode;
    className?: string;
    src?: string;
}

const ExperienceFeature: React.FC<Props> = ({svg, title, children, className, src}) => {
    return (
        <div className={classNames(styles.container, className, src)}>
            {svg}
            <div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{children}</p>
                {Boolean(src) && <Link className={styles.readMore} to={src!}>
                    ReadMore
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 7.27783H14.568M14.568 7.27783L9.22198 1.93188M14.568 7.27783L9.22198 12.6239"
                              stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>}
            </div>
        </div>
    );
};

export default ExperienceFeature;