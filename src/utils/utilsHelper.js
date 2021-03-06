import Expo from "expo";

import { SQLite } from "expo-sqlite";

export function createTwoDimensionArray(list) {
  let twoDArray = [];
  if (list !== undefined) {
    let size = list.length / 2;

    for (i = 0; i < size; i++) {
      for (x = 0; x < 2; x++) {
        twoDArray[i][x] = list[x];
      }
      list.remove(0);
      list.remove(1);
    }
    console.log("MyTwoDArray", twoDArray);
  }
  return twoDArray;
}

export const getAbsoluteApiUrl = (apiUrl, param) => {
  for (const [k, v] of Object.entries(param)) {
    apiUrl = apiUrl.replace(`:${k}`, v || "");
  }
  return apiUrl;
};

export function objectArrayToArray(_objectArray, _key) {
  var _array = [];
  for (i = 0; i < _objectArray.length; i++) {
    var _object = _objectArray[i];
    _array.push(_object[key]);
  }
  return _array;
}

export function objectToArray(_object) {
  var _objArray = [];

  var _objectArrayKeys = Object.keys(_object);

  for (i = 0; i < _objectArrayKeys.length; i++) {
    _objArray.push(_object[_objectArrayKeys[i]]);
  }
  return _objArray;
}
export function getTwoDimensionalArray(arrayOfObject) {
  var _twoDimensionalArray = [];
  for (x = 0; x < arrayOfObject.length; x++) {
    _twoDimensionalArray.push(objectToArray(arrayOfObject[x]));
  }
  return _twoDimensionalArray;
}

export function generateRefNumbers(_refNumber) {
  let date = new Date();

  let _day = date.getDay();

  let _month = date.getMonth();

  let _year = date.getYear();

  let refNum = null;

  if (_day > 10) {
    refNum = "0" + _day;
  }
}

export function generateMarkerObject(_arrayOfObject) {
  let _markerArray = [];

  let _results = _arrayOfObject.results;
  if (!!_results && _results.length > 0) {
    for (x = 0; x < _results.length; x++) {
      let _object = _results[x];
      _markerArray.push({
        LatLng: {
          latitude: _object.geometry.location.lat,
          longitude: _object.geometry.location.lng
        },
        details: _object
      });
    }
  }
  return _markerArray;
}

export const fitToCoordinatesMarkers = _arrayOfObject => {
  let markers = [];
  const results = _arrayOfObject.results;
  if (!!results && results.length > 0) {
    for (let i = 0; i < results.length; i++) {
      let obj = results[x];
      console.log(obj);
      if (!!obj)
        lmarkers.push({
          latitude: obj.geometry.location.lat,
          longitude: obj.geometry.location.lng,
          title: obj.name,
          key: i + 1
        });
    }
  }

  return markers;
};

//  export function openSQlite(){
//      let db = SQLite.openDatabase("tshwaneMobiSQLite.db");
//      let transaction = db.transaction();
//      let sqlStatement = 'create table tblCaseHistory ( _id integer not null auto_increment, noti_title text,noti_message text, noti_date text)';
//      transaction.excuteSql(sqlStatement, arguments, success, error)
//      db.transaction((transaction)=>{
//
//      }, (error)=>{
//
//      }, (success)=>{
//
//      })
//  }
//

export const sqLiteDataSorce = SQLite.openDatabase("tshwaneMobi.db");

export function validateEmail(mail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

export function sortObjectArrayDesc(dataArray) {
  let arrayObject = dataArray.sort(function(a, b) {
    var date1 = new Date(a.datecaptured);
    var date2 = new Date(b.datecaptured);
    return date2 - date1;
  });
  return arrayObject;
}

export function sortArrayDesc(object_Array, obj_SortKey) {
  return object_Array.sort((itemA, itemB) => {
    var item1 = itemA[obj_SortKey];
    var item2 = itemB[obj_SortKey];
    return item2 - item1;
  });
}

export function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}
