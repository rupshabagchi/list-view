import { combineReducers } from 'redux';
import BooksReducer from "./reducer_booklist";

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
