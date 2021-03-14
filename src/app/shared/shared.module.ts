import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderModule } from "./header/header.module";
import { FooterModule } from "./footer/footer.module";
import { LinksModule } from "./links/links.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderModule, FooterModule, LinksModule],
  exports: [HeaderModule, FooterModule, LinksModule],
})
export class SharedModule {}
