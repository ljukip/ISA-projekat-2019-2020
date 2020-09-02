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

function ProfileAdminKC() {
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
        <p className="App-p">Dobrodosli</p>
        <div bgColor="transparent" className="Div-vertical">
          <div className="Div-horizontal-transparent">
            <MDBBox className="box1">
              zahtevi
              <button
                className="App-button1"
                onClick={(event) => (window.location.href = "/requests")}
              >
                {" "}
              </button>
            </MDBBox>
            <MDBBox className="box2">
              registracija klinika i administratora
              <button className="App-button1"> </button>
            </MDBBox>
            <MDBBox className="box3">
              Sifrarnik dijagnoza
              <button className="App-button1"> </button>
            </MDBBox>
            <MDBBox className="box4">
              Sifrarnik lekova
              <button className="App-button1"> </button>
            </MDBBox>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileAdminKC;
