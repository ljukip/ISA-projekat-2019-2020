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
  {
    title: "Ime",
    field: "name",
    align: "left",
    headerFilter: "input",
  },
  {
    title: "Prezime",
    field: "surname",
    align: "left",
    headerFilter: "input",
  },
  {
    title: "avgOcena",
    field: "avgRate",
    align: "center",
    headerFilter: "input",
  },
  {
    title: "Termini",
    field: "time",
    align: "center",
    formatter: function (cell, formatterParams, onRendered) {
      return "<ul ><li><time>10:20</time></li><li><time>10:20</time></li><li><time>10:20</time></li><li><time>10:20</time></li></ul>";
    },
  },
  {
    title: "",
    width: 114,
    align: "center",
    formatter: function (cell, formatterParams, onRendered) {
      return "<button onClick={handleClick}>izaberi</button>";
    },
  },
];
const data = [
  {
    name: "Ime lekara",
    surname: "prezime",
    avgRate: 4.8,
    vreme: [12.3, 13.45],
  },
];

class physicianList extends React.Component {
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
          <p className="App-p">Lekari na raspolaganju</p>
          <div bgColor="transparent" className="Div-vertical">
            <React15Tabulator
              columns={columns}
              data={data}
              cellClick={this.cellClick}
              data-custom-attr="test-custom-attribute"
              className="custom-css-class"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default physicianList;
