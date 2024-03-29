import { Component, Input } from "@angular/core";
import { TagBase } from "../../models/tag";

@Component({
  selector: "app-simple-tag",
  templateUrl: "./simple-tag.component.html",
  styleUrls: ["./simple-tag.component.scss"],
})
export class SimpleTagComponent {
  @Input()
  tag: TagBase;
}
