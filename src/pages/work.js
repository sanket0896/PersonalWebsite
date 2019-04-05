import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

import Card from "../components/Card";
import cardData from "../assets/data/projectData"

export const CardContainer = styled.div`
    background: black;
    min-height: 100px;
    min-width: 100px;
    position: relative;
`;

export default () => 
<Layout>
    { cardData.map(card => <Card cardDetails={card} />) }
</Layout>
