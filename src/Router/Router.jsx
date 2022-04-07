import React, {lazy} from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";

const About = lazy(() => import('../About/About'))
const ContactForm = lazy(() => import('../ContactForm/ContactForm'))
const Projects = lazy(() => import('../Projects/Projects'))
const SkillsList = lazy(() => import('../TechSkills/SkillsList'))
const Experience = lazy(() => import('../WorkExp/Experience'))

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
