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
import { MDBBox } from "mdbreact";

export default function Patient() {
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
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {}

  async function handleSubmit(event) {
    event.preventDefault();
    window.location.href = "/home_patient";
    alert("uspesno promenjeni podaci");
  }

  async function handleConfirmationSubmit(event) {
    event.preventDefault();
    window.location.href = "/home_patient";
    alert("uspesno promenjeni podaci");
    setIsLoading(true);
  }

  return (
    <div className="App">
      <Toolbar
        logo={logo}
        brand="InfoKC Profil korisnika"
        text={"profil korisnika"}
        className="toolbar"
      ></Toolbar>
      <form onSubmit={handleConfirmationSubmit} className="App-home">
        <p></p>
        <p></p>
        <p className="App-p">Profil korisnika</p>
        <div className="Div-horizontal">
          <div>
            <MDBBox className="App-boxe-user"> </MDBBox>
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
            </FormGroup>
            <FormGroup controlId="email" bsSize="large">
              <FormLabel className="App-label">Email</FormLabel>
              <FormControl
                autoFocus
                type="email"
                disabled={true}
                value={fields.email}
                onChange={handleFieldChange}
              />
            </FormGroup>
            <FormGroup controlId="num" bsSize="large">
              <FormLabel className="App-label">Broj osiguranja</FormLabel>
              <FormControl
                autoFocus
                type="num"
                disabled={true}
                value={fields.num}
                onChange={handleFieldChange}
              />
            </FormGroup>
          </div>
          <div>
            <MDBBox className="App-boxes"></MDBBox>
          </div>
          <div>
            <FormGroup controlId="adress" bsSize="large">
              <FormLabel className="App-label">Adresa</FormLabel>
              <FormControl
                autoFocus
                type="adress"
                value={fields.adress}
                onChange={handleFieldChange}
              />
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
            <p></p>
            <Button
              block
              type="submit"
              bsSize="primary"
              isLoading={isLoading}
              //disabled={!validateForm()}
            >
              Potvrdi
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
