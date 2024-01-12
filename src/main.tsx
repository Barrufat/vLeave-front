import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/montserrat";
import "@fontsource/gravitas-one";
import App from "./components/App/App.js";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./components/styles/mainTheme.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
