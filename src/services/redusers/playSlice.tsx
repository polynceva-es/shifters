import { createSlice } from "@reduxjs/toolkit";
import { numbers } from "../../const/const";
export enum ClickedType {
  EMPTY = "empty",
  CROSS = "cross",
  ZERO = "zero",
  // BLOCK = "block",
}
interface playItem {
  id: number;
  isClicked: ClickedType;
}
type initPlayList = playItem[];
interface playListState {
  play: initPlayList;
  move: string;
  win: boolean;
  winItem: number | undefined;
  winner: ClickedType;
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
  win: false,
  winItem: undefined,
  winner: ClickedType.EMPTY,
  isLoading: false,
  error: "",
};
const playSlice = createSlice({
  name: "play",
  initialState,
  reducers: {
    handleClicked: (state, action) => {
       if(!state.win && state.play.find((el) => el.id === action.payload.num)!.isClicked === ClickedType.EMPTY) {
        state.play.find((el) => el.id === action.payload.num)!.isClicked = action.payload.move;
        if (action.payload.move === ClickedType.CROSS) {
          state.move = ClickedType.ZERO;
        } else {
          state.move = ClickedType.CROSS;
        }
       } else return
    },
    handleStartAgain: (state) => {
      state.play = initialPlay;
      state.move = ClickedType.CROSS;
      state.winner =ClickedType.EMPTY;
      state.win = false;
    },
    handleWin: (state) => {
      //обход по строкам
      for (let i = 0; i < 9; i = i + 3) {
        if (state.play[i].isClicked !== ClickedType.EMPTY &&
          state.play[i].isClicked === state.play[i + 1].isClicked &&
          state.play[i].isClicked === state.play[i + 2].isClicked
        ) {
          state.winner = state.play[i].isClicked;
          state.win = true;
          state.winItem = i;
        }
      }
      //обход по столбцам
      for (let j = 0; j < 3; j = j + 3) {
        if (state.play[j].isClicked !== ClickedType.EMPTY &&
          state.play[j].isClicked === state.play[j + 3].isClicked &&
          state.play[j].isClicked === state.play[j + 6].isClicked
        ) {
          state.winner = state.play[j].isClicked;
          state.win = true;
          state.winItem = j;
        }
      }
      //обход по диагоналям
      if (state.play[0].isClicked !== ClickedType.EMPTY &&
        state.play[0].isClicked === state.play[4].isClicked &&
        state.play[0].isClicked === state.play[8].isClicked
      ) {
        state.winner = state.play[0].isClicked;
        state.win = true;
        state.winItem = 0;
      }
      if (state.play[2].isClicked !== ClickedType.EMPTY &&
        state.play[2].isClicked === state.play[4].isClicked &&
        state.play[2].isClicked === state.play[6].isClicked
      ) {
        state.winner = state.play[2].isClicked;
        state.win = true;
        state.winItem = 2;
      }
    },
  },
});

export const { handleClicked, handleStartAgain, handleWin } =
  playSlice.actions;
export default playSlice.reducer;
