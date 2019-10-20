import Expo from 'expo';

import { SQLite } from 'expo-sqlite';

export const sqLiteDataSorce = SQLite.openDatabase('tshwaneMobi.db');


export function createTBLLogin(db){
   console.log("sqLiteDataSorce", db);
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists tblLogin (id integer primary key not null, accessToken text, userId text, username text, fullname text, email text, sessionId text);'
      );
    });
    
}

export function insertSuccessfulLogin(params, db){
    console.log("params22#",params)
    console.log("datasource#",db)
     db.transaction(
      tx => {
        tx.executeSql('insert into tblLogin (accessToken, userId, username,sessionId ) values (?, ?, ?, ?)', [params.accessToken, params.userId,params.username, params.sessionId],(tx, resultSet)=>{
            console.log("Inserted row successful",resultSet);
        }, (tx,error) => {
            console.log("Inserted row fail",error);
        });
      },(error)=>{
          console.log("ErrorTrans", error)
      }, () =>{
          console.log("success", success)
      }
    );
}

export function  selectCurrentUser( db) {
    db.transaction(tx => {
      tx.executeSql(`select * from tblLogin`,[],(_, { rows: { _array } }) => {
          console.log("rows", rows)
            return _array;
        }
      );
    },(error)=>{
          console.log("ErrorTrans", error)
      }, () =>{
          console.log("success", success)
      });
  }

export function  updateCurrentUser(params, db) {
     db.transaction(
                tx => {
                  tx.executeSql(`update tblLogin set fullname = `+params.fullname+`,email =`+params.email+` where userId = ?;`, [
                    params.userId,
                  ]);
                },
                null,
                null
              );
  }
export function  deleteCaseHistory( db) {
     db.transaction(
                tx => {
                  tx.executeSql(`delete from tblCaseHistory;`, [],(tx, resultSet)=>{
                        console.log("Deleted rows successful",resultSet);
                    }, (tx,error) => {
                        console.log("Deleted rows fail",error);
                    });
                }
              );
  }

export function  _deleteCaseHistory( db, historyId) {
     db.transaction(
                tx => {
                  tx.executeSql(`delete from tblCaseHistory where id = ?;`, [historyId],(tx, resultSet)=>{
                        console.log("Deleted rows successful",resultSet);
                    }, (tx,error) => {
                        console.log("Deleted rows fail",error);
                    });
                }
              );
  }

export function  deleteTblLogin( db) {
     db.transaction(
                tx => {
                  tx.executeSql(`delete from tblLogin;`, [],(tx, resultSet)=>{
                        console.log("Deleted rows successful",resultSet);
                    }, (tx,error) => {
                        console.log("Deleted rows fail",error);
                    });
                },(error)=>{
          console.log("ErrorTrans", error)
      }, () =>{
          console.log("success")
      }
              );
  }

export function _handleGetCaseHistory(db){
     db.transaction(
      tx => {
        tx.executeSql('select * from tblCaseHistory', [], (_, { rows: { _array }  }) =>{
           // console.log("ROW",JSON.stringify(rows))
            return JSON.stringify(_array);
        });
      }
    );
}

export function _handleInsertCaseHistory(params,db){
    console.log("paramsObject",params)
    if(params !== null){
     
         db.transaction(
          tx => {
            tx.executeSql('insert into tblCaseHistory (refNumber,  notes, status, datecaptured, incidentsId, categoryName ) values (?, ?, ?, ?,?, ?)', [params.refNumber,  params.notes, params.status, params.dateCaptured, params.incidentId, params.categoryName],(tx, resultSet)=>{ 
                console.log("Inserted row successful",resultSet);
            }, (tx,error) => {
                console.log("Inserted row fail",error);
            });

            tx.executeSql('select * from tblCaseHistory', [], (_, { rows: { _array } }) =>{

             console.log("ROW",JSON.stringify(_array))

                return _array;
            });
          },(error)=>{
              console.log("ErrorTrans", error)
          }, () =>{
              console.log("success")
          }
        );   
    }
}


export function createTBLHistory(sqLiteDataSorce){
    sqLiteDataSorce.transaction(tx => {
      tx.executeSql(
        'create table if not exists tblCaseHistory (id integer primary key not null, refNumber text, incidentsId text, notes text, status text, datecaptured text,categoryName text);'
      );
    });
}

export function createTBLStatusLog(sqLiteDataSorce){
    sqLiteDataSorce.transaction(tx => {
      tx.executeSql(
        'create table if not exists tblStatusLog (id integer primary key not null, refNumber text not null, incidentsId text not null, status text not null,comments text not null, dateUpdate text not null);'
      );
    });
}

export function _handleInsertStatusLog(params,db){
    console.log("paramsStatus",params)
    if(params !== null){
     
         db.transaction(
          tx => {
            tx.executeSql('insert into tblStatusLog (refNumber,  comments, status,  incidentsId, dateUpdate ) values (?, ?, ?, ?, ?)', [params.refNumber,  params.comments, params.status, params.incidentId, new Date().toDateString],(tx, resultSet)=>{
                console.log("Inserted row Status log successful",resultSet);
            }, (tx,error) => {
                console.log("Inserted row fail",error);
            });

            tx.executeSql('select * from tblStatusLog', [], (_, { rows: { _array } }) =>{

             console.log("ROWtblStatusLog",JSON.stringify(_array))

                return _array;
            });
          },(error)=>{
              console.log("ErrorTrans", error)
          }, () =>{
              console.log("success")
          }
        );   
    }
}

export function  _getStatusLog( _incidentsId, db) {
     db.transaction(
                tx => {
                  tx.executeSql(`select * from tblStatusLog where incidentsId = ?;`, [_incidentsId],(tx, resultSet)=>{
                        console.log("select rows successful",resultSet);
                    }, (tx,error) => {
                        console.log("select rows fail",error);
                    });
                }
              );
  }
export function _handleIncidentHistory(params, db){
    console.log("params", params);
    console.log("databasesource", db);
    db = SQLite.openDatabase('tshwaneMobi.db');
         db.transaction(
                tx => {
                  tx.executeSql(`select * from tblCaseHistory where incidentsId = ?;`, [params.incidentsId],(tx, resultSet)=>{
                        console.log("select rows successful",resultSet);
                      if(resultSet.rows.length >0){
                           tx.executeSql(`update tblCaseHistory set status = `+params.status+`,notes =`+params.notes+` where incidentsId = ?;`, [
                            params.incidentsId,
                          ],(tx, resultSet)=>{
                               //update statuslog table.
                                tx.executeSql('insert into tblStatusLog (refNumber,  comments, status,  incidentsId, dateUpdate ) values (?, ?, ?, ?, ?)', [params.refNumber,  params.comments, params.status, params.incidentId, new Date().getTime()],(tx, resultSet)=>{
                                    console.log("Inserted row Status log successful",resultSet);
                                }, (tx,error) => {
                                    console.log("Inserted row fail",error);
                                });
                           });
                       }else{
                            tx.executeSql('insert into tblCaseHistory (refNumber,  notes, status, datecaptured, incidentsId, categoryName ) values (?, ?, ?, ?,?,?)', [params.refNumber,  params.notes, params.status, params.dateCaptured, params.incidentId, params.categoryName],(tx, resultSet)=>{ 
                                console.log("Inserted row successful",resultSet);
                                //update statuslog table
                                    tx.executeSql('insert into tblStatusLog (refNumber,  comments, status,  incidentsId, dateUpdate ) values (?, ?, ?, ?, ?)', [params.refNumber,  params.comments, params.status, params.incidentId, new Date().getTime()],(tx, resultSet)=>{
                                        console.log("Inserted row Status log successful",resultSet);
                                    }, (tx,error) => {
                                        console.log("Inserted row fail",error);
                                    });
                            }, (tx,error) => {
                                console.log("Inserted row fail",error);
                            });
                       }
                    }, (tx,error) => {
                        console.log("select rows fail",error);
                       tx.executeSql('insert into tblCaseHistory (refNumber,  notes, status, datecaptured, incidentsId, categoryName ) values (?, ?, ?, ?, ?, ?)', [params.refNumber,  params.notes, params.status, params.dateCaptured, params.incidentId, params.categoryName],(tx, resultSet)=>{ 
                                console.log("Inserted row successful",resultSet);
                                //update statuslog table
                                    tx.executeSql('insert into tblStatusLog (refNumber,  comments, status,  incidentsId, dateUpdate ) values (?, ?, ?, ?, ?)', [params.refNumber,  params.comments, params.status, params.incidentId, new Date().getTime()],(tx, resultSet)=>{
                                        console.log("Inserted row Status log successful",resultSet);
                                    }, (tx,error) => {
                                        console.log("Inserted row fail",error);
                                    });
                            }, (tx,error) => {
                                console.log("Inserted row fail",error);
                            });
                    });
                }
              );
}

export function _deviceInfo(params){
     

       sqLiteDataSorce.transaction(
                tx => {    
                    tx.executeSql(
                        'create table if not exists tblDeviceInfo (id integer primary key not null, deviceName text not null, deviceId text not null, pushToken text not null, dateUpdate text not null);'
                      )});
        sqLiteDataSorce.transaction(
                tx => {
                  tx.executeSql(`insert into tblDeviceInfo (deviceName, deviceId, pushToken, dateUpdate) values (?, ?, ?, ?)`, [params.deviceName, params.deviceId, params.pushToken, params.dateUpdate],(tx, resultSet)=>{
                        console.log("select rows successful",resultSet);
                    }, (tx,error) => {
                        console.log("select rows fail",error);
                    });
                }
              );
    
}

export function _getDeviceInfo(){
    var deviceInfo = null;
      sqLiteDataSorce.transaction(
                tx => {
                  tx.executeSql(`select * from tblDeviceInfo;`, [],(tx, resultSet)=>{
                        console.log("select rows successful infoDevice",resultSet);
                      deviceInfo = resultSet;
                    }, (tx,error) => {
                        console.log("select rows fail infoDevice",error);
                    });
                }
              );
    return deviceInfo;
} 
