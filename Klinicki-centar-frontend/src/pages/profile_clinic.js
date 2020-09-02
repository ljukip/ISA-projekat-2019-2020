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

function ProfileClinic() {
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
        <p className="App-p">Ime klinike</p>
        <div bgColor="transparent" className="Div-vertical">
          <p className="P">
            Opis klinike adaerfttresaertyfdtrsae ef wf er etg e r
          </p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <div className="Div-horizontal-transparent">
            <MDBBox className="box1">
              Lekari
              <button className="App-button1"> </button>
            </MDBBox>
            <MDBBox className="box2">
              Sale
              <button className="App-button1"> </button>
            </MDBBox>
            <MDBBox className="box3">
              Termini
              <button className="App-button1"> </button>
            </MDBBox>
            <MDBBox className="box4">
              Cenovnik
              <button className="App-button1"> </button>
            </MDBBox>
          </div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p className="P">Kontakt:</p>
          <p className="P">Adresa: adresa; Telefon:telefon;</p>
        </div>
      </div>
    </div>
  );
}
export default ProfileClinic;
