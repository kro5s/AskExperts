import React from 'react';
import styles from './BookNow.module.css';
import HighlightedTag from "../../UI/HighlitedTag/HighlightedTag.tsx";
import {HighlightedTagsType} from "../../../types/types.ts";
import Title from "../../UI/Title/Title.tsx";

const BookNow: React.FC<{ paddingTop?: string; paddingBottom?: string }> = ({paddingTop, paddingBottom}) => {
    return (
        <section style={{paddingBottom: paddingBottom, paddingTop: paddingTop}}>
            <div className={"container"}>
                <article className={styles.container}>
                    <div className={styles.main}>
                        <HighlightedTag type={HighlightedTagsType.Green}>Book Now</HighlightedTag>
                        <Title className={styles.title}>Better Consult, <span>Better</span> Results</Title>
                        <p className={styles.text}>Our software development agency has a growth up to 30% per each year.
                            If you
                            are result-oriented, not afraid to take initiative – drop us a note and join our team!</p>
                        <div className={styles.button}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.17684 11.8493C8.1454 13.8494 9.76274 15.4626 11.7654 16.426C11.9131 16.496 12.0765 16.5262 12.2394 16.5139C12.4024 16.5015 12.5594 16.4469 12.6948 16.3554L15.6362 14.3906C15.7661 14.3025 15.9163 14.2487 16.0727 14.2343C16.229 14.2199 16.3865 14.2453 16.5303 14.3083L22.0366 16.6731C22.2247 16.7514 22.382 16.8894 22.484 17.0659C22.5861 17.2423 22.6273 17.4475 22.6013 17.6496C22.4268 19.0118 21.7619 20.2636 20.7311 21.171C19.7003 22.0783 18.3742 22.579 17.001 22.5793C12.7572 22.5793 8.68734 20.8935 5.68657 17.8928C2.68581 14.892 1 10.8221 1 6.57837C1.00031 5.20511 1.50099 3.87901 2.40835 2.84821C3.31571 1.81742 4.56758 1.15255 5.92971 0.978035C6.13188 0.952065 6.33699 0.993275 6.51344 1.09532C6.6899 1.19737 6.82791 1.35459 6.90624 1.54277L9.27109 7.06075C9.33258 7.20235 9.35831 7.35689 9.346 7.51078C9.33369 7.66466 9.28372 7.81315 9.20049 7.94316L7.23567 10.9316C7.1482 11.0667 7.09685 11.2221 7.08655 11.3828C7.07626 11.5434 7.10734 11.7041 7.17684 11.8493V11.8493Z"
                                    stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            +800 1234 654
                        </div>
                    </div>
                    <div className={styles.image}></div>
                </article>
            </div>
        </section>
    );
};

export default BookNow;