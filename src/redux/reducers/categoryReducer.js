import { INSERT_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../constants';

const data = localStorage.getItem('categoriesData');
const initialState = data === null ? [] : JSON.parse(data);

const category = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_CATEGORY:
      localStorage.setItem('categoriesData', JSON.stringify([action.payload, ...state]));
      return [action.payload, ...state];
    case UPDATE_CATEGORY:
      let temp = [...state];
      temp[action.payload.index] = action.payload.new;
      localStorage.setItem('categoriesData', JSON.stringify(temp));
      return temp;
    case DELETE_CATEGORY:
      let del = [...state];
      del.splice(action.payload.index, 1);
      localStorage.setItem('categoriesData', JSON.stringify(del));
      return del;
    default:
      return state;
  }
};

export default category;
