import React from 'react';
import Layout from "../components/Layout/Layout.tsx";
import TeamTopic from "../components/Sections/Topics/TeamTopic/TeamTopic.tsx";
import Team from "../components/Sections/Team/Team.tsx";
import ReadyToTalk from "../components/Sections/ReadyToTalk/ReadyToTalk.tsx";

const TeamPage = () => {
    return (
        <Layout>
            <TeamTopic/>
            <Team/>
            <ReadyToTalk/>
        </Layout>
    );
};

export default TeamPage;