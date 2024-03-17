import React from 'react';
import Layout from "../components/Layout/Layout.tsx";
import ServiceTopic from "../components/Sections/Topics/ServiceTopic/ServiceTopic.tsx";
import ServiceInfo from "../components/Sections/ServiceInfo/ServiceInfo.tsx";
import Expectations from "../components/Sections/Expectations/Expectations.tsx";
import ServiceVideo from "../components/Sections/ServiceVideo/ServiceVideo.tsx";
import ServiceContact from "../components/Sections/ServiceContact/ServiceContact.tsx";
import Questions from "../components/Sections/Questions/Questions.tsx";

const FinancialProjectionsPage = () => {
    return (
        <Layout>
            <ServiceTopic/>
            <ServiceInfo/>
            <Expectations/>
            <ServiceVideo/>
            <ServiceContact/>
            <Questions/>
        </Layout>
    );
};

export default FinancialProjectionsPage;