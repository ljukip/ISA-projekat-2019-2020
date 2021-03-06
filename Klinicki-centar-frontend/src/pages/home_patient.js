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
import { MDBBox } from "mdbreact";

export default function Homepatient() {
  var menu = [
    {
      text: "Profil korisnika",
      items: [
        {
          text: "Izloguj se",
        },
      ],
    },
  ];
  const history = useHistory();
  function onclick(event) {
    try {
      history.push("/list_clinics");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="App">
      <div className="App-home">
        <Toolbar logo={logo} brand="InfoKC" className="toolbar"></Toolbar>
        <button
          className="App-button"
          block
          onClick={(event) => (window.location.href = "/profile_patient")}
        >
          profil pacijenta
        </button>
        <p></p>
        <p></p>
        <p className="App-p">Pocetna stranica korisnika</p>
        <div bgColor="transparent" className="Div-horizontal">
          <MDBBox className="box1">
            Lista klinika
            <button
              className="App-button1"
              onClick={(event) => (window.location.href = "/list_clinics")}
            ></button>
          </MDBBox>
          <MDBBox className="box2">
            Zdravstveni karton
            <button
              className="App-button2"
              onClick={(event) => (window.location.href = "/chart")}
            >
              {" "}
            </button>
          </MDBBox>
          <MDBBox className="box3">
            Istorija pregleda
            <button
              className="App-button3"
              onClick={(event) => (window.location.href = "/history")}
            >
              {" "}
            </button>
          </MDBBox>
        </div>
      </div>
    </div>
  );
}
