import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavLinkComponent } from "./nav-link/nav-link.component";
import { RouterModule } from "@angular/router";
import { SimpleLinkComponent } from "./simple-link/simple-link.component";

@NgModule({
  declarations: [NavLinkComponent, SimpleLinkComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavLinkComponent, SimpleLinkComponent],
})
export class LinksModule {}
