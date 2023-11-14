import { createSlice } from "@reduxjs/toolkit";
import { array } from "../../const/array";
import { CardType } from "../../const/card";
import { randomArraySorting } from "../../const/randomArraySortFunction";

export interface cardListState {
  isImage: undefined | boolean;
  cardList: Array<CardType>
}

const cardList: Array<CardType> = randomArraySorting(array.concat(array));

const initialState: cardListState = {
  isImage: undefined,
  cardList
};

const cardListSlice = createSlice({
  name: "cardList",
  initialState,
  reducers: {
    createCardFront(state, action) {
      state.isImage = action.payload;
    },
    getInitialArray(state) {
      state.cardList = randomArraySorting(array.concat(array))
    }
  },
});

export const { createCardFront, getInitialArray } = cardListSlice.actions;
export default cardListSlice.reducer;
