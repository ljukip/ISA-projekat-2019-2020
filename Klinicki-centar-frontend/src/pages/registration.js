import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";
//import { HelpBlock } from "react-bootstrap";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import "../App.css";
import "../routes/routes";
import logo from "../logo.png";
import App from "../App";
import Routes from "../routes/routes";
import Toolbar from "react-minimalist-toolbar";

export default function Registration() {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: "",
    name: "",
    surname: "",
    adress: "",
    city: "",
    country: "",
    num: "",
  });
  const history = useHistory();
  const [newUser, setNewUser] = useState(null);
  const { userHasAuthenticated } = false; //useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  function validateConfirmationForm() {
    return fields.confirmationCode.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    window.location.href = "/";
    alert(
      "Zahtev za registraciju je poslat. Proverite Vasu email adresu za potvrdu."
    );

    setIsLoading(true);

    setNewUser("test");

    setIsLoading(false);
  }

  async function handleConfirmationSubmit(event) {
    event.preventDefault();
    window.location.href = "/";
    alert(
      "Zahtev za registraciju je poslat. Proverite Vasu email adresu za potvrdu."
    );

    setIsLoading(true);
  }

  return (
    <div className="App">
      <Toolbar
        logo={logo}
        brand="InfoKC registracija korisnika"
        text={"registracija korisnika"}
        className="toolbar"
      ></Toolbar>
      <form onSubmit={handleConfirmationSubmit} className="App-home">
        <p></p>
        <p></p>
        <p className="App-p">Registracija korisnika</p>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel className="App-label">Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel className="App-label">Sifra</FormLabel>
          <FormControl
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
          <FormLabel className="App-label">Potvrdite sifru</FormLabel>
          <FormControl
            type="password"
            onChange={handleFieldChange}
            value={fields.confirmPassword}
          />
        </FormGroup>
        <FormGroup controlId="name" bsSize="large">
          <FormLabel className="App-label">Ime</FormLabel>
          <FormControl
            autoFocus
            type="name"
            value={fields.name}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="surname" bsSize="large">
          <FormLabel className="App-label">Prezime</FormLabel>
          <FormControl
            autoFocus
            type="surname"
            value={fields.surname}
            onChange={handleFieldChange}
          />
          <FormGroup controlId="adress" bsSize="large">
            <FormLabel className="App-label">Adresa</FormLabel>
            <FormControl
              autoFocus
              type="adress"
              value={fields.adress}
              onChange={handleFieldChange}
            />
          </FormGroup>
        </FormGroup>
        <FormGroup controlId="city" bsSize="large">
          <FormLabel className="App-label">Grad</FormLabel>
          <FormControl
            autoFocus
            type="city"
            value={fields.city}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="country" bsSize="large">
          <FormLabel className="App-label">Drzava</FormLabel>
          <FormControl
            autoFocus
            type="country"
            value={fields.country}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="phone" bsSize="large">
          <FormLabel className="App-label">Telefon</FormLabel>
          <FormControl
            autoFocus
            type="phone"
            value={fields.phone}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <FormGroup controlId="num" bsSize="large">
          <FormLabel className="App-label">Broj osiguranja</FormLabel>
          <FormControl
            autoFocus
            type="num"
            value={fields.num}
            onChange={handleFieldChange}
          />
        </FormGroup>
        <p></p>
        <Button
          block
          type="submit"
          bsSize="primary"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Potvrdi
        </Button>
      </form>
    </div>
  );
}
