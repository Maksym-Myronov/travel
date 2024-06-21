import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Coordinates {
	lat: number;
	lon: number;
}

interface City {
	name: string;
	country_name: string;
	country_code: string;
	id: string;
	coordinates: Coordinates;
}

interface SearchState {
	city: City[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: SearchState = {
	city: [],
	status: 'idle',
	error: null
};

export const fetchCityData = createAsyncThunk(
	'search/fetchCityData',
	async (term: string) => {
		const response = await axios.get(
			'https://autocomplete.travelpayouts.com/places2',
			{
				params: {
					locale: 'en',
					types: ['airport', 'city'],
					term
				}
			}
		);
		return response.data;
	}
);

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCityData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(
				fetchCityData.fulfilled,
				(state, action: PayloadAction<City[]>) => {
					state.status = 'succeeded';
					state.city = action.payload;
				}
			)
			.addCase(fetchCityData.rejected, (state) => {
				state.status = 'failed';
			});
	}
});

export default searchSlice.reducer;
