import * as constants from "../../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  report: null,
  categories: null,
  categoryTypes: null,
  selectedData: null
};

const Reporting = (state = initialState, { type, payload } = actions) => {
  switch (type) {
    case constants.LOAD_REPORTING_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case constants.LOAD_REPORTING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        report: payload,
        isLoaded: true
      };

    case constants.LOAD_REPORTING_FAIL:
      return { ...state, isLoading: false, error: payload };

    case constants.LOAD_LIST_CATEGORIES:
      return {
        ...state,
        isLoading: true
      };

    case constants.LOAD_LIST_CATEGORIES_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        categories: payload,
        isLoaded: true
      };

    case constants.LOAD_LIST_CATEGORIES_ERROR:
      return { ...state, isLoading: false, error: payload };

    case constants.LOAD_LIST_CATEGORIES_TYPE:
      return {
        ...state,
        isLoading: true
      };

    case constants.LOAD_LIST_CATEGORIES_TYPE_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        categoryTypes: payload,
        isLoaded: true
      };

    case constants.LOAD_LIST_CATEGORIES_TYPE_ERROR:
      return { ...state, isLoading: false, error: payload };

    case constants.LOAD_SELECTED_CATEGORY:
      return { ...state, selectedData: payload };

    case constants.LOAD_REPORTING_CLEAR:
      return { ...state, isLoaded: false, isLoading: false, report: null };

    default:
      return state;
  }
};

export default Reporting;
