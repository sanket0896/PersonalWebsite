import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #f342e1;
    top: 0;
    left: 0;
    height: 10%;
    width: 100%;
    padding: 0 5rem;
`;

const HeaderSegment = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

const HeaderSegmentLeft = styled(HeaderSegment)`
    width: 25%;
    font-size: 1.5rem;
`;

const HeaderSegmentRight = styled(HeaderSegment)`
    width: 35%;
    font-size: 1rem;
`;

const HeaderChild = styled.div`

`;

export default () =>  
    <Container>
        <HeaderSegmentLeft>Sanket Mishra</HeaderSegmentLeft>
        <HeaderSegmentRight>
            <HeaderChild>Work</HeaderChild>
            <HeaderChild>Life</HeaderChild>
            <HeaderChild>Contact</HeaderChild>
        </HeaderSegmentRight>
    </Container>