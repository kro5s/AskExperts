import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/rootPage.tsx";
import ServicesPage from "./routes/servicesPage.tsx";
import ErrorPage from "./routes/errorPage.tsx";
import AboutPage from "./routes/aboutPage.tsx";
import FinancialProjectionsPage from "./routes/financialProjectionsPage.tsx";
import TeamPage from "./routes/teamPage.tsx";
import SarahJasminePage from "./routes/sarahJasminePage.tsx";
import CaseStudiesPage from "./routes/caseStudiesPage.tsx";
import CasePage from "./routes/casePage.tsx";
import BlogPage from "./routes/blogPage.tsx";
import PostPage from "./routes/postPage.tsx";
import ContactPage from "./routes/contactPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/services',
        element: <ServicesPage/>,
    },
    {
        path: '/about',
        element: <AboutPage/>,
    },
    {
        path: '/services/financialProjections',
        element: <FinancialProjectionsPage/>
    },
    {
        path: '/team',
        element: <TeamPage/>
    },
    {
        path: '/team/sarahjasmine',
        element: <SarahJasminePage/>
    },
    {
        path: '/caseStudies',
        element: <CaseStudiesPage/>
    },
    {
        path: '/caseStudies/taxesAndEfficiency',
        element: <CasePage/>
    },
    {
        path: '/blog',
        element: <BlogPage/>
    },
    {
        path: '/blog/1',
        element: <PostPage/>
    },
    {
        path: '/contact',
        element: <ContactPage/>
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
