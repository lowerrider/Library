import { useSelector } from "react-redux";

import BookCard from "./ui/BookCard/BookCard";
import BookList from "./ui/BooksList/BooksList";
import Header from "./ui/Header/Header";
import { selectBookCard } from "./redux/books/books.selector";
import { selectIsLoadingBookCards } from "./redux/mainPage/mainPage.selectors";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import cn from "./App.module.scss";

function App() {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  const bookCard = useSelector(selectBookCard);
  const isLoadingBookCards = useSelector(selectIsLoadingBookCards);
  console.log(isLoadingBookCards);
  return (
    <div className={cn.App}>
      <Header />

      {isLoadingBookCards ? (
        <div className={cn.loader}>
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <div className={cn.books}>{bookCard ? <BookCard /> : <BookList />}</div>
      )}
    </div>
  );
}

export default App;
