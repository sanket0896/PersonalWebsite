import { Component } from "@angular/core";
import { ThemeManagementService } from "./shared/services/theme-service/theme-management.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "PersonalWebsite";
  theme$ = this.themeService.themeClass$;

  constructor(private themeService: ThemeManagementService) {}
}
