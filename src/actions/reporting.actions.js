import * as constants from "../constants";
import { apiRequest } from "../utils/api";
import { getAbsoluteApiUrl } from "../utils/utilsHelper";

export const selectedCategory = category => ({
  type: constants.LOAD_SELECTED_CATEGORY,
  payload: category
});

export const loadCategories = () => ({
  type: constant.LOAD_LIST_CATEGORIES
});

export const loadCategoriesSuccess = payload => ({
  type: constants.LOAD_LIST_CATEGORIES_SUCCESSFUL,
  payload
});

export const loadCategoriesError = error => ({
  type: constants.LOAD_LIST_CATEGORIES_ERROR,
  payload: error
});

export const loadCategoriesTypes = () => ({
  type: constants.LOAD_LIST_CATEGORIES_TYPE
});

export const loadCategoriesTypeSuccess = response => ({
  type: constants.LOAD_LIST_CATEGORIES_TYPE_SUCCESSFUL,
  payload: response
});

export const loadCategoriesTypeError = error => ({
  type: constant.LOAD_LIST_CATEGORIES_TYPE_ERROR,
  payload: error
});

export const loadCategoriesRequest = () => dispatch => {
  let requestUrl = apiRequest.sercviceBaseUrl + apiRequest.categories.list;
  dispatch(loadCategories());
  try {
    return fetch(requestUrl)
      .then(response => response.json())
      .then(responseJson => dispatch(loadCategoriesSuccess(responseJson)));
  } catch (error) {
    dispatch(loadCategoriesError(error));
  }
};

export const loadCategoriesTypeRequest = categoryId => dispatch => {
  let sourceUrl =
    apiRequest.sercviceBaseUrl + apiRequest.categories.subCategories.list;
  let requestUrl = getAbsoluteApiUrl(sourceUrl, { categoryId: categoryId });
  dispatch(loadCategoriesTypes());
  try {
    return fetch(requestUrl)
      .then(response => response.json())
      .then(responseJson => dispatch(loadCategoriesTypeSuccess(responseJson)));
  } catch (error) {
    dispatch(loadCategoriesTypeError(error));
  }
};
