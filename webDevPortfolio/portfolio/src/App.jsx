//import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import Themes from './pages/Themes.jsx';

import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/themes" element={<Themes />} />
      </Routes>
    </HashRouter>
  )
}

export default App
