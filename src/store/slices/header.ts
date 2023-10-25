import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type HeaderState = {
  search: string;
};

const initialState: HeaderState = {
  search: "",
};

export const HeaderSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setSearchState: (state, action: PayloadAction<any>) => {
      state.search = action.payload;
      // console.log(state.search);
    },
  },
});

export const { setSearchState } = HeaderSlice.actions;

export const headerState = (state: RootState) => state.header;

export default HeaderSlice.reducer;
