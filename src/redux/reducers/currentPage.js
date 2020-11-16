import { CHANGE_PAGE } from '../constants';

const currentPage = (state = 'LIST', action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.payload;
    default:
      return state;
  }
};

export default currentPage;
