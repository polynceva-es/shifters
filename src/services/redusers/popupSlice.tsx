import { createSlice } from "@reduxjs/toolkit";

export interface popupState {
  isOpen: boolean;
}

const initialState: popupState = {
  isOpen: true,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopup(state, action) {
      state.isOpen = action.payload;
    },
    closePopup(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
