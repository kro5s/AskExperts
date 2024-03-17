import React from 'react';
import Layout from "../components/Layout/Layout.tsx";
import CaseTopic from "../components/Sections/Topics/CaseTopic/CaseTopic.tsx";
import CaseBody from "../components/Sections/CaseBody/CaseBody.tsx";
import MoreCaseStudies from "../components/Sections/MoreCaseStudies/MoreCaseStudies.tsx";

const CasePage = () => {
    return (
        <Layout>
            <CaseTopic/>
            <CaseBody/>
            <MoreCaseStudies/>
        </Layout>
    );
};

export default CasePage;