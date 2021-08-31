import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

const root = document.querySelector("#root");
const AppRender = () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    root
  );
};
AppRender();
