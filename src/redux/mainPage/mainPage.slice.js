import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES, SORTS } from "../../constans";
import {
  updatePage,
  updateSearchValue,
  updateCategory,
  updateSort,
  updateLoadingStatus,
} from "./mainPage.actions";

const initialState = {
  page: 0,
  searhValue: "",
  category: CATEGORIES.all,
  sort: SORTS.relevance,
  isLoadingBookCards: false,
};

export const mainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {
    updatePage,
    updateSearchValue,
    updateCategory,
    updateSort,
    updateLoadingStatus,
  },
});

const { actions, reducer } = mainPageSlice;

export const mainPageActions = actions;
export const mainPageReducer = reducer;
