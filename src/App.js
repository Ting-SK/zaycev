import React from "react";
import { AppWrapper, GlobalStyle } from "./globalStyles";
import { Navigation } from "./ui/Navigation";

export const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Navigation />
    </AppWrapper>
  );
};
