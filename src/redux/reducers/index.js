import { combineReducers } from 'redux';
import category from './categoryReducer';
import currentPage from './currentPage';
import selectedCategory from './selectedCategory';
import modal from './modal';

const appReducer = combineReducers({
  category,
  currentPage,
  selectedCategory,
  modal,
});

export default appReducer;
