import {
  Routes,
  Route,
} from "react-router-dom";
import About from '../About/About';
import ContactForm from '../ContactForm/ContactForm';
import Projects from '../Projects/Projects';
import SkillsList from '../TechSkills/SkillsList'
import Experience from '../WorkExp/Experience';

function Router() {
  return (
    <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="skills" element={<SkillsList />}></Route>
          <Route path="experience" element={<Experience />}></Route>
          <Route path="contact" element={<ContactForm />}></Route>
          <Route path="*" element={'Not Found'}></Route>
    </Routes>
  )
}

export default Router
