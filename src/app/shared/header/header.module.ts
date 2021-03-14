import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { LogoModule } from "../logo/logo.module";
import { NavLinkComponent } from "./components/nav-link/nav-link.component";
import { RouterModule } from "@angular/router";
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { DesktopHeaderComponent } from './components/desktop-header/desktop-header.component';

@NgModule({
  declarations: [HeaderComponent, NavLinkComponent, MobileHeaderComponent, DesktopHeaderComponent],
  imports: [CommonModule, RouterModule, LogoModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
