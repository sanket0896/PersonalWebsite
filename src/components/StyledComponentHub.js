import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export const ContentCenter_SC = styled.div`
    width: 60%;
    text-align: center;
`;

export const HugeText_SC = styled.h1`
    display: inline;
    font-size: 5rem;
`;

export const ChangingColor_SC = styled.span`
`;

export const UndecoratedLink_SC = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

export const UndecoratedAnchor_SC = styled.a`
    color: inherit;
    text-decoration: none;
`;

export const HideOverflow_SC = styled.div`
    overflow: hidden;
`;