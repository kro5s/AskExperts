import React from 'react';
import Layout from "../components/Layout/Layout.tsx";
import TeamMemberPage from "../components/Sections/TeamMemberPage/TeamMemberPage.tsx";

const SarahJasminePage = () => {
    return (
        <Layout>
            <TeamMemberPage
                src="/authors/4.png"
                name="Sarah Jasmine"
                role="CEO at Company"
                text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do."
                experience={<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit sed do.<br/><br/> Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>}
                socials={{
                    instagram: "https://instagram.com",
                    facebook: "https://facebook.com",
                    twitter: "https://x.com"
                }}
            />
        </Layout>
    );
};

export default SarahJasminePage;