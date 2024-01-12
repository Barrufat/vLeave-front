import { createSlice } from "@reduxjs/toolkit";
import { ItemStructure } from "./types";
import { itemsData } from "../../../data/data";

export interface ItemsStateStructure {
  items: ItemStructure[];
  currentItem: ItemStructure;
}

const itemsInitialState: ItemsStateStructure = {
  items: itemsData,
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
  reducers: {},
});

export const itemsReducer = itemsSlice.reducer;
