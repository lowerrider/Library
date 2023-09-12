import { createSlice } from "@reduxjs/toolkit";
import {
  updateBookCard,
  updateBooksList,
  updateTotalItems,
  clearBooksList,
} from "./books.actions";
import { fetchBookCard } from "./books.thunks";

const initialState = {
  bookCard: null,
  booksList: [],
  totalItems: 0,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    updateBooksList,
    updateTotalItems,
    updateBookCard,
    clearBooksList,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBookCard.fulfilled.type, updateBookCard);
  },
});

const { actions, reducer } = booksSlice;

export const booksActions = actions;
export const booksReducer = reducer;
