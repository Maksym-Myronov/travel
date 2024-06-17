import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice'; // Шлях до вашого searchSlice

export const store = configureStore({
	reducer: {
		search: searchReducer
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
