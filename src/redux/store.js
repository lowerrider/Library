import { configureStore } from "@reduxjs/toolkit";
import { mainPageReducer } from "./mainPage/mainPage.slice";
import { booksReducer } from "./books/books.slice";

const store = configureStore({
  reducer: {
    mainPage: mainPageReducer,
    books: booksReducer,
  },
});

export default store;
