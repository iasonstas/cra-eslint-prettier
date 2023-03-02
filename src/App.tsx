import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { Switch, Box, Container, FormGroup, FormControlLabel, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeDark, themeLight } from "./theme";
import Home from "./components/Home";
import "@fontsource/montserrat";

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const graphQlClient = new QueryClient();

  return (
    <QueryClientProvider client={graphQlClient}>
      <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
        <CssBaseline />
        <Box> Lgo</Box>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={isDarkTheme} onChange={changeTheme} />}
            label="Dark Theme"
          />
        </FormGroup>
        <Container>
          <Home />
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
