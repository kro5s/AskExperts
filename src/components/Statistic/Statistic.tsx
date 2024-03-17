import React from 'react';
import styles from './Statistic.module.css'

const Statistic: React.FC<{ children: React.ReactNode, number: string, listItem?: boolean }> = ({
                                                                                                    children,
                                                                                                    number,
                                                                                                    listItem = false
                                                                                                }) => {
    if (listItem)
        return (
            <li className={styles.container}>
                <p className={styles.number}>{number}+</p>
                <p className={styles.name}>{children}</p>
            </li>
        );

    return (
        <div className={styles.container}>
            <p className={styles.number}>{number}+</p>
            <p className={styles.name}>{children}</p>
        </div>
    );
};

export default Statistic;