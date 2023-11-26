import type { Palette } from "@mui/material/styles";
import type { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) | undefined = {
    fontFamily: [
        'RobotoCondensedBold',
        'RobotoCondensedRegular',
    ].join(','),

    button: {
        fontSize: '14px',

    },

    h1: {
        fontSize: 45,
        fontWeight: 'bold',
        fontFamily: 'RobotoCondensedBold'

    },
    h2: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'RobotoCondensedBold'

    },
    h3: {
        fontSize: 37,
        fontWeight: 'bold',
        fontFamily: 'RobotoCondensedBold'

    },
    h4: {
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'RobotoCondensedBold'

    },
    h5: {
        fontSize: 23,
        fontWeight: 'bold',
        fontFamily: 'RobotoCondensedBold'

    },
    h6: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'RobotoCondensedBold'

    },

    subtitle1: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'RobotoCondensedBold'

    },
    subtitle2: {
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'RobotoCondensedBold'

    },

    body1: {
        fontSize: 14,
        fontFamily: 'RobotoCondensedRegular'
    },
    body2: {
        fontSize: 12,
        fontFamily: 'RobotoCondensedRegular'
    },
    caption: {
        fontSize: 12,
        fontFamily: 'RobotoCondensedRegular'
    }
}