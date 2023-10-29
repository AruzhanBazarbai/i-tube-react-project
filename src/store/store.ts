import { configureStore } from "@reduxjs/toolkit";
import { sidebarReducer as sidebar, headerReducer as header } from "./slices";
// Алиасами можно сократить количество назначении на атрибьюта типа name: value
// Тоже субъективно вполне

export const store = configureStore({
  reducer: {
    sidebar,
    header,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
