import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  quote: "",
  author: "",
  status: "default",
  error: null,
};

export const getQuote = createAsyncThunk("quote/getQuote", async () => {
  const response = await axios.get("https://api.quotable.io/random");
  return response.data;
});

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuote.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getQuote.fulfilled, (state, action) => {
        state.status = "success";
        state.quote = action.payload.content;
        state.author = action.payload.author;
      })
      .addCase(getQuote.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;
