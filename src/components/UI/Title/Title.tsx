import React from 'react';
import styles from "./Title.module.css";
import {TitlesLevels} from "../../../types/types.ts";
import classNames from "classnames";


interface TitleProps {
    children: React.ReactNode;
    className?: string,
    level?: TitlesLevels
}

const Title: React.FC<TitleProps> = ({children, className, level}) => {
    switch (level) {
        case TitlesLevels.h1:
            return <h1 className={classNames(styles.title, className)}>{children}</h1>
        case TitlesLevels.h2:
            return <h2 className={classNames(styles.title, className)}>{children}</h2>
        case TitlesLevels.h3:
            return <h3 className={classNames(styles.title, className)}>{children}</h3>
        case TitlesLevels.h4:
            return <h4 className={classNames(styles.title, className)}>{children}</h4>
        default:
            return <h2 className={classNames(styles.title, className)}>{children}</h2>
    }
};

export default Title;