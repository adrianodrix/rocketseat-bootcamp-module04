import React from "react";
import "./app.css";
import logoEmpari from "./assets/logo-empari.png";
import TechList from "./components/TechList";

function App() {
  return (
    <>
      <img id="logo-empari" src={logoEmpari} />
      <TechList />
    </>
  );
}

export default App;
