import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <app-desktop-header></app-desktop-header>
    <app-mobile-header></app-mobile-header>
  `,
})
export class HeaderComponent {}
