import { createSlice } from "@reduxjs/toolkit";
import {EMPTY, CROSS, ZERO, numbers} from "../../const/const";

interface playItem {
  id: number,
  isClicked: string
}

type initPlayList = playItem[]

interface playListState {
  play: initPlayList,
  move: string,
  isLoading: boolean,
  error: string
}

const initialPlay: initPlayList = numbers.map((num: number) => {
  return {
    id: num,
    isClicked: EMPTY,
  }
})

const initialState: playListState = {
  play: initialPlay,
  move: CROSS, //CROSS || ZERO
  isLoading: true || false,
  error: ''
};

const playSlice = createSlice({
  name: "play",
  initialState,
  reducers: {
    handleClicked: (state, action) => {
      state.play.find((el) => el.id === action.payload.num).isClicked = action.payload.move;   
    },
    handleMove: (state, action) => {
      if(action.payload === CROSS) {
        state.move = ZERO
      } else {
        state.move = CROSS
      }
    },
    handleStartAgain: (state) => {
      state.play = initialPlay;
      state.move = CROSS;
    },
    handleWin: () => {

    }
  },
});

export const {handleClicked, handleMove, handleStartAgain, handleWin} = playSlice.actions;
export default playSlice.reducer;
