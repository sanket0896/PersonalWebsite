import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { LogoModule } from "../logo/logo.module";
import { MobileHeaderComponent } from "./components/mobile-header/mobile-header.component";
import { DesktopHeaderComponent } from "./components/desktop-header/desktop-header.component";
import { LinksModule } from "../links/links.module";

@NgModule({
  declarations: [
    HeaderComponent,
    MobileHeaderComponent,
    DesktopHeaderComponent,
  ],
  imports: [CommonModule, LogoModule, LinksModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
