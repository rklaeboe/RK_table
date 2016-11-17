import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from "./components/App" ;
import reducers from './reducers';
import cfenv from 'cfenv';



import ibmdb from "ibm_db";
// DashDB connection driver and connetion details
var connString = "DRIVER={DB2};DATABASE=BLUDB;HOSTNAME=yp-dashdb-small-01-lon02.services.eu-gb.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=dash105737;PWD=g1wBFHULLHGA;";
//Format for the connection string is: "DRIVER={DB2};DATABASE=" + db2.db + ";UID=" + db2.username + ";PWD=" + db2.password + ";HOSTNAME=" + db2.hostname + ";port=" + db2.port;

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var queryYear="SELECT YEAR(EQUIPMENT_LOCAL_TIMESTAMP) as YEAR "
    + "FROM DASH105737.VEGVESENET_TELLEPUNKT_RAW "
    + "GROUP BY YEAR(EQUIPMENT_LOCAL_TIMESTAMP) " //GROUP BY is hundreds of times faster than distinct when using column store
    + "ORDER BY YEAR(EQUIPMENT_LOCAL_TIMESTAMP);";



function /* @callback */ testconn(query, callback) {
  ibmdb.open(connString, function (err, conn) {
    if (err)
      return console.log(err);
    conn.query(query, function (err, data) {
      if (err) {
        console.log(err);
        callback(null);
      } else {
        console.log("Query submitted successfully");
        // Callbacks are important in this asynchronous case, because using a simple return would most likely return data before it is actually fetched from the DB.
        callback(data);
      }
      conn.close(function () {
        console.log("SQL query done and closed!");
      });
    });
  });
}



const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
