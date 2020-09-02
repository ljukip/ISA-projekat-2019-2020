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

import { Role } from "./helpers/roles.js";
import { authenticationService } from "./services/authentication.service.js";
import { history } from "./helpers/browser_history";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      isAdmin: false,
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe((x) =>
      this.setState({
        currentUser: x,
        isAdmin: x && x.role === Role.Admin,
      })
    );
  }

  logout() {
    authenticationService.logout();
    history.push("/login");
  }

  render() {
    const { currentUser, isAdmin } = this.state;
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
}

export default App;
