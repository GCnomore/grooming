import { configureStore } from "@reduxjs/toolkit";

import appointmentSlice from "./appointmentSlice";

export const store = configureStore({
  reducer: appointmentSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootDispatch = typeof store.dispatch;
