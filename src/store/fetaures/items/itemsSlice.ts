import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItemStructure } from "./types";

export interface ItemsStateStructure {
  items: ItemStructure[];
  currentItem: ItemStructure;
}

const itemsInitialState: ItemsStateStructure = {
  items: [],
  currentItem: {
    _id: "",
    collection: "",
    description: "",
    detailImages: [],
    isAvaliable: false,
    mainImage: "",
    model3D: "",
    name: "",
    price: 0,
    stock: 0,
    type: "",
  },
};

const itemsSlice = createSlice({
  name: "items",
  initialState: itemsInitialState,
  reducers: {
    loadItems: (
      currentState: ItemsStateStructure,
      action: PayloadAction<ItemStructure[]>,
    ): ItemsStateStructure => ({
      ...currentState,
      items: action.payload,
    }),
  },
});

export const { loadItems: loadItemsActionCreator } = itemsSlice.actions;

export const itemsReducer = itemsSlice.reducer;
