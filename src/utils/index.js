import AsyncStorage from "react-native";

export const saveData = (key, data) =>
  AsyncStorage.setItem(key, JSON.stringify(data));

export const getData = key => AsyncStorage.getItem(key);

export const removeData = key => AsyncStorage.removeItem(key);

export const getAbsoluteApiUrl = (apiUrl, param) => {
  for (const [k, v] of Object.entries(param)) {
    apiUrl = apiUrl.replace(`:${k}`, v || "");
  }
  return apiUrl;
};
