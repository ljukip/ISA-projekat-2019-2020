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
    field: "id",
    align: "left",
    formatter: "rownum",
  },
  {
    field: "type",
    align: "left",
  },
  {
    field: "delete",
    formatter: "buttonCross",
    width: 40,
    align: "center",
    cellClick: function (e, cell) {
      cell.getRow().delete();
    },
  },
];
const data = [
  {
    type: "oftalmoloski",
  },
];

class types extends React.Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
    this.onAddRow = this.onAddRow.bind(this);
  }
  state = {
    data: [],
  };
  ref = true;
  handleClick() {
    const history = useHistory();
    alert("stisnuto");
    history.push("/home_patient");
  }

  onAddRow() {
    this.tableRef.current.table.addRow({}, false);
  }
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
          <p className="App-p">Tipovi pregleda</p>
          <div bgColor="transparent" className="Div-vertical">
            <React15Tabulator
              ref={this.tableRef}
              columns={columns}
              addRowPos="bottom"
              data={data}
              data-custom-attr="test-custom-attribute"
              className="custom-css-class"
            />
            <div className="Div-horizontal2">
              <button
                className="App-button"
                id="add-row"
                onClick={this.onAddRow}
              >
                novi tip
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default types;
