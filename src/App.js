import About from './About/About';
import './App.css';
import ContactForm from './ContactForm/ContactForm';
import Projects from './Projects/Projects';
import Certificates from './TechSkills/Certificates';
import SkillsList from './TechSkills/SkillsList'
import Experience from './WorkExp/Experience';

function App() {
  return (
    <div className="App">
      <About/>
      <Projects/>
      <SkillsList/>
      <Certificates/>
      <Experience/>
      <ContactForm/>
    </div>
  );
}

export default App;
