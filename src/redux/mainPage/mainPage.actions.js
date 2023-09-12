export const updatePage = (state) => {
  state.page += 1;
};

export const updateSearchValue = (state, action) => {
  state.searhValue = action.payload;
};

export const updateCategory = (state, action) => {
  state.category = action.payload;
};

export const updateSort = (state, action) => {
  state.sort = action.payload;
};

export const updateLoadingStatus = (state, action) => {
  state.isLoadingBookCards = action.payload;
};
