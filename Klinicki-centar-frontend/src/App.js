import React from "react";
import { Router, Route, RouteHandler } from "react-router";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./App.css";
import "./routes/routes.js";
import { render } from "@testing-library/react";
import { useState } from "react";
import { AppContext } from "./libs/contextLib";
import Toolbar from "react-minimalist-toolbar";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  return (
    <div className="App">
      <Toolbar
        logo={logo}
        brand="InfoKC Dobrodosli"
        text={"Dobrodosli"}
        className="toolbar"
      ></Toolbar>
      <header className="App-header">
        <Link to="/login">Login</Link>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Link to="/registration">Registracija</Link>
        </div>
      </header>
    </div>
  );
}

export default App;
