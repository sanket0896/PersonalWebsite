import { Component } from "@angular/core";
import { SOCIAL_LINKS } from "../shared/constants/social-links";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent {
  readonly socialLinks = SOCIAL_LINKS;
}
