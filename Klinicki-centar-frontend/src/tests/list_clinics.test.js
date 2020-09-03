import React from "react";
import ReactDOM from "react-dom";
import clinicList from "../pages/list_clinics.js";

it("renders list of clinics without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<clinicList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
