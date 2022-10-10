import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IStore } from "../models/store.model";
import { getStore } from "./actions";

export interface RootState {
  store: IStore | null;
}

const initialState: RootState = { store: null };

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getStore.fulfilled, (state, action) => {
      state.store = action.payload;
    });
  },
});

export default rootSlice.reducer;
