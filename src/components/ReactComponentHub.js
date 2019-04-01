import React from "react";
import { UndecoratedAnchor } from "./StyledComponentHub";

export const NavAnchor = (({ children, href, newTab }) => 
    <UndecoratedAnchor
    href={href} 
    target={newTab ? "_blank" : "_self"} 
    rel="noreferrer noopener">
        {children}
    </UndecoratedAnchor>
);