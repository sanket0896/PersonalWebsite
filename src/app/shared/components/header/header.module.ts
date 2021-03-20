import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { MobileHeaderComponent } from "./components/mobile-header/mobile-header.component";
import { DesktopHeaderComponent } from "./components/desktop-header/desktop-header.component";
import { LogoModule } from "../logo/logo.module";
import { LinksModule } from "../links/links.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    MobileHeaderComponent,
    DesktopHeaderComponent,
  ],
  imports: [CommonModule, LogoModule, LinksModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
