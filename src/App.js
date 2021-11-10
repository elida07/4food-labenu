
import React from "react";
import Router from "./routes/Router";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./constants/theme";
import GlobalState from "./context/GlobalState"


function App() {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
