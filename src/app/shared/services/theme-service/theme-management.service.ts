import { Injectable } from "@angular/core";
import { of, BehaviorSubject, fromEvent, Observable, merge } from "rxjs";
import { filter, map, startWith, withLatestFrom } from "rxjs/operators";
import { BrowserStorageService } from "../local-storage/local-storage.service";
import { ColorTheme, ThemeToCssClassMapper, THEME_STORAGE_KEY } from "./theme";

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

  private get themePreferenceFromOS$(): Observable<ColorTheme> {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

    return fromEvent(prefersDarkMode, "change").pipe(
      map((mediaPreference: MediaQueryListEvent) =>
        mediaPreference.matches ? ColorTheme.DARK : ColorTheme.LIGHT
      ),
      startWith(prefersDarkMode.matches ? ColorTheme.DARK : ColorTheme.LIGHT),
      withLatestFrom(this.storageService.getItem$(THEME_STORAGE_KEY)),
      filter(([_, storagePref]) => !storagePref),
      map(([osPref, _]) => osPref)
    );
  }

  constructor(private storageService: BrowserStorageService) {
    this.themeChangeListener();
  }

  // Listen to
  private themeChangeListener() {
    const validThemeSet$ = this.allThemes$.pipe(
      map(allThemes => new Set(allThemes))
    );

    const themePreferenceFromStorage$ = this.storageService
      .getItem$(THEME_STORAGE_KEY)
      .pipe(
        withLatestFrom(validThemeSet$),
        filter(([theme, validThemes]) => validThemes.has(theme as ColorTheme)),
        map(([theme, _]) => theme as ColorTheme)
      );

    merge(themePreferenceFromStorage$, this.themePreferenceFromOS$)
      .pipe(
        withLatestFrom(this.currentTheme$),
        filter(([newTheme, currentTheme]) => newTheme !== currentTheme),
        map(([theme, _]) => theme)
      )
      .subscribe(theme => this.setTheme(theme));
  }

  private setTheme(selectedTheme: ColorTheme) {
    this._selectedThemeSub$.next(selectedTheme);
  }

  public changeTheme(selectedTheme: ColorTheme) {
    this.storageService.setItem(THEME_STORAGE_KEY, selectedTheme);
  }
}
