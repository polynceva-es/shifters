import { createSlice } from "@reduxjs/toolkit";

export interface cardState {
  id: number;
  image_id: number;
  isOpen: boolean;
  isVisible: boolean;
}

const initialState: cardState = {
  id: 2, //???
  image_id: 2, //??
  isOpen: false, //Открыта/закрыта
  isVisible: true, //Показывать/скрыть когда пара
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    open(state) {
      state.isOpen = true;
    },
    close(state) {
      state.isOpen = false;
    },
    visible(state) {
      state.isVisible = false;
    },
  },
});

export const { open, close, visible } = cardSlice.actions;
export default cardSlice.reducer;
