import { DefaultTheme } from 'react-native-paper';
import type { MD3Typescale } from 'react-native-paper/src/types';

export const textVariants: MD3Typescale = {
    displayLarge: {
        ...DefaultTheme.fonts.displayLarge,
        fontFamily: 'RobotoCondensedRegular',
    },
    displayMedium: {
        ...DefaultTheme.fonts.displayMedium,
        fontFamily: 'RobotoCondensedRegular',
    },
    displaySmall: {
        ...DefaultTheme.fonts.displaySmall,
        fontFamily: 'RobotoCondensedRegular',
    },

    headlineLarge: {
        ...DefaultTheme.fonts.headlineLarge,
        fontFamily: 'RobotoCondensedRegular',
    },
    headlineMedium: {
        ...DefaultTheme.fonts.headlineMedium,
        fontFamily: 'RobotoCondensedRegular',
    },
    headlineSmall: {
        ...DefaultTheme.fonts.headlineSmall,
        fontFamily: 'RobotoCondensedRegular',
    },

    titleLarge: {
        ...DefaultTheme.fonts.titleLarge,
        fontFamily: 'RobotoCondensedRegular',
    },
    titleMedium: {
        ...DefaultTheme.fonts.titleMedium,
        fontFamily: 'RobotoCondensedBold',
    },
    titleSmall: {
        ...DefaultTheme.fonts.titleSmall,
        fontFamily: 'RobotoCondensedBold',
    },

    labelLarge: {
        ...DefaultTheme.fonts.labelLarge,
        fontFamily: 'RobotoCondensedBold',
    },
    labelMedium: {
        ...DefaultTheme.fonts.labelMedium,
        fontFamily: 'RobotoCondensedBold',
    },
    labelSmall: {
        ...DefaultTheme.fonts.labelSmall,
        fontFamily: 'RobotoCondensedBold',
    },

    bodyLarge: {
        ...DefaultTheme.fonts.bodyLarge,
        fontFamily: 'RobotoCondensedRegular',
    },
    bodyMedium: {
        ...DefaultTheme.fonts.bodyMedium,
        fontFamily: 'RobotoCondensedRegular',
    },
    bodySmall: {
        ...DefaultTheme.fonts.bodySmall,
        fontFamily: 'RobotoCondensedRegular',
    }, default: {
        ...DefaultTheme.fonts.default,
        fontFamily: 'RobotoCondensedRegular',
    }
};