import React from "react";
import { UndecoratedAnchor_SC } from "./StyledComponentHub";

export const NavAnchor = (({ children, href, newTab }) => 
    <UndecoratedAnchor_SC
    href={href} 
    target={newTab ? "_blank" : "_self"} 
    rel="noreferrer noopener">
        {children}
    </UndecoratedAnchor_SC>
);