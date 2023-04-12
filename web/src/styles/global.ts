import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  /* Remove list styles on ul, ol elements */
  ul,
  ol {
    list-style: none;
  }

  /* Remove default padding */
  ul,
  ol {
    padding: 0;
  }

  /* Set core body defaults */
  body {
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* Remove default padding and border */
  button,
  input,
  textarea {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
  }

  /* Remove default border-radius */
  button {
    border-radius: 0;
  }

  /* Remove focus outline */
  button:focus {
    outline: none;
  }

  /* Remove focus outline for links */
  a:focus {
    outline: none;
  }
`;
