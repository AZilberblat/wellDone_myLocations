import {
  INSERT_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  SELECT_CATEGORY,
  UNSELECT_CATEGORY,
} from '../constants';

export const addNewCategory = (payload) => ({
  type: INSERT_CATEGORY,
  payload,
});

export const editCategory = (payload) => ({
  type: UPDATE_CATEGORY,
  payload,
});

export const deleteCategory = (payload) => ({
  type: DELETE_CATEGORY,
  payload,
});

export const selectCategory = (payload) => ({
  type: SELECT_CATEGORY,
  payload,
});

export const unselectCategory = () => ({
  type: UNSELECT_CATEGORY,
});
