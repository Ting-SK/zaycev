import React from "react";
import { render } from "react-dom";
import { App } from "./App";

const root = document.querySelector("#root");
const AppRender = () => {
  render(<App />, root);
};
AppRender();
