import React from 'react';
import styles from './SectionDescription.module.css'
import classNames from "classnames";

interface SectionDescProps {
    HighlightedTag?: React.ReactNode;
    Title: React.ReactNode;
    Button: React.ReactNode;
    Text?: React.ReactNode;
    className?: string;
}

const SectionDescription: React.FC<SectionDescProps> = ({HighlightedTag, Title, Button, Text, className}) => {
    return (
        <div className={classNames(styles.main, className)}>
            <div>
                {HighlightedTag}
                {Title}
                {Text}
            </div>
            {Button}
        </div>
    );
};

export default SectionDescription;