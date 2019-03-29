import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
font-size: 1.75rem;
    width: 25%;
`;

const HeaderSegmentRight = styled(HeaderSegment)`
    width: 35%;
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