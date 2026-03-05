// Dependencies
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html { scroll-behavior: smooth; }

html, body, #root, #__next {
    background-color: #fffce6;
  }

  body, div {
    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar {
      width: 6px;
      background: transparent;
    }
  }

  *, body, input, button, textarea, span, h1, h2, h3, h4, h5, h6 {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    font-family: "Ubuntu", sans-serif;
  }

  *:focus {
    outline: 0;
  }

  img {
    user-select: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
