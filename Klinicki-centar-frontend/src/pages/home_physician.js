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

function homePhysician() {
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
        <p className="App-p">Pocetna stranica lekara</p>
        <div bgColor="transparent" className="Div-vertical">
          <div className="Div-horizontal-transparent">
            <MDBBox className="box1">
              Lista pacijenata
              <button
                className="App-button1"
                onClick={(event) => (window.location.href = "/list_patients")}
              >
                {" "}
              </button>
            </MDBBox>
            <MDBBox className="box2">
              Zapocni pregled
              <button
                className="App-button1"
                onClick={(event) =>
                  (window.location.href = "/exam_in_progress")
                }
              >
                {" "}
              </button>
            </MDBBox>
            <MDBBox className="box3">
              Radni kalendar
              <button className="App-button1"> </button>
            </MDBBox>
            <MDBBox className="box4">
              Zakazi pregled
              <button className="App-button1"> </button>
            </MDBBox>
          </div>
          <div className="Div-horizontal-transparent">
            <MDBBox className="box4">
              Zahtev za odmor
              <button className="App-button1"> </button>
            </MDBBox>

            <MDBBox className="box3">
              Profil
              <button className="App-button1"> </button>
            </MDBBox>
          </div>
        </div>
      </div>
    </div>
  );
}
export default homePhysician;
