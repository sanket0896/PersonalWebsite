import React from "react";
import styled from "styled-components";
import { UndecoratedLink_SC } from "./StyledComponentHub";


const Container = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    top: 0;
    left: 0;
    height: 10%;
    width: 100%;
    padding: 0 5rem;
    background: #151326;
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

const HeaderChild = styled(UndecoratedLink_SC)`
`;

export default () =>  
    <Container>
        <HeaderSegmentLeft>
            <HeaderChild to="/">Sanket Mishra</HeaderChild>
        </HeaderSegmentLeft>
        <HeaderSegmentRight>
            {/* <HeaderChild to="/work">Work</HeaderChild> */}
        </HeaderSegmentRight>
    </Container>