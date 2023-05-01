import React from "react";

interface Book {
  id: string;
  title: string;
  authors: string[];
  publishedDate: string;
}

interface Props {
  books: Book[];
}

const BookTable: React.FC<Props> = ({ books }) => {
  return (
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
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.authors.join(", ")}</td>
            <td>{book.publishedDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
