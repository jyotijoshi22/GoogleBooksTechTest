import React, { useState } from "react";
import BookDetails from "../BookDetails/BookDetails";
import styles from "./BookTable.module.css";

type Book = {
  publishedDate: string;
  title: string;
  subtitle: string;
  authors: string[];
  image: string;
  description: string;
};

type BookTableProps = {
  books: Book[];
};

const BookTable: React.FC<BookTableProps> = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleRowClick = (book: Book) => {
    setSelectedBook(book);
  };

  return (
    <div className={styles["book-table"]}>
      <table>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>AUTHORS</th>
            <th>PUBLISHED DATE</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.title} onClick={() => handleRowClick(book)}>
              <td>{book.title}</td>
              <td>{book.authors ? book.authors.join(", ") : ""}</td>
              <td>{book.publishedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedBook && <BookDetails book={selectedBook} />}
    </div>
  );
};

export default BookTable;
