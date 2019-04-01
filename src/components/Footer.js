import React from "react";
import styled from "styled-components";

import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import { NavAnchor } from "./ReactComponentHub";


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

const FooterChild = styled(NavAnchor)`
`;

export default () => 
<Container>
    <FooterChild href="https://github.com/sanket0896" newTab="true"><FiGithub /></FooterChild>
    <FooterChild href="#"><FiLinkedin /></FooterChild>
    <FooterChild href="#"><FiTwitter /></FooterChild>
    <FooterChild href="#"><FiInstagram /></FooterChild>
</Container>