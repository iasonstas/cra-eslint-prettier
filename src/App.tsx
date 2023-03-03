import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeDark, themeLight } from "./theme";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "@fontsource/montserrat";

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const graphQlClient = new QueryClient();

  return (
    <QueryClientProvider client={graphQlClient}>
      <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
        <CssBaseline />
        <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <div data-testid="home">
          <Home />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
