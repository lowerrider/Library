import { useSelector, useDispatch } from "react-redux";
import { Typography, Input, Select } from "antd";

import {
  API_KEY,
  BASE_URL,
  CATEGORIES,
  MAX_RESULTS,
  SORTS,
} from "../../constans";
import axios from "axios";

import cn from "./Header.module.scss";
import { mainPageActions } from "../../redux/mainPage/mainPage.slice";
import {
  selectCategory,
  selectSearchValue,
  selectSort,
} from "../../redux/mainPage/mainPage.selectors";
import { fetchBooksList } from "../../redux/books/books.thunks";
import {
  selectBooksList,
  selectTotalItems,
} from "../../redux/books/books.selector";
import { booksActions } from "../../redux/books/books.slice";

const { Search } = Input;

const { Title, Text } = Typography;

function Header() {
  const searchValue = useSelector(selectSearchValue);
  const category = useSelector(selectCategory);
  const sort = useSelector(selectSort);

  const dispatch = useDispatch();

  const handleChangeCategory = (value) => {
    dispatch(mainPageActions.updateCategory(value));
  };

  const handleChangeSort = (value) => {
    dispatch(mainPageActions.updateSort(value));
  };

  const handleChangeSearchValue = (e) => {
    dispatch(mainPageActions.updateSearchValue(e.target.value));
  };

  const handleSearch = () => {
    // clear books list
    dispatch(booksActions.clearBooksList());
    // update page 0
    dispatch(mainPageActions.updatePage(0));
    dispatch(mainPageActions.updateLoadingStatus(true));
    dispatch(fetchBooksList());
  };

  function getOptions(obj) {
    return Object.keys(obj).map((el) => ({ value: el, label: el }));
  }

  return (
    <div className={cn.header}>
      <Title>Search for books</Title>

      <Search
        placeholder="input search text"
        allowClear
        className={cn.searchInput}
        value={searchValue}
        onChange={handleChangeSearchValue}
        onSearch={handleSearch}
      />

      <div className={cn.selects}>
        Categories
        <Select
          className={cn.category}
          style={{ width: 120 }}
          onChange={handleChangeCategory}
          options={getOptions(CATEGORIES)}
          value={category}
        />
        Sorting by
        <Select
          className={cn.sort}
          style={{ width: 120 }}
          onChange={handleChangeSort}
          options={getOptions(SORTS)}
          value={sort}
        />
      </div>
    </div>
  );
}

export default Header;
