import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SimpleTagComponent } from "./simple-tag.component";

@NgModule({
  declarations: [SimpleTagComponent],
  imports: [CommonModule],
  exports: [SimpleTagComponent],
})
export class SimpleTagModule {}
