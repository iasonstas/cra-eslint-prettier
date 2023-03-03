import { createTheme } from "@mui/material/styles";

const fontFamily = [
  "Montserrat",
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");

export const themeDark = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily,
  },
});
export const themeLight = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily,
  },
});
