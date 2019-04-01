import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export const ContentCenter = styled.div`
    width: 60%;
    text-align: center;
`;

export const HugeText = styled.h1`
    display: inline;
    font-size: 5rem;
`;

export const ChangingColor = styled.span`
`;

export const UndecoratedLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

export const UndecoratedAnchor = styled.a`
    color: inherit;
    text-decoration: none;
`;