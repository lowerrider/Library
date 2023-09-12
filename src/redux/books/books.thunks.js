import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL, MAX_RESULTS } from "../../constans";
import {
  selectCategory,
  selectSearchValue,
  selectSort,
  selectPage,
} from "../mainPage/mainPage.selectors";
import { booksActions } from "./books.slice";
import { mainPageActions } from "../mainPage/mainPage.slice";

export const fetchBooksList = () => async (dispatch, getState) => {
  const searchValue = selectSearchValue(getState());
  const category = selectCategory(getState());
  const sort = selectSort(getState());
  const page = selectPage(getState());

  try {
    const { data } = await axios.get(
      `${BASE_URL}/volumes?q=${searchValue}+subject:${category}&startIndex=${page}&maxResults=${MAX_RESULTS}&orderBy=${sort}&key=${API_KEY}`
    );

    dispatch(booksActions.updateBooksList(data.items ?? []));

    dispatch(booksActions.updateTotalItems(data.totalItems));
  } catch (e) {
    console.error(e);
  } finally {
    dispatch(mainPageActions.updateLoadingStatus(false));
  }
};

export const fetchBookCard = createAsyncThunk(
  "books/fetchBookCard",
  async (id) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/volumes/${id}`);
      return data;
    } catch (e) {
      console.error(e);
    }
  }
);
