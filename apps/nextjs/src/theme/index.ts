import type { Direction, Theme } from '@mui/material/styles';
import { createTheme as createMUITheme, responsiveFontSizes } from '@mui/material/styles';
import type { ModeUnion } from "~/store/settingsStore";
import { BaseThemeOptions } from './BaseThemeOptions';
import { lightPalette } from "./BaseThemeOptions/lightPalette";

type ThemeConfig = {
    direction: Direction;
    mode: ModeUnion;
};

export const createTheme = (config: ThemeConfig): Theme => {

    let theme = createMUITheme(BaseThemeOptions(lightPalette), {
        direction: config.direction,
    });

    theme = responsiveFontSizes(theme);

    return theme;
};


declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        error: true;
    }
}


declare module '@mui/material/SvgIcon' {
    interface SvgIconPropsColorOverrides {
        inactive: true;
        dark: true;
    }
}

interface PaletteColor {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
}

declare module '@mui/material/styles' {
    interface Palette {
        inactive: PaletteColor;
        light: PaletteColor;
        dark: PaletteColor;
        darkGray: PaletteColor;
        lightGray: PaletteColor;
    }
    interface PaletteOptions {
        inactive: PaletteColor;
        light: PaletteColor;
        dark: PaletteColor;
        darkGray: PaletteColor;
        lightGray: PaletteColor;
    }
}

declare module '@mui/material/styles' {

    interface TypeText {
        darkGray: string;
        success: string;
        light: string;
        info: string;

    }
}
declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        light: true;
    }
}


