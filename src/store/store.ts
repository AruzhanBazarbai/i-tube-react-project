import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebar";
import headerReducer from "./slices/header";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    header: headerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
