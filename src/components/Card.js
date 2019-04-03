import React from "react";
import styled from "styled-components";
import { NavAnchor } from "./ReactComponentHub";

const CardContainer = styled.div`
    min-height: 10%;
    width: 300px;
    background: #FFFFFF;
    color: #151326;
    font-size: 1.1rem;
    margin: 3rem;
    border-radius: 5px; 
`;

const CardImage = styled.div`
    width: 100%;
    height: 150px;
    background: ${props => `url(${props.url})`};
    object-fit: cover;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-top: inherit;
    border-top-left-radius: inherit; 
    border-top-right-radius: inherit;     
`;

const CardContent = styled.div`
    padding: 1rem;
    font-size: 1.1rem;
`;

const CardTitle = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const CardDesc = styled.div`
    
`;

const CardTagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
`;

const CardTags = styled.div`
    padding: 0.1rem 0.5rem;
    margin: 0.2rem;
    border: 1px solid #151326;
    /* background: #151326;
    color: #FF8552; */
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: bold;
`;

const CardActionButton = styled(NavAnchor)`
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FF8552;
    color: #151326;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 0.75rem 0;
    border-bottom-left-radius: inherit; 
    border-bottom-right-radius: inherit; 
`;

export default ({ cardDetails }) => 
    <CardContainer>
    <CardImage url={cardDetails.imageUrl}></CardImage>
    <CardContent>
        <CardTitle>
            {cardDetails.title}
        </CardTitle>
        <CardDesc>
            {cardDetails.description}
        </CardDesc>
        <CardTagsContainer>
            {cardDetails.tags.map(tag => <CardTags>{tag}</CardTags>)}
        </CardTagsContainer>
    </CardContent>
    <CardActionButton href={cardDetails.siteLink} newTab="true">
        View Site
    </CardActionButton>
    </CardContainer>
;