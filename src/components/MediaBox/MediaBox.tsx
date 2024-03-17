import React from 'react';
import styles from './MediaBox.module.css'
import Title from "../UI/Title/Title.tsx";
import {TitlesLevels} from "../../types/types.ts";
import classNames from "classnames";

interface ServiceProps {
    iconSrc?: string;
    title: string;
    children: React.ReactNode;
    svg?: React.ReactNode;
    className?: string;
}

const MediaBox: React.FC<ServiceProps> = ({iconSrc, title, children, svg, className}) => {
    return (
        <article className={classNames(styles.container, className)}>
            {!svg ? <img src={iconSrc} alt="MediaBox" className={styles.icon}/> : svg}
            <div>
                <Title className={styles.title} level={TitlesLevels.h3}>{title}</Title>
                <p>{children}</p>
            </div>
        </article>
    );
};

export default MediaBox;