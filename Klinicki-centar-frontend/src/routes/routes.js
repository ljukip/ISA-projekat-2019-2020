import React, { Component } from "react";

import { Route, Link, IndexRoute } from "react-router";

import App from "../App.js";
import Login from "../pages/login.js";
import Registration from "../pages/registration.js";
import HomePatient from "../pages/home_patient.js";
import Exams from "../pages/exams.js";
import HomeNurse from "../pages/home_nurse.js";
import ListClinics from "../pages/list_clinics.js";
import ListPhysicians from "../pages/list_physicians.js";
import ProfileClinic from "../pages/profile_clinic.js";
import ProfilePatient from "../pages/profile_patient.js";
import PatientHistory from "../pages/history.js";
import { BrowserRouter as Router } from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/home_patient" component={HomePatient} />
      <Route exact path="/home_nurse" component={HomeNurse} />
      <Route exact path="/exams" component={Exams} />
      <Route exact path="/list_clinics" component={ListClinics} />
      <Route exact path="/list_physicians" component={ListPhysicians} />
      <Route exact path="/profile_clinic" component={ProfileClinic} />
      <Route exact path="/profile_patient" component={ProfilePatient} />
      <Route exact path="/history" component={PatientHistory} />
    </Router>
  );
}
