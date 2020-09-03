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
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { useState } from "react";
import { history } from "../helpers/browser_history.js";

const columns = [
  {
    title: "Naziv",
    field: "name",
    width: 150,
    align: "left",
    formatter: function (cell, formatterParams, onRendered) {
      return "<button>Ime klinike</button>";
    },
    cellClick: function (e, cell) {
      window.location.href = "/profile_clinic";
    },
  },
  {
    title: "avgOcena",
    field: "avgRate",
    align: "center",
    headerFilter: "input",
  },
  { title: "Adresa", field: "adress", align: "center" },
  { title: "Cena", field: "price", align: "center" },
  {
    title: "",
    width: 114,
    align: "center",
    formatter: function (cell, formatterParams, onRendered) {
      return "<button>izaberi</button>";
    },
    cellClick: function (e, cell) {
      window.location.href = "/list_physicians";
    },
  },
];
const data = [
  {
    name: "Ime klinike",
    avgRate: 4.8,
    adress: "strazilovska 4",
    price: "4160",
  },
  {
    name: "Ime klinike",
    avgRate: 4.8,
    adress: "strazilovska 4",
    price: "4160",
  },
  {
    name: "Ime klinike",
    avgRate: 4.8,
    adress: "strazilovska 4",
    price: "4160",
  },
];

class ClinicList extends React.Component {
  state = {
    data: [],
  };
  ref = true;
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
  handleClick = () => {
    try {
      alert("stisnuto");
    } catch (e) {
      alert(e.message);
    }
  };

  render() {
    const [datum, setDatum] = []; //this.useState(0);
    const [tip, setTip] = [,];
    function validateForm() {
      return datum.length > 0 && tip.length > 0;
    }
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
          <p className="App-p">Pretraga klinika</p>
          <div bgColor="transparent" className="Div-vertical">
            <div className="Div-horizontal">
              <FormGroup controlId="datum" bsSize="large">
                <FormLabel className="App-label">Datum</FormLabel>
                <FormControl
                  autoFocus
                  type="date"
                  value={datum}
                  // onChange={(e) => this.setDatum(e.target.value)}
                />
                <p></p>
                <p></p>
              </FormGroup>
              <FormGroup controlId="tip" bsSize="large">
                <FormLabel className="App-label">Tip</FormLabel>
                <FormControl
                  value={tip}
                  //onChange={(e) => setTip(e.target.value)}
                  type="tip"
                />
                <p></p>
                <p></p>
              </FormGroup>
              <Button
                bsSize="primary"
                disabled={!this.ValidateForm}
                type="submit"
                className="App-button"
              >
                Pretrazi
              </Button>
              <p></p>
            </div>
            <React15Tabulator
              columns={columns}
              data={data}
              data-custom-attr="test-custom-attribute"
              className="custom-css-class"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ClinicList;
