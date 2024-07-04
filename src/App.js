import React from "react"
import './App.scss';
import Menu from './Menu/Menu';
//import Router from "./Router/Router";

import About from './About/About';
import ContactForm from './ContactForm/ContactForm';
import Projects from './Projects/Projects';
import Experience from './WorkExp/Experience';

function App() {
  return (
    <div className="App">
      <Menu/>
      <About/>
      <Projects/>
      <Experience/>
      <ContactForm/>
    </div>
  );
}

export default App;
