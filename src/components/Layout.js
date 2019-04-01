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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #151326;
    color: #FF8552;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 1.5rem;
`;

export default ({ children }) =>
<Container>
    <Header />
    {children}
    <Footer />
</Container>