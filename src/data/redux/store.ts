import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./slice";

export const rootStore = configureStore({ reducer: rootReducer });

export type RootDispatch = typeof rootStore.dispatch;
