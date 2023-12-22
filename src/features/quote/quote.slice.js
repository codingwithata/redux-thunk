import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchQuote = createAsyncThunk(
  'quote/fetchQuote',
  async (arg, thunkAPI) => {
    const response = await fetch('http://localhost:3004/api/quote');
    const { data } = await response.json();
    return data;
  }
)
const initialState = {
  quote: '',
  loading: false,
  error: false,
};

const options = {
  name: 'quote',
  initialState,
  reducers: {},
};

const quoteSlice = createSlice(options);

export default quoteSlice.reducer;

export const selectQuote = (state) => state.quote.quote;
export const selectLoading = (state) => state.quote.loading;
export const selectError = (state) => state.quote.error;
