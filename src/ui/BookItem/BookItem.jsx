import { Space } from "antd";
import cn from "./BookItem.module.scss";
import { useDispatch } from "react-redux";
import { Typography } from "antd";
import noPhoto from "../../image/noPhoto.jpg";
import { NO_DATA_STRING } from "../../constans";
import { fetchBookCard } from "../../redux/books/books.thunks";

const { Title, Text } = Typography;

function BookItem({ bookInfo }) {
  const dispatch = useDispatch();

  function handleClick() {
    const id = bookInfo?.id;
    dispatch(fetchBookCard(id));
  }

  return (
    <div className={cn.card} onClick={handleClick}>
      <img
        className={cn.imageCard}
        src={bookInfo.volumeInfo?.imageLinks?.thumbnail ?? noPhoto}
        alt="book img"
      />
      <Title level={4}>{bookInfo.volumeInfo?.title ?? NO_DATA_STRING}</Title>
      <Space direction="vertical ">
        <Text>Author: {bookInfo.volumeInfo?.authors ?? NO_DATA_STRING}</Text>
        <Text>
          Category: {bookInfo.volumeInfo?.categories ?? NO_DATA_STRING}
        </Text>
      </Space>
    </div>
  );
}

export default BookItem;
