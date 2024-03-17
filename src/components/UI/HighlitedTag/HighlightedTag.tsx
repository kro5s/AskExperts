import React from 'react';
import styles from './HighlightedTag.module.css'
import classNames from "classnames";
import {HighlightedTagsType} from "../../../types/types.ts";

interface HTagProps {
    children: React.ReactNode;
    className?: string;
    type?: HighlightedTagsType;
}

const HighlightedTag: React.FC<HTagProps> = ({children, className, type}) => {
    switch (type) {
        case HighlightedTagsType.Green:
            return <p className={classNames(styles.tag, styles.green, className)}>{children}</p>;
        default:
            return <p className={classNames(styles.tag, className)}>{children}</p>;
    }
};

export default HighlightedTag;