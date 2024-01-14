import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { itemsReducer } from "./fetaures/items/itemsSlice";

export const store = configureStore({
  reducer: {
    itemsState: itemsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
