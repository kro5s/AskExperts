import React from 'react';
import styles from './Team.module.css'
import SectionDescription from "../../SectionDescription/SectionDescription.tsx";
import Title from "../../UI/Title/Title.tsx";
import Button from "../../UI/Button/Button.tsx";
import TeamMember from "../../TeamMember/TeamMember.tsx";

const Team = () => {
    return (
        <section className={styles.wrapper}>
            <div className="container">
                <SectionDescription
                    className={styles.desc}
                    Title={<Title>Meet Our Great Team</Title>}
                    Button={<Button className={styles.button} src="#">Join our team</Button>}
                    Text={<p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt<br/> ut labore et dolore magna aliqua. enim ad minim veniam, quis
                        nostrud exercitation.</p>}
                ></SectionDescription>
                <div className={styles.team}>
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
                    <TeamMember
                        src="/authors/1.png"
                        name="John Doe"
                        role="CEO at Company"
                        text="Leverage agile frameworks to provide a robust synopsis for high level overviews."
                        socials={{
                            instagram: "https://instagram.com",
                            facebook: "https://facebook.com",
                            twitter: "https://x.com"
                        }}
                        link="/team/sarahjasmine"
                    />
                    <TeamMember
                        src="/authors/2.png"
                        name="Ryan Jackson"
                        role="CEO at Company"
                        text="Leverage agile frameworks to provide a robust synopsis for high level overviews."
                        socials={{
                            instagram: "https://instagram.com",
                            facebook: "https://facebook.com",
                            twitter: "https://x.com"
                        }}
                        link="/team/sarahjasmine"
                    />
                    <TeamMember
                        src="/authors/3.png"
                        name="Lilly Victoria"
                        role="CEO at Company"
                        text="Leverage agile frameworks to provide a robust synopsis for high level overviews."
                        socials={{
                            instagram: "https://instagram.com",
                            facebook: "https://facebook.com",
                            twitter: "https://x.com"
                        }}
                        link="/team/sarahjasmine"
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;