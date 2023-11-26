
import { createTheme, type PaletteOptions, type ThemeOptions } from '@mui/material/styles';
import { breakpoints as _breakpoints } from './breakpoints';
import { typography as _typography } from './typography';

export const BaseThemeOptions = (_palette: PaletteOptions | undefined): ThemeOptions => {

  /**
   * Description 
   * - this will be helpful while using `palette, typography, breakpoints` in theme
   */
  const { palette, typography, breakpoints } = createTheme({ breakpoints: _breakpoints, typography: _typography, palette: _palette })

  return ({
    breakpoints, palette,
    typography,
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'outlined' },
            style: {
              borderRadius: "4px"
              ,
              backgroundColor: palette.primary.contrastText,
              "&:hover": {
                backgroundColor: palette.primary.contrastText
              },
            },
          },
          {
            props: { variant: 'contained' },
            style: {
              borderRadius: "4px"
            },
          },
          {
            props: { variant: 'text' },
            style: {
              borderRadius: "100px",
              paddingInline: 15
            },
          },
        ]
      },
      MuiTable: {
        styleOverrides: {
          root: {
            'th,td': {
              ...(typography.body1)
            }
          }
        }
      }
    }
  })
}


