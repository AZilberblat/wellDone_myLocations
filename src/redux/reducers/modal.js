import { OPEN_MODEL } from '../constants';

const model = (state = '', action) => {
  switch (action.type) {
    case OPEN_MODEL:
      return action.payload;
    default:
      return state;
  }
};

export default model;
