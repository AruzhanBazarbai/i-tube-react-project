import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type SidebarState = {
  state: "open" | "close";
};

const initialState: SidebarState = {
  state: "open",
};

export const SidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarState: (state, action: PayloadAction<any>) => {
      state.state = action.payload === "open" ? "close" : "open";
    },
  },
});

export const { setSidebarState } = SidebarSlice.actions;

export const sidebarState = (state: RootState) => state.sidebar;

export default SidebarSlice.reducer;
