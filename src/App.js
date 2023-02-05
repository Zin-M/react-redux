import React from "react";
import { Container } from "./styles/Shares";
import { GlobalCss } from "./styles/GlobalCSS";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import Login from "./components/Login";
import LoginContextProvider from "./store/LoginContentApi";
import RouteGuard from "./helpers/RouteGuard";

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
            <LoginContextProvider>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={
                  <RouteGuard>
                    <Home />
                  </RouteGuard>
                } />
              </Routes>
            </LoginContextProvider>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
