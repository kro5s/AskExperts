export const pagesPaths = {
    "Home": '/',
    "About": '/about',
    "Services": '/services',
    "Team": '/team',
    "Blog": '/blog',
    "Contact": '/contact'
}

export const pagesList = Object.keys(pagesPaths);
export const pathsListArray = ['/', '/about', '/services', '/team', '/blog', '/contact']

export enum StepColors {
    Yellow,
    Green,
    Black
}

export const pathsList = {
    '/': 0,
    '/about': 1,
    '/services': 2,
    '/services/financialProjections': 2,
    '/team': 3,
    '/team/sarahjasmine': 3,
    '/blog': 4,
    '/blog/1': 4,
    '/contact': 5
}

export const cases: Case[] = [
    {
        id: 0,
        imgSrc: "/images/Gallery/efficiency.png",
        alt: "Taxes & Efficiency",
        link: "/caseStudies/taxesAndEfficiency",
        tag: "Business"
    },
    {
        id: 1,
        imgSrc: "/images/Gallery/2.png",
        alt: "Taxes & Efficiency",
        link: "/caseStudies/taxesAndEfficiency",
        tag: "Business"
    },
    {
        id: 2,
        imgSrc: "/images/Gallery/3.png",
        alt: "Financial Plan",
        link: "/caseStudies/taxesAndEfficiency",
        tag: "Business"
    },
    {
        id: 3,
        imgSrc: "/images/Gallery/4.png",
        alt: "Audit & Evaluation",
        link: "/caseStudies/taxesAndEfficiency",
        tag: "Business"
    },
    {
        id: 4,
        imgSrc: "/images/Gallery/5.png",
        alt: "Investment banking",
        link: "/caseStudies/taxesAndEfficiency",
        tag: "Business"
    },
    {
        id: 5,
        imgSrc: "/images/Gallery/6.png",
        alt: "Taxes & Efficiency",
        link: "/caseStudies/taxesAndEfficiency",
        tag: "Business"
    },
]

export enum TitlesLevels {
    h1 = 1,
    h2,
    h3,
    h4
}

export enum ButtonsType {
    Black,
    Yellow
}

export enum HighlightedTagsType {
    Yellow,
    Green
}

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    author: User;
}

export interface User {
    id: number;
    name: string;
}

export interface RouterErrorType {
    status: number;
    statusText: string;
}

export interface TeamMemberSocials {
    instagram: string;
    facebook: string;
    twitter: string;
}

export interface Case {
    id: number;
    imgSrc: string;
    alt: string;
    link: string;
    tag: string;
}
