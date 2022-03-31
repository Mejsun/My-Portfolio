import About from './About/About';
import './App.scss';
import ContactForm from './ContactForm/ContactForm';
import Menu from './Menu/Menu';
import Projects from './Projects/Projects';
import SkillsList from './TechSkills/SkillsList'
import Experience from './WorkExp/Experience';

function App() {
  return (
    <div className="App">
      <Menu/>
      <About/>
      <Projects/>
      <SkillsList/>
      <Experience/>
      <ContactForm/>
    </div>
  );
}

export default App;
