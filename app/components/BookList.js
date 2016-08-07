import React from 'react';
import { Link } from 'react-router';
import { slugify } from '../helpers';

const BookList = (props) => {
  const { bookList } = props;

  return (
    <ul className="list-group">
      {bookList.map((book, i) => {
        const { author } = book;
        return (
          <li key={i} className="list-group-item">
            <Link to={`/books/${book._id}`}><h3 className="list-group-item-heading">{book.name}</h3></Link>
            <div>Genre: <Link to={`/genre/${slugify(book.genre)}`}>{book.genre}</Link></div>
            <div>Author: <Link to={`/authors/${author._id}`}>{author.name}</Link></div>
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;