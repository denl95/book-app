import { RECEIVE_AUTHOR, RECEIVE_AUTHORS } from '../actions/actionTypes';

const initialState = {
  authorList: [],
  activeAuthor: null
};

const authors = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_AUTHOR:
      return Object.assign({}, state, { activeAuthor: action.author });
    case RECEIVE_AUTHORS:
      return Object.assign({}, state, { authorList: action.authors });
    default:
      return state;
  }
};

export default authors;
