import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function ThemeWrapper(props) {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            light: "#ffffff",
            main: "#ffffff",
            dark: "#c7c7c7",
          },
          secondary: {
            light: "#484848",
            main: "#212121",
            dark: "#212121",
          },
        },
      }),
    [mode]
  );

  const ColorModeContext = props.colorModeContext;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ThemeWrapper;
