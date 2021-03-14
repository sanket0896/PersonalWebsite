import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { BlogComponent } from "./blog/blog.component"
import { LandingComponent } from "./landing/landing.component"
import { ProjectsComponent } from "./projects/projects.component"

const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
  },
  {
    path: "projects",
    component: ProjectsComponent,
  },
  {
    path: "blog",
    component: BlogComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
