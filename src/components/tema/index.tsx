import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { propsDefault } from "../../interfaces/props";

declare module "@mui/material/styles" {
  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FF0000",
      light: "#FF0000",
      dark: "#FF0000",
      darker: "#FF0000",
      contrastText: "#fff",
    },
    secondary: {
      main: "#414141",
      light: "#414141",
      dark: "#414141",
      darker: "#414141",
      contrastText: "#000",
    },
  },
});

export default function TemaComponent(props: propsDefault) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}
