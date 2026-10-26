//import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';

import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </HashRouter>
  )
}

export default App
