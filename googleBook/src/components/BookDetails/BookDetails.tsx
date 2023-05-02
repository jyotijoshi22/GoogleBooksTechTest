import React from "react";

type Book = {
  title: string;
  subtitle: string;
  authors: string[];
  image: string;
  description: string;
};

type BookDetailsProps = {
  book: Book;
};

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      {book.subtitle && <h3>{book.subtitle}</h3>}
      <p>By {book.authors.join(", ")}</p>
      <img src={book.image} alt={book.title} />
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetails;
