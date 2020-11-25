import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #121212;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
    color: white;
    opacity: 87%;
  }

  h1 {
    color: white;
    text-decoration: underline;
    text-align: center;
    opacity: 87%;
  }

  h2 {
    color: white;
    opacity: 87%;
  }

  h3 {
    color: white;
    opacity: 87%;
    margin-bottom: 10px;
  }

  ul {
    color: white;
    opacity: 87%;
  }

  a {
    color: #03dac6;
    text-decoration: none;
  }
`;

export default GlobalStyle;
