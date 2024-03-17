import React from "react";
import styles from './Price.module.css'
import Title from "../UI/Title/Title.tsx";
import {TitlesLevels} from "../../types/types.ts";
import {Link} from "react-router-dom";
import classNames from "classnames";

interface PriceProps {
    name: string;
    description: string;
    price: string;
    features: string[];
    link: string;
    highlighted?: boolean;
}

const Price: React.FC<PriceProps> = ({name, description, price, features, link, highlighted = false}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Title className={styles.title} level={TitlesLevels.h3}>{name}</Title>
                <p className={styles.text}>{description}</p>
                <div className={styles.divider}></div>
                <div className={styles.price}>
                    <span className={styles.priceValue}>{price}</span>
                    <span
                        className={highlighted ? classNames(styles.pricePeriod, styles.highlight) : styles.pricePeriod}>MONTHLY</span>
                </div>
            </div>
            <ul className={styles.features}>
                {features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M-4.461e-07 11C-3.5787e-07 13.0185 0.598547 14.9916 1.71995 16.6699C2.84135 18.3482 4.43525 19.6563 6.30007 20.4287C8.1649 21.2011 10.2169 21.4032 12.1966 21.0095C14.1763 20.6157 15.9947 19.6437 17.422 18.2164C18.8493 16.7891 19.8213 14.9707 20.2151 12.991C20.6088 11.0113 20.4067 8.9593 19.6343 7.09448C18.8619 5.22965 17.5538 3.63576 15.8755 2.51435C14.1972 1.39295 12.2241 0.794403 10.2056 0.794403C7.50048 0.799591 4.90767 1.87648 2.99487 3.78928C1.08208 5.70207 0.00518659 8.29489 -4.461e-07 11ZM9.55792 6.88831L13.4831 10.421C13.5635 10.4946 13.6276 10.584 13.6715 10.6837C13.7153 10.7834 13.738 10.8911 13.738 11C13.738 11.1089 13.7153 11.2166 13.6715 11.3163C13.6276 11.4159 13.5635 11.5054 13.4831 11.579L9.55792 15.1117C9.40354 15.2469 9.20231 15.3164 8.99736 15.3051C8.79241 15.2938 8.60003 15.2027 8.46144 15.0512C8.32286 14.8998 8.24909 14.7001 8.25594 14.495C8.2628 14.2898 8.34973 14.0955 8.49811 13.9537L11.7757 11L8.49811 8.04625C8.41949 7.97737 8.35543 7.89348 8.30966 7.7995C8.2639 7.70553 8.23737 7.60336 8.23162 7.499C8.22587 7.39463 8.24102 7.29017 8.27618 7.19174C8.31133 7.0933 8.3658 7.00288 8.43637 6.92578C8.50694 6.84867 8.59219 6.78644 8.68714 6.74272C8.78208 6.69901 8.8848 6.67469 8.98926 6.6712C9.09373 6.66771 9.19784 6.68512 9.29549 6.7224C9.39314 6.75968 9.48236 6.81609 9.55792 6.88831Z"
                                fill="#181818"/>
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
            <Link className={styles.button} to={link}>
                Get This Plan
            </Link>
        </div>
    );
}

export default Price;