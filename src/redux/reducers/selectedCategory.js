import { SELECT_CATEGORY, UNSELECT_CATEGORY } from '../constants';

const selectedCategory = (state = -1, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.payload;
    case UNSELECT_CATEGORY:
      return -1;
    default:
      return state;
  }
};

export default selectedCategory;
