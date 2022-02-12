import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BlogComponent } from "./blog.component";
import { BlogListComponent } from "./components/blog-list/blog-list.component";
import { BlogPostComponent } from "./components/blog-post/blog-post.component";

const routes: Routes = [
  {
    path: "",
    component: BlogComponent,
    children: [
      {
        path: ":blogId",
        component: BlogPostComponent,
      },
      {
        path: "",
        component: BlogListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
