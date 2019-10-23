import * as constants from "../constants";
import { saveData } from "../utils";
import { apiRequest } from "../utils/api";
import {
  createTBLHistory,
  _handleInsertCaseHistory,
  sqLiteDataSorce,
  _handleInsertStatusLog,
  _handleIncidentHistory
} from "../utils/sqliteHelper";
import { getAbsoluteApiUrl } from "../utils/utilsHelper";

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

export const clearReportedIncident =()=>({type: constants.LOAD_REPORTING_CLEAR})

export const reportIncidents = (params, accessToken) => dispatch => {
  console.log(accessToken);
  dispatch(reportIncidentRequest());
  console.log("requesting to post data");
  let requestUrl = apiRequest.baseUrl + apiRequest.incidents.postIncident;
  console.log("url", requestUrl);
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
      console.log("responseJson", responseJson);
      if (!!responseJson.refNumber) {
        let requestUrl = apiRequest.baseUrl + apiRequest.categories.incident;
        let requestSource = getAbsoluteApiUrl(requestUrl, {
          categoryId: responseJson.category
        });
        console.log("url2", requestSource);
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
              console.log("response", response);
              let params = {
                refNumber: responseJson.refNumber,
                notes: responseJson.description,
                status: "New",
                dateCaptured: responseJson.reportedOn,
                comments: responseJson.description,
                incidentId: responseJson.id,
                categoryName: response.name
              };
              storeCaseHistory(params, sqLiteDataSorce);

              dispatch(reportIncidentSuccess(responseJson));
            })
            .catch(err => console.log(err));
        } catch (error) {
          dispatch(reportIncidentError(error));
        }
      }
    })
    .catch(err => console.log(err));
};
export async function storeCaseHistory(params, sqLiteDataSorce) {
  await _handleIncidentHistory(params, sqLiteDataSorce);
}
