import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-simple-link",
  templateUrl: "./simple-link.component.html",
  styleUrls: ["./simple-link.component.scss"],
})
export class SimpleLinkComponent {
  @Input()
  link: string = "#";
}
