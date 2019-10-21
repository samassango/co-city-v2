import { apiRequest } from "../utils/api";
import { getAbsoluteApiUrl } from "../utils/utilsHelper";
import {
  _handleInsertCaseHistory,
  sqLiteDataSorce,
  deleteCaseHistory
} from "../utils/sqliteHelper";
import * as constants from "../constants";

export const loadCaseHistorySuccess = responseJson => {
  return {
    type: constants.LOAD_CASE_HISTORY_REQUEST_SUCCESS,
    payload: responseJson
  };
};

export const loadCaseHistoryError = error => {
  return {
    type: constants.LOAD_CASE_HISTORY_REQUEST_ERROR,
    payload: error
  };
};

export const loadCaseHistoryRequest = accessToken => dispatch => {
  let requestUrl = apiRequest.sercviceBaseUrl + apiRequest.history;

  //console.log("requestUrl",requestUrl)
  try {
    dispatch({
      type: constants.LOAD_CASE_HISTORY_REQUEST_STARTED
    });
    return fetch(requestUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch(loadCaseHistorySuccess(responseJson));
      });
  } catch (error) {
    dispatch(loadCaseHistoryError(error));
  }
};

export const loadPostCaseHistorySuccess = responseJson => {
  return {
    type: constants.LOAD_POST_CASE_HISTORY_REQUEST_SUCCESS,
    payload: responseJson
  };
};

export const loadPostCaseHistoryError = error => {
  return {
    type: constants.LOAD_POST_CASE_HISTORY_REQUEST_ERROR,
    payload: error
  };
};

export const loadPostCaseHistoryRequest = (params, accessToken) => dispatch => {
  let requestUrl = apiRequest.sercviceBaseUrl + apiRequest.history;

  try {
    dispatch({
      type: constants.LOAD_POST_CASE_HISTORY_REQUEST_STARTED
    });
    return fetch(requestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken
      },
      body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(responseJson => {
        // console.log("historyReport",responseJson)
        dispatch(loadPostCaseHistorySuccess(responseJson));
      });
  } catch (error) {
    dispatch(loadPostCaseHistoryError(error));
  }
};

export const loadGetCaseHistorySuccess = (
  responseJson,
  response,
  responseSubCat
) => {
  return {
    type: constants.LOAD_GET_CASE_HISTORY_REQUEST_SUCCESS,
    payload: { responseJson, response, responseSubCat }
  };
};

export const loadGetCaseHistoryError = error => {
  return {
    type: constants.LOAD_GET_CASE_HISTORY_REQUEST_ERROR,
    payload: error
  };
};

export const loadGetCaseHistoryRequest = (
  incidentId,
  accessToken
) => dispatch => {
  let sourceUrl = apiRequest.sercviceBaseUrl + apiRequest.incidents.getIncident;
  let requestUrl =
    getAbsoluteApiUrl(sourceUrl, { id: incidentId }) +
    "?access_token=" +
    accessToken;
  console.log("requestUrl", requestUrl);
  try {
    dispatch({
      type: constants.LOAD_GET_CASE_HISTORY_REQUEST_STARTED
    });
    return fetch(requestUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("Case Incident", responseJson);
        let url = apiRequest.sercviceBaseUrl + apiRequest.categories.incident;
        console.log("Urlcat", url);
        let urlIncident =
          getAbsoluteApiUrl(url, { categoryId: responseJson.category }) +
          "?access_token=" +
          accessToken;
        return fetch(urlIncident, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(response => {
            console.log("Case GET Category", responseJson);

            let urlSubCategory =
              getAbsoluteApiUrl(
                apiRequest.sercviceBaseUrl + apiRequest.subCategory,
                { subCategoryId: responseJson.subCategory }
              ) +
              "?access_token=" +
              accessToken;

            //  dispatch(loadGetCaseHistorySuccess(responseJson, response));
            return fetch(urlSubCategory, {
              method: "GET",
              headers: {
                "Content-Type": "application/json"
              }
            })
              .then(response => response.json())
              .then(responseSubCat => {
                console.log("Case GET SubCategory", responseSubCat);

                dispatch(
                  loadGetCaseHistorySuccess(
                    responseJson,
                    response,
                    responseSubCat
                  )
                );
              });
          });
        // dispatch(loadGetCaseHistorySuccess(responseJson, response));
      });
  } catch (error) {
    dispatch(loadGetCaseHistoryError(error));
  }
};
