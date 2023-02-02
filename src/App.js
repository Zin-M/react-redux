import React from "react";
import { Container } from "./styles/Shares";
import { GlobalCss } from "./styles/GlobalCSS";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "aliceblue"
  }
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalCss />
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Nav />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
