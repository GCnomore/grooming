import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import IStore from "../models/store.model";
import { getGroomingStore } from "./actions";
import ICustomer from "../models/customer.model";

export interface RootState {
  groomingShop: IStore | null;
  apptTime: string | null;
  apptDate: Date;
  customer: ICustomer;
}

const initialState: RootState = {
  groomingShop: null,
  apptTime: null,
  apptDate: new Date(),
  customer: {
    firstName: "",
    lastName: "",
    streetAddr: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    pet: [],
  },
};

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    setApptTime: (state, action: PayloadAction<string>) => {
      state.apptTime = action.payload;
    },
    setApptDate: (state, action: PayloadAction<Date>) => {
      state.apptDate = action.payload;
      state.apptTime = null;
    },
    setCustomer: (state, action: PayloadAction<object>) => {
      console.log("eeeeeeeeeeeeee", action.payload);
      // state.customer = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getGroomingStore.fulfilled, (state, action) => {
      state.groomingShop = action.payload;
    });
  },
});

export default appointmentSlice.reducer;
export const { setApptTime, setApptDate, setCustomer } =
  appointmentSlice.actions;
