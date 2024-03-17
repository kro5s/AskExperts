import React from 'react';
import styles from './OurTeam.module.css'
import HighlightedTag from "../../UI/HighlitedTag/HighlightedTag.tsx";
import Title from "../../UI/Title/Title.tsx";
import TeamMember from "../../TeamMember/TeamMember.tsx";

const OurTeam = () => {
    return (
        <section className={styles.wrapper}>
            <div className="container">
                <HighlightedTag>Our team</HighlightedTag>
                <Title className={styles.title}>We champion the bold to<br/> achieve the extraordinary</Title>
                <p>Ipsum is the result of synergy between our teams and our customers. Our company culture<br/> is
                    focused on excellent productivity, customer satisfaction, respect for team.</p>
                <ul className={styles.members}>
                    <li>
                        <TeamMember
                            src="/authors/4.png"
                            name="Sarah Jasmine"
                            role="CEO at Company"
                            text="Leverage agile frameworks to provide a robust synopsis for high level overviews."
                            socials={{
                                instagram: "https://instagram.com",
                                facebook: "https://facebook.com",
                                twitter: "https://x.com"
                            }}
                            link="/team/sarahjasmine"
                        />
                    </li>
                    <li>
                        <TeamMember
                            src="/authors/5.png"
                            name="John Carter"
                            role="Manager"
                            text="Leverage agile frameworks to provide a robust synopsis for high level overviews."
                            socials={{
                                instagram: "https://instagram.com",
                                facebook: "https://facebook.com",
                                twitter: "https://x.com"
                            }}
                            link="/team/sarahjasmine"
                        />
                    </li>
                    <li>
                        <TeamMember
                            src="/authors/6.png"
                            name="Daisy Stella"
                            role="CEO at Company"
                            text="Leverage agile frameworks to provide a robust synopsis for high level overviews."
                            socials={{
                                instagram: "https://instagram.com",
                                facebook: "https://facebook.com",
                                twitter: "https://x.com"
                            }}
                            link="/team/sarahjasmine"
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default OurTeam;