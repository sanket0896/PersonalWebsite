import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { LogoModule } from "../logo/logo.module";
import { NavLinkComponent } from "./components/nav-link/nav-link.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HeaderComponent, NavLinkComponent],
  imports: [CommonModule, RouterModule, LogoModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
