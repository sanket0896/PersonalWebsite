import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const WelcomeText = styled.div`
    width: 60%;
    font-size: 1.75rem;
    text-align: center;
`;

const HugeText = styled.h1`
    display: inline;
`;

export default () => 
<Layout>
    <WelcomeText>
        Hi! I am <HugeText>Sanket</HugeText>.<br/>
        Its nice to have you here.
    </WelcomeText>
</Layout>
