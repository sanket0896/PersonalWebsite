import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #f342e1;
    bottom: 0;
    left: 0;
    height: 10%;
    width: 100%;
    padding: 0 40%;
`;

const FooterChild = styled.div`

`;

export default () => 
<Container>
    <FooterChild>1</FooterChild>
    <FooterChild>2</FooterChild>
    <FooterChild>3</FooterChild>
    <FooterChild>4</FooterChild>
</Container>