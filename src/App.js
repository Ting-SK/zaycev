import React from "react";
import { AppWrapper, GlobalStyle } from "./globalStyles";
import { Tabs } from "./ui/Tabs";

export const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Tabs />
    </AppWrapper>
  );
};
