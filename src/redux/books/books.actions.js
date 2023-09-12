export const updateBooksList = (state, action) => {
  state.booksList = [...state.booksList, ...action.payload];
};

export const clearBooksList = (state) => {
  state.booksList = [];
};

export const updateTotalItems = (state, action) => {
  state.totalItems = action.payload;
};

export const updateBookCard = (state, action) => {
  state.bookCard = action.payload;
};
