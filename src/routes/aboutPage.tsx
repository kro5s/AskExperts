import React from 'react';
import Layout from "../components/Layout/Layout.tsx";
import AboutTopic from "../components/Sections/Topics/AboutTopic/AboutTopic.tsx";
import OurVision from "../components/Sections/OurVision/OurVision.tsx";
import OurPrinciples from "../components/Sections/OurPrinciples/OurPrinciples.tsx";
import OurHistory from "../components/Sections/OurHistory/OurHistory.tsx";
import OurTeam from "../components/Sections/OurTeam/OurTeam.tsx";
import BookNow from "../components/Sections/BookNow/BookNow.tsx";

const AboutPage = () => {
    return (
        <Layout>
            <AboutTopic/>
            <OurVision/>
            <OurPrinciples/>
            <OurHistory/>
            <OurTeam/>
            <BookNow paddingBottom="150px" paddingTop="150px"/>
        </Layout>
    );
};

export default AboutPage;