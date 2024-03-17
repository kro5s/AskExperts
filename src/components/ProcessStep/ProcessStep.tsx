import React from 'react';
import styles from './ProcessStep.module.css'
import classNames from "classnames";
import {StepColors} from "../../types/types.ts";

const ProcessStep: React.FC<{ number: string, title: string, children: React.ReactNode, type?: StepColors }> = ({
                                                                                                                    number,
                                                                                                                    title,
                                                                                                                    children,
                                                                                                                    type
                                                                                                                }) => {
    let stepClass: string | null = null;
    switch (type) {
        case StepColors.Yellow:
            stepClass = styles.yellow;
            break;
        case StepColors.Green:
            stepClass = styles.green;
            break;
    }

    return (
        <div className={styles.step}>
            <p className={classNames(styles.number, stepClass)}>{number}</p>
            <div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{children}</p>
            </div>
        </div>
    );
};

export default ProcessStep;