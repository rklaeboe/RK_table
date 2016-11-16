import React, { Component } from 'react';
import _ from 'lodash';
let Rows=[

    {"tellepunktID":"300231","tellepunktNavn":"AMMERUD","aar":2015,"ukenummer":"20, 25","timeperiod":"0 - 23",
      "antallPasseringer":"93068","gjennomsnittligHastighet":null,"ukedager":"1, 2, 3, 4, 5, 6, 7",
      "retning":1,"kompasretning":"Hovedretning","antallDager":14,"snittPasseringer":6648},
  {"tellepunktID":"300231","tellepunktNavn":"AMMERUD","aar":2015,"ukenummer":"20, 25","timeperiod":"0 - 23",
    "antallPasseringer":"95412","gjennomsnittligHastighet":null,"ukedager":"1, 2, 3, 4, 5, 6, 7","retning":2,
    "kompasretning":"Motgående retning","antallDager":14,"snittPasseringer":6815}];

let keyArr=Object.keys(Rows[1]);
console.log(keyArr);


let valArr= _.map(Rows, function(obj){let tA= Object.values(obj);return tA});
valArr=valArr.unshift(keyArr);
let tempArr= _.unzip(valArr);
console.log(tempArr);

console.log(tempArr);


export default class App extends Component {
  render() {
    return (<div><h2>Eksempel på å konvertere rader til kolonner </h2>
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

  </div>)}}
