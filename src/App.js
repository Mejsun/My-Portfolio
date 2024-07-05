import React from "react"
import './App.scss';

import Menu from './components/Menu';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Projects from './components/Projects';
import Experience from './components/Experience';

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
