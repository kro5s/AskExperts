import React from 'react';
import styles from './Testimonial.module.css'
import classNames from "classnames";
import {UserTestimonial} from "../Sections/Testimonials/Testimonials.tsx";

interface TestimonialProps {
    testimonial: UserTestimonial;
    handleNext: () => void;
    handlePrev: () => void;
}

const Testimonial: React.FC<TestimonialProps> = ({testimonial, handleNext, handlePrev}) => {
    return (
        <div className={styles.container}>
            <blockquote className={styles.quote}>
                <p>“{testimonial.body}”</p>
            </blockquote>
            <div className={styles.bottom}>
                <button className={classNames(styles.button, styles.prev)} onClick={handlePrev}>
                    <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="21.8291" cy="22.7026" r="21.7676" transform="rotate(180 21.8291 22.7026)"
                                fill="#181818"/>
                        <path d="M28.3633 22.7026L15.2953 22.7026" stroke="white" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20.6416 28.0486L15.2956 22.7026L20.6416 17.3566" stroke="white" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Prev
                </button>
                <div className={styles.author}>
                    <img className={styles.image} src={testimonial.imgSrc} alt={testimonial.name}/>
                    <p className={styles.name}>{testimonial.name}</p>
                    <p className={styles.role}>{testimonial.role}</p>
                </div>
                <button className={classNames(styles.button, styles.next)} onClick={handleNext}>
                    Next
                    <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="22.0381" cy="22.4097" r="21.7676" fill="#FFC42B"/>
                        <path
                            d="M15.5039 22.4097H28.5719M28.5719 22.4097L23.2259 17.0637M28.5719 22.4097L23.2259 27.7557"
                            stroke="#141414" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Testimonial;