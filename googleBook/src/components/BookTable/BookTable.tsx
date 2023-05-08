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
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleRowClick = (book: Book) => {
    setSelectedBook(book);
  };

  const sortedBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by book title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
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
            {sortedBooks.map((book) => (
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
    </div>
  );
};

export default BookTable;
