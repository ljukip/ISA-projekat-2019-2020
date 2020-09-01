import React from "react";
import { Router, Route, RouteHandler } from "react-router";
import { Link, Redirect, useHistory } from "react-router-dom";
import "../App.css";
import "../routes/routes";
import { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { render } from "@testing-library/react";
import logo from "../logo.png";
import App from "../App";
import { useAppContext } from "../libs/contextLib";
import Routes from "../routes/routes";
import Toolbar from "react-minimalist-toolbar";

export default function Login() {
  const { userHasAuthenticated } = false; //useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    //userHasAuthenticated(true);
    try {
      alert("Logged in");
      history.push("/home_patient");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="App">
      <Toolbar
        logo={logo}
        brand="InfoKC Login korisnika"
        text={"Login korisnika"}
        className="toolbar"
      ></Toolbar>
      <form onSubmit={handleSubmit} className="App-home">
        <p></p>
        <p></p>
        <p className="App-p">Login korisnika</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel className="App-label">Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel className="App-label">Password</FormLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
