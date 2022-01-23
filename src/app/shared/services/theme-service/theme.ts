export enum ColorTheme {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

export const ThemeToCssClassMapper: Record<ColorTheme, string> = {
  [ColorTheme.DARK]: "theme-dark",
  [ColorTheme.LIGHT]: "theme-light",
};

export const THEME_STORAGE_KEY = "theme";
