import React, { useState, useEffect } from "react";
import BookTable from "../BookTable/BookTable";

interface Book {
  id: string;
  title: string;
  authors: string[];
  publishedDate: string;
}

const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=flowers"
      );
      const data = await response.json();
      const bookItems = data.items.map((item: any) => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors ?? [],
        publishedDate: item.volumeInfo.publishedDate,
      }));
      setBooks(bookItems);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <BookTable books={books} />
    </div>
  );
};

export default Books;
