import React, { useState, useEffect } from "react";
import BookTable from "../BookTable/BookTable";

type Book = {
  title: string;
  subtitle: string;
  authors: string[];
  image: string;
  publishedDate: string;
  description: string;
};

const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=flowers")
      .then((response) => response.json())
      .then((data) =>
        setBooks(
          data.items.map((item: any) => ({
            title: item.volumeInfo.title,
            subtitle: item.volumeInfo.subtitle,
            authors: item.volumeInfo.authors,
            image: item.volumeInfo.imageLinks?.thumbnail,
            description: item.volumeInfo.description,
            publishedDate: item.volumeInfo.publishedDate,
          }))
        )
      );
  }, []);

  return (
    <div>
      <BookTable books={books} />
    </div>
  );
};

export default Books;
