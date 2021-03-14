import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LinksModule } from "./components/links/links.module";
import { HeaderModule } from "./components/header/header.module";
import { FooterModule } from "./components/footer/footer.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderModule, FooterModule, LinksModule],
  exports: [HeaderModule, FooterModule, LinksModule],
})
export class SharedModule {}
