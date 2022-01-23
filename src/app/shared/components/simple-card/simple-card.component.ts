import { Component, Input } from "@angular/core";
import { TagBase } from "../../models/tag";

@Component({
  selector: "app-simple-card",
  templateUrl: "./simple-card.component.html",
  styleUrls: ["./simple-card.component.scss"],
})
export class SimpleCardComponent {
  @Input()
  heading: string;
  @Input()
  body: string;
  @Input()
  tags: TagBase[];
}
