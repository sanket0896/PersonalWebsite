import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BlogRoutingModule } from "./blog-routing.module";
import { BlogComponent } from "./blog.component";
import { SimpleCardModule } from "../shared/components/simple-card/simple-card.module";
import { BlogEntryComponent } from "./components/blog-entry/blog-entry.component";
import { ScullyLibModule } from "@scullyio/ng-lib";
import { BlogPostComponent } from "./components/blog-post/blog-post.component";
import { BlogListComponent } from "./components/blog-list/blog-list.component";
import { BlogService } from "./blog.service";

@NgModule({
  declarations: [
    BlogComponent,
    BlogEntryComponent,
    BlogPostComponent,
    BlogListComponent,
  ],
  imports: [CommonModule, BlogRoutingModule, SimpleCardModule, ScullyLibModule],
  providers: [BlogService],
})
export class BlogModule {}
