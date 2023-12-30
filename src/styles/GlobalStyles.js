import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {};

const GlobalStyles = createGlobalStyle`
*, *::after, *::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-size: 14px;
  line-height: 1.75;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #4c4d56;
  outline: none;
  visibility: visible;
  overflow-X: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fff;
  color: "";
}

body[dir="rtl"] {
  text-align: right;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Ubuntu", sans-serif;
  color: #1a0a1e;
  font-weight: 700;
  margin-top: 0;
  line-height: 1.5;
  margin-bottom: 0;
}

h1 {
  font-size: 36px;
}

@media only screen and (max-width: 767px) {
  h1 {
    font-size: 30px;
  }
}

h2 {
  font-size: 30px;
}

@media only screen and (max-width: 767px) {
  h2 {
    font-size: 24px;
  }
}

h3 {
  font-size: 24px;
}

@media only screen and (max-width: 767px) {
  h3 {
    font-size: 20px;
  }
}

h4 {
  font-size: 18px;
}

h5 {
  font-size: 16px;
}

h6 {
  font-size: 14px;
}

p {
  margin-bottom: 0;
}

a, button {
  color: inherit;
  display: inline-block;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
}

a, button, img, input {
  transition: all 0.3s linear;
  outline: 0;
}

a:focus, button:focus, img:focus, input:focus {
  outline: 0;
}

a:focus {
  color: none;
  outline: none;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
  color: #fc097c;
}

ul, ol {
  padding: 0;
  list-style: none;
  margin: 0;
}

button, input[type="submit"] {
  cursor: pointer;
}

img {
  max-width: 100%;
}

`;

export { theme, GlobalStyles };
