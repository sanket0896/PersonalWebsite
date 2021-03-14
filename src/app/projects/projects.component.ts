import { Component } from "@angular/core";
import { PROJECT_LIST } from "../shared/constants/project-list";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent {
  readonly projectList = PROJECT_LIST;
}
