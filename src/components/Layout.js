import React from "react";
import Header from "./Header";
import styled from "styled-components";

import "../styles/global.css";
import Footer from "./Footer";

const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #345678;
`;

export default ({ children }) =>
<Container>
    <Header />
    {children}
    <Footer />
</Container>