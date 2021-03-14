import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectEntryComponent } from "./components/project-entry/project-entry.component";
import { ProjectsComponent } from "./projects.component";
import { SimpleCardModule } from "../shared/components/simple-card/simple-card.module";

@NgModule({
  declarations: [ProjectsComponent, ProjectEntryComponent],
  imports: [CommonModule, ProjectsRoutingModule, SimpleCardModule],
})
export class ProjectsModule {}
