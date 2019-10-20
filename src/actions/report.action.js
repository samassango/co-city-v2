import * as constants from "../constants";
import { saveData } from "../utils";

export const reportIncidentRequest = () => ({
  type: constants.LOAD_REPORTING_REQUEST
});

export const reportIncidentSuccess = success => ({
  type: constants.LOAD_REPORTING_SUCCESS,
  payload: success
});

export const reportIncidentError = error => ({
  type: constants.LOAD_REPORTING_FAIL,
  payload: error
});

export const report = (params, accessToken) => dispatch => {
  dispatch(reportIncidentRequest());
  let requestUrl = apiRequest.baseUrl + apiRequest.incidents.postIncident;
  let body = JSON.stringify(params);
  return fetch(requestUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken
    },
    body: body
  })
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.hasOwnProperty("refNumber")) {
        let requestUrl = apiRequest.baseUrl + apiRequest.categories.incident;
        let requestSource = getAbsoluteApiUrl(requestUrl, {
          categoryId: responseJson.category
        });
        try {
          return fetch(requestSource, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + accessToken
            }
          })
            .then(response => response.json())
            .then(response => {
              let params = {
                refNumber: responseJson.refNumber,
                notes: responseJson.description,
                status: "New",
                dateCaptured: responseJson.reportedOn,
                comments: responseJson.description,
                incidentId: responseJson.id,
                categoryName: response.name
              };
              saveData("history", params);
              dispatch(reportIncidentSuccess(responseJson));
            });
        } catch (error) {
          dispatch(reportIncidentError(error));
        }
      }
    });
};
