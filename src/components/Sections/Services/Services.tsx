import React from 'react';
import styles from './Services.module.css'
import HighlightedTag from "../../UI/HighlitedTag/HighlightedTag.tsx";
import {HighlightedTagsType} from "../../../types/types.ts";
import Title from "../../UI/Title/Title.tsx";
import MediaBox from "../../MediaBox/MediaBox.tsx";
import {Link} from "react-router-dom";

const Services = () => {
    return (
        <section className={styles.wrapper}>
            <div className="container">
                <HighlightedTag type={HighlightedTagsType.Green}>Services</HighlightedTag>
                <Title className={styles.title}>Get Control Over Your Business I take<br/> your finance to next
                    level</Title>
                <div className={styles.grid}>
                    <Link to="/services/financialProjections"><MediaBox iconSrc="/icons/evaluation.svg"
                                                                        title="Audit & Evaluation">Get help from Alex
                        Moore, a professional business coach with advanced experience on growth and business
                        scaling.</MediaBox></Link>
                    <Link to="/services/financialProjections"><MediaBox iconSrc="/icons/projections.svg"
                                                                        title="Financial Projections">Get help from Alex
                        Moore, a professional business coach with advanced experience on growth and business
                        scaling.</MediaBox></Link>
                    <Link to="/services/financialProjections"><MediaBox iconSrc="/icons/funds.svg"
                                                                        title="Funds and investments">Get help from Alex
                        Moore, a professional business coach with advanced experience on growth and business
                        scaling.</MediaBox></Link>
                    <Link to="/services/financialProjections"><MediaBox iconSrc="/icons/finance.svg"
                                                                        title="Finance & Restructuring">Get help from
                        Alex Moore, a professional business coach with advanced experience on growth and business
                        scaling.</MediaBox></Link>
                    <Link to="/services/financialProjections"><MediaBox iconSrc="/icons/taxes.svg"
                                                                        title="Taxes & Efficiency">Get help from Alex
                        Moore, a professional business coach with advanced experience on growth and business
                        scaling.</MediaBox></Link>
                    <Link to="/services/financialProjections"><MediaBox iconSrc="/icons/banking.svg"
                                                                        title="Investment banking">Get help from Alex
                        Moore, a professional business coach with advanced experience on growth and business
                        scaling.</MediaBox></Link>
                </div>
            </div>
        </section>
    );
};

export default Services;