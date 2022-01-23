import { Component } from "@angular/core";
import { map, take, withLatestFrom } from "rxjs/operators";
import { ThemeManagementService } from "src/app/shared/services/theme-service/theme-management.service";

@Component({
  selector: "app-desktop-header",
  templateUrl: "./desktop-header.component.html",
  styleUrls: ["./desktop-header.component.scss"],
})
export class DesktopHeaderComponent {
  private nextTheme$ = this.themeService.currentTheme$.pipe(
    withLatestFrom(this.themeService.allThemes$),
    map(([currentTheme, allThemes]) => {
      const index = allThemes.indexOf(currentTheme);
      const allThemesLength = allThemes.length;
      const nextThemeIndex = (index + 1) % allThemesLength;
      return allThemes[nextThemeIndex];
    })
  );

  public nextThemeName$ = this.nextTheme$.pipe(
    map(theme => theme.toLowerCase())
  );

  constructor(private themeService: ThemeManagementService) {}

  public toggleTheme() {
    this.nextTheme$.pipe(take(1)).subscribe(newTheme => {
      this.themeService.changeTheme(newTheme);
    });
  }
}
