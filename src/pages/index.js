import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const WelcomeText = styled.div`
    width: 60%;
    text-align: center;
`;

const HugeText = styled.h1`
    display: inline;
    font-size: 5rem;
    //animation: neon .08s ease-in-out infinite alternate;
`;

const ChangingColor = styled.span`
`;

export default () => 
<Layout>
    <WelcomeText>
        <HugeText>Hi! I am <ChangingColor>Sanket</ChangingColor></HugeText><br/>
        I am a fullstack developer from India. I love building fast, responsive and complex stuff.
        I look forward to having a great life and making everyone happy.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, porro quasi eveniet praesentium dolores accusamus corrupti, 
        officia tempore dolore dicta voluptas est. Quod sint facilis id exercitationem itaque est magni.
    </WelcomeText>
</Layout>
