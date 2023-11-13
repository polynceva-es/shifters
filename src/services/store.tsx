import { configureStore } from "@reduxjs/toolkit";
import popupReduser from '../services/redusers/popupSlice';
import cardReduser from './redusers/cardSlice';

export const store = configureStore({
    reducer: {
        popup: popupReduser,
        card: cardReduser
    }
});