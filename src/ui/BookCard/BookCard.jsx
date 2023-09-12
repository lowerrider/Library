import { Typography, Space } from "antd";
import cn from "./BookCard.module.scss";
import { NO_DATA_STRING } from "../../constans";
import { useDispatch, useSelector } from "react-redux";
import { selectBookCard } from "../../redux/books/books.selector";
import { booksActions } from "../../redux/books/books.slice";
import { CloseOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

function BookCard() {
  const bookCard = useSelector(selectBookCard);

  const dispatch = useDispatch();

  const closeBookCard = () => {
    dispatch(booksActions.updateBookCard(null));
  };
  return (
    <div className={cn.card}>
      <div className={cn.leftContainer}>
        <img
          className={cn.bookImage}
          src={bookCard.volumeInfo?.imageLinks?.medium}
        />
      </div>
      <div className={cn.rightContainer}>
        <CloseOutlined className={cn.buttonClose} onClick={closeBookCard} />

        <Space direction="vertical ">
          <Space align="baseline">
            <Title level={5}>Categories:</Title>
            <Text>{bookCard.volumeInfo?.categories ?? NO_DATA_STRING}</Text>
          </Space>
          <Title level={4}>
            {bookCard.volumeInfo?.title ?? NO_DATA_STRING}
          </Title>
          <Text>Author: {bookCard.volumeInfo?.authors ?? NO_DATA_STRING}</Text>
          <div className={cn.discription}>
            <Text>{bookCard.volumeInfo?.description ?? NO_DATA_STRING}</Text>
          </div>

          <Text>
            Language: {bookCard.volumeInfo?.language ?? NO_DATA_STRING}
          </Text>
          <Text>
            Publisher: {bookCard.volumeInfo?.publisher ?? NO_DATA_STRING}
          </Text>
        </Space>
      </div>
    </div>
  );
}

export default BookCard;
