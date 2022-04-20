import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: Nunito, Poppins, Verdana, Geneva, Tahoma, sans-serif;
    color: #011529;

  }

  html {
    /* this defines what 1rem is
    1 rem = 10px; 10px/16px = 62.5%
    */
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    padding: 3rem;
    font-weight: 400;
    line-height: 1.7;
    padding-bottom: 0;
    background-color: #f6f9fc;
  }
`;
