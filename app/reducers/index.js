import { combineReducers } from 'redux';
import authors from './authors';
import books from './books';

const rootReducer = combineReducers({
  authors,
  books
});

export default rootReducer;

