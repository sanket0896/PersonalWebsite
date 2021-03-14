import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SimpleCardComponent } from "./simple-card.component";
import { LinksModule } from "../links/links.module";
import { SimpleTagModule } from "../simple-tag/simple-tag.module";

@NgModule({
  declarations: [SimpleCardComponent],
  imports: [CommonModule, LinksModule, SimpleTagModule],
  exports: [SimpleCardComponent],
})
export class SimpleCardModule {}
