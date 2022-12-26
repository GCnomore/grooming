import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IStore } from "../models/store.model";
import { getGroomingStore } from "./actions";

export interface RootState {
  groomingShop: IStore | null;
  apptTime: String | null;
}

const initialState: RootState = { groomingShop: null, apptTime: null };

const appointmentSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setApptTime: (state, action: PayloadAction<String>) => {
      state.apptTime = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getGroomingStore.fulfilled, (state, action) => {
      state.groomingShop = action.payload;
    });
  },
});

export default appointmentSlice.reducer;
export const { setApptTime } = appointmentSlice.actions;
