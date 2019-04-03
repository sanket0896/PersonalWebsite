import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

import Card from "../components/Card";

import hu from "../images/marion-michele-1481926-unsplash.jpg"

const cardDetails = [
    {
        imageUrl: hu,
        title: `New Card`,
        description: `I am a fullstack developer from India. I love building fast, responsive and complex stuff.
        I look forward to havin `,
        tags: [
            `React`,
            `Javascript`,
            `Redux`,
            `Gatsby`,
            `Java`,
            `Angular`
        ],
        siteLink: `#`
    }
];

export const CardContainer = styled.div`
    background: black;
    min-height: 100px;
    min-width: 100px;
    position: relative;
`;

export default () => 
<Layout>
    <Card details={cardDetails[0]} />
</Layout>
