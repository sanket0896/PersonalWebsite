import React from "react";
import Header from "./Header";
import styled from "styled-components";

import "../styles/global.css";
import Footer from "./Footer";

const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: #151326;
    color: #FF8552;
    overflow-y: auto;
    padding-top: 10%;
    padding-bottom: 10%;
`;

const FadeIn = styled.div`
    height: 7%;
    width: 100%;
    position: fixed;
    bottom: 7%;
    left: 0;
    background-image: linear-gradient(to bottom, transparent, #151326);
`;

export default ({ children }) =>
<Container>
    <Header />
    {children}
    <FadeIn />
    <Footer />
</Container>