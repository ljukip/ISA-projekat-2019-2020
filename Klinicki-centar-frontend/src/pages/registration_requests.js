import React from "react";

import { Router, Route, RouteHandler } from "react-router";
import { Link, useHistory } from "react-router-dom";
import logo from "../logo.png";
import "../App.css";
import "./tabulator.css";
import "../routes/routes.js";
import { render } from "@testing-library/react";
import profile from "../logo2.png";
import Toolbar from "react-minimalist-toolbar";
import { ProgressBar, Button } from "react-bootstrap";
import ServerTable from "react-strap-table";
import { React15Tabulator } from "react-tabulator";
import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";
import {} from "moment";

const columns = [
  {
    title: "",
    field: "id",
    align: "left",
    formatter: "rownum",
  },
  {
    title: "",
    field: "request",
    align: "left",
  },
  {
    title: "",
    field: "accept",
    width: 114,
    align: "center",
    cellClick: function (e, cell) {
      console.log("cell click");
    },
    formatter: function (cell, formatterParams, onRendered) {
      return "<button onClick={handleClick}>Prihvati</button>";
    },
    cellClick: function (e, cell) {
      alert("Zahtev prihvacen");
      cell.getRow().delete();
    },
  },

  {
    title: "",
    field: "decline",
    width: 114,
    align: "center",
    cellClick: function (e, cell) {
      console.log("cell click");
    },
    formatter: function (cell, formatterParams, onRendered) {
      return "<button onClick={handleClick}>Otkazi</button>";
    },
    cellClick: function (e, cell) {
      window.location.href = "/registration_denied";
      cell.getRow().delete();
    },
  },
];
const data = [
  {
    request: "ljubica",
  },
];

class regReq extends React.Component {
  state = {
    data: [],
  };
  ref = true;
  handleClick() {
    const history = useHistory();
    alert("stisnuto");
    history.push("/home_patient");
  }

  cellClick = (e, cell) => {
    console.log("ref table: ", this.ref.table); // this is the Tabulator table instance
    console.log("cellClick id: ${row.getData().id}", cell, e);
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
          <p className="App-p">Zahtevi za registraciju</p>
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
export default regReq;
