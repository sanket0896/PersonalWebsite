import React from "react";
import Layout from "../components/Layout";
import { ContentCenter_SC, HugeText_SC, ChangingColor_SC } from "../components/StyledComponentHub";
import { homePageData as pageData } from "../assets/data/projectData";
export default () => 
<Layout>
    <ContentCenter_SC>
        <HugeText_SC>{pageData.eyeCatcher}</HugeText_SC><br/>
        {pageData.introText}
    </ContentCenter_SC>
</Layout>
