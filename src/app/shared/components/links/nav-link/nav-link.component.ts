import { Component, Input } from "@angular/core";
import { IsActiveMatchOptions, Router } from "@angular/router";

@Component({
  selector: "app-nav-link",
  templateUrl: "./nav-link.component.html",
  styleUrls: ["./nav-link.component.scss"],
})
export class NavLinkComponent {
  @Input()
  link: string = "";

  readonly routerLinkActiveOptions: IsActiveMatchOptions = {
    paths: "subset",
    matrixParams: "ignored",
    queryParams: "ignored",
    fragment: "ignored",
  };

  private get exactOrSubset(): "exact" | "subset" {
    return this.link === "" ? "exact" : "subset";
  }

  get isActive() {
    const opts: IsActiveMatchOptions = {
      paths: this.exactOrSubset,
      queryParams: this.exactOrSubset,
      fragment: "ignored",
      matrixParams: "ignored",
    };

    return this.router.isActive(this.link, opts);
  }

  constructor(private router: Router) {}
}
