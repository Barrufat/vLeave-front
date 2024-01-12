import { render } from "@testing-library/react";
import { PreloadedState } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { RootState, store } from "../store";
import { mainTheme } from "../components/styles/mainTheme";
import { setupStore } from "./setUpStore";
import GlobalStyle from "../components/styles/GlobalStyles";

export interface InitialPropsStructure {
  initialPath: string;
  preloadedState: PreloadedState<RootState>;
}

const customRenderWithProviders = (
  children: React.ReactElement,
  initialProps?: InitialPropsStructure,
) => {
  const currentStore = initialProps
    ? setupStore(initialProps.preloadedState)
    : store;

  const setMemoryRouter: React.ReactElement = (
    <MemoryRouter
      initialEntries={[initialProps ? initialProps.initialPath : ""]}
    >
      <Provider store={currentStore}>
        <GlobalStyle />
        <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
      </Provider>
    </MemoryRouter>
  );

  return render(setMemoryRouter);
};

export default customRenderWithProviders;
