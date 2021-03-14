import { Component, Input } from "@angular/core";
import { ProjectDetail } from "src/app/shared/models/project";
import { Alignment } from "src/app/shared/models/rendering";

@Component({
  selector: "app-project-entry",
  templateUrl: "./project-entry.component.html",
  styleUrls: ["./project-entry.component.scss"],
})
export class ProjectEntryComponent {
  @Input()
  project: ProjectDetail;

  @Input()
  alignment: Alignment = Alignment.LEFT;
}
