import * as constants from "../../constants";

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null
};

const History = (state = initialState, { type, payload } = actions) => {
  switch (type) {
    case constants.LOAD_CASE_HISTORY_REQUEST_STARTED:
      return { ...state, isLoading: true };
    case constants.LOAD_CASE_HISTORY_REQUEST_SUCCESS:
      return {
        ...state,
        histories: payload.responseJson,
        isLoadingHistory: false
      };
    case constants.LOAD_CASE_HISTORY_REQUEST_ERROR:
      return { ...state, historyError: payload.error, isLoadingHistory: false };
    case constants.LOAD_POST_CASE_HISTORY_REQUEST_STARTED:
      return { ...state, isLoadingNewHistory: true };
    case constants.LOAD_POST_CASE_HISTORY_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        historyObject: payload.responseJson
      };
    case constants.LOAD_POST_CASE_HISTORY_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        errorPostHistory: payload.error
      };
    case constants.LOAD_GET_CASE_HISTORY_REQUEST_STARTED:
      return { ...state, isLoadingIncident: true };
    case constants.LOAD_GET_CASE_HISTORY_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        incidentObject: payload.responseJson,
        categoryObject: payload.response,
        responseSubCat: payload.responseSubCat
      };
    case constants.LOAD_GET_CASE_HISTORY_REQUEST_ERROR:
      return {
        ...state,
        isLoadingIncident: false,
        errorGetHistory: payload.error
      };
  }
};
export default History;
