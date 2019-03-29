import React from "react";
import styled from "styled-components";

import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    bottom: 0;
    left: 0;
    height: 15%;
    width: 100%;
    padding: 0 40%;
`;

const FooterChild = styled.div`
`;

export default () => 
<Container>
    <FooterChild><FiGithub /></FooterChild>
    <FooterChild><FiLinkedin /></FooterChild>
    <FooterChild><FiTwitter /></FooterChild>
    <FooterChild><FiInstagram /></FooterChild>
</Container>