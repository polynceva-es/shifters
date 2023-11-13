import {createSlice} from '@reduxjs/toolkit';

const popupSlice = createSlice({
    name: 'popup',
    initialState: {
      isOpen: true  
    },
    reducers: {
      openPopup(state, action) {
        state.isOpen = action.payload
      },
      closePopup(state, action) {
        state.isOpen = action.payload
      }  
    }
});

export const {openPopup, closePopup} = popupSlice.actions;
export default popupSlice.reducer;