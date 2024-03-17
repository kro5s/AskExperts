import React, {useState} from 'react';
import styles from './Testimonials.module.css'
import HighlightedTag from "../../UI/HighlitedTag/HighlightedTag.tsx";
import {HighlightedTagsType} from "../../../types/types.ts";
import Testimonial from "../../Testimonial/Testimonial.tsx";

export interface UserTestimonial {
    imgSrc: string;
    name: string;
    role: string;
    body: React.ReactNode;
}

const testimonials: UserTestimonial[] = [
    {
        imgSrc: "/authors/1.png",
        name: "Kathleen Smith",
        role: "Web Designer",
        body: <>Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit, sed do eiusmod</span> tempor incididunt
            ut labore et dolore</>
    },
    {
        imgSrc: "/authors/2.png",
        name: "Timothy Garcia",
        role: "Analyst",
        body: <>Duis aute irure dolor in <span>reprehenderit in voluptate</span> velit esse cillum dolore eu fugiat
            nulla pariatur.</>
    },
    {
        imgSrc: "/authors/3.png",
        name: "Rosemary Dale",
        role: "Manager",
        body: <>Excepteur sint occaecat cupidatat non proident, sunt in
            culpa <span>qui officia deserunt mollit</span> anim id est laborum.</>
    },
]

const Testimonials = () => {
    const [index, setIndex] = useState<number>(0);

    const handlePrevButton = () => {
        if (index === 0) setIndex(testimonials.length - 1);
        else setIndex(index - 1);
    }

    const handleNextButton = () => {
        if (index === testimonials.length - 1) setIndex(0);
        else setIndex(index + 1);
    }

    return (
        <section className={styles.wrapper}>
            <div className="container">
                <HighlightedTag type={HighlightedTagsType.Green} className={styles.tag}>Client Feedback</HighlightedTag>
                <Testimonial testimonial={testimonials[index]} handleNext={handleNextButton}
                             handlePrev={handlePrevButton}/>
            </div>
        </section>
    );
};

export default Testimonials;