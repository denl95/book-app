import { RECEIVE_BOOK, RECEIVE_BOOKS } from '../actions/actionTypes';
import { slugify } from '../helpers';

const initialState = {
  bookList: [],
  activeBook: null,
};


const books = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BOOK:
      return Object.assign({}, state, { activeBook: action.book });
    case RECEIVE_BOOKS:
      return Object.assign({}, state, { bookList: action.books });
    default:
      return state;
  }
};

export default books;

export const getByGenre = ({ bookList }, genre) => {
  return bookList.filter((book) => slugify(book.genre) === genre);
};
