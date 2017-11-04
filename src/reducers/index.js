import { combineReducers } from 'redux';
import BooksReducer from "./reducer_booklist";
import SelectedBook from "./reducer_selectedbook";
const rootReducer = combineReducers({
  books: BooksReducer,
  selectedbook: SelectedBook
});

export default rootReducer;
