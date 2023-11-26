
import React, { useMemo } from 'react';
import { Provider as PaperProvider } from "react-native-paper";
import { createTheme } from '~/theme';


export const PaperThemeProvider = ({ children }: { children: JSX.Element }) => {

    const theme = useMemo(() => createTheme({}), []);

    return (
        <PaperProvider theme={theme} >{children}</PaperProvider>
    )
}
