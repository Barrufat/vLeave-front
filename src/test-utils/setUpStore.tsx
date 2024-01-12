import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { RootState } from "../store";

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: {},
    preloadedState,
  });
}
