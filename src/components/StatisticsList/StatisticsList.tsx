import React from 'react';
import styles from './StatisticsList.module.css'
import Statistic from "../Statistic/Statistic.tsx";

const StatisticsList = () => {
    return (
        <ul className={styles.statistics}>
            <Statistic number="1128" listItem={true}>Successful Work</Statistic>
            <Statistic number="908" listItem={true}>Team member</Statistic>
            <Statistic number="258" listItem={true}>Happy Customers</Statistic>
            <Statistic number="564" listItem={true}>Creative Idea</Statistic>
        </ul>
    );
};

export default StatisticsList;