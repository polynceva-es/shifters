import { createSlice } from "@reduxjs/toolkit";
import { numbers } from "../../const/const";

export enum ClickedType {
  EMPTY = 'empty',
  CROSS = 'cross',
  ZERO = 'zero',
}

interface playItem {
  id: number;
  isClicked: ClickedType;
}

type initPlayList = playItem[];

interface playListState {
  play: initPlayList;
  move: string;
  isLoading: boolean;
  error: string;
}

const initialPlay: initPlayList = numbers.map((num: number) => {
  return {
    id: num,
    isClicked: ClickedType.EMPTY,
  };
});

const initialState: playListState = {
  play: initialPlay,
  move: ClickedType.CROSS, //CROSS || ZERO
  isLoading: true || false,
  error: "",
};

const playSlice = createSlice({
  name: "play",
  initialState,
  reducers: {
    handleClicked: (state, action) => {
      state.play.find((el) => el.id === action.payload.num)!.isClicked =
        action.payload.move;
    },
    handleMove: (state, action) => {
      if (action.payload === ClickedType.CROSS) {
        state.move = ClickedType.ZERO;
      } else {
        state.move = ClickedType.CROSS;
      }
    },
    handleStartAgain: (state) => {
      state.play = initialPlay;
      state.move = ClickedType.CROSS;
    },
    handleWin: () => {},
  },
});

export const { handleClicked, handleMove, handleStartAgain, handleWin } =
  playSlice.actions;
export default playSlice.reducer;
