import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/montserrat";
import "@fontsource/gravitas-one";
import App from "./components/App/App.js";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./components/styles/mainTheme.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
