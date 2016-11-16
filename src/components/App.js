import React, { Component } from 'react';
import _ from 'lodash';

let Rows=[

    {"tellepunktID":"300231","tellepunktNavn":"AMMERUD","aar":2015,"ukenummer":"20, 25","timeperiod":"0 - 23",
      "antallPasseringer":"93068","gjennomsnittligHastighet":null,"ukedager":"1, 2, 3, 4, 5, 6, 7",
      "retning":1,"kompasretning":"Hovedretning","antallDager":14,"snittPasseringer":6648},
    {"tellepunktID":"300231","tellepunktNavn":"AMMERUD","aar":2015,"ukenummer":"20, 25","timeperiod":"0 - 23",
    "antallPasseringer":"95412","gjennomsnittligHastighet":null,"ukedager":"1, 2, 3, 4, 5, 6, 7","retning":2,
    "kompasretning":"Motgående retning","antallDager":14,"snittPasseringer":6815}];

let keyArr=[];
keyArr.push(Object.keys(Rows[1]));    //hent ut header

let valArr= _.map(Rows, function(obj){let tA= Object.values(obj);return tA});   //hent ut verdiene (uten nøkkel)
let tempArr= _.unzip(valArr);  //konverter kolonner til rader



export default class App extends Component {
  render() {
    return (<div><h2>Eksempel på å konvertere kolonner ril rader</h2>
      <ul>
        <li>
          "tellepunktID":"300231","tellepunktNavn":"AMMERUD","aar":2015,"ukenummer":"20, 25","timeperiod":"0 - 23","antallPasseringer":"93068","gjennomsnittligHastighet":null,"ukedager":"1, 2, 3, 4, 5, 6,
            7","retning":1,"kompasretning":"Hovedretning","antallDager":14,"snittPasseringer":6648
        </li>
          <li>
            "tellepunktID":"300231","tellepunktNavn":"AMMERUD","aar":2015,"ukenummer":"20, 25","timeperiod":"0 - 23","antallPasseringer":"95412","gjennomsnittligHastighet":null,"ukedager":"1, 2, 3, 4, 5, 6,
            7","retning":2,"kompasretning":"Motgående retning","antallDager":14,"snittPasseringer":6815
          </li>
     </ul>


      <table className="table table-condensed table-hover">
        <thead>
        <tr>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td></td>
        </tr>
        </tbody>
      </table>

    </div>)}}
