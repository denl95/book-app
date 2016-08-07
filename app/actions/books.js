import fetch from 'isomorphic-fetch';
import { RECEIVE_BOOKS, RECEIVE_BOOK } from './actionTypes';

const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  books
});

const receiveBook = (book) => ({
  type: RECEIVE_BOOK,
  book
});

export const fetchBooks = () => (dispatch) => {
  return fetch('/api/books')
    .then(response => response.json())
    .then(books => dispatch(receiveBooks(books)))
    .catch((err) => console.error(err.reason))
};

export const fetchBook = (bookId) => (dispatch) => {
  return fetch(`/api/books/${bookId}`)
    .then(response => response.json())
    .then(book => dispatch(receiveBook(book)))
    .catch((err) => console.error(err.reason))
};