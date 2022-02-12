import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavLinkComponent } from "./nav-link/nav-link.component";
import { RouterModule } from "@angular/router";
import { SimpleLinkComponent } from "./simple-link/simple-link.component";
import { SimpleRouterLinkComponent } from "./simple-router-link/simple-router-link.component";

@NgModule({
  declarations: [
    NavLinkComponent,
    SimpleLinkComponent,
    SimpleRouterLinkComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [NavLinkComponent, SimpleLinkComponent, SimpleRouterLinkComponent],
})
export class LinksModule {}
