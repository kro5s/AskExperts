import React from 'react';
import Layout from "../components/Layout/Layout.tsx";
import ServicesTopic from "../components/Sections/Topics/ServicesTopic/ServicesTopic.tsx";
import Services from "../components/Sections/Services/Services.tsx";
import ServicesProcess from "../components/Sections/ServicesProcess/ServicesProcess.tsx";
import Pricing from "../components/Sections/Pricing/Pricing.tsx";
import ContactUs from "../components/Sections/ContactUs/ContactUs.tsx";

const ServicesPage = () => {
    return (
        <Layout>
            <ServicesTopic/>
            <Services/>
            <ServicesProcess/>
            <Pricing/>
            <ContactUs/>
        </Layout>
    );
};

export default ServicesPage;