import { CssBaseline, ThemeProvider } from "@mui/material";
import { settingsStore } from "~/store/settingsStore";
import { createTheme } from "~/theme";

import { useMemo } from "react";

interface ThemeProviderWrapperProps {
  children: JSX.Element;
}

export const ThemeProviderWrapper = ({
  children,
}: ThemeProviderWrapperProps) => {

  const [mode] = settingsStore((state) => [state.mode]);

  const theme = useMemo(
    () =>
      createTheme({
        direction: "ltr",
        mode,
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
