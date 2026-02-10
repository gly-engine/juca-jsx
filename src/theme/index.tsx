import { GlyStd } from "@gamely/gly-types";
import { createState } from "@gamely/acai-jsx/hooks/index";

export type ThemeName = "dark" | "light" | "purple";

type Theme = {
  name: ThemeName;
  primary_color: number;
  secondary_color: number;
  tertiary_color: number;
  contrast_color: number;
  danger_color: number;
  text_color: number;
  h1: number;
  h2: number;
  h3: number;
  p: number;
};

let themes: Record<ThemeName, Theme>;
let getTheme: () => Theme;
let setTheme: (theme: Theme | ((prev: Theme) => Theme)) => void;

export function initTheme(std: GlyStd) {
  themes = {
    dark: {
      name: "dark",
      primary_color: std.color.black,
      secondary_color: std.color.gray,
      tertiary_color: std.color.darkgray,
      contrast_color: std.color.white,
      danger_color: 0x8b1212ff,
      text_color: std.color.white,
      h1: 60,
      h2: 48,
      h3: 36,
      p: 24,
    },

    light: {
      name: "light",
      primary_color: std.color.white,
      secondary_color: std.color.gray,
      tertiary_color: std.color.lightgray,
      contrast_color: std.color.black,
      danger_color: 0xc51212ff,
      text_color: std.color.black,
      h1: 60,
      h2: 48,
      h3: 36,
      p: 24,
    },

    purple: {
      name: "purple",
      primary_color: 0x8128f8ff,
      secondary_color: 0x661accff,
      tertiary_color: 0x362e39ff,
      contrast_color: 0x6e6871ff,
      danger_color: 0xdb6f6fff,
      text_color: std.color.white,
      h1: 64,
      h2: 52,
      h3: 40,
      p: 28,
    },
  };

  [getTheme, setTheme] = createState<Theme>(themes.purple);
}

export function changeTheme(name: ThemeName) {
  setTheme(themes[name]);
}

export const getPrimaryColor = () => getTheme().primary_color;
export const getSecondaryColor = () => getTheme().secondary_color;
export const getTertiaryColor = () => getTheme().tertiary_color;
export const getContrastColor = () => getTheme().contrast_color;
export const getTextColor = () => getTheme().text_color;
export const getDangerColor = () => getTheme().danger_color;
export const getH1 = () => getTheme().h1;
export const getH2 = () => getTheme().h2;
export const getH3 = () => getTheme().h3;
export const getP = () => getTheme().p;
export const getThemeName = () => getTheme().name;
