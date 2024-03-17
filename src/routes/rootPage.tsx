import React from 'react';
import Layout from "../components/Layout/Layout.tsx";
import Welcome from "../components/Sections/Welcome/Welcome.tsx";
import Partners from "../components/Sections/Partners/Partners.tsx";
import About from "../components/Sections/About/About.tsx";
import Services from "../components/Sections/Services/Services.tsx";
import Process from "../components/Sections/Process/Process.tsx";
import Gallery from "../components/Sections/Gallery/Gallery.tsx";
import Testimonials from "../components/Sections/Testimonials/Testimonials.tsx";
import BookNow from "../components/Sections/BookNow/BookNow.tsx";
import Blog from "../components/Sections/Blog/Blog.tsx";
import ContactUs from "../components/Sections/ContactUs/ContactUs.tsx";

const Root = () => {
    return (
        <Layout>
            <Welcome/>
            <Partners padding="0.875em 1em 0"/>
            <About/>
            <Services/>
            <Process/>
            <Gallery/>
            <Testimonials/>
            <BookNow paddingBottom="170px"/>
            <Blog/>
            <ContactUs/>
        </Layout>
    );
};

export default Root;