import { useDispatch, useSelector } from "react-redux";
import {
  selectBooksList,
  selectTotalItems,
} from "../../redux/books/books.selector";
import BookItem from "../BookItem/BookItem";
import { mainPageActions } from "../../redux/mainPage/mainPage.slice";
import { fetchBooksList } from "../../redux/books/books.thunks";
import { Typography } from "antd";

import cn from "./BookList.module.scss";

const { Text } = Typography;

function BookList() {
  const booksList = useSelector(selectBooksList);
  const cards = booksList.map((el) => <BookItem bookInfo={el} />);
  const dispatch = useDispatch();
  const totalItems = useSelector(selectTotalItems);

  const getPage = () => {
    dispatch(mainPageActions.updatePage());
    dispatch(mainPageActions.updateLoadingStatus(true));
    dispatch(fetchBooksList());
  };

  if (booksList.length === 0) {
    return null;
  }
  return (
    <div>
      <div className={cn.fondResults}>
        <Text>Found :</Text> {totalItems} <Text> results</Text>
      </div>
      <div className={cn.cardList}>{cards}</div>
      <div className={cn.button}>
        <button className={cn.buttonLoad} onClick={getPage}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default BookList;
