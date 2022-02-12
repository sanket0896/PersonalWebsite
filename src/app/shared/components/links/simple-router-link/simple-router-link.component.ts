import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
  selector: "app-simple-router-link",
  template: `
    <a [routerLink]="urlFragments">
      <ng-content></ng-content>
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleRouterLinkComponent {
  @Input()
  set url(_url: string | string[]) {
    if (typeof _url === "string") {
      this.urlFragments = [_url];
    }

    if (Array.isArray(_url)) {
      this.urlFragments = _url;
    }
  }

  urlFragments: string[] = [];
}
