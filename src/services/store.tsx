import { configureStore } from "@reduxjs/toolkit";
import popupReduser from '../services/redusers/popupSlice';
import cardListReduser from './redusers/cardListSlice';
import cardReduser from './redusers/cardSlice';

export const store = configureStore({
    reducer: {
        popup: popupReduser,
        cardList: cardListReduser,
        card: cardReduser
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch