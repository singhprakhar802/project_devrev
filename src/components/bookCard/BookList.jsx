import { useGlobalContext } from "../../context";
import Book from "./BookCard";
import Loading from "../Loader/Loader";
import coverImg from "../../assets/cover_not_found.jpg";
import "./style.css";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const { books, loading } = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  if (loading) return <Loading />;

  return (
    <section className="booklist">
      <div className="container">
        <div className="booklist-content grid">
          {booksWithCovers.slice(0, 30).map((item, index) => {
            return <Book key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BookList;
