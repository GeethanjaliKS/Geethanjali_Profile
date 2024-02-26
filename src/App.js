
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from  './Components/Header'
import About from './Components/About';
import Resume from './Components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Project from './Components/Project';
import Certificate from './Components/Certificate';
import Skill from './Components/Skill';
import Experience from './Components/Experience';



function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Certificate" element={<Certificate/>} />
        <Route path="skill" element={<Skill/>} />
        <Route path="exp" element={<Experience/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
