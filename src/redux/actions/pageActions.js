import { CHANGE_PAGE } from '../constants';

export const changePage = (payload) => ({
  type: CHANGE_PAGE,
  payload,
});
