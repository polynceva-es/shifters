import {createSlice} from '@reduxjs/toolkit';

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    isImage: undefined,
    // isOpen: false
  },
  reducers: {
    createCardFront(state, action) {
        state.isImage = action.payload
    },
    // toggleIsOpen(state, action) {
    //     state.isOpen = action.payload
    // }
  }
});

export const {
    createCardFront, 
    // toggleIsOpen
} = cardSlice.actions;
export default cardSlice.reducer;