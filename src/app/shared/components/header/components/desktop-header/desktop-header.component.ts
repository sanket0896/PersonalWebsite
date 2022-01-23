import { Component } from "@angular/core";
import { map, withLatestFrom } from "rxjs/operators";
import { ThemeManagementService } from "src/app/shared/services/theme-service/theme-management.service";

@Component({
  selector: "app-desktop-header",
  templateUrl: "./desktop-header.component.html",
  styleUrls: ["./desktop-header.component.scss"],
})
export class DesktopHeaderComponent {
  constructor(private themeService: ThemeManagementService) {}

  public toggleTheme() {
    this.themeService.allThemes$
      .pipe(
        withLatestFrom(this.themeService.currentTheme$),
        map(([allThemes, currentTheme]) => {
          const index = allThemes.indexOf(currentTheme);
          const allThemesLength = allThemes.length;
          const nextThemeIndex = (index + 1) % allThemesLength;
          return allThemes[nextThemeIndex];
        })
      )
      .subscribe(newTheme => {
        this.themeService.changeTheme(newTheme);
      });
  }
}
