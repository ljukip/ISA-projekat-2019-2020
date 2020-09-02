import React from "react";

import { Link, useHistory } from "react-router-dom";
import logo from "../logo.png";
import "../App.css";
import "../routes/routes.js";
import Toolbar from "react-minimalist-toolbar";
import { Button } from "react-bootstrap";

export default function Denied() {
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
        <p></p>
        <p></p>
        <p className="App-p">Zasto ste odbili zahtev?</p>
        <div bgColor="transparent" className="Div-vertical">
          <textarea id="reason" name="reason" rows="4" cols="50"></textarea>
          <Button
            className="App-button "
            onClick={(event) => (window.location.href = "/requests")}
          >
            Posalji
          </Button>
        </div>
      </div>
    </div>
  );
}
