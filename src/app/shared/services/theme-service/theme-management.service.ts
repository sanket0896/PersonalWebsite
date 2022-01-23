import { Injectable } from "@angular/core";
import { of, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { ColorTheme, ThemeToCssClassMapper } from "./theme";

@Injectable({
  providedIn: "root",
})
export class ThemeManagementService {
  private _selectedThemeSub$: BehaviorSubject<ColorTheme> = new BehaviorSubject(
    ColorTheme.LIGHT
  );

  public allThemes$ = of(Object.values(ColorTheme));
  public currentTheme$ = this._selectedThemeSub$.asObservable();
  public themeClass$ = this._selectedThemeSub$
    .asObservable()
    .pipe(map(selectedTheme => ThemeToCssClassMapper[selectedTheme]));

  changeTheme(selectedTheme: ColorTheme) {
    this._selectedThemeSub$.next(selectedTheme);
  }
}
