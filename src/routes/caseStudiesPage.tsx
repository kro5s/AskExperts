import React from 'react';
import Layout from "../components/Layout/Layout.tsx";
import StudiesTopic from "../components/Sections/Topics/StudiesTopic/StudiesTopic.tsx";
import StudiesGallery from "../components/Sections/StudiesGallery/StudiesGallery.tsx";
import ContactUs from "../components/Sections/ContactUs/ContactUs.tsx";

const CaseStudiesPage = () => {
    return (
        <Layout>
            <StudiesTopic/>
            <StudiesGallery/>
            <ContactUs/>
        </Layout>
    );
};

export default CaseStudiesPage;