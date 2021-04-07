import Header from "../components/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
  }
  body {
      margin: 0;
      padding: 0;
      font-family: "Roboto Mono", monospace;
      font-display: swap;
      color: #00155c;
      background-color: #ffe7e3;
  }
`;

function HomePage() {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default HomePage;
