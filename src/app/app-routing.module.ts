import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BlogComponent } from "./blog/blog.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: () =>
      import("./landing/landing.module").then(m => m.LandingModule),
  },
  {
    path: "projects",
    loadChildren: () =>
      import("./projects/projects.module").then(m => m.ProjectsModule),
  },
  {
    path: "blog",
    component: BlogComponent,
    loadChildren: () => import("./blog/blog.module").then(m => m.BlogModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
