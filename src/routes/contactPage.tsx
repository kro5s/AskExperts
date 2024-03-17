import React from 'react';
import Layout from "../components/Layout/Layout.tsx";
import ContactTopic from "../components/Sections/Topics/ContactTopic/ContactTopic.tsx";
import LetsTalk from "../components/Sections/LetsTalk/LetsTalk.tsx";
import Newsletter from "../components/Newsletter/Newsletter.tsx";
import ContactUs from "../components/Sections/ContactUs/ContactUs.tsx";

const ContactPage = () => {
    return (
        <Layout>
            <ContactTopic/>
            <LetsTalk/>
            <Newsletter/>
            <ContactUs/>
        </Layout>
    );
};

export default ContactPage;