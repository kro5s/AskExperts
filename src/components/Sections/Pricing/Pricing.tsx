import React from 'react';
import styles from './Pricing.module.css'
import HighlightedTag from "../../UI/HighlitedTag/HighlightedTag.tsx";
import Title from "../../UI/Title/Title.tsx";
import {HighlightedTagsType} from "../../../types/types.ts";
import Price from "../../Price/Price.tsx";

const Pricing = () => {
    return (
        <section className={styles.wrapper}>
            <div className="container">
                <HighlightedTag type={HighlightedTagsType.Green}>Pricing</HighlightedTag>
                <Title className={styles.title}>Our Pricing Plan</Title>
                <ul className={styles.prices}>
                    <li>
                        <Price
                            name="Basic Plan"
                            description="The argument in favor of using to filler text goes something."
                            price="$35"
                            features={["24/7 system monitoring", "Security management", "Secure finance backup", "Remote support"]}
                            link="#"
                        />
                    </li>
                    <li>
                        <Price
                            name="Standard Plan"
                            description="The argument in favor of using to filler text goes something."
                            price="$56"
                            features={["24/7 system monitoring", "Security management", "Secure finance backup", "Remote support"]}
                            link="#"
                            highlighted={true}
                        />
                    </li>
                    <li>
                        <Price
                            name="Premium Plan"
                            description="The argument in favor of using to filler text goes something."
                            price="$75"
                            features={["24/7 system monitoring", "Security management", "Secure finance backup", "Remote support"]}
                            link="#"
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Pricing;