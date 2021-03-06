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
  { title: "Sala", field: "room", align: "center" },
  { title: "Lekar", field: "physician", align: "center" },
  {
    title: "Tip",
    field: "type",
    align: "center",
    headerFilter: "input",
  },
  { title: "Cena", field: "price", align: "center" },
  { title: "Popust", field: "discount", align: "center" },
  {
    title: "",
    width: 114,
    align: "center",
    formatter: function (cell, formatterParams, onRendered) {
      return "<button onClick={handleClick}>zakazi</button>";
    },
  },
];
const data = [
  {
    exam: "dioptrijski pregled",
    date: "11-12-2020",
    time: "13.45",
    room: "152",
    physician: "Dr peric",
    type: "oftalmoloski",
    price: "4000",
    discount: "20%",
    id: 1,
    make: "zakazi",
  },
  {
    exam: "dioptrijski pregled",
    date: "11-12-2020",
    time: "13.45",
    room: "152",
    physician: "Dr peric",
    type: "oftalmoloski",
    price: "4000",
    discount: "20%",
    id: 1,
  },
  {
    exam: "dioptrijski pregled",
    date: "11-12-2020",
    time: "13.45",
    room: "152",
    physician: "Dr peric",
    type: "oftalmoloski",
    price: "4000",
    discount: "20%",
    id: 1,
  },
];

class Exams extends React.Component {
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
          <p className="App-p">Slobodni termini</p>
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
export default Exams;
