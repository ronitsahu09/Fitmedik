import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Dm Sans'",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      w950: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
});
