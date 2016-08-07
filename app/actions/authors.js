import fetch from 'isomorphic-fetch';
import { RECEIVE_AUTHOR, RECEIVE_AUTHORS } from './actionTypes';

const receiveAuthors = (authors) => ({
  type: RECEIVE_AUTHORS,
  authors
});

const receiveAuthor = (author) => ({
  type: RECEIVE_AUTHOR,
  author
});

export const fetchAuthors = () => (dispatch) => {
  return fetch('/api/authors')
    .then(response => response.json())
    .then(authors => dispatch(receiveAuthors(authors)))
    .catch((err) => console.error(err.reason))
};

export const fetchAuthor = (authorId) => (dispatch) => {
  return fetch(`/api/authors/${authorId}`)
    .then(response => response.json())
    .then(author => dispatch(receiveAuthor(author)))
    .catch((err) => console.error(err.reason))
};