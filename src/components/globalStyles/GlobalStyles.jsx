import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

/* @import url('https://fonts.googleapis.com/css2?family=Autour+One&display=swap'); */

  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "Autour One", system-ui;
  }
  body {
    font-size: 1.2rem;
    background: ${({ theme }) => theme.colors.mainColor};

  }
`;
