import React from "react";

import { Router, Route, RouteHandler } from "react-router";
import { Link, useHistory } from "react-router-dom";
import logo from "../logo.png";
import "../App.css";
import "../routes/routes.js";
import { render } from "@testing-library/react";
import profile from "../logo2.png";
import Toolbar from "react-minimalist-toolbar";
import { ProgressBar, Button } from "react-bootstrap";
import ServerTable from "react-strap-table";
import { React15Tabulator } from "react-tabulator";
import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";
import { button } from "aws-amplify";

const columns = [
  { title: "Pregled", field: "exam", width: 150, align: "left" },
  {
    title: "Datum",
    field: "date",
    align: "center",
    headerFilter: "input",
  },
  { title: "Vreme", field: "time", align: "center" },
  {
    title: "Lekar",
    field: "physician",
    align: "center",
  },
  {
    title: "LekarOcena",
    field: "physicianRate",
    align: "center",
    formatter: "star",
    editor: true,
  },
  {
    title: "Tip",
    field: "type",
    align: "center",
    headerFilter: "input",
  },
  {
    title: "Klinika",
    field: "clinic",
    align: "center",
  },
  {
    title: "KlinikaOcena",
    field: "clinicRate",
    align: "center",
    formatter: "star",
    editor: true,
  },
];
const data = [
  {
    exam: "dioptrijski pregled",
    date: "11-12-2020",
    time: "13.45",
    physician: "Dr peric",
    physicianRate: 4,
    type: "oftalmoloski",
    clinic: "klinika Ime",
    clinicRate: 3,
  },
];

class patientHistory extends React.Component {
  state = {
    data: [],
  };
  ref = true;
  handleClick() {
    const history = useHistory();
    alert("stisnuto");
    history.push("/home_patient");
  }

  rowClick = (e, row) => {
    console.log("ref table: ", this.ref.table); // this is the Tabulator table instance
    console.log("rowClick id: ${row.getData().id}", row, e);
    //const history = useHistory();
    alert("stisnuto");
    //history.push("/home_patient");
  };

  setData = () => {
    this.setState({ data });
  };

  clearData = () => {
    this.setState({ data: [] });
  };
  handleClick() {
    try {
      alert("stisnuto");
    } catch (e) {
      alert(e.message);
    }
  }

  render() {
    const options = {
      height: 150,
      movableRows: true,
    };
    return (
      <div className="App">
        <div className="App-home">
          <Toolbar logo={logo} brand="InfoKC" className="toolbar"></Toolbar>
          <p></p>
          <p></p>
          <p className="App-p">Istorija pregleda</p>
          <div bgColor="transparent" className="Div-vertical">
            <React15Tabulator
              columns={columns}
              data={data}
              rowClick={this.rowClick}
              data-custom-attr="test-custom-attribute"
              className="custom-css-class"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default patientHistory;
