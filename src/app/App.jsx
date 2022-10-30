import React from "react";
import { GlobalStyles } from "./share/styles/GlobalStyles";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";

export const App = () => {

  return (
    <div className="App">
      <GlobalStyles/>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}
