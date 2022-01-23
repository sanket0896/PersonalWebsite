import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BlogRoutingModule } from "./blog-routing.module";
import { BlogComponent } from "./blog.component";
import { SimpleCardModule } from "../shared/components/simple-card/simple-card.module";
import { BlogEntryComponent } from "./components/blog-entry/blog-entry.component";

@NgModule({
  declarations: [BlogComponent, BlogEntryComponent],
  imports: [CommonModule, BlogRoutingModule, SimpleCardModule],
})
export class BlogModule {}
