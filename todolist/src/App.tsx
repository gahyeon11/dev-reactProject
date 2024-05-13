import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todolist from "./Todolist";
import Clock from "./timer";
import MyWeather from "./MyWeather";
function App() {
  return (
    <div className="container">
      <Todolist></Todolist>
      <br />
      {/* <Clock></Clock> */}
      <MyWeather weather="맑음">일기예보</MyWeather>
      <br />

    </div>
  );
}

export default App;
