import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeDark, themeLight } from "./theme";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "@fontsource/montserrat";
import RepoProvider from "./context/RepoContext";

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const graphQlClient = new QueryClient();

  return (
    <QueryClientProvider client={graphQlClient}>
      <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
        <CssBaseline />
        <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <RepoProvider>
          <Home />
        </RepoProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
