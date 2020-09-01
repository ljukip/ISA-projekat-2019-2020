import React from "react";

import { Router, Route, RouteHandler } from "react-router";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "../App.css";
import "../routes/routes.js";
import { render } from "@testing-library/react";
import profile from "../logo2.png";
import Toolbar from "react-minimalist-toolbar";
import { ProgressBar, Button } from "react-bootstrap";
import { MDBBox } from "mdbreact";

function homenurse() {
  var menu = [
    {
      text: "Profil",
      items: [
        {
          text: "Izloguj se",
        },
      ],
    },
  ];

  const color1 = {
    backgroundColor: "yellow",
  };

  return (
    <div className="App">
      <div className="App-home">
        <Toolbar
          logo={logo}
          brand="InfoKC"
          menu={menu}
          className="toolbar"
        ></Toolbar>
        <p></p>
        <p></p>
        <p className="App-p">Pocetna stranica medicinske sestre</p>
        <div bgColor="transparent" className="Div-vertical">
          <div className="Div-horizontal-transparent">
            <MDBBox className="box1">
              Lista pacijenata
              <button className="App-button1"> </button>
            </MDBBox>
            <MDBBox className="box2">
              Radni Kalendar
              <button className="App-button1"> </button>
            </MDBBox>
            <MDBBox className="box3">
              Zahtev za odmor
              <button className="App-button1"> </button>
            </MDBBox>
            <MDBBox className="box4">
              Overa recepta
              <button className="App-button1"> </button>
            </MDBBox>
          </div>
        </div>
      </div>
    </div>
  );
}
export default homenurse;
