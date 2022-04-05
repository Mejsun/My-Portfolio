import React from "react"
import './App.scss';
import Menu from './Menu/Menu';
import Router from "./Router/Router";

function App() {
  return (
    <div className="App">
      <Menu/>
      <Router/>
    </div>
  );
}

export default App;
