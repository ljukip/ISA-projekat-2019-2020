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
import { Buton, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { useState } from "react";
import { MDBBox } from "mdbreact";

const columns = [
  {
    title: "Dijagnoza",
    field: "diagnosis",
    align: "left",
    editor: true,
    formatter: "textarea",
  },
  {
    title: "Terapija",
    field: "therapy",
    align: "center",
    editor: true,
    formatter: "textarea",
  },
  {
    title: "Izvestaj",
    field: "report",
    align: "center",
    editor: true,
    formatter: "textarea",
  },
  { title: "Kontrola", field: "checkup", align: "center", editor: true },
];
const data = [
  {
    diagnosis: "",
    report: "",
    checkup: "",
    therapy: "",
  },
];

class exam_in_process extends React.Component {
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
          <p className="App-p">Pregled</p>
          <div bgColor="transparent" className="Div-vertical">
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
export default exam_in_process;
