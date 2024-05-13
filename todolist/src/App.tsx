import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todolist from "./Todolist";
import Clock from "./timer";

function App() {
  return (
    <div className="container">
      <Todolist></Todolist>
      <br />
      <Clock></Clock>
      <br />

    </div>
  );
}

export default App;
