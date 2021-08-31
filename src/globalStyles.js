import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import './assets/fonts/stylesheet.css'

export const GlobalStyle = createGlobalStyle`
 *{
   outline: none;
 }
 body {
   font-family: 'Montserrat', sans-serif;
   margin: 0;
   padding: 0;
   list-style: none;
   text-decoration: none;
 }
 li{
   list-style: none;
   padding: 0;
   margin: 0;
 }
 a {
   text-decoration: none;
 }
 h1, h2, h3, h4, h5, h6, p, ul {
   margin: 0;
   padding: 0;
 }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  background: #373737;
`;
